import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const hideLayoutFor = ["/login", "/register"];

  return hideLayoutFor.includes(location.pathname) ? (
    <>{children}</>
  ) : (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
