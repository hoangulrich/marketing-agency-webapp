import React from "react";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import InfoSection from "../../components/InfoSection";
import Pricing from "../../components/Pricing";

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
