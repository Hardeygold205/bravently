"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
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
import emailjs from "@emailjs/browser";
import { FiLoader, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

// --- Types ---
interface FormData {
  name: string;
  email: string;
  phone: string;
  project_type: string;
  project_timeline: string;
  budget_range: string;
  message: string;
}

export default function LetWork() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    project_timeline: "",
    budget_range: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"success" | "error" | null>(
    null
  );

  // --- Input Handlers ---
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  // --- EmailJS Logic ---
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    setFeedbackType(null);

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !formData.project_type ||
      !formData.budget_range
    ) {
      setFeedback("Please fill out all required fields.");
      setFeedbackType("error");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project_type: formData.project_type,
      project_timeline: formData.project_timeline,
      budget_range: formData.budget_range,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_API_KEY!,
        process.env.NEXT_PUBLIC_TEMPLATE_API_KEY!,
        templateParams,
        process.env.NEXT_PUBLIC_USER_PUBLIC_KEY!
      );

      setFeedback(
        "Success! Your consultation request has been sent. We will contact you shortly."
      );
      setFeedbackType("success");

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        project_type: "",
        project_timeline: "",
        budget_range: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setFeedback(
        "Failed to send the request. Please check your network and try again."
      );
      setFeedbackType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="LetWork" className="relative mx-auto my-10 px-4 md:px-0">
      <div className="py-6">
        <h1 className="text-4xl text-center font-bold uppercase text-slate-900 dark:text-white">
          Start Your Project
        </h1>
        <p className="text-xl text-center text-slate-600 mt-2 dark:text-slate-400">
          Get a free consultation with our development experts
        </p>
      </div>
      <div className="max-w-7xl mx-auto p-6 xl:py-16 bg-white dark:bg-slate-900 grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-2xl rounded-3xl border border-slate-100 dark:border-slate-800">
        {/* --- Form Section --- */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 flex flex-col justify-center">
          <Input
            className="h-12 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleTextChange}
            placeholder="Full Name *"
            required
          />
          <Input
            className="h-12 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleTextChange}
            placeholder="Business Email *"
            required
          />
          <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputStyle={{
              width: "100%",
              height: "50px",
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: "var(--tw-colors-slate-800)", // Tailwinds colors need to be configured for dark mode here
              color: "var(--tw-colors-white)",
              // Fallback for dark mode styles when using external lib
              // You may need to inject custom CSS for full dark mode support on this lib
            }}
            inputProps={{
              name: "phone",
              required: true,
            }}
            placeholder="Phone Number *"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Project Type */}
            <Select
              required
              name="project_type"
              value={formData.project_type}
              onValueChange={(value) =>
                handleSelectChange("project_type", value)
              }>
              <SelectTrigger className="w-full h-12 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                <SelectValue placeholder="Project Type *" />
              </SelectTrigger>
              <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
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

            {/* Project Timeline */}
            <Select
              required
              name="project_timeline"
              value={formData.project_timeline}
              onValueChange={(value) =>
                handleSelectChange("project_timeline", value)
              }>
              <SelectTrigger className="w-full h-12 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                <SelectValue placeholder="Project Timeline *" />
              </SelectTrigger>
              <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
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

          {/* Budget Range */}
          <Select
            required
            name="budget_range"
            value={formData.budget_range}
            onValueChange={(value) =>
              handleSelectChange("budget_range", value)
            }>
            <SelectTrigger className="w-full h-12 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
              <SelectValue placeholder="Estimated Budget Range *" />
            </SelectTrigger>
            <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
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

          {/* Project Details */}
          <Textarea
            placeholder="Tell us about your project (goals, requirements, timeline) *"
            className="h-56 w-full dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            name="message"
            value={formData.message}
            onChange={handleTextChange}
            required
          />

          {/* File Upload (Placeholder for EmailJS limitation) */}
          {/* <div className="text-sm text-slate-500 dark:text-slate-400">
            📎 Attach project documents (PDF, DOC, JPG - *Note: Attachments
            cannot be sent via standard EmailJS API. Please mention in the
            message if you have files.*)
          </div>
          <input
            type="file"
            multiple
            className="block text-sm dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 dark:file:bg-slate-700 dark:file:text-white dark:hover:file:bg-slate-600"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          /> */}

          {/* Submission Feedback */}
          {feedback && (
            <div
              className={`p-3 rounded-lg flex items-center gap-2 ${
                feedbackType === "success"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
              }`}>
              {feedbackType === "success" ? (
                <FiCheckCircle size={20} />
              ) : (
                <FiAlertTriangle size={20} />
              )}
              {feedback}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 transform rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-slate-800 disabled:opacity-70 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200">
            {isSubmitting ? (
              <>
                <FiLoader className="animate-spin" /> Submitting...
              </>
            ) : (
              "Get Free Consultation"
            )}
          </button>
        </form>

        {/* --- Information/Process Section --- */}
        <div className="space-y-6 flex flex-col justify-center">
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
            <Image
              src="/Branovax-Office.jpg"
              alt="Our Development Team at Work"
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>
          <div className="bg-slate-50 p-6 rounded-lg dark:bg-slate-800 shadow-inner">
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
              Our Transparent Process
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Discovery Call & Analysis
                  </h4>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    We initiate a detailed discussion to clarify your vision,
                    requirements, and technical scope.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Proposal, Roadmap & Contract
                  </h4>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    Receive a fixed-scope proposal, detailed roadmap, and
                    transparent contract agreements.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Agile Development & QA
                  </h4>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    Our team executes development in sprints, followed by
                    rigorous quality assurance testing.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 font-bold">
                  4
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Deployment, Launch & Handover
                  </h4>
                  <p className="text-slate-600 text-sm dark:text-slate-400">
                    Final deployment, comprehensive documentation, and a smooth
                    handover to your team.
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
