import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Mujahid H</h1>
        <h2 className="text-xl text-gray-600">
          Regional Sales Manager | ERP & SaaS Sales Specialist
        </h2>
        <p className="max-w-2xl mx-auto">
          Helping businesses scale with ERP solutions. Over 7 years of success
          in enterprise sales, solution consulting, and deal closure.
        </p>
      </section>

      {/* About Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">About Me</h3>
        <p>
          I’m an experienced sales professional with a strong background in ERP
          and SaaS solutions. Known for building strong client relationships
          and consistently exceeding sales targets.
        </p>
        <ul className="list-disc list-inside">
          <li>95% deal closure success</li>
          <li>30L quarterly pipeline contribution</li>
          <li>Multilingual communicator: Tamil, English, Hindi, Malayalam</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Experience</h3>

        <div className="border rounded p-4 shadow">
          <h4 className="font-bold">Senior Sales Executive – Zoho</h4>
          <p className="text-sm text-gray-600">2023 – Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Driving product demos and consultative selling for ERP solutions</li>
            <li>Managing inbound lead flow and enterprise sales funnel</li>
          </ul>
        </div>

        <div className="border rounded p-4 shadow">
          <h4 className="font-bold">Business Development – Gofrugal</h4>
          <p className="text-sm text-gray-600">2020 – 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>End-to-end sales handling for ERP software</li>
            <li>Built and managed client relationships across India</li>
          </ul>
        </div>

        <div className="border rounded p-4 shadow">
          <h4 className="font-bold">Product Consultant – SSR Weighing Solutions</h4>
          <p className="text-sm text-gray-600">2017 – 2020</p>
          <ul className="list-disc list-inside mt-2">
            <li>Provided ERP consultation to manufacturing clients</li>
            <li>Trained end-users and deployed software solutions</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <ul className="list-disc list-inside">
          <li><strong>ERP & SaaS Expertise:</strong> ERPNext, Zoho Books, Zakya, Gofrugal</li>
          <li><strong>Sales & Client Handling:</strong> Enterprise sales, inbound/outbound prospecting</li>
          <li><strong>Tech Tools:</strong> Zoho Suite, WordPress, POS systems</li>
        </ul>
      </section>

      {/* Resume Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Resume</h3>
        <a
          href="/Mujahid_H_-_Regional_Sales_Manager%20Blue.pdf"
          download
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Contact</h3>
        <ul className="list-none space-y-1">
          <li>
            Email:{" "}
            <a className="text-blue-600" href="mailto:mujahid@example.com">
              mujahid@example.com
            </a>
          </li>
          <li>Phone: +91-XXXXXXXXXX</li>
          <li>
            LinkedIn:{" "}
            <a
              className="text-blue-600"
              href="https://linkedin.com/in/mujahid-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/mujahid-h
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
