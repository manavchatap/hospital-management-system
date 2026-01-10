import React from "react";

export default function DoctorDashboard() {
  const todays = [
    { time: "10:00", patient: "Amit P.", type: "New" },
    { time: "11:30", patient: "Neha S.", type: "Follow-up" },
    { time: "15:00", patient: "Rahul K.", type: "New" },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded border bg-white p-5">
        <h2 className="text-lg font-semibold">Doctor Dashboard</h2>
        <p className="mt-1 text-sm text-gray-600">
          Today’s schedule + quick patient view (UI placeholder).
        </p>
      </div>

      <div className="rounded border bg-white p-5">
        <div className="mb-3 font-semibold">Today’s schedule</div>
        <div className="divide-y">
          {todays.map((a, idx) => (
            <div key={idx} className="flex items-center justify-between py-3 text-sm">
              <div>
                <div className="font-medium">{a.time} • {a.patient}</div>
                <div className="text-gray-600">{a.type}</div>
              </div>
              <button className="rounded border px-3 py-1.5 hover:bg-gray-50">
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
