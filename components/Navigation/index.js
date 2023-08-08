import styled from "styled-components";
import Link from "next/link";
import { device } from "@/utils/globalValues";

export default function Navigation() {
  return (
    <nav>
      <StyledNavList>
        <li className="inherit-background-color">
          <StyledNavigationLink href="/">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Home"
            >
              🏠
            </span>
          </StyledNavigationLink>
        </li>
        <li className="inherit-background-color">
          <StyledNavigationLink href="/words">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Word List"
            >
              📚
            </span>
          </StyledNavigationLink>
        </li>
        <li className="inherit-background-color">
          <StyledNavigationLink href="/add">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Add Words"
            >
              ➕
            </span>
          </StyledNavigationLink>
        </li>
        <li className="inherit-background-color">
          <StyledNavigationLink href="/study">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Study"
            >
              📝
            </span>
          </StyledNavigationLink>
        </li>
      </StyledNavList>
    </nav>
  );
}

const StyledNavList = styled.ul`
  margin: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: var(--footer-height);
  padding: 2rem;
  background-color: var(--dark-main);
  list-style-type: none;

  @media ${device.tablet} {
    top: 0;
  }
`;

const StyledNavigationLink = styled(Link)`
  background-color: inherit;
  color: var(--white);
  text-decoration: none;
  font-size: 1.3em;
`;
