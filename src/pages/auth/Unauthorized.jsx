import React from "react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="rounded border bg-white p-6 max-w-md w-full">
        <h1 className="text-xl font-semibold">Unauthorized</h1>
        <p className="mt-2 text-sm text-gray-600">
          Your role does not have access to this page.
        </p>
        <div className="mt-4 flex gap-2">
          <Link className="rounded border px-4 py-2 hover:bg-gray-50" to="/login">
            Login
          </Link>
          <Link className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" to="/">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
