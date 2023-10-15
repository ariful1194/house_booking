import React from "react";
import Heading from "./shared/Heading";
import Info from "./shared/Info";
interface Item {
  labelTtext: String;
  value: String;
}
export const PropertyRent = () => {
  const items: Item[] = [
    { labelTtext: "Monthly Rent", value: "£3211" },
    { labelTtext: "Weekly Rent", value: "£32" },
    { labelTtext: "Deposit Amount", value: "£321" },
  ];
  return (
    <div className="my-8 flex gap-6">
      {/* left */}
      <div className="w-[25%] bg-red">
        <Heading title="Key Features" />
      </div>
      {/* right */}
      <div className="w-[50%] ">
        <div className="flex flex-wrap ">
          {items.map((item, indx) => (
            <div key={indx} className="w-1/2 p-4 pt-0">
              <Info labelText={item.labelTtext} value={item.value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
