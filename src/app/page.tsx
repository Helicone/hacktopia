"use client";
import { useState } from "react";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    company: "",
    title: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.first_name,
          last_name: formData.last_name,
          ...(formData.company && { company: formData.company }),
          ...(formData.title && { title: formData.title }),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMessage(data.message);
      setError(data.error);
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-4 justify-center flex flex-col lg:h-screen">
      <h1 className="text-7xl  mb-4 font-mono h-14 mx-auto hidden lg:block">
        Hacktopia 2023
      </h1>

      <div className="lg:flex flex-col lg:flex-row justify-center mx-auto mb-4 lg:gap-6 hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/posthog-logo-black.svg"
          alt="PostHog Logo"
          className="h-12 "
        />
        <div className="text-3xl font-bold my-4 mx-auto">+</div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/helicone-logo.svg" alt="Helicone Logo" className="h-12 " />
      </div>
      {/* R=242, G=235, B=219*/}
      <div
        className="flex flex-col lg:flex-row justify-center rounded-lg shadow-lg p-4 max-w-5xl mx-auto"
        style={{ backgroundColor: "#F2EBDB" }}
      >
        <div className="flex flex-col align-middle justify-center mx-12 max-w-sm">
          <p className="text-xl mx-auto mb-6 text-center font-light tracking-wide leading-relaxed">
            Get ready for the ultimate coding experience at{" "}
            <span className="font-bold">Hacktopia</span>, the place where
            developers and tech enthusiasts collaborate to transform their big
            ideas into reality!
            <span className="block font-bold mt-2">
              {" "}
              Date: December 2nd, 2023{" "}
            </span>
            <span className="block font-bold">
              {" "}
              Location: The Mission, San Francisco{" "}
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-center w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hacktopia.png"
            alt="Hacktopia"
            className="h-96 w-96 mx-auto"
          />
          <div>
            <form
              className="space-y-4 max-w-lg mx-auto"
              onSubmit={handleSubmit}
            >
              <div
                className="grid grid-cols-2 gap-4"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 dark:border-neutral-700 rounded-lg p-2 dark:text-white dark:bg-gray-800"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 dark:border-neutral-700 rounded-lg p-2 dark:text-white dark:bg-gray-800"
                />
              </div>
              <div
                className="grid grid-cols-2 gap-4"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-neutral-700 rounded-lg p-2 dark:text-white dark:bg-gray-800"
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title (Optional)"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-neutral-700 rounded-lg p-2 dark:text-white dark:bg-gray-800"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 dark:border-neutral-700 rounded-lg p-2 dark:text-white dark:bg-gray-800"
              />

              <button
                type="submit"
                className="w-full bg-gray-900 text-white rounded-lg p-2"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mx-auto mt-4 lg:gap-6 lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://posthog.com/brand/posthog-logo-black.svg"
          alt="PostHog Logo"
          className="h-12 "
        />
        <div className="text-3xl font-bold my-4 mx-auto">+</div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://raw.githubusercontent.com/Helicone/helicone/main/docs/logo/light.svg"
          alt="Helicone Logo"
          className="h-12 "
        />
      </div>
    </div>
  );
}
