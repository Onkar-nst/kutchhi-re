import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import LoaderSkeleton from "./components/LoaderSkeleton";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// const InstagramFeed = lazy(() => import("./pages/InstagramFeed"));

function Layout() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Outlet />

        <MobileNav />
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        {/* WITH NAVBAR + FOOTER */}
        <Route element={
          <Suspense fallback={<LoaderSkeleton />}>
            <Layout />
          </Suspense>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/instagram" element={<InstagramFeed />} /> */}
        </Route>

        {/* WITHOUT NAVBAR + FOOTER */}
        <Route
          path="*"
          element={
            <Suspense fallback={<LoaderSkeleton />}>
              <NotFound />
            </Suspense>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;