export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-gray-50 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
        
        <div>
          <p className="font-semibold">Durham Fire Department</p>
          <p>Hazardous Materials Unit</p>
        </div>

        <div className="mt-4 md:mt-0">
          <p>Internal Use Only</p>
          <p>© {year} City of Durham</p>
        </div>

      </div>
    </footer>
  );
}