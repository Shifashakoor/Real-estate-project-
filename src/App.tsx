import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/mainLayout";

import Home from "./pages/home";
import Buy from "./pages/buy";
import Sell from "./pages/sell";
import About from "./pages/about";
import Contact from "./pages/contact-us";
import Login from "./pages/login";
import Signup from "./pages/sign-up";
import BuyPropertyDetails from "./sections/buySection/propertyDetailSection";
import HomePropertyDetails from "./pages/property-details";
import PrivacyPolicyPage from "./pages/privacypolicy";
import TermsAndConditionPage from "./pages/TermsAndCondition";
import FAQPage from "./pages/FAQ";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/buy"
          element={
            <ProtectedRoute>
              <Buy />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sell"
          element={
            <ProtectedRoute>
              <Sell />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/property/:id"
          element={
            <ProtectedRoute>
              <HomePropertyDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/buy/property/:id"
          element={
            <ProtectedRoute>
              <BuyPropertyDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/privacy"
          element={
            <ProtectedRoute>
              <PrivacyPolicyPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/terms"
          element={
            <ProtectedRoute>
              <TermsAndConditionPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/faq"
          element={
            <ProtectedRoute>
              <FAQPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </MainLayout>
  );
}

export default App;