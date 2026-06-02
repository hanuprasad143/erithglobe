"use client";
import { useState, useRef, useEffect } from "react";

const options = [
  "<2 (NPS) | <50 (DN)",
  "2 to 12 (NPS) | 50 to 300 (DN)",
  "14 to 24 (NPS) | 350 to 600 (DN)",
  "24+ (NPS) | 600+ (DN)",
];

type Props = {
  onChange: (sizes: string[]) => void;
};

export default function AgeDropdown({ onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleOption = (value: string) => {
    setSelected((prev) => {
      const updated = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      onChange(updated); // 🔥 send selected sizes to AllProducts
      return updated;
    });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const titleText =
    selected.length === 0
      ? "Select Size"
      : selected.length === 1
        ? selected[0]
        : `${selected.length} Sizes Selected`;

  return (
    <div ref={dropdownRef} className={`age-dropdown ${open ? "active" : ""}`}>
      <div
        className={`age-dropdown-selected ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {titleText}
      </div>

      {open && (
        <div className="age-dropdown-list">
          <ul>
            {options.map((item) => (
              <li key={item}>
                <label>
                  <input
                    type="checkbox"
                    checked={selected.includes(item)}
                    onChange={() => toggleOption(item)}
                  />
                  <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
