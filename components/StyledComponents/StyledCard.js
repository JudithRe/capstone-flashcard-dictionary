import styled from "styled-components";

export const StyledCard = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 1rem;
  background: radial-gradient(circle, #ffffff 50%, #efefef 100%);
  width: var(--card-width);
  border-radius: 5px;
  box-shadow: var(--default-box-shadow);
  position: relative;
  z-index: 1;
  height: 100%;
`;

export const StyledCardLeftAlign = styled(StyledCard)`
  align-items: flex-start;
  padding: 1rem 1.5rem;
`;
