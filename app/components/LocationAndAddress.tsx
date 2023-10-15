import React from "react";
import Heading from "./shared/Heading";
import Info from "./shared/Info";
import GoogleMapReact from "google-map-react";
import MapContent from "./shared/MapContent";

interface Item {
  labelTtext: String; // You can define other properties as needed
  value: String;
}
const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};
const LocationAndAddress = () => {
  const items: Item[] = [
    { labelTtext: "Address line 1", value: "23" },
    { labelTtext: "Address line 2", value: "23" },
    { labelTtext: "Town", value: "London" },
    { labelTtext: "Flat/House Number (kept private)", value: "23" },
    { labelTtext: "Post Code", value: "23" },
  ];
  return (
    <div className="my-8 flex gap-6">
      {/* left */}
      <div className="w-[25%] bg-red">
        <Heading title="Location & Address" />
      </div>
      {/* right */}
      <div className="flex-1 flex gap-8 ">
        <div className="w-1/3">
          {items.map((item, indx) => (
            <div key={indx} className="w-full p-4 pt-0">
              <Info labelText={item.labelTtext} value={item.value} />
            </div>
          ))}
        </div>
        <div className="flex-1 ">
          <div style={{ height: "100%", width: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.920218366427!2d90.3576884340966!3d23.87667147236524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1697171360077!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ height: "100%", width: "100%" }}
              loading="lazy"
            ></iframe>
            {/* <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <MapContent lat={59.955413} lng={30.337844} title="My Marker" />
            </GoogleMapReact> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndAddress;
