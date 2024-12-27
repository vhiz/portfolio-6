import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../components/Image";

export default function RootLayout() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative h-screen font-sora">
      <div className="absolute left-0 top-0 mix-blend-color-dodge w-[7rem] z-10 xl:w-[25rem] opacity-50">
        <Image lazy src="top-left-img" />
      </div>
      <Navbar />
      <div className="h-[calc(100vh-4rem)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
