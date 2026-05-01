"use client";

export default function Header() {
  return (
    <header className="bg-red-700 shadow-lg rounded-xl">

      <div className="max-w-360 mx-auto px-4 py-2 flex items-center gap-2 text-white">

        <img
          src="/photos/DFD_Logo2.png"
          alt="DFD Logo"
          className="h-28 md:h-36 w-auto object-contain drop-shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold uppercase">
            HazMat Underground Incident Form
          </h1>

          <p className="text-red-100 font-semibold">
            Durham Fire Department
          </p>
        </div>

      </div>

    </header>
  );
}