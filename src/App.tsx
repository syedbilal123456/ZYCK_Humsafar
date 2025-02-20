import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Packages from "./pages/pricing/Pricing";
import FeaturedProfiles from "./pages/featuredprofile/FeaturedProfiles";
import Events from "./pages/events/Events";
import RishtaConsultants from "./pages/rishtaconsultants/RishtaConsultants";
import Layout from "./components/Layout";
import Signup from "./pages/register/SignUp";
import Login from "./pages/login/Login";
import ForgotPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/featuredprofiles" element={<FeaturedProfiles />} />
          <Route path="/rishtaconsultants" element={<RishtaConsultants />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />

          {/* Clerk Authentication Routes */}
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Protected Routes (Only accessible when signed in) */}
          <Route
            path="/"
            element={
              <SignedIn>
                <Home />
              </SignedIn>
            }
          />

          {/* Redirect unauthenticated users */}
          <Route
            path="*"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
