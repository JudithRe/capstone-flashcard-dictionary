const currentDate = new Date();
export function hasStudiedRecently(wordList) {
  const currentDate = new Date();
  if (!wordList) {
    return;
  }

  if (wordList) {
    const hasRecentReview = wordList.some((entry) => {
      const reviewDate = new Date(entry.study.lastReview);
      const comparisonDate = new Date(
        reviewDate.setDate(reviewDate.getDate() + 1)
      );

      return comparisonDate <= currentDate;
    });

    if (hasRecentReview) {
      return true;
    }
    return false;
  }
}

function streakHasBeenSet(activeUser) {
  const lastStreakUpdate = new Date(activeUser.lastStreakUpdate);
  const updateDate = new Date(
    lastStreakUpdate.setDate(lastStreakUpdate.getDate() + 1)
  );

  return updateDate >= currentDate;
}

export async function handleStreakUpdate({ activeUser, wordList }) {
  if (streakHasBeenSet(activeUser)) {
    return;
  }
  const recentStudy = hasStudiedRecently(wordList);

  if (recentStudy === undefined) {
    return;
  }
  if (!recentStudy) {
    if (activeUser.streak === 0) {
      return;
    }

    const userData = await getUser(activeUser);

    if (userData) {
      const updatedData = {
        newStreak: 0,
        lastStreakUpdate: currentDate,
      };
      updateUser(userData, updatedData);
      return;
    }
  }

  const userData = await getUser(activeUser);

  if (!userData) {
    return;
  }
  if (userData) {
    const updatedData = {
      newStreak: activeUser.streak + 1,
      lastStreakUpdate: currentDate,
    };
    updateUser(userData, updatedData);
    return;
  }
}

async function getUser(activeUser) {
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
  if (response.ok) {
    console.log("user updated");
  }
}
