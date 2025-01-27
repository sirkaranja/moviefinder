import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../src/Auth/firebaseConfig";  // Updated import path
import Login from "../src/Auth/login";
import SignUp from "./Auth/Signup";
import {
  Header,
  Footer,
  SideBar,
  VideoModal,
  ScrollToTop,
  Loader,
} from "@/common";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";

const Catalog = lazy(() => import("./pages/Catalog"));
const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      // You can add any logic you want to handle for when user is not logged in
    }
  }, [user]);

  return (
    <>
      <VideoModal />
      <SideBar />
      <Header />
      <main className=" lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0">
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/:category/:id"
                element={user ? <Detail /> : <Navigate to="/login" />}
              />
              <Route path="/:category" element={<Catalog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </main>
      <Footer />
    </>
  );
};

export default App;
