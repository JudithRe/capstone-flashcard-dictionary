import {
  BottomMargin,
  StyledDefinition,
  StyledJPDefinition,
  StyledTagLeft,
  StyledUl,
} from "./styled.EntryContent";

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

export default EntryContent;
