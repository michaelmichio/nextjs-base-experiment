"use client";

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function DebugPage() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "theme-mode",
      `${toggleTheme ? "dark" : "light"}`
    );
  }, [toggleTheme]);

  return (
    <div className="tw:p-4 tw:space-y-3">
      <h2 className="tw:text-xl tw:font-semibold">Tailwind Heading</h2>
      <p className="lead">Bootstrap Lead</p>
      <p
        className="tw:text-sm fw-800"
        style={{ backgroundColor: "var(--black)", color: "var(--white)" }}
      >
        Tailwind Small Text
      </p>
      <Button
        onClick={() => setToggleTheme((prev: boolean) => !prev)}
        className="border-0"
        variant="primary"
        style={{ backgroundColor: "var(--primary-400)" }}
      >
        Bootstrap Button
      </Button>
    </div>
  );
}
