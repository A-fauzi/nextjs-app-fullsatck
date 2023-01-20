import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/Organisms/navbar";
import LandingPage from "../components/Organisms/landing-page";
import Footer from "../components/Organisms/footer/Index";


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // Tag pembungkus(fragment) untuk membungkus komponen lebih dari satu
    <>
      {/* // <!-- Navbar --> */}
      <Navbar />

      {/* Landing page */}
      <LandingPage />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
