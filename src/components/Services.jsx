import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icons = [
    <RiMicroscopeLine size={35} className="text-backgroundColor" />,
    <MdHealthAndSafety size={35} className="text-backgroundColor" />,
    <FaHeartbeat size={35} className="text-backgroundColor" />,
    <FaHeartbeat size={35} className="text-backgroundColor" />,
  ];

  const services = [
    {
      title: "Matsalar Mastibeshin",
      description:
        "Muna da magunguna masu tasiri don magance matsalar mastibeshin. Zai taimaka wajen dawo da kuzari da lafiyar jikinka.",
    },
    {
      title: "HIV/AIDS",
      description:
        "Magungunanmu na gargajiya suna taimakawa wajen rage karfin cutar HIV da kara karfin garkuwar jiki.",
    },
    {
      title: "Ciwon Daji (Cancer)",
      description:
        "Akwai magungunan gargajiya na rage ci gaban cutar daji da kuma taimakawa wajen samun sauki daga matsalolinsa.",
    },
    {
      title: "Matsalar Hawan Jini (High Blood Pressure)",
      description:
        "Magungunanmu na rage hawan jini da kuma dawo da lafiya ta hanya ta gargajiya. Yana taimakawa wajen hana bugun zuciya da sauran matsalolin jini.",
    },
    {
      title: "Olsa (Ulcer)",
      description:
        "Magungunanmu suna magance ciwon olsa tare da rage radadi da gyara tsarin narkar da abinci.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      {/* Header Section */}
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Ayyuka da Magunguna
          </h1>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center lg:justify-arround gap-5 pt-14">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            icon={icons[index % icons.length]} // Dynamically assign the icon
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
