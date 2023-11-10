import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./styles/globals.css";
import TopImg from "./components/TopLeftImg/TopImg";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./components/Transition/Transition";
import Services from "./pages/Services/Services";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";

export default function App() {
  const Layout = () => {
    const { pathname } = useLocation();
    return (
      <AnimatePresence mode="wait">
        <motion.div className="h-full" key={pathname}>
          <Transition />
          <div className="page bg-site text-[#bbb] bg-cover bg-no-repeat font-sora relative">
            <TopImg />
            <Navbar />
            <Header />
            <Outlet />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/work",
          element: <Work />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
