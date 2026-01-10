import React from "react";

export default function PatientDashboard() {
  return (
    <div className="space-y-4">
      <div className="rounded border bg-white p-5">
        <h2 className="text-lg font-semibold">Patient Dashboard</h2>
        <p className="mt-1 text-sm text-gray-600">
          Upcoming appointments, bills, lab results (UI placeholders).
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Upcoming", "1 appointment tomorrow 11:00 AM"],
          ["Invoices", "₹ 2,500 pending"],
          ["Lab results", "2 reports available"],
        ].map(([k, v]) => (
          <div key={k} className="rounded border bg-white p-5">
            <div className="text-xs uppercase text-gray-500">{k}</div>
            <div className="mt-1 font-semibold">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
