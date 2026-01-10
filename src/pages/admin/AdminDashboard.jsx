import React from "react";

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <div className="rounded border bg-white p-5">
        <h2 className="text-lg font-semibold">Admin / Reception Dashboard</h2>
        <p className="mt-1 text-sm text-gray-600">
          Patient registration, appointment management, billing (UI placeholders).
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded border bg-white p-5">
          <div className="font-semibold">Quick actions</div>
          <div className="mt-3 grid gap-2">
            <button className="rounded border px-3 py-2 text-left hover:bg-gray-50">Register new patient</button>
            <button className="rounded border px-3 py-2 text-left hover:bg-gray-50">Create appointment</button>
            <button className="rounded border px-3 py-2 text-left hover:bg-gray-50">Create invoice</button>
          </div>
        </div>

        <div className="rounded border bg-white p-5">
          <div className="font-semibold">Today overview</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Appointments: 24</li>
            <li>Checked-in: 9</li>
            <li>Pending payments: 6</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
