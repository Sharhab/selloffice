import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 pb-7 text-white bg-[url('assets/img/islamic1.png')] bg-no-repeat bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-5 items-center w-full">
        {/* Left Section */}
        <div className="w-full lg:w-4/5 space-y-5 mt-10">
          <h5 className="text-3xl font-bold leading-tight">
            Inganta lafiya domin rayuwa mai cikakken karfi, Amintacciyar cibiyar ku a fanni lafiya..
          </h5>
          <p>
            Ku rungumi damar kula da lafiyarku yau. Muna nan don taimaka muku cimma burinku na lafiya mai dorewa.
          </p>
          <Button title="Ayyukanmu" />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/4">
          {/* Responsive Video Wrapper */}
          <div className="relative w-full pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/241_tXWJzL8?si=tPMxY7e9iPsM2ok9"
              title="YouTube video player"
              style={{
                border: "3px solid green",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
