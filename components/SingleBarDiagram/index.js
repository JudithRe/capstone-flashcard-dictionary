// Styles Imports
import styled from "styled-components";

// Functions and Dependencies Imports
import { device } from "@/utils/globalValues";

export default function SingleBarDiagram({ inputArray, unit, height }) {
  if (inputArray) {
    const total = inputArray
      .map((element) => element.value)
      .reduce((a, b) => a + b);

    function setHasOnlyOneEntry() {
      const entryCount = inputArray.filter((element) => element.value !== 0);

      if (entryCount.length <= 1) {
        return true;
      }
      return false;
    }
    const hasOnlyOneEntry = setHasOnlyOneEntry();

    return (
      <StyledBarDiagram height={height}>
        {inputArray.map((element) => {
          if (element.value === 0) {
            return;
          }
          const percentage = (100 / total) * element.value;
          return (
            <StyledBarElement
              key={element.id}
              value={percentage}
              $hasOneEntry={hasOnlyOneEntry}
            >
              <StyledBarLabel>{element.name}</StyledBarLabel>
              <StyledBarDescription>
                {Math.round(percentage * 10) / 10}% / {element.value} {unit}
              </StyledBarDescription>
            </StyledBarElement>
          );
        })}
      </StyledBarDiagram>
    );
  }
}

// Styles

const StyledBarLabel = styled.p`
  margin: 5px 0;
  color: var(--dark-mode-text-color);
`;

const StyledBarDescription = styled.p`
  color: var(--dark-mode-text-color);
  margin-top: 0;
  font-size: 0.8rem;
`;

const StyledBarElement = styled.div`
  width: 100%;
  padding: 0 15px 15px 10px;
  height: ${(props) => (props.value ? props.value : "0")}%;
  color: var(--dark-mode-text-color);
  background-color: var(--dark-main);
  &:nth-child(even) {
    background-color: var(--highlight-blue);
  }

  &:last-child {
    border-radius: 15px 15px 0 0;
  }

  &:first-child {
    border-radius: ${(props) =>
      props.$hasOneEntry ? "15px" : "0 0 15px 15px"};
  }

  @media ${device.tablet} {
    height: auto;
    width: ${(props) => (props.value ? props.value : "0")}%;
    &:last-child {
      border-radius: 0 15px 15px 0;
    }

    &:first-child {
      border-radius: ${(props) =>
        props.$hasOneEntry ? "15px" : "15px 0 0 15px"};
    }
  }
`;

const StyledBarDiagram = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-self: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height : "500")}px;

  @media ${device.tablet} {
    height: 80px;
    flex-direction: row;
    width: 100%;
  }
`;
