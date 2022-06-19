import React from "react";
import { About } from "./About";
import { FacilityItemList } from "./FacilityItemList";
export const Top = ():JSX.Element => {
  return (
    <div>
      <About/>
      <FacilityItemList/>
    </div>
  );
};
