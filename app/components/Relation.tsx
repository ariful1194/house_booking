import React from "react";
import Heading from "./shared/Heading";
import Info from "./shared/Info";
import PreferenceDetails from "./PreferenceDetails";

const Relation = () => {
  return (
    <div className="my-8 flex gap-6">
      {/* left */}
      <div className="w-[25%] bg-red">
        <Heading title="Relationship to the property " />
      </div>
      {/* right */}
      <div className="w-1/3 ">
        <Info
          labelText="Your relationship to the property"
          value="Property Owner"
        />
      </div>
    </div>
  );
};

export default Relation;
