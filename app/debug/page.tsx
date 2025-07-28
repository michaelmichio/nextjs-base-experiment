"use client";

import { useTheme } from "@/hooks/useTheme.hook";

export default function DebugPage() {
  const { theme, toggleTheme } = useTheme();

  const btnClass =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";

  return (
    <div className="p-4 space-y-3">
      <h2 className="text-xl font-semibold">Tailwind Heading</h2>

      <p
        className="text-sm fw-800"
        style={{ backgroundColor: "var(--black)", color: "var(--white)" }}
      >
        Tailwind Small Text
      </p>

      <button onClick={toggleTheme} className={btnClass}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"></span>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
          Writes upside-down
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>

      <button className="bg-primary text-gray-50 hover:-brightness-[110%] active:brightness-[80%]">
        Click
      </button>
    </div>
  );
}
