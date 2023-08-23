import { useSession } from "next-auth/react";
import Header from "../Header";
import Navigation from "../Navigation";
import { useEffect } from "react";

export default function Layout({ handleActiveUser }) {
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
    </>
  );
}
