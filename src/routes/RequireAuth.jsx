import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getRole } from "../lib/auth";

export default function RequireAuth({ allowed }) {
  const role = getRole();
  const location = useLocation();

  if (!role) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (allowed && !allowed.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
