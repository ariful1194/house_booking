import React from "react";
import Heading from "./shared/Heading";
import Info from "./shared/Info";

export const PropertyDesc = () => {
  return (
    <div className="my-8 flex gap-6">
      {/* left */}
      <div className="w-[25%] bg-red">
        <Heading title="Key Features" />
      </div>
      {/* right */}
      <div className="w-[50%] ">
        <p>
          We are proud to offer this delightful 2 bedroom, 3 bathroom flat in a
          great location. Photos to follow shortly. Available to move in from 22
          June 2022. Property is offered furnished. Viewing highly recommended.
          Contact nextmoov today for more details or to arrange a viewing!
        </p>
      </div>
    </div>
  );
};
