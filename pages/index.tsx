import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/Organisms/navbar";
import Index from "../components/Organisms/footer/Index";
import MainBanner from "../components/Organisms/mainbanner";
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

      {/* Main Banner */}
      <MainBanner />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
