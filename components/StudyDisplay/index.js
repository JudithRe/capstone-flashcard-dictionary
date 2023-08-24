import styled from "styled-components";
import { StyledSection } from "../StyledComponents/StyledSection";
import { isDue } from "@/utils/studyFunctions";
import { useEffect, useState } from "react";
import { StyledResultDisplay } from "../SearchResults";
import { handleStreakUpdate } from "@/utils/userFunction";
import Link from "next/link";
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
  }, [wordList, activeUser, userData]);

  if (databaseIsLoading || userIsLoading) {
    return <StyledResultDisplay>Loading...</StyledResultDisplay>;
  }
  return (
    <StyledSection>
      <NoStyleLink href="/study">
        <StyledReviewCounter
          className={
            studyDisplayData.reviewsDue === 0 ? "background-light-blue" : ""
          }
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
          <StyledCounterText>days</StyledCounterText>
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

export const NoStyleLink = styled(Link)`
  text-decoration: none;
`;

const StyledStudyCounter = styled.div`
  background-color: var(--dark-main);
  padding: 10px;
  border-radius: 25px 0 25px 0;
  min-width: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--default-box-shadow);
`;

const StyledReviewCounter = styled(StyledStudyCounter)`
  background-color: var(--highlight-red);
  border-radius: 0 25px 0 25px;
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
