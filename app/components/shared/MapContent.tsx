import React from "react";

interface MyComponentProps {
  title: String;
  lat: any;
  lng: any; // Define the type of the title prop
}

const MapContent: React.FC<MyComponentProps> = ({ title, lat, lng }) => {
  return (
    <>
      <div className="infoValue py-4 px-6 mt-2">{title}</div>
    </>
  );
};

export default MapContent;
