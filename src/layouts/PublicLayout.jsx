import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <Topbar />
      
      {/* Main Content - Grows to fill space */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Outlet />
        </div>
      </main>
      
      {/* Sticky Footer - Always bottom */}
      <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            {/* Hospital Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547z" />
                </svg>
              </div>
              <div className="text-xl font-bold">HMS Hospital</div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="/doctors" className="hover:text-blue-400 transition-colors">Doctors<br/></a>
                <a href="/book" className="hover:text-blue-400 transition-colors">Book Appointment<br/></a>
                <a href="/contact" className="hover:text-blue-400 transition-colors">Contact<br/></a>
                <a href="/login" className="hover:text-blue-400 transition-colors">Patient Portal</a>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div>+91-XXXXXXXXXX</div>
                <div>info@hmshospital.com</div>
                <div>Nagpur, Maharashtra</div>
              </div>
            </div>
            
            {/* Emergency */}
            <div className="text-right md:text-left">
              <h4 className="text-lg font-semibold mb-4">Emergency</h4>
              <div className="bg-red-600/20 border border-red-500/30 rounded-xl p-4">
                <div className="text-2xl font-bold text-red-400 mb-1">24/7</div>
                <div className="text-sm text-slate-300">Emergency Services</div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} HMS Hospital. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
