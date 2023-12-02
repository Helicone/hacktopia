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
    <div className="container mx-auto p-4 justify-center flex flex-col min-h-screen">
      <h1 className="text-7xl  my-16 font-mono h-14 mx-auto hidden lg:block">
        Hacktopia
      </h1>
      <h1 className="text-5xl  my-4 font-mono h-14 mx-auto lg:hidden">
        Hacktopia
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
        className="flex flex-col lg:flex-col justify-center rounded-lg shadow-lg p-4 max-w-7xl mx-auto"
        style={{ backgroundColor: "#F2EBDB" }}
      >
        <div className="flex flex-col lg:flex-row justify-center p-4 max-w-5xl mx-auto">
          <div className="p-4 w-full">
            <h2 className="text-3xl font-bold text-center mb-6">
              Event Details
            </h2>
            <div className="flex flex-col lg:flex-row justify-center p-4 w-full mx-auto">
              <div className=" md:pr-4 mb-4 md:mb-0 ">
                <div className="text-left mb-6">
                  <h3 className="text-lg font-bold">Schedule</h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontWeight: "bold" }}>9am-10am:</div>
                    <div>Coffee + Registration</div>

                    <div style={{ fontWeight: "bold" }}>10am-10:30am:</div>
                    <div>Kickoff + Word from our sponsors</div>

                    <div style={{ fontWeight: "bold" }}>10:30am-12:00pm:</div>
                    <div>Hacking session</div>

                    <div style={{ fontWeight: "bold" }}>12:00pm-1:00pm:</div>
                    <div>Lunch break</div>

                    <div style={{ fontWeight: "bold" }}>1:00pm-5:30pm:</div>
                    <div>Hacking</div>

                    <div style={{ fontWeight: "bold" }}>5:30pm-6:00pm:</div>
                    <div>Submissions</div>

                    <div style={{ fontWeight: "bold" }}>6:00pm-7:00pm:</div>
                    <div>Dinner</div>

                    <div style={{ fontWeight: "bold" }}>7:00pm-8:00pm:</div>
                    <div>Presentations</div>

                    <div style={{ fontWeight: "bold" }}>8:00pm-8:30pm:</div>
                    <div>Finale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hacktopia.png"
              alt="Hacktopia"
              className="h-96 w-96 mx-auto"
            />
          </div>
        </div>
        <div className="mt-10"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mx-auto mt-4 lg:gap-6 lg:hidden">
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
    </div>
  );
}
