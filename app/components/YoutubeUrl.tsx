import React from "react";
import Heading from "./shared/Heading";
import YoutubeInput from "./YoutubeInput";

const YoutubeUrl = () => {
  return (
    <div className="my-8 flex gap-6">
      {/* left */}
      <div className="w-[25%] bg-red">
        <Heading
          title="Add YouTube 
Share URL(Optional)"
        />
      </div>
      {/* right */}
      <div className="w-1/4  ">
        <YoutubeInput labelText="URL" value="www.youtube.com/" />
      </div>
    </div>
  );
};

export default YoutubeUrl;
