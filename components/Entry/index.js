import { styled } from "styled-components";

function Entry({ JPDefinition, JPReading, ENDefinition }) {
  return (
    <StyledWordCard>
      <StyledJPDefinition>{JPDefinition}</StyledJPDefinition>
      <StyledDefinition>[{JPReading}]</StyledDefinition>
      <StyledDefinition>{ENDefinition.join(" ⦁ ")}</StyledDefinition>
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

const StyledJPDefinition = styled.div`
  background-color: var(--white);
  font-size: 1.5rem;
`;

const StyledDefinition = styled.div`
  background-color: var(--white);
  font-size: 1rem;
`;

export default Entry;
