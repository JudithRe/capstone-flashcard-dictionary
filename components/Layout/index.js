import HeaderBackground from "../HeaderBackground";
import Navigation from "../Navigation";

export default function Layout({ activePage, handleActivePage }) {
  return (
    <>
      <HeaderBackground />
      <Navigation activePage={activePage} handleActivePage={handleActivePage} />
    </>
  );
}
