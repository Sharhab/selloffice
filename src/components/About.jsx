import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">Game Da Mu</h1>
        <p className=" text-justify lg:text-start">
        burinmu shi ne karfafa gwiwar mutane su dauki nauyin lafiyarsu da jin dadinsu. 
        Mun dukufa wajen bayar da shawarwari masu aminci, hanyoyin kirkire-kirkire, 

        </p>
        <p className="text-justify lg:text-start">
          
        da kuma goyon bayan tausayi don taimaka muku rayuwa mai kuzari da cikar buri.
       Muna mai da hankali kan lafiyar jiki da tunani baki daya tare da kula ta musamman,
        muna ganin cewa kananan zaɓuɓɓuka masu hikima za su iya haifar da babban sauyi mai ɗorewa.
        </p>
        <p className="text-justify lg:text-start">
         Ƙungiyarmu ta ƙwararru ta ke nan don jagorantar ku a kowane mataki, ta tabbatar da cewa
          kuna da ilimi da kayan aikin da suka dace don cimma burin lafiyarku.
        Tare, za mu iya ƙirƙirar gaba mai lafiya da farin ciki—domin jin dadinku shine fifikonmu.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">

      {/* <iframe 
  width="640" 
  height="360" 
  src="https://www.youtube.com/embed/o09NJjd6qyA?autoplay=1&start=60" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe> */}

 
     <img className=" rounded-lg" src={img} alt="img" /> 
      </div>
    </div>
  );
};

export default About;
