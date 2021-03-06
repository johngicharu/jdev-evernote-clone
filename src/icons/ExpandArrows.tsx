import React from "react";
import Icon from "../styles/Icon";

const ExpandArrows = ({eventHandler}: {eventHandler: (e: React.MouseEvent<HTMLDivElement>) => void;}) => (
  <Icon large onClick={(e) => eventHandler(e)} className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M20,45.929v5A1.069,1.069,0,0,1,18.929,52h-5a1.073,1.073,0,0,1-.759-1.83l1.616-1.616L10,43.768l-4.785,4.79L6.829,50.17A1.073,1.073,0,0,1,6.07,52h-5A1.069,1.069,0,0,1,0,50.929v-5a1.073,1.073,0,0,1,1.83-.759l1.616,1.616L8.235,42,3.446,37.21,1.83,38.83A1.073,1.073,0,0,1,0,38.071v-5A1.069,1.069,0,0,1,1.071,32h5a1.073,1.073,0,0,1,.759,1.83L5.213,35.446,10,40.232l4.789-4.79L13.171,33.83A1.073,1.073,0,0,1,13.93,32h5A1.069,1.069,0,0,1,20,33.071v5a1.073,1.073,0,0,1-1.83.759l-1.616-1.616L11.765,42l4.789,4.79,1.616-1.616a1.07,1.07,0,0,1,1.83.754Z" transform="translate(0 -32)" /></svg>
  </Icon>
);

export default ExpandArrows;