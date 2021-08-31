import React from "react";
import { homeObjFour } from "./Data";
import InfoSection from "../../components/InfoSection";
import Pricing from "../../components/Pricing";

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Services;
