// Style Imports
import styled from "styled-components";
import HomeIcon from "@/assets/icons/HomeIcon";
import ListIcon from "@/assets/icons/ListIcon";
import AddIcon from "@/assets/icons/AddIcon";
import StudyIcon from "@/assets/icons/StudyIcon";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import { StyledCounterText } from "../StudyDisplay/styled.StudyDisplay";

// Components Imports
import Link from "next/link";

// Functions and Dependencies Imports
import { device } from "@/utils/globalValues";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const activePath = router.pathname;

  if (activePath === "/login" || activePath === "/404") {
    return;
  }
  return (
    <StyledNavContainer>
      <StyledNavList>
        <StyledNavigationItem $isActive={activePath === "/" ? true : false}>
          <StyledNavigationLink href="/">
            <span role="img" aria-label="Home">
              <HomeIcon
                height={activePath === "/" ? "55px" : "30px"}
                width={activePath === "/" ? "55px" : "30px"}
              />
            </span>
            <StyledCounterText>Home</StyledCounterText>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem $isActive={activePath === "/add" ? true : false}>
          <StyledNavigationLink href="/add">
            <span role="img" aria-label="Add Words">
              <AddIcon
                height={activePath === "/add" ? "55px" : "30px"}
                width={activePath === "/add" ? "55px" : "30px"}
              />
            </span>
            <StyledCounterText>Add</StyledCounterText>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem
          $isActive={activePath === "/study" ? true : false}
        >
          <StyledNavigationLink href="/study">
            <span role="img" aria-label="Study">
              <StudyIcon
                height={activePath === "/study" ? "55px" : "30px"}
                width={activePath === "/study" ? "55px" : "30px"}
              />
            </span>
            <StyledCounterText>Study</StyledCounterText>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem
          $isActive={
            activePath.includes("/words") || activePath === "/categories"
              ? true
              : false
          }
        >
          <StyledNavigationLink href="/words">
            <span role="img" aria-label="Word List">
              <ListIcon
                height={activePath.includes("/words") ? "55px" : "30px"}
                width={activePath.includes("/words") ? "55px" : "30px"}
              />
            </span>
            <StyledCounterText>Words</StyledCounterText>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem
          $isActive={activePath === "/profile" ? true : false}
        >
          <StyledNavigationLink href="/profile">
            <span role="img" aria-label="Profile">
              <ProfileIcon
                height={activePath === "/profile" ? "55px" : "30px"}
                width={activePath === "/profile" ? "55px" : "30px"}
              />
            </span>
            <StyledCounterText>Profile</StyledCounterText>
          </StyledNavigationLink>
        </StyledNavigationItem>
      </StyledNavList>
    </StyledNavContainer>
  );
}

// Styles

const StyledNavList = styled.ul`
  width: 100%;
  padding: 0 0 2rem 0;
  backdrop-filter: blur(25px);
  border-radius: 20%;
  box-shadow: var(--default-box-shadow-top);

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  list-style-type: none;
  z-index: 5;

  @media ${device.tablet} {
    width: auto;
    backdrop-filter: none;
    box-shadow: none;

    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const StyledNavContainer = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: auto;
  margin-bottom: -3rem;
  overflow-x: auto;
  z-index: 5;

  @media ${device.tablet} {
    width: auto;
    top: 2rem;
    left: 0;
  }
`;

const StyledNavigationItem = styled.li`
  padding: 15px 15px 5px 15px;
  border-radius: 999px 999px 0 0;
  background-color: ${(props) =>
    props.$isActive ? "var(--highlight-blue)" : "var(--dark-main)"};
  box-shadow: var(--default-box-shadow-top);
  transition: 400ms linear;

  @media ${device.tablet} {
    padding: 15px 30px 8px 60px;
    border-radius: 0 999px 999px 0;
    margin-left: 0;
    margin-left: -35px;
    box-shadow: var(--default-box-shadow);
  }
`;

const StyledNavigationLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--dark-mode-text-color);
  text-decoration: none;
  font-size: 1.3em;
`;
