import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import EmergencyContacts from "./pages/EmergencyContacts";
import BloodBank from "./pages/BloodBank";
import BloodRequest from "./pages/BloodRequest";
import Accident from "./pages/Accident";
import WomenSafety from "./pages/WomenSafety";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      {user && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/contacts"
          element={
            <ProtectedRoute user={user}>
              <EmergencyContacts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
           }
        />

        <Route
          path="/bloodbank"
          element={
            <ProtectedRoute user={user}>
              <BloodBank />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bloodrequest"
          element={
            <ProtectedRoute user={user}>
              <BloodRequest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/accident"
          element={
            <ProtectedRoute user={user}>
              <Accident />
            </ProtectedRoute>
          }
        />

        <Route
          path="/safety"
          element={
            <ProtectedRoute user={user}>
              <WomenSafety />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;