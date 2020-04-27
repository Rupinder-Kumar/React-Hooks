import React from "react";
import ImageToggleOnMouseOver from "../src/ImgToggleOnMouseOver";
const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="./speakers/bw/male.jpg"
        secondaryImg="./speakers/male.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="./speakers/bw/female.jpg"
        secondaryImg="./speakers/female.jpeg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
