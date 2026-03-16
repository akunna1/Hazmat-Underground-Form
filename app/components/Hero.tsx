export default function Hero() {
  return (
    <section className="w-full border-b bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Incident Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Incident Date
            </label>
            <input
              type="date"
              className="mt-1 p-2 border rounded-md"
            />
          </div>

          {/* Incident Time */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Incident Time
            </label>
            <input
              type="time"
              className="mt-1 p-2 border rounded-md"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Incident Location
            </label>
            <input
              type="text"
              placeholder="Street address or intersection"
              className="mt-1 p-2 border rounded-md"
            />
          </div>

          {/* Boring Company */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Boring Company
            </label>
            <input
              type="text"
              placeholder="Company name"
              className="mt-1 p-2 border rounded-md"
            />
          </div>

          {/* Fire Unit */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Fire Unit Responding
            </label>
            <input
              type="text"
              placeholder="Engine / Ladder / Battalion"
              className="mt-1 p-2 border rounded-md"
            />
          </div>

          {/* Material Released */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Suspected Material Released
            </label>
            <input
              type="text"
              placeholder="Gas, fuel, chemical, unknown..."
              className="mt-1 p-2 border rounded-md"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Incident Description
            </label>
            <textarea
              rows={4}
              placeholder="Describe what happened..."
              className="mt-1 p-2 border rounded-md"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800"
            >
              Submit Report
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}