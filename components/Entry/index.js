import { styled } from "styled-components";

function Entry({ JPDefinition, JPReading, ENDefinition }) {
  return (
    <StyledWordCard>
      <StyledJPDefinition>{JPDefinition}</StyledJPDefinition>
      <StyledUl>
        <StyledDefinition>[{JPReading}]</StyledDefinition>
      </StyledUl>
      <StyledUl>
        {ENDefinition.map((definition) => (
          <StyledDefinition key={definition}>{definition}</StyledDefinition>
        ))}
      </StyledUl>
    </StyledWordCard>
  );
}

const StyledWordCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  background-color: var(--white);
  width: 320px;
  border-radius: 25px;
  box-shadow: var(--default-box-shadow);
`;

const StyledJPDefinition = styled.h2`
  background-color: inherit;
  font-size: 1.5rem;
  margin: 0px;
`;

const StyledDefinition = styled.li`
  display: inline-block;
  background-color: inherit;
  list-style-type: none;

  font-size: 1rem;
  &:not(:last-child)::after {
    content: " ⦁ ";
    background-color: inherit;
  }
  &:last-child {
    padding-left: 0.3rem;
  }
`;

const StyledUl = styled.ul`
  background-color: inherit;
  padding: 0;
  text-align: center;
  margin: 0;
`;

export default Entry;
