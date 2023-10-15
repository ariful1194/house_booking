import React from "react";
import Heading from "./shared/Heading";
import PackageCard from "./PackageCard";

export const Package = () => {
  return (
    <div className="my-8 flex gap-6 mb-28">
      {/* left */}
      <div className="w-[25%] bg-red">
        <Heading title="Package" />
      </div>
      {/* right */}
      <div className="w-1/3 ">
        <PackageCard />
      </div>
    </div>
  );
};
