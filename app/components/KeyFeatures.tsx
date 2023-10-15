import React from "react";
import Heading from "./shared/Heading";
import Info from "./shared/Info";
interface Item {
  value: String;
}
const KeyFeatures = () => {
  const items: Item[] = [
    { value: "Room Only" },
    { value: "3" },
    { value: "3" },
    { value: "Not Furnished" },
    { value: "1500 sqft" },
    { value: "23" },
  ];
  return (
    <div className="my-8 flex gap-6">
      {/* left */}
      <div className="w-[25%] bg-red">
        <Heading title="Property Rent" />
      </div>
      {/* right */}
      <div className="w-[50%] ">
        <div className="flex flex-wrap ">
          {items.map((item, indx) => (
            <div key={indx} className="w-1/2 p-4 pt-0">
              <Info value={item.value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
