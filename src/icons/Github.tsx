import React from "react";
import SocialIcon from "../styles/SocialIcon";

const Github = ({customLink}: {customLink: string}) => (
  <SocialIcon href={customLink}>
    <svg xmlns="http://www.w3.org/2000/svg" width="28.39" height="27.681" viewBox="0 0 28.39 27.681"><path d="M9.5,30.288c0,.114-.132.206-.3.206-.189.017-.321-.074-.321-.206,0-.114.132-.206.3-.206C9.347,30.065,9.5,30.157,9.5,30.288Zm-1.78-.258c-.04.114.074.246.246.28a.268.268,0,0,0,.355-.114c.034-.114-.074-.246-.246-.3A.294.294,0,0,0,7.716,30.031Zm2.53-.1c-.166.04-.28.149-.263.28.017.114.166.189.338.149s.28-.149.263-.263S10.412,29.916,10.246,29.934ZM14.012,8A13.725,13.725,0,0,0,0,21.966,14.35,14.35,0,0,0,9.7,35.657c.733.132.99-.321.99-.693,0-.355-.017-2.312-.017-3.514,0,0-4.007.859-4.848-1.706,0,0-.653-1.666-1.591-2.095,0,0-1.311-.9.092-.881a3.021,3.021,0,0,1,2.209,1.477,3.026,3.026,0,0,0,4.173,1.2,3.181,3.181,0,0,1,.916-1.929c-3.2-.355-6.428-.819-6.428-6.325a4.338,4.338,0,0,1,1.351-3.371A5.408,5.408,0,0,1,6.7,13.93c1.2-.372,3.949,1.545,3.949,1.545a13.522,13.522,0,0,1,7.189,0s2.753-1.923,3.949-1.545a5.405,5.405,0,0,1,.149,3.886,4.449,4.449,0,0,1,1.477,3.371c0,5.523-3.371,5.964-6.571,6.325a3.385,3.385,0,0,1,.973,2.656c0,1.929-.017,4.316-.017,4.785,0,.372.263.824.99.693a14.218,14.218,0,0,0,9.6-13.68A14.035,14.035,0,0,0,14.012,8ZM5.564,27.741c-.074.057-.057.189.04.3.092.092.223.132.3.057.074-.057.057-.189-.04-.3C5.77,27.707,5.638,27.667,5.564,27.741Zm-.618-.464c-.04.074.017.166.132.223a.17.17,0,0,0,.246-.04c.04-.074-.017-.166-.132-.223C5.077,27.2,4.985,27.22,4.945,27.278ZM6.8,29.315c-.092.074-.057.246.074.355.132.132.3.149.372.057.074-.074.04-.246-.074-.355C7.046,29.241,6.874,29.224,6.8,29.315Zm-.653-.841c-.092.057-.092.206,0,.338s.246.189.321.132a.261.261,0,0,0,0-.355c-.08-.132-.229-.189-.321-.114Z" transform="translate(0 -8)" fill="#dbdbdb"/></svg>
  </SocialIcon>
);

export default Github;