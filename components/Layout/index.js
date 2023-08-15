import { useSession } from "next-auth/react";
import HeaderBackground from "../HeaderBackground";
import Navigation from "../Navigation";
import { useEffect } from "react";

export default function Layout({ handleActiveUser }) {
  // Could not use useSession in _app.js, but this component also renders on each page
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      handleActiveUser(session.user._id);
    }
  }, [session, handleActiveUser]);

  return (
    <>
      <HeaderBackground />
      <Navigation />
    </>
  );
}
