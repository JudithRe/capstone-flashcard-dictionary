// Style Imports
import { StyledSection } from "../StyledComponents/StyledSection";
import { NoStyleLink } from "../StyledComponents/Links";
import {
  StyledCounter,
  StyledCounterText,
  StyledReviewCounter,
  StyledStudyCounter,
} from "./styled.StudyDisplay";
import { StyledResultDisplay } from "../SearchResults/styled.SearchResults";

// Functions and Dependencies Imports
import { isDue } from "@/utils/studyFunctions";
import { useEffect, useState } from "react";
import { handleStreakUpdate } from "@/utils/userFunction";
import useSWR from "swr";

function StudyDisplay({ wordList, activeUser, databaseIsLoading }) {
  const [studyDisplayData, setStudyDisplayData] = useState({
    reviewsDue: 0,
    streak: 0,
    items: 0,
  });

  const UserURL = `/api/user-update/${
    activeUser._id ? activeUser._id : "loading"
  }`;

  const {
    data: userData,
    isLoading: userIsLoading,
    mutate: userMutate,
  } = useSWR(UserURL);

  useEffect(() => {
    if (wordList) {
      const reviewsDueList = wordList.filter((entry) => {
        return isDue(entry.study.lastReview, entry.study.stage);
      });

      handleStreakUpdate({ userData, wordList, userMutate });
      if (userData) {
        setStudyDisplayData({
          reviewsDue: reviewsDueList.length,
          items: wordList.length,
          streak: userData.streak,
        });
      }
    }
  }, [wordList, activeUser, userData, userMutate]);

  if (databaseIsLoading || userIsLoading) {
    return <StyledResultDisplay>Loading...</StyledResultDisplay>;
  }
  return (
    <StyledSection>
      <NoStyleLink href="/study">
        <StyledReviewCounter
          $hasReviews={studyDisplayData.reviewsDue === 0 ? false : true}
        >
          <StyledCounterText>Reviews</StyledCounterText>
          <StyledCounter>{studyDisplayData.reviewsDue}</StyledCounter>
          <StyledCounterText>due</StyledCounterText>
        </StyledReviewCounter>
      </NoStyleLink>
      <NoStyleLink href="/profile">
        <StyledStudyCounter>
          <StyledCounterText>Streak</StyledCounterText>
          <StyledCounter>{studyDisplayData.streak}</StyledCounter>
          <StyledCounterText>
            {studyDisplayData.streak === 1 ? "day" : "days"}
          </StyledCounterText>
        </StyledStudyCounter>
      </NoStyleLink>
      <NoStyleLink href="/words">
        <StyledStudyCounter>
          <StyledCounterText>Items</StyledCounterText>
          <StyledCounter>{studyDisplayData.items}</StyledCounter>
          <StyledCounterText>
            {studyDisplayData.items === 1 ? "word" : "words"}
          </StyledCounterText>
        </StyledStudyCounter>
      </NoStyleLink>
    </StyledSection>
  );
}

export default StudyDisplay;
