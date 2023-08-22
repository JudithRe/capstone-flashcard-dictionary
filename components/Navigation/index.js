import styled from "styled-components";
import Link from "next/link";
import { device } from "@/utils/globalValues";
import HomeIcon from "@/assets/icons/HomeIcon";
import ListIcon from "@/assets/icons/ListIcon";
import AddIcon from "@/assets/icons/AddIcon";
import StudyIcon from "@/assets/icons/StudyIcon";
import { useRouter } from "next/router";
import SearchIcon from "@/assets/icons/SearchIcon";
import ProfileIcon from "@/assets/icons/ProfileIcon";

export default function Navigation() {
  const router = useRouter();
  const activePath = router.pathname;

  if (activePath === "/login") {
    return;
  }
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
                height={activePath === "/" ? "55px" : "30px"}
                width={activePath === "/" ? "55px" : "30px"}
              />
            </span>
          </StyledNavigationLink>
        </StyledNavigationItem>

        <StyledNavigationItem>
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
                height={activePath === "/study" ? "55px" : "30px"}
                width={activePath === "/study" ? "55px" : "30px"}
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
                height={
                  activePath === "/words" || activePath === "/categories"
                    ? "55px"
                    : "30px"
                }
                width={
                  activePath === "/words" || activePath === "/categories"
                    ? "55px"
                    : "30px"
                }
              />
            </span>
          </StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
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
  padding: 2rem 0;
  background-color: var(--dark-main);
  list-style-type: none;
  z-index: 5;
  box-shadow: var(--default-box-shadow-top);

  @media ${device.tablet} {
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
  padding: 15px;
  border-radius: 50%;
  background-color: var(--dark-main);
  box-shadow: var(--default-box-shadow-top);

  @media ${device.tablet} {
    padding-left: 40px;
    border-radius: 0 40% 40% 0;
    margin-left: 0;
    margin-left: -35px;
  }
`;

const StyledNavigationLink = styled(Link)`
  background-color: inherit;
  color: var(--dark-mode-text-color);
  text-decoration: none;
  font-size: 1.3em;
`;
