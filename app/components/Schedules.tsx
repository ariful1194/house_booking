import React from "react";
import Heading from "./shared/Heading";
import CalenderContent from "./CalenderContent";

const Schedules = () => {
  return (
    <div className="my-8 flex gap-6">
      {/* left */}
      <div className="w-[25%] bg-red">
        <Heading title="Schedules" />
      </div>
      {/* right */}
      <div className="flex-1 ">
        <CalenderContent />
      </div>
    </div>
  );
};

export default Schedules;
