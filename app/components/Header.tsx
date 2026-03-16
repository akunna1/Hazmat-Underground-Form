"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-gray-100">
      
      <div className="flex items-center gap-4">
        <img
          src="/photos/DFD_Logo2.png"
          alt="DFD Logo"
          className="h-24 sm:h-28 md:h-36 w-auto object-contain"
        />

        <div>
          <h1 className="text-2xl font-semibold text-red-700">
            Durham Fire Department
          </h1>
          <p className="text-sm text-gray-600">
            HazMat Underground Boring Incident Form
          </p>
        </div>
      </div>

    </header>
  );
}