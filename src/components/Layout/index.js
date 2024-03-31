import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  const pages = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
  ];
  return (
    <>
      <Header pages={pages} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
