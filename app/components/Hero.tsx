"use client";

import React, { useState} from "react";

export default function Hero() {
  const [loading, setLoading] = useState(false);

  // Form submission handler
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return; // prevents spam clicking

    const form = e.currentTarget;

    setLoading(true); // start loading

    //Turning the form fields into a simple object and telling TS that all keys and values are strings
    const formData = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Sending data to API route
    try {
      const res = await fetch("/api/formSubmission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Submission Received! 😃");
        form.reset();
      } else {
        alert("Submission Failed! 😭");
      }
    } catch (err) {
      console.error(err);
      alert("Network Error! 😵");
    }
    finally {
      setLoading(false); // always stop loading
    }
  };

  return (
    <section className="w-full bg-gray-100 py-10 rounded-b-xl shadow-lg">

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-360 mx-auto px-4 space-y-8">

        {/* Basic Incident Information */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Basic Incident Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input name="incidentDate"  type="date" required placeholder="Incident Date" className="w-full appearance-none px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="incidentTime" type="time" required placeholder="Incident Time" className="w-full appearance-none px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="incidentNumber" type="text" placeholder="Incident Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input name="incidentStreet"  type="text" placeholder="Street Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="incidentCity" type="text" placeholder="City" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="incidentState" type="text" placeholder="State" maxLength={2} className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="incidentZip" type="text" placeholder="Zip Code" inputMode="numeric" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

        </div>


        {/* Master Contractor */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Master Contractor
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input name="masterCompanyName"  type="text" placeholder="Company Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterCompanyPhone" type="tel" placeholder="Phone Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterCompanyEmail" type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterCompanyWebsite" type="url" placeholder="Website" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input name="masterCompanyStreet"  type="text" placeholder="Street Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterCompanyCity" type="text" placeholder="City" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterCompanyState" type="text" placeholder="State" maxLength={2} className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterCompanyZip" type="text" placeholder="Zip Code" inputMode="numeric" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="masterInsuranceCompany"  type="text" placeholder="Insurance Company" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterInsurancePolicy" type="text" placeholder="Insurance Policy Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <input name="masterClient" type="text" placeholder="Client Company (Google, AT&T, etc.)" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

        </div>


        {/* Master Contractor Point of Contact */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Master Contractor Point of Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="masterContactName"  type="text" placeholder="Full Name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterContactPosition" type="text" placeholder="Position" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterContactPhone" type="tel" placeholder="Phone Number" required className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterContactEmail" type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

        </div>

        
        {/* Master Contractor Supervisor */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Master Contractor Supervisor
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="masterSupervisorName"  type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterSupervisorPosition" type="text" placeholder="Position" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterSupervisorPhone" type="tel" placeholder="Phone Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="masterSupervisorEmail" type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

        </div>


        {/* Sub-Contractor */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Sub-Contractor
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input name="subCompanyName"  type="text" placeholder="Company Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subCompanyPhone" type="tel" placeholder="Phone Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subCompanyEmail" type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subCompanyWebsite" type="url" placeholder="Website" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input name="subCompanyStreet"  type="text" placeholder="Street Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subCompanyCity" type="text" placeholder="City" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subCompanyState" type="text" placeholder="State" maxLength={2} className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subCompanyZip" type="text" placeholder="Zip Code" inputMode="numeric" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="subInsuranceCompany"  type="text" placeholder="Insurance Company" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subInsurancePolicy" type="text" placeholder="Insurance Policy Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="permitNumber" type="text" placeholder="Permit Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="permitIssuingAgency" type="text" placeholder="Permit Issuing Agency" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

        </div>

        {/* Sub-Contractor Point of Contact on Scene*/}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Sub-Contractor Point of Contact on Scene
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="subContactName"  type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subContactPosition" type="text" placeholder="Position" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subContactPhone" type="tel" placeholder="Phone Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subContactEmail" type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

        </div>

        
        {/* Sub-Contractor Supervisor */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Sub-Contractor Supervisor
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="subSupervisorName"  type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subSupervisorPosition" type="text" placeholder="Position" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subSupervisorPhone" type="tel" placeholder="Phone Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="subSupervisorEmail" type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

        </div>

      
      {/* Submitted By*/}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Form Submitted By
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input name="SubmittedByName"  type="text" placeholder="Full Name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="SubmittedByPhone" type="tel" placeholder="Phone Number" required className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="SubmittedByEmail" type="email" placeholder="Email Address" required className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="SubmittedByEID" type="text" placeholder="Employee ID" required className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="SubmittedByDate" type="date" placeholder="Date" required className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            <input name="SubmittedByTime" type="time" placeholder="Time" required className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
          </div>

        </div>


        {/* Submit */}
        <div className="text-center pt-3">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 rounded-xl bg-linear-to-r from-red-600 to-red-700 text-white hover:text-gray-300 active:text-gray-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-110 active:scale-110 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

      </form>
    </section>
  );
}