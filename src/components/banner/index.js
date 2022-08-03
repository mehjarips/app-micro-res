import React from "react";
import bannerImg from "../../assets/banner/banner.png";

const Banner = () => {
  return (
    <div>
      <picture>
        <img src={bannerImg} alt="banner" />
      </picture>
    </div>
  );
};

export default Banner;
