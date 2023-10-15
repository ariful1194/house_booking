import React from "react";

function PackageCard() {
  const facilities = [
    "90 Days Advertising on NextMoov",
    "90 Days Advertising on Rightmove",
    "Landlords dashboard to manage all enquiries and contact via dashboard",
    "Viewing Organiser",
    "Managing Tenancy Offers",
    "Tenant Comparison and Selection",
    "Tenant Referencing Forms",
    "Contract Drafting, Digital Signature & Contract Management with DocuSign",
  ];
  return (
    <div className="packageCard p-6 ">
      <div className="flex justify-between text-2xl font-bold">
        <span>Landlord Pro+</span>
        <span>Most Popular</span>
      </div>
      <div className="my-6 flex">
        <span className="text-5xl"> £69</span>
        <span className="relative mt-1 ml-1">+VAT</span>
      </div>
      <ul className="ml-8 ">
        {facilities.map((facilitie, indx) => (
          <li key={indx} className="list-disc my-3">
            {facilitie}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackageCard;
