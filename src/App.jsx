import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import UploadForm from "./components/UploadForm";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>


        <div id="blog">
          <Blogs />
        </div>

        <div id="doctors">
          <Doctors />
        </div>
        <UploadForm />
        <WhatsAppButton />
        
      </main>

      <Footer />
    </div>
  );
};

export default App;
