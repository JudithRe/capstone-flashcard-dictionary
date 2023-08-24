import styled from "styled-components";
import Link from "next/link";
import { device } from "@/utils/globalValues";
import HomeIcon from "@/assets/icons/HomeIcon";
import ListIcon from "@/assets/icons/ListIcon";
import AddIcon from "@/assets/icons/AddIcon";
import StudyIcon from "@/assets/icons/StudyIcon";
import { useRouter } from "next/router";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import { StyledParagraphNoMargins } from "../UserData";
import { StyledCounterText } from "../StudyDisplay";

export default function Navigation() {
  const router = useRouter();
  const activePath = router.pathname;

  if (activePath === "/login") {
    return;
  }
  return (
    <nav>
      <StyledNavList>
        <StyledNavigationItem
          className="navTransition"
          $isActive={activePath === "/" ? true : false}
        >
          <StyledNavigationLink href="/">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Home"
            >
              <HomeIcon
                className="nav-transition"
                height={activePath === "/" ? "55px" : "30px"}
                width={activePath === "/" ? "55px" : "30px"}
              />
            </span>
            <StyledCounterText>Home</StyledCounterText>
          </StyledNavigationLink>
        </StyledNavigationItem>

        <StyledNavigationItem
          className="navTransition"
          $isActive={activePath === "/search" ? true : false}
        >
          <StyledNavigationLink href="/search">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Add Words"
            >
              <AddIcon
                height={activePath === "/search" ? "55px" : "30px"}
                width={activePath === "/search" ? "55px" : "30px"}
              />
            </span>
            <StyledCounterText>Add</StyledCounterText>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem
          className="navTransition"
          $isActive={activePath === "/study" ? true : false}
        >
          <StyledNavigationLink href="/study">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Study"
            >
              <StudyIcon
                height={activePath === "/study" ? "55px" : "30px"}
                width={activePath === "/study" ? "55px" : "30px"}
              />
            </span>
            <StyledCounterText>Study</StyledCounterText>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem
          className="navTransition"
          $isActive={
            activePath.includes("/words") || activePath === "/categories"
              ? true
              : false
          }
        >
          <StyledNavigationLink href="/words">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Word List"
            >
              <ListIcon
                height={
                  activePath.includes("/words") || activePath === "/categories"
                    ? "55px"
                    : "30px"
                }
                width={
                  activePath.includes("/words") || activePath === "/categories"
                    ? "55px"
                    : "30px"
                }
              />
            </span>
            <StyledCounterText>Words</StyledCounterText>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem
          className="navTransition"
          $isActive={activePath === "/profile" ? true : false}
        >
          <StyledNavigationLink href="/profile">
            <span
              className="inherit-background-color"
              role="img"
              aria-label="Profile"
            >
              <ProfileIcon
                height={activePath === "/profile" ? "55px" : "30px"}
                width={activePath === "/profile" ? "55px" : "30px"}
              />
            </span>
            <StyledCounterText>Profile</StyledCounterText>
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
  height: 7rem;
  padding: 2rem 0;
  backdrop-filter: blur(25px);
  list-style-type: none;
  z-index: 5;
  border-radius: 20%;
  box-shadow: var(--default-box-shadow-top);

  @media ${device.tablet} {
    backdrop-filter: none;
    background-color: transparent;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: auto;
    box-shadow: none;
    top: 8rem;
    left: 0;
  }
`;

const StyledNavigationItem = styled.li`
  padding: 15px 15px 5px 15px;
  border-radius: 999px 999px 0 0;
  background-color: ${(props) =>
    props.$isActive ? "var(--highlight-blue)" : "var(--dark-main)"};
  box-shadow: var(--default-box-shadow-top);

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
