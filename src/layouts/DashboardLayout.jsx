import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getRole, logout } from "../lib/auth";

function Item({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "block rounded px-3 py-2 text-sm " +
        (isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-800")
      }
    >
      {children}
    </NavLink>
  );
}

export default function DashboardLayout() {
  const navigate = useNavigate();
  const role = getRole();

  function onLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-semibold">HMS Dashboard</div>
          <div className="flex items-center gap-3 text-sm">
            <span className="rounded bg-gray-100 px-2 py-1">Role: {role}</span>
            <button onClick={onLogout} className="rounded border px-3 py-1.5 hover:bg-gray-50">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 md:grid-cols-12">
        <aside className="md:col-span-3">
          <div className="rounded border bg-white p-3">
            <div className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Navigation
            </div>
            {role === "patient" && <Item to="/app/patient">Patient</Item>}
            {role === "doctor" && <Item to="/app/doctor">Doctor</Item>}
            {role === "admin" && <Item to="/app/admin">Admin</Item>}
            <Item to="/">Public site</Item>
          </div>
        </aside>

        <section className="md:col-span-9">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
