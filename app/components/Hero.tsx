"use client";

export default function Hero() {

  // Form submission handler
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Converting all form inputs into a plain object for submission
    const formData: any = Object.fromEntries(
      new FormData(e.currentTarget)
    );

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
  };

  return (
    <section className="w-full bg-gray-100 py-10 rounded-b-xl shadow-lg">

      {/* Form */}
      <form
        name="hazmatUndergroundIncidentForm"
        onSubmit={handleSubmit}
        className="max-w-360 mx-auto px-4 space-y-8"
      >

        {/* Basic Incident Information */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Basic Incident Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input name="incidentDate"  type="date" required placeholder="Incident Date" className="input"/>
            <input name="incidentTime" type="time" required placeholder="Incident Time" className="input"/>
            <input name="incidentNumber" type="text" required placeholder="Incident Number" className="input"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input name="incidentStreet"  type="text" required placeholder="Street Address" className="input"/>
            <input name="incidentCity" type="text" required placeholder="City" className="input"/>
            <input name="incidentState" type="text" required placeholder="State" maxLength={2} className="input"/>
            <input name="incidentZip" type="text" required placeholder="Zip Code" inputMode="numeric" className="input"/>
          </div>

        </div>


        {/* Master Contractor */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Master Contractor
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input name="masterCompanyName"  type="text" required placeholder="Company Name" className="input"/>
            <input name="masterCompanyPhone" type="tel" required placeholder="Phone Number" className="input"/>
            <input name="masterCompanyEmail" type="email" required placeholder="Email Address" className="input"/>
            <input name="masterCompanyWebsite" type="url" placeholder="Website" className="input"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input name="masterCompanyStreet"  type="text" required placeholder="Street Address" className="input"/>
            <input name="masterCompanyCity" type="text" required placeholder="City" className="input"/>
            <input name="masterCompanyState" type="text" required placeholder="State" maxLength={2} className="input"/>
            <input name="masterCompanyZip" type="text" required placeholder="Zip Code" inputMode="numeric" className="input"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="masterInsuranceCompany"  type="text" required placeholder="Insurance Company" className="input"/>
            <input name="masterInsurancePolicy" type="text" required placeholder="Insurance Policy Number" className="input"/>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <input name="masterClient" type="text" required placeholder="Client Company (Google, AT&T, etc.)" className="input"/>
          </div>

        </div>


        {/* Master Contractor Point of Contact */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Master Contractor Point of Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="masterContactName"  type="text" required placeholder="Full Name" className="input"/>
            <input name="masterContactPosition" type="text" required placeholder="Position" className="input"/>
            <input name="masterContactPhone" type="tel" required placeholder="Phone Number" className="input"/>
            <input name="masterContactEmail" type="email" required placeholder="Email Address" className="input"/>
          </div>

        </div>

        
        {/* Master Contractor Supervisor */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Master Contractor Supervisor
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="masterSupervisorName"  type="text" required placeholder="Full Name" className="input"/>
            <input name="masterSupervisorPosition" type="text" required placeholder="Position" className="input"/>
            <input name="masterSupervisorPhone" type="tel" required placeholder="Phone Number" className="input"/>
            <input name="masterSupervisorEmail" type="email" required placeholder="Email Address" className="input"/>
          </div>

        </div>


        {/* Sub-Contractor */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Sub-Contractor
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input name="subCompanyName"  type="text" required placeholder="Company Name" className="input"/>
            <input name="subCompanyPhone" type="tel" required placeholder="Phone Number" className="input"/>
            <input name="subCompanyEmail" type="email" required placeholder="Email Address" className="input"/>
            <input name="subCompanyWebsite" type="url" placeholder="Website" className="input"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input name="subCompanyStreet"  type="text" required placeholder="Street Address" className="input"/>
            <input name="subCompanyCity" type="text" required placeholder="City" className="input"/>
            <input name="subCompanyState" type="text" required placeholder="State" maxLength={2} className="input"/>
            <input name="subCompanyZip" type="text" required placeholder="Zip Code" inputMode="numeric" className="input"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input name="subInsuranceCompany"  type="text" required placeholder="Insurance Company" className="input"/>
            <input name="subInsurancePolicy" type="text" required placeholder="Insurance Policy Number" className="input"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="permitNumber" type="text" required placeholder="Permit Number" className="input"/>
            <input name="permitIssuingAgency" type="text" required placeholder="Permit Issuing Agency" className="input"/>
          </div>

        </div>

        {/* Sub-Contractor Point of Contact on Scene*/}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Sub-Contractor Point of Contact on Scene
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="subContactName"  type="text" required placeholder="Full Name" className="input"/>
            <input name="subContactPosition" type="text" required placeholder="Position" className="input"/>
            <input name="subContactPhone" type="tel" required placeholder="Phone Number" className="input"/>
            <input name="subContactEmail" type="email" required placeholder="Email Address" className="input"/>
          </div>

        </div>

        
        {/* Sub-Contractor Supervisor */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-left text-lg font-semibold text-gray-700 mb-4">
            Sub-Contractor Supervisor
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="subSupervisorName"  type="text" required placeholder="Full Name" className="input"/>
            <input name="subSupervisorPosition" type="text" required placeholder="Position" className="input"/>
            <input name="subSupervisorPhone" type="tel" required placeholder="Phone Number" className="input"/>
            <input name="subSupervisorEmail" type="email" required placeholder="Email Address" className="input"/>
          </div>

        </div>



        {/* Submit */}
        <div className="text-center pt-3">

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-linear-to-r from-red-600 to-red-700 text-white hover:text-gray-300 active:text-gray-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-110 active:scale-110 transition"
          >
            Submit
          </button>

        </div>

      </form>
    </section>
  );
}