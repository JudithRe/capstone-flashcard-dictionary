import { useSession } from "next-auth/react";
import Header from "../Header";
import Navigation from "../Navigation";
import { useEffect } from "react";
import Logo from "../Logo";

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
      <Logo width="115px" />
      <main>{children}</main>
      <Navigation />
    </>
  );
}
