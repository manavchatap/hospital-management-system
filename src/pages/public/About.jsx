import React from "react";

export default function About() {
  return (
    <div className="rounded border bg-white p-6 space-y-2">
      <h2 className="text-lg font-semibold">About / Policies</h2>
      <p className="text-sm text-gray-700">
        Add visiting rules, insurance partners, privacy policy, and terms here.
      </p>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        <li>Visiting hours: 11 AM – 1 PM, 5 PM – 7 PM</li>
        <li>Bring valid ID for registration</li>
        <li>Privacy: medical data should be protected</li>
      </ul>
    </div>
  );
}
