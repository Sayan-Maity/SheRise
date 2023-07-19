import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { UserContext } from "./utils/userContext";
import { magic } from "./utils/magic";
import Cookies from "js-cookie";
import { Toaster } from "react-hot-toast";
import Assistant from "./pages/assistant/Assistant";
import SupportAdmin from "./pages/livechat/SupportAdmin";
import Livechat from "./pages/livechat/Livechat";
import Success from "./pages/scholarship/donation/Success";
import Cancel from "./pages/scholarship/donation/Cancel";
import Loader from "./components/Loader/Loader";
import { hotjar } from "react-hotjar";
import ReactGA from "react-ga4";
import SEO from "./components/SEO";

// import LandingPage from "./pages/landingPage/LandingPage";
// import Developers from "./pages/developers/Developers";
// import Dashboard from "./pages/dashBoard/Dashboard";
// import Scholarship from "./pages/scholarship/Scholarship";
// import ContactUs from "./pages/contactUs/ContactUs";
// import Conference from "./pages/conference/Conference";
// import HiringChallange from "./pages/hiringChallenge/HiringChallange";
// import Internship from "./pages/internship/Internship";
// import Workshop from "./pages/workshop/Workshop";
// import Hackathon from "./pages/hackathon/Hackathon";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));
const Developers = lazy(() => import("./pages/developers/Developers"));
const Dashboard = lazy(() => import("./pages/dashBoard/Dashboard"));
const Scholarship = lazy(() => import("./pages/scholarship/Scholarship"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const Conference = lazy(() => import("./pages/conference/Conference"));
const HiringChallange = lazy(() =>
  import("./pages/hiringChallenge/HiringChallange")
);
const Internship = lazy(() => import("./pages/internship/Internship"));
const Workshop = lazy(() => import("./pages/workshop/Workshop"));
const Hackathon = lazy(() => import("./pages/hackathon/Hackathon"));

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("App.js useEffect");
    // setUser({ loading: true });
    const init = async () => {
      try {
        const isLoggedIn = await magic.user.isLoggedIn();
        console.log(isLoggedIn);
        if (isLoggedIn) {
          const userData = await magic.user.getMetadata();
          Cookies.set("user", userData);
          const idToken = await magic.user.getIdToken({
            lifespan: 24 * 60 * 60,
          });
          Cookies.set("token", idToken);
        }
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  // Google Analytics Integration :
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "Custom Title",
      });
    }
  }, []);
  // HotJar Integration :
  useEffect(() => {
    hotjar.initialize(
      process.env.REACT_APP_HOTJAR_SITEID,
      process.env.REACT_APP_HOTJAR_VERSION
    );
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Toaster />
      <Router>
        <SEO dynamicTitle="SheRise | Home" />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin/secretkey/livechat"
              element={<SupportAdmin />}
            />
            <Route path="/main" element={<Sidebar />}>
              <Route path="/main/dashboard" element={<Dashboard />} />
              <Route path="/main/conference" element={<Conference />} />
              <Route
                path="/main/hiringChallange"
                element={<HiringChallange />}
              />
              <Route path="/main/internship" element={<Internship />} />
              <Route path="/main/workshop" element={<Workshop />} />
              <Route path="/main/hackathon" element={<Hackathon />} />
              <Route path="/main/assistant" element={<Assistant />} />
              <Route path="/main/livechat" element={<Livechat />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
