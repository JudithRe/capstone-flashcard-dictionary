const currentDate = new Date();

export function generateStudyMode({ wordList, setStudyList, setIsStudyMode }) {
  const entriesDue = wordList.filter((entry) => {
    return isDue(entry.study.lastReview, entry.study.stage);
  });

  setStudyList(entriesDue);
  setIsStudyMode(true);

  return entriesDue;
}

export function isDue(lastReview, stage) {
  if (lastReview === "new") {
    return true;
  }

  let interval = 0;
  switch (stage) {
    case 0:
    case 1:
      interval = 1;
      break;
    case 2:
      interval = 2;
      break;
    case 3:
      interval = 7;
      break;
    case 4:
      interval = 14;
      break;
    case 5:
      interval = 30;
      break;
    case 6:
      interval = 120;
      break;
    case 7:
      interval = "done";
      break;
  }

  if (interval === "done") {
    return false;
  }

  const reviewDate = new Date(lastReview);

  if (interval >= 0 && interval <= 120) {
    const dueDate = new Date(
      reviewDate.setDate(reviewDate.getDate() + interval)
    );

    if (currentDate >= dueDate) {
      return true;
    }
  }
  return false;
}

export function handleRightAnswer({
  studyList,
  setIsFront,
  entry,
  databaseMutate,
}) {
  studyList.shift();
  setIsFront(true);

  const stageModifier = 1;
  const wasWrongAnswer = false;
  handleUpdateEntryInStudyMode({
    entry,
    stageModifier,
    wasWrongAnswer,
    databaseMutate,
  });
}

export function handleWrongAnswer({
  studyList,
  setIsFront,
  entry,
  databaseMutate,
}) {
  studyList.shift();
  setIsFront(true);

  const stageModifier = -1;
  const wasWrongAnswer = true;
  handleUpdateEntryInStudyMode({
    entry,
    stageModifier,
    wasWrongAnswer,
    databaseMutate,
  });
}

async function handleUpdateEntryInStudyMode({
  entry,
  stageModifier,
  wasWrongAnswer,
  databaseMutate,
}) {
  const { _id, study } = entry;
  const { stage, wrongAnswerCount, rightAnswerCount, streak } = study;

  const newStreak = setNewStreak(streak, wasWrongAnswer);

  const newStage = setNewStage(newStreak, stage, stageModifier);

  const newWrongAnswerCount = wasWrongAnswer
    ? wrongAnswerCount + 1
    : wrongAnswerCount;
  const newRightAnswerCount = wasWrongAnswer
    ? rightAnswerCount
    : rightAnswerCount + 1;

  // Update study section of the entry
  const updatedEntry = {
    ...entry,
    study: {
      lastReview: currentDate,
      stage: newStage,
      lastWasWrongAnswer: wasWrongAnswer,
      wrongAnswerCount: newWrongAnswerCount,
      rightAnswerCount: newRightAnswerCount,
      streak: newStreak,
    },
  };

  // Update entry in database
  const response = await fetch(`/api/word-list/${_id}`, {
    method: "PUT",
    body: JSON.stringify(updatedEntry),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    databaseMutate();
  }
}

function setNewStreak(streak, wasWrongAnswer) {
  if ((wasWrongAnswer && streak > 0) || (!wasWrongAnswer && streak < 0)) {
    return 0;
  }

  if (wasWrongAnswer && streak <= 0) {
    return streak - 1;
  }

  return streak + 1;
}

// Determine whether to increase, decrease or decrease by 2
function setNewStage(newStreak, stage, stageModifier) {
  if (newStreak <= -2 && stage - 2 >= 0) {
    return stage - 2;
  }
  if (newStreak > -2 && stage + stageModifier >= 0) {
    return stage + stageModifier;
  }
  return 0;
}
