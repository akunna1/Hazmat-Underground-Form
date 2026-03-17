export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 pb-10">

      <div className="max-w-360 mx-auto px-6">

        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row justify-between items-center">

          <div className="text-gray-700 text-sm">
            <p className="font-semibold text-gray-800">
              Durham Fire Department
            </p>

            <p>Hazardous Materials Unit</p>
          </div>

          <div className="text-gray-500 text-sm mt-4 md:mt-0 text-right">
            <p>Internal Use Only</p>
            <p>© {year} City of Durham</p>
          </div>

        </div>

      </div>

    </footer>
  );
}