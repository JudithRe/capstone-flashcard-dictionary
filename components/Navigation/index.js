import styled from "styled-components";
import Link from "next/link";
import { device } from "@/utils/globalValues";
import HomeIcon from "@/assets/icons/HomeIcon";
import ListIcon from "@/assets/icons/ListIcon";
import AddIcon from "@/assets/icons/AddIcon";
import StudyIcon from "@/assets/icons/StudyIcon";
import { useState } from "react";

export default function Navigation({ activePage }) {
  return (
    <nav>
      <StyledNavList>
        <StyledNavigationItem>
          <StyledNavigationLink href="/">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Home"
            >
              <HomeIcon
                className="nav-transition"
                height={activePage === "home" ? "55px" : "30px"}
                width={activePage === "home" ? "55px" : "30px"}
              />
            </span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="/add">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Add Words"
            >
              <AddIcon
                height={activePage === "add" ? "55px" : "30px"}
                width={activePage === "add" ? "55px" : "30px"}
              />
            </span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="/study">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Study"
            >
              <StudyIcon
                height={activePage === "study" ? "55px" : "30px"}
                width={activePage === "study" ? "55px" : "30px"}
              />
            </span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="/words">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Word List"
            >
              <ListIcon
                height={activePage === "word-list" ? "55px" : "30px"}
                width={activePage === "word-list" ? "55px" : "30px"}
              />
            </span>
          </StyledNavigationLink>
        </StyledNavigationItem>
      </StyledNavList>
    </nav>
  );
}

const StyledNavList = styled.ul`
  margin-bottom: -2rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: var(--footer-height);
  padding: 2rem;
  background-color: var(--dark-main);
  list-style-type: none;
  z-index: 5;

  @media ${device.tablet} {
    background-color: transparent;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: auto;

    top: 0;
    left: 0;
  }
`;

const StyledNavigationItem = styled.li`
  padding: 15px;
  border-radius: 50%;
  background-color: var(--dark-main);

  @media ${device.tablet} {
    padding-left: 40px;
    border-radius: 0 40% 40% 0;
    margin-left: 0;
    margin-left: -35px;
  }
`;

const StyledNavigationLink = styled(Link)`
  background-color: inherit;
  color: var(--white);
  text-decoration: none;
  font-size: 1.3em;
`;
