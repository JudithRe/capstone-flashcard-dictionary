const currentDate = new Date();

export function hasStudiedRecently(wordList) {
  if (wordList) {
    const hasRecentReview = wordList.some((entry) => {
      const reviewDate = new Date(entry.study.lastReview);
      const comparisonDate = new Date(
        reviewDate.setDate(reviewDate.getDate() + 1)
      );

      return comparisonDate >= currentDate;
    });

    return hasRecentReview;
  }
}

function streakHasBeenSet(userData) {
  if (userData) {
    const lastStreakUpdate = new Date(userData.lastStreakUpdate);

    const updateDate = new Date(
      lastStreakUpdate.setDate(lastStreakUpdate.getDate() + 1)
    );

    return updateDate >= currentDate;
  }
}

export async function handleStreakUpdate({ userData, wordList, userMutate }) {
  if (wordList && userData) {
    const hasRecentStreakUpdate = streakHasBeenSet(userData);
    const recentStudy = hasStudiedRecently(wordList);

    if (hasRecentStreakUpdate && recentStudy && userData.streak === 0) {
      const updatedData = {
        newStreak: 1,
        lastStreakUpdate: currentDate,
      };
      updateUser(userData, updatedData);
      userMutate;
      return;
    }

    if (hasRecentStreakUpdate) {
      return;
    }

    if (!recentStudy && userData.streak === 0) {
      return;
    }

    if (!recentStudy && userData.streak !== 0) {
      const updatedData = {
        newStreak: 0,
        lastStreakUpdate: currentDate,
      };
      updateUser(userData, updatedData);
      userMutate;
      return;
    }

    const updatedData = {
      newStreak: userData.streak + 1,
      lastStreakUpdate: currentDate,
    };
    updateUser(userData, updatedData);
    userMutate();
    return;
  }
}

export async function getUser(activeUser) {
  const id = activeUser._id;
  const response = await fetch(`/api/user-update/${id}`, {
    method: "GET",
  });

  if (response.ok) {
    const user = await response.json();
    return user;
  }
}

async function updateUser(userData, updatedData) {
  const id = userData._id;

  const { lastStreakUpdate, newStreak } = updatedData;

  // Update entry in database
  const updatedUser = {
    ...userData,
    lastStreakUpdate: lastStreakUpdate,
    streak: newStreak,
  };

  const response = await fetch(`/api/user-update/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    console.log("There was an error updating userData");
  }
}
