import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/public/Home";
import Doctors from "./pages/public/Doctors";
import BookAppointment from "./pages/public/BookAppointment";
import Contact from "./pages/public/Contact";
import About from "./pages/public/About";

import Login from "./pages/auth/Login";
import Unauthorized from "./pages/auth/Unauthorized";

import PatientDashboard from "./pages/patient/PatientDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import RequireAuth from "./routes/RequireAuth";

export default function App() {
  return (
    <Routes>
      {/* Public website */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected dashboards (role-based) */}
      <Route element={<RequireAuth allowed={["patient", "doctor", "admin"]} />}>
        <Route element={<DashboardLayout />}>
          <Route path="/app" element={<Navigate to="/app/patient" replace />} />

          <Route element={<RequireAuth allowed={["patient"]} />}>
            <Route path="/app/patient" element={<PatientDashboard />} />
          </Route>

          <Route element={<RequireAuth allowed={["doctor"]} />}>
            <Route path="/app/doctor" element={<DoctorDashboard />} />
          </Route>

          <Route element={<RequireAuth allowed={["admin"]} />}>
            <Route path="/app/admin" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<div className="p-6">404 Not Found</div>} />
    </Routes>
  );
}
