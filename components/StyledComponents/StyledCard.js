import styled from "styled-components";

export const StyledCard = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  background: radial-gradient(circle, #ffffff 55%, #efefef 85%);
  width: var(--card-width);
  border-radius: 10px;
  box-shadow: var(--default-box-shadow);
  position: relative;
  z-index: 2;
`;
