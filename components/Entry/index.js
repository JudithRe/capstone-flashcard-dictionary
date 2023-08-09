import styled from "styled-components";
import { StyledCard } from "../StyledComponents/StyledCard";
import { StyledSubmitButton } from "../StyledComponents/StyledSubmitButton";

function Entry({ entry, handleAddEntry }) {
  const { japanese, english, showAddButton, isDictionaryEntry } = entry;

  return (
    <StyledCard>
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
