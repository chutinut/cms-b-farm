"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CollapseCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse-card">
      <button onClick={() => setOpen(!open)} className="toggle-button">
        <FaChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <h3 className="text-lg text-green-primary">{title}</h3>
      <div
        className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-4" : "max-h-0"}`}
      >
        <div className="card-content">{children}</div>
      </div>
    </div>
  );
}
