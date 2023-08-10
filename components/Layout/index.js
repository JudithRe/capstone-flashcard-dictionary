import HeaderBackground from "../HeaderBackground";
import Navigation from "../Navigation";

export default function Layout({ activePage, setActivePage }) {
  return (
    <>
      <HeaderBackground />
      <Navigation activePage={activePage} setActivePage={setActivePage} />
    </>
  );
}
