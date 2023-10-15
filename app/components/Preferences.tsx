import React from "react";
import Heading from "./shared/Heading";
import Info from "./shared/Info";
import PreferenceDetails from "./PreferenceDetails";
interface Item {
  labelTtext: String; // You can define other properties as needed
  value: String;
}
const Preferences = () => {
  const items: Item[] = [
    { labelTtext: "Property Type", value: "Room Only" },
    { labelTtext: "Number of Bedrooms", value: "3" },
    { labelTtext: "Number of Bathrooms", value: "3" },
    { labelTtext: "Furnishing Options", value: "Not Furnished" },
    { labelTtext: "Area", value: "1500 sqft" },
    { labelTtext: "EPC Rating (Purchase EPC for $69 )", value: "23" },
  ];
  return (
    <div className="my-8 flex gap-6">
      {/* left */}
      <div className="w-[25%] bg-red">
        <Heading title="Preferences" />
        <p className="text-sm mt-4">
          Please tell us about who can apply for your property.{" "}
        </p>
      </div>
      {/* right */}
      <div className="flex-1 ">
        {/* Preference Details */}
        <PreferenceDetails />
      </div>
    </div>
  );
};

export default Preferences;
