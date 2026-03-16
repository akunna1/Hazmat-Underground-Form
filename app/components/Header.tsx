"use client";

export default function Header() {
  return (
    <header className="bg-red-700 shadow-lg rounded-t-xl">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 text-white">

        <img
          src="/photos/DFD_Logo2.png"
          alt="DFD Logo"
          className="h-28 md:h-36 w-auto object-contain drop-shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            Durham Fire Department
          </h1>

          <p className="text-red-100">
            HazMat Underground Incident Form
          </p>
        </div>

      </div>

    </header>
  );
}