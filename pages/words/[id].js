import {
  StyledDefinition,
  StyledJPDefinition,
  StyledUl,
} from "@/components/Entry";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSecondaryButton } from "@/components/StyledComponents/StyledButtons";
import { StyledCard } from "@/components/StyledComponents/StyledCard";
import {
  StyledCenterAlign,
  StyledSectionLeftAlign,
} from "@/components/StyledComponents/StyledSection";
import { useRouter } from "next/router";
import { useState } from "react";
import { styled } from "styled-components";

export default function WordDetail({ wordList, databaseIsLoading }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  if (databaseIsLoading) {
    return <p>Loading...</p>;
  }

  const entryData = wordList.find(({ _id }) => _id === id);
  const { english, japanese, isCommon, jlpt, wanikani, study } = entryData;
  const { lastReview, stage, wrongAnswerCount, rightAnswerCount, streak } =
    study;

  return (
    <MainContent>
      <StyledCenterAlign>
        <StyledSectionLeftAlign>
          <StyledSecondaryButton type="button" onClick={() => router.back()}>
            Back
          </StyledSecondaryButton>
        </StyledSectionLeftAlign>

        <StyledCard>
          <StyledJPDefinition>{japanese.word}</StyledJPDefinition>
          <StyledUl>
            <StyledDefinition>{japanese.reading}</StyledDefinition>
          </StyledUl>
          <StyledUl>
            {english.map((definition) => (
              <StyledDefinition key={definition}>{definition}</StyledDefinition>
            ))}
          </StyledUl>
        </StyledCard>

        <StyledCard>
          <StyledHeading2>Further Information</StyledHeading2>
          <StyledTag>{isCommon ? "Common Word" : "Not Common"}</StyledTag>
          {(jlpt || wanikani) && <StyledHeading3>Difficulty</StyledHeading3>}
          <StyledCenterAlign>
            {jlpt && <StyledTag>{jlpt}</StyledTag>}
            {wanikani && <StyledTag>{wanikani}</StyledTag>}
          </StyledCenterAlign>
        </StyledCard>

        <StyledCard>
          <StyledHeading2>Study Progress</StyledHeading2>
          <StyledTag>Stage {stage}</StyledTag>
          <p className="inherit-background-color">{`last review: ${lastReview}`}</p>
          <p className="inherit-background-color">{`wrong: ${wrongAnswerCount} / right: ${rightAnswerCount}`}</p>
        </StyledCard>
      </StyledCenterAlign>
    </MainContent>
  );
}

const StyledHeading2 = styled.h2`
  background-color: inherit;
  font-size: 1.5rem;
  margin: 0px;
`;
const StyledHeading3 = styled.h3`
  background-color: inherit;
  font-size: 1.3rem;
  margin: 0px;
`;

const StyledTag = styled.p`
  padding: 15px;
  border-radius: 25px;
  background-color: var(--dark-main);
  color: var(--white);
`;
