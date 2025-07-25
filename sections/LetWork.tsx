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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function LetWork() {
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  return (
    <div id="LetWork" className="relative mx-auto my-10 ">
      <div className="py-3">
        <h1 className="text-4xl text-center font-bold uppercase">
          Start Your Project
        </h1>
        <p className="text-xl text-center text-gray-600 mt-2">
          Get a free consultation with our development experts
        </p>
      </div>
      <div className="max-w-7xl mx-auto p-4 items-center xl:py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-xl rounded-3xl bg-white">
        <form className="space-y-4">
          <Input
            className="h-12"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Full Name"
            required
          />
          <Input
            className="h-12"
            type="email"
            placeholder="Business Email"
            required
          />
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputStyle={{
              width: "100%",
              height: "50px",
              paddingTop: 5,
              paddingBottom: 5,
            }}
            placeholder="Phone Number"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue className="h-12" placeholder="Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="mvp">MVP</SelectItem>
                  <SelectItem value="website">Website Development</SelectItem>
                  <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                  <SelectItem value="webapp">Web Application</SelectItem>
                  <SelectItem value="mobile">Mobile App</SelectItem>
                  <SelectItem value="web3">Web3/Blockchain</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Project Timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                  <SelectItem value="fast">Fast (3-4 weeks)</SelectItem>
                  <SelectItem value="standard">
                    Standard (1-2 months)
                  </SelectItem>
                  <SelectItem value="flexible">Flexible (3+ months)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Select required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Estimated Budget Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1k-less">Less than $1,000</SelectItem>
                <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                <SelectItem value="50k+">$50,000+</SelectItem>
                <SelectItem value="undecided">Not sure yet</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Tell us about your project (goals, requirements, timeline)"
            className="h-70 w-full"
            required
          />
          <div className="text-sm text-gray-500">
            📎 Attach project documents (PDF, DOC, JPG - 10MB max)
          </div>
          <input
            type="file"
            multiple
            className="block text-sm"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          <button
            type="submit"
            className="w-full transform rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark">
            Get Free Consultation
          </button>
        </form>
        <div className="space-y-6">
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/Branovax-Office.jpg"
              alt="Our Development Team at Work"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  1
                </span>
                <div>
                  <h4 className="font-semibold">Discovery Call</h4>
                  <p className="text-gray-600 text-sm">
                    We will discuss your project requirements and goals
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  2
                </span>
                <div>
                  <h4 className="font-semibold">Proposal & Planning</h4>
                  <p className="text-gray-600 text-sm">
                    We will prepare a detailed project proposal and roadmap
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  3
                </span>
                <div>
                  <h4 className="font-semibold">Development Kickoff</h4>
                  <p className="text-gray-600 text-sm">
                    Our team will begin building your solution with regular
                    updates
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  4
                </span>
                <div>
                  <h4 className="font-semibold">Launch & Support</h4>
                  <p className="text-gray-600 text-sm">
                    We will deploy your project and provide ongoing support
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
