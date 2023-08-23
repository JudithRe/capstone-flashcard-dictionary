import { styled } from "styled-components";

export default function BarDiagram({ inputArray }) {
  if (inputArray) {
    const sortedArray = inputArray.slice().sort((a, b) => b.value - a.value);
    const highestValue = sortedArray[0].value;

    return (
      <StyledBarDiagram>
        {inputArray.map((element) => {
          const percentage = (100 / highestValue) * element.value;
          return (
            <StyledBarContainer key={element.id}>
              <DiagramLabel>{element.name}</DiagramLabel>
              <StyledBarElement value={percentage}>
                {element.value}
              </StyledBarElement>
            </StyledBarContainer>
          );
        })}
      </StyledBarDiagram>
    );
  }
}

const DiagramLabel = styled.span`
  width: 2.5rem;
`;

const StyledBarContainer = styled.div`
  display: flex;
`;

const StyledBarElement = styled.div`
  height: 2rem;
  padding: 2px 0 0 10px;
  width: ${(props) => (props.value ? props.value : "0")}%;
  border-radius: 10px;
  background-color: var(--dark-main);
  color: var(--dark-mode-text-color);
`;

const StyledBarDiagram = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
