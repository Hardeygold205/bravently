"use client";

import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function LetWork() {
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="relative mx-auto my-10">
      <div>
        <h1 className="text-5xl text-center font-bold">Let’s Work Together</h1>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form Section */}
        <form className="bg-base-200 shadow-lg rounded-xl p-6 space-y-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Full Name*"
            className="input w-full input-xl "
          />
          <input
            type="email"
            placeholder="Email*"
            className="input w-full input-xl"
          />

          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputStyle={{ width: "100%", paddingTop: 5, paddingBottom: 5 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select className="input-field">
              <option>How did you hear about us?</option>
              <option value="1">fajklfa</option>
              <option value="2">djknfa</option>
            </select>
            <select className="input-field">
              <option>What is your budget?</option>
            </select>
          </div>

          <select className="input-field">
            <option>Fixed Price Model</option>
          </select>

          <textarea placeholder="Message" className="input-field h-28" />

          <div className="text-sm text-gray-500">
            📎 Attach files (10MB, max 3 files)
          </div>

          <input type="file" multiple className="block text-sm" />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-md w-full font-semibold">
            Submit
          </button>
        </form>

        {/* Info Section */}
        <div className="space-y-6">
          <Image
            src="/8CB7C81C-74C9-4B7F-B380-DB75AFA37C90.jpg"
            alt="Office Room"
            className="rounded-lg shadow-md"
            width={1000}
            height={1000}
          />

          <div>
            <h3 className="text-xl font-bold">What next?</h3>
            <ul className="list-decimal pl-5 mt-2 space-y-2 text-gray-700 text-sm">
              <li>
                We will reach out to you within one business day to discuss the
                next steps.
              </li>
              <li>Please review our portfolio and blog in the meantime.</li>
              <li>
                If necessary, we will sign the NDA and begin the project
                discussion.
              </li>
              <li>
                Our software development experts will analyze your requirements
                and offer solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
