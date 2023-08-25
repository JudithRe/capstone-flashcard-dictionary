// Styles Imports
import styled from "styled-components";
import { StyledSection } from "../StyledComponents/StyledSection";
import { StyledResultDisplay } from "../SearchResults";

// Functions and Dependencies Imports
import { isDue } from "@/utils/studyFunctions";
import { useEffect, useState } from "react";
import { handleStreakUpdate } from "@/utils/userFunction";
import useSWR from "swr";
import { NoStyleLink } from "../StyledComponents/Links";

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

// Styles

const StyledStudyCounter = styled.div`
  background-color: var(--dark-main);
  padding: 10px;
  border-radius: 10px;
  min-width: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--default-box-shadow);
`;

const StyledReviewCounter = styled(StyledStudyCounter)`
  background-color: ${(props) =>
    props.$hasReviews ? "var(--highlight-red)" : "var(--highlight-blue)"};
`;

export const StyledCounterText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--dark-mode-text-color);
`;

const StyledCounter = styled.p`
  margin: 5px;
  font-size: 1.6rem;
  background-color: transparent;
  color: var(--dark-mode-text-color);
`;

export default StudyDisplay;
