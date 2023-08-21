import styled from "styled-components";

function EntryContent({ entry }) {
  const { japanese, english, categoryName } = entry;

  return (
    <>
      {categoryName && (
        <BottomMargin>
          <StyledTagLeft>{categoryName}</StyledTagLeft>
        </BottomMargin>
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
    </>
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
export const StyledTag = styled.span`
  padding: 5px 15px;
  border-radius: 25px;
  background-color: var(--dark-main);
  color: var(--dark-mode-text-color);
`;

const StyledTagLeft = styled(StyledTag)`
  position: absolute;
  left: 0;
  top: 15px;
  border-radius: 0 25px 25px 0;
`;

const BottomMargin = styled.div`
  margin-bottom: 2.5rem;
`;

export default EntryContent;
