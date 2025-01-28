import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/hiv.png";
import img2 from "../assets/img/istiminai.jpg";
import img3 from "../assets/img/maza.png";
import img4 from "../assets/img/sanyi.png";
import img5 from "../assets/img/alsa.png";
import img6 from "../assets/img/ciwondaji.png";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Magunguna.
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Ku dawo da lafiya cikin sauƙi da tabbaci tare da magungunanmu
           na gargajiya masu inganci,
          waɗanda aka tsara don dawo da kuzari,
           kwanciyar hankali, da rayuwa mai armashi!

          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="MAGANIN HIV/AIDS" button="Buy now" />
          <BlogCard img={img2} headlines="MAGANIN ISTIMINA'I" button="Buy now" />
          <BlogCard img={img3}
            headlines="MAGANIN GYARAN GIDA" button="Buy now"
          />
          <BlogCard img={img4} headlines="" button="Buy now" />
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" button="Buy now" />
          <BlogCard img={img6} headlines="Skin Health 101" button="Buy now" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
