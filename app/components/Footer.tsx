import Image from "next/image";
import React from "react";
// @import '~react-select/dist/react-datetime.css';
// import "react-big-calendar/lib/sass/styles";
function Footer() {
  return (
    <div className=" bg-white py-3 fixed w-full bottom-0">
      <div className="container">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <button className="border border-black p-4">
              <Image
                src="/images/Icons/1.png"
                height={16}
                width={16}
                alt="icon"
              />
            </button>
            <span className="font-bold mx-8">Preview listing</span>
            <span className="font-bold ml-8">
              150/12 Orchard Cottage, London 56273{" "}
            </span>
          </div>
          <div className="flex">
            <button className="p-4 border flex gap-4 items-center">
              <span>
                <Image
                  src="/images/icons/copy.png"
                  alt="Copy"
                  width="20"
                  height="20"
                />
              </span>
              <span>Save Draft</span>
            </button>
            <button className="p-4 border mx-8 flex gap-4 items-center">
              <span>
                <Image
                  src="/images/icons/Edit.png"
                  alt="Copy"
                  width="20"
                  height="20"
                />
              </span>
              <span>Edit</span>
            </button>
            <button className="p-4 border flex gap-4 items-center bg-black text-white">
              <span>Publist</span>
              <span>
                <Image
                  src="/images/icons/right.png"
                  alt="Copy"
                  width="20"
                  height="20"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
