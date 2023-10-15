"use client";
import React, { useState } from "react";
import Info from "./shared/Info";
import ToggleInput from "./ToggleInput";

function PreferenceDetails() {
  const [activeTenant, setActiveTenats] = useState(1);
  return (
    <div>
      <div className="w-1/3">
        <Info labelText="Minimum Tenancy Length" value="4 Months" />
      </div>
      <label className="font-bold text-sm my-4 block" htmlFor="">
        Maximum Number of Tenants
      </label>
      <ul className="flex gap-4">
        {Array.from(Array(6), (e, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => setActiveTenats(i + 1)}
                className={`tenantButton px-8 py-4 ${
                  i + 1 == activeTenant ? "active" : ""
                }`}
              >
                {i + 1}
                {i + 1 > 5 && "+"}
              </button>
            </li>
          );
        })}
      </ul>
      {/* date */}
      <div className="w-1/3 mt-4">
        <Info labelText="Earliest Move In Date" value="25/07/2023" />
      </div>

      <div className="flex gap-8 flex-wrap">
        <ToggleInput name="Bills Included" title="Bills Included" />
        <ToggleInput name="Pets" title="Pets" />
        <ToggleInput name="Rent Included" title="Rent Included" />
        <ToggleInput name="Smokers" title="Smokers" />
        <ToggleInput name="Family" title="Family" />
        <ToggleInput name="Parking Included" title="Parking Included" />
      </div>
    </div>
  );
}

export default PreferenceDetails;
