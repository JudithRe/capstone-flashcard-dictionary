import { styled } from "styled-components";
import Link from "next/link";
import { device } from "@/utils/globalValues";

export default function Navigation() {
  return (
    <StyledNavigation>
      <li className="inherit-background-color">
        <StyledNavigationLink href="/words">Words</StyledNavigationLink>
      </li>
      <li className="inherit-background-color">
        <StyledNavigationLink href="/add">Add</StyledNavigationLink>
      </li>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
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
