export function getJLPTStats(wordList) {
  if (wordList) {
    let N1 = 0;
    let N2 = 0;
    let N3 = 0;
    let N4 = 0;
    let N5 = 0;
    let notSet = 0;

    wordList.map((entry) => {
      switch (entry.jlpt) {
        case "jlpt-n5":
          N5++;
          break;
        case "jlpt-n4":
          N4++;
          break;
        case "jlpt-n3":
          N3++;
          break;
        case "jlpt-n2":
          N2++;
          break;
        case "jlpt-n1":
          N1++;
          break;
        case undefined:
          notSet++;
      }
    });

    return [
      { id: "1", name: "N5", value: N5 },
      { id: "2", name: "N4", value: N4 },
      { id: "3", name: "N3", value: N3 },
      { id: "4", name: "N2", value: N2 },
      { id: "5", name: "N1", value: N1 },
      { id: "6", name: "*", value: notSet },
    ];
  }
}

export function getStageOverview(wordList) {
  if (wordList) {
    let Stage0 = 0;
    let Stage1 = 0;
    let Stage2 = 0;
    let Stage3 = 0;
    let Stage4 = 0;
    let Stage5 = 0;
    let Stage6 = 0;
    let Stage7 = 0;

    wordList.map((entry) => {
      switch (entry.study.stage) {
        case 0:
          Stage0++;
          break;
        case 1:
          Stage1++;
          break;
        case 2:
          Stage2++;
          break;
        case 3:
          Stage3++;
          break;
        case 4:
          Stage4++;
          break;
        case 5:
          Stage5++;
          break;
        case 6:
          Stage6++;
          break;
        case 7:
          Stage0++;
      }
    });

    return [
      { id: "1", name: "Stage 0", value: Stage0 },
      { id: "2", name: "Stage 1", value: Stage1 },
      { id: "3", name: "Stage 2", value: Stage2 },
      { id: "4", name: "Stage 3", value: Stage3 },
      { id: "5", name: "Stage 4", value: Stage4 },
      { id: "6", name: "Stage 5", value: Stage5 },
      { id: "7", name: "Stage 6", value: Stage6 },
      { id: "8", name: "Stage 7", value: Stage7 },
    ];
  }
}

export function getAnswerOverview(wordList) {
  if (wordList) {
    let wrong = 0;
    let right = 0;

    wordList.map((entry) => {
      right = right + entry.study.rightAnswerCount;
      wrong = wrong + entry.study.wrongAnswerCount;
    });

    return [
      { id: "1", name: "wrong", value: wrong },
      { id: "2", name: "right", value: right },
    ];
  }
}
