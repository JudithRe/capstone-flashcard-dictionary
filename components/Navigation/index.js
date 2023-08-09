import styled from "styled-components";
import Link from "next/link";
import { device } from "@/utils/globalValues";
import HomeIcon from "@/assets/icons/HomeIcon";
import ListIcon from "@/assets/icons/ListIcon";
import AddIcon from "@/assets/icons/AddIcon";
import StudyIcon from "@/assets/icons/StudyIcon";

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
              <HomeIcon />
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
              <AddIcon />
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
              <StudyIcon />
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
              <ListIcon />
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
  justify-content: space-between;
  align-items: center;
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
