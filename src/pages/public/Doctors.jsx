import React, { useMemo, useState } from "react";

const DOCTORS = [
  { id: 1, name: "Dr. Asha Mehta", dept: "Cardiology", exp: 12, slots: ["10:00", "14:00", "17:00"], photo: "🫀" },
  { id: 2, name: "Dr. Rohan Kulkarni", dept: "Orthopedics", exp: 8, slots: ["11:00", "15:30"], photo: "🦴" },
  { id: 3, name: "Dr. Sana Khan", dept: "Pediatrics", exp: 6, slots: ["09:30", "13:00", "16:30"], photo: "👶" },
  { id: 4, name: "Dr. Vivek Sharma", dept: "ENT", exp: 10, slots: ["10:30", "14:30"], photo: "🩺" },
  { id: 5, name: "Dr. Priya Desai", dept: "Cardiology", exp: 9, slots: ["12:00", "16:00"], photo: "🫀" },
];

export default function Doctors() {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");

  const departments = useMemo(() => {
    return ["All", ...Array.from(new Set(DOCTORS.map(d => d.dept)))];
  }, []);

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(search.toLowerCase()) ||
                           doctor.dept.toLowerCase().includes(search.toLowerCase());
      const matchesDept = deptFilter === "All" || doctor.dept === deptFilter;
      return matchesSearch && matchesDept;
    });
  }, [search, deptFilter]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h1>
        <p className="text-xl text-gray-600">Find specialist doctors available near you</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Doctor Directory</h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search by name or department..."
              className="flex-1 min-w-0 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="group bg-white border border-gray-200 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{doctor.photo}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{doctor.name}</h3>
                <div className="bg-blue-50 px-4 py-2 rounded-lg mb-4">
                  <span className="text-sm font-semibold text-blue-800">{doctor.dept}</span>
                </div>
                <div className="text-sm text-gray-600 mb-4 text-center">
                  {doctor.exp}+ years experience
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {doctor.slots.slice(0, 3).map((slot, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {slot}
                    </span>
                  ))}
                </div>
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
