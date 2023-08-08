export function generateStudyMode({ wordList, setStudyList, setIsStudyMode }) {
  const entriesDue = wordList.filter((entry) => {
    return isDue(entry.study.lastReview);
  });

  setStudyList(entriesDue);
  setIsStudyMode(true);

  return entriesDue;
}

function isDue(lastReview) {
  const currentDate = new Date();

  if (lastReview === "new") {
    return true;
  }

  const reviewDate = new Date(lastReview);
  const dueDate = new Date(reviewDate.setDate(reviewDate.getDate() + 1));

  if (dueDate >= currentDate) {
    return true;
  }
  return false;
}
