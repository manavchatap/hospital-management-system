import React, { useMemo, useState } from "react";

const DEPTS = ["Cardiology", "Orthopedics", "Pediatrics", "ENT"];
const DOCTORS_BY_DEPT = {
  Cardiology: ["Dr. Asha Mehta"],
  Orthopedics: ["Dr. Rohan Kulkarni"],
  Pediatrics: ["Dr. Sana Khan"],
  ENT: ["Dr. Vivek Sharma"],
};

export default function BookAppointment() {
  const [dept, setDept] = useState(DEPTS[0]);
  const [doctor, setDoctor] = useState(DOCTORS_BY_DEPT[DEPTS[0]][0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const doctors = useMemo(() => DOCTORS_BY_DEPT[dept] || [], [dept]);

  function onDeptChange(v) {
    setDept(v);
    const next = (DOCTORS_BY_DEPT[v] || [])[0] || "";
    setDoctor(next);
  }

  function onSubmit(e) {
    e.preventDefault();
    setStatus(`Booked: ${dept} with ${doctor} on ${date} at ${time} for ${name} (${phone})`);
  }

  return (
    <div className="max-w-6xl">
      <div className="rounded border bg-white p-4">
        <h2 className="text-lg font-semibold">Book Appointment</h2>
        <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="grid gap-1 text-sm">
              Department
              <select className="rounded border px-3 py-2" value={dept} onChange={(e) => onDeptChange(e.target.value)}>
                {DEPTS.map(d => <option key={d}>{d}</option>)}
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              Doctor
              <select className="rounded border px-3 py-2" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
                {doctors.map(d => <option key={d}>{d}</option>)}
              </select>
            </label>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <label className="grid gap-1 text-sm">
              Date
              <input className="rounded border px-3 py-2" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <label className="grid gap-1 text-sm">
              Time
              <input className="rounded border px-3 py-2" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </label>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <label className="grid gap-1 text-sm">
              Patient name
              <input className="rounded border px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label className="grid gap-1 text-sm">
              Phone
              <input className="rounded border px-3 py-2" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
          </div>

          <button className="mt-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Confirm booking
          </button>

          {status ? (
            <div className="rounded border border-green-200 bg-green-50 p-3 text-sm text-green-900">
              {status}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
