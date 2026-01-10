import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="hospital-badge">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zM12.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
              </svg>
              24/7 Emergency Services
            </div>
            
            <h1 className="text-hero gradient-text-hero">
              Excellence in Healthcare
            </h1>
            
            <p className="text-subtitle max-w-lg">
              Advanced hospital management system with seamless patient portals, 
              doctor scheduling, and comprehensive medical services.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/book" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white btn-primary">
                Book Appointment
              </Link>
              <Link to="/doctors" className="border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 btn-primary">
                View Doctors
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {[
              { num: "250+", label: "Doctors" },
              { num: "50K+", label: "Patients" },
              { num: "10+", label: "Departments" },
              { num: "24/7", label: "Emergency" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="stat-number">{stat.num}</div>
                <div className="text-gray-600 font-medium mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
