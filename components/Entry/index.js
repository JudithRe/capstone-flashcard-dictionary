import styled from "styled-components";
import { StyledCard } from "../StyledComponents/StyledCard";
import {
  StyledSecondaryButton,
  StyledSubmitButton,
} from "../StyledComponents/StyledButtons";
import { StyledSectionRightAlign } from "../StyledComponents/StyledSection";
import { deleteEntry } from "@/utils/deleteEntry";

function Entry({ entry, handleAddEntry, isEditMode, databaseMutate }) {
  const { japanese, english, showAddButton, isDictionaryEntry, _id } = entry;

  return (
    <StyledCard>
      <StyledSectionRightAlign>
        {showAddButton && (
          <StyledSubmitButton
            type="button"
            onClick={(event) => {
              event.target.disabled = true;
              handleAddEntry(entry);
            }}
          >
            +
          </StyledSubmitButton>
        )}
        {!showAddButton && isDictionaryEntry && (
          <StyledSubmitButton type="button" disabled={true}>
            ✔
          </StyledSubmitButton>
        )}
        {isEditMode && (
          <StyledSecondaryButton
            type="button"
            onClick={() => deleteEntry(_id, databaseMutate)}
          >
            X
          </StyledSecondaryButton>
        )}
      </StyledSectionRightAlign>
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
  );
}

export const StyledJPDefinition = styled.h2`
  background-color: inherit;
  font-size: 1.5rem;
  margin: 0px;
`;

export const StyledDefinition = styled.li`
  display: inline-block;
  background-color: inherit;
  list-style-type: none;

  font-size: 1rem;
  &:not(:last-child)::after {
    content: " ⦁ ";
    background-color: inherit;
  }
  &:not(:first-child) {
    padding-left: 0.3rem;
  }
`;

export const StyledUl = styled.ul`
  background-color: inherit;
  padding: 0;
  text-align: center;
  margin: 0;
`;

export default Entry;
