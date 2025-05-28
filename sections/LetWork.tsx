"use client";

import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function LetWork() {
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="relative mx-auto my-10 ">
      <div className="py-3">
        <h1 className="text-4xl text-center font-bold uppercase">
          Schedule Your Appointment
        </h1>
        <p className="text-xl text-center text-gray-600 mt-2">
          We here to help you 24/7 with experts
        </p>
      </div>
      <div className="max-w-7xl mx-auto p-4 items-center xl:py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-xl rounded-3xl">
        <form
          className="bg-base-200 shadow-lg rounded-xl p-6 space-y-4">
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Full Name"
          />
          <Input type="email" placeholder="Email" />

          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputStyle={{
              width: "100%",
              height: "40px",
              paddingTop: 5,
              paddingBottom: 5,
            }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="How did you hear about us?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="What is your budget?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Your Payment Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fixed Price Model</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea placeholder="Message" className="h-20 w-full" />

          <div className="text-sm text-gray-500">
            📎 Attach files (10MB, max 3 files)
          </div>

          <input type="file" multiple className="block text-sm" />

          <button
            type="submit"
            className="w-full transform rounded-lg bg-slate-700 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Submit
          </button>
        </form>

        <div className="space-y-6">
          <Image
            src="/Branovax-Office.jpg"
            alt="Office Room"
            className="rounded-lg shadow-md"
            width={1200}
            height={1200}
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
