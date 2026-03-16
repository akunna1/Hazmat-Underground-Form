"use client";

export default function Hero() {

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

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
      alert("Submission Error. 😕");
    }
  };

  return (
    <section className="w-full bg-gray-100 py-10 rounded-b-xl shadow-lg">

      <form
        name="hazmatBoringIncidentForm"
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto px-6 space-y-8"
      >

        {/* MASTER CONTRACTOR */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Master Contractor
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input name="masterCompanyName" placeholder="Company Name"
              className="input"/>

            <input name="masterCompanyAddress" placeholder="Company Address"
              className="input"/>

            <input name="masterCompanyPhone" placeholder="Company Phone"
              className="input"/>

            <input name="masterCompanyEmail" placeholder="Company Email"
              className="input"/>

            <input name="masterCompanyWebsite" placeholder="Company Website"
              className="input"/>

            <input name="masterInsuranceCompany" placeholder="Insurance Company"
              className="input"/>

            <input name="masterInsurancePolicyNumber" placeholder="Insurance Policy Number"
              className="input"/>

            <input name="workBeingPerformedFor" placeholder="Work Being Performed For (Google, AT&T, etc.)"
              className="input"/>
          </div>
        </div>


        {/* MASTER CONTRACTOR POINT OF CONTACT */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Master Contractor Point of Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input name="masterContactName" placeholder="Full Name" className="input"/>

            <input name="masterContactPosition" placeholder="Position" className="input"/>

            <input name="masterContactPhone" placeholder="Phone #" className="input"/>

            <input name="masterContactEmail" placeholder="Email Address" className="input"/>

          </div>
        </div>


        {/* SUB CONTRACTOR */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-200">

          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Sub-Contractor
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input name="subCompanyName" placeholder="Company Name" className="input"/>

            <input name="subCompanyAddress" placeholder="Company Address" className="input"/>

            <input name="subCompanyPhone" placeholder="Company Phone" className="input"/>

            <input name="subCompanyEmail" placeholder="Company Email" className="input"/>

            <input name="permitNumber" placeholder="Permit Number" className="input"/>

            <input name="permitAgency" placeholder="Permit Issuing Agency" className="input"/>

          </div>
        </div>


        {/* Submit */}
        <div className="text-center pt-6">

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-linear-to-r from-red-600 to-red-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-110 active:scale-110 transition"
          >
            Submit
          </button>

        </div>

      </form>
    </section>
  );
}