import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaucetDrip,
  faSnowflake,
  faFireFlameSimple,
  faToilet,
  faLightbulb,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  { icon: faFaucetDrip, title: "Pronto Intervento Idraulico Milano", color: "bg-orange-300" },
  { icon: faSnowflake, title: "Pronto Intervento Condizionatori Milano", color: "bg-orange-600" },
  { icon: faFireFlameSimple, title: "Pronto Intervento Caldaie Milano", color: "bg-orange-400" },
  { icon: faToilet, title: "Pronto Intervento Spurgo Milano", color: "bg-orange-700" },
  { icon: faLightbulb, title: "Pronto Intervento Elettricista Milano", color: "bg-orange-400" },
  { icon: faLock, title: "Pronto Intervento Fabbro Milano", color: "bg-orange-700" },
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-3 p-3">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center text-white rounded-lg shadow-md p-4 ${service.color} h-48`}
        >
          <FontAwesomeIcon 
            icon={service.icon} 
            size="2x" 
            className="mb-3" // Reduced spacing between icon and text
          />
          <p className="text-center font-bold uppercase text-xs tracking-wide leading-tight">
            {service.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;