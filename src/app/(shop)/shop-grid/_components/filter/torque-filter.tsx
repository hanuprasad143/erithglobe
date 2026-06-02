"use client";
import { useState } from "react";
const options = [
  "<1600 (In-lbs) | <180.77 (Nm)",
  "1601 ≤ x ≤ 2744 (In-lbs) | 180.88 ≤ x ≤ 310.03 (Nm)",
  "2745 ≤ x ≤ 44200 (In-lbs) | 310.14 ≤ x ≤ 4,993.92 (Nm)",
  ">44200 (In-lbs) | >4,993.92 (Nm)",
];

type Props = {
  onChange: (sizes: string[]) => void;
};
export default function TorqueFilter({ onChange }: Props) {
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
      ? "Select Torque"
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
