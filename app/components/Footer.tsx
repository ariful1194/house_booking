import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className=" bg-white py-3 fixed w-full bottom-0">
      <div className="container">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <button className="border border-black p-4">
              <Image
                src="/images/icons/cross.png"
                height={24}
                width={24}
                alt="icon"
                style={{ objectFit: "contain" }}
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
                  alt="save"
                  width="20"
                  height="20"
                  style={{ objectFit: "contain" }}
                />
              </span>
              <span>Save Draft</span>
            </button>
            <button className="p-4 border mx-8 flex gap-4 items-center">
              <span>
                <Image
                  src="/images/icons/edit.png"
                  alt="edit"
                  width="20"
                  height="20"
                  style={{ objectFit: "contain" }}
                />
              </span>
              <span>Edit</span>
            </button>
            <button className="p-4 border flex gap-4 items-center bg-black text-white">
              <span>Publist</span>
              <span>
                <Image
                  src="/images/icons/right.png"
                  alt="right"
                  width="20"
                  height="20"
                  style={{ objectFit: "contain" }}
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
