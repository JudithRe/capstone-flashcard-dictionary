// Components Imports
import Header from "../Header";
import Navigation from "../Navigation";
import Logo from "../Logo";
import { MainContent } from "../StyledComponents/MainContent";

// Functions and Dependencies Imports
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Layout({ handleActiveUser, children }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      handleActiveUser(
        session.user._id,
        session.user.streak,
        session.user.lastUpdate
      );
    }
  }, [session]);

  return (
    <>
      <Header />
      <Navigation />
      <Logo width="115px" />
      <MainContent>{children}</MainContent>
    </>
  );
}
