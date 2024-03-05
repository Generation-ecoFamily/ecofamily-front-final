import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  );
}
