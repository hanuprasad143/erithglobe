"use client";
import { useState } from "react";

const options = [
  "≤ 150 (PSI) | ≤ 12 (Bar)",
  "151 ≤ x ≤ 285 (PSI) | 12.1 ≤ x ≤ 20 (Bar)",
  "286 ≤ x ≤ 740 (PSI) | 20.1 ≤ x ≤ 51 (Bar)",
  "741 ≤ x ≤ 1480 (PSI) | 51.1 ≤ x ≤ 102 (Bar)",
  "1481 ≤ x ≤ 2220 (PSI) | 102.1 ≤ x ≤ 153 (Bar)",
  "2221 ≤ x ≤ 3705 (PSI) | 153.1 ≤ x ≤ 255.5 (Bar)",
  "3706 ≤ x ≤ 6170 (PSI) | 255.6 ≤ x ≤ 425.5 (Bar)",
];

type Props = {
  onChange: (sizes: string[]) => void;
};

export default function FilterAuthor({ onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelected((prev) => {
      const updated = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      onChange(updated); // 🔥 send selected sizes to AllProducts
      return updated;
    });
  };

  const titleText =
    selected.length === 0
      ? "Maximum Allowable Pressure Rating"
      : selected.length === 1
        ? selected[0]
        : `${selected.length} Pressure Ratings Selected`;

  return (
    <div className={`age-dropdown ${open ? "active" : ""}`}>
      {/* Selected box */}
      <div
        className={`age-dropdown-selected ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {titleText}
      </div>

      {/* Dropdown */}
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
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
