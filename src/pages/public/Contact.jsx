import React from "react";

export default function Contact() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded border bg-white p-6">
        <h2 className="text-lg font-semibold">Contact & Support</h2>
        <div className="mt-3 text-sm text-gray-700 space-y-2">
          <div><span className="font-medium">Phone:</span> +91-XXXXXXXXXX</div>
          <div><span className="font-medium">Email:</span> support@hmshospital.com</div>
          <div><span className="font-medium">Address:</span> Nagpur, Maharashtra</div>
          <div><span className="font-medium">Emergency:</span> 24x7</div>
        </div>
      </div>

      <div className="rounded border bg-white p-6">
        <h3 className="font-semibold">Send a query</h3>
        <form className="mt-3 grid gap-3">
          <input className="rounded border px-3 py-2 text-sm" placeholder="Your name" />
          <input className="rounded border px-3 py-2 text-sm" placeholder="Email or phone" />
          <textarea className="rounded border px-3 py-2 text-sm" rows="4" placeholder="Message" />
          <button type="button" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Submit
          </button>
          <p className="text-xs text-gray-500"></p>
        </form>
      </div>
    </div>
  );
}
