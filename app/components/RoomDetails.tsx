import React from "react";
import Heading from "./shared/Heading";
import Info from "./shared/Info";
interface Item {
  labelTtext: String; // You can define other properties as needed
  value: String;
}
const RoomDetails = () => {
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
        <Heading title="Property /Room Details" />
      </div>
      {/* right */}
      <div className="flex-1 ">
        <div className="flex flex-wrap ">
          {items.map((item, indx) => (
            <div key={indx} className="w-1/3 p-4 pt-0">
              <Info labelText={item.labelTtext} value={item.value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
