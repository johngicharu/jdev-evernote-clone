import React from "react";
import SocialIcon from "../styles/SocialIcon";

const LinkedIn = ({customLink}: {customLink: string}) => (
  <SocialIcon href={customLink}>
    <svg xmlns="http://www.w3.org/2000/svg" width="28.39" height="28.384" viewBox="0 0 28.39 28.384"><path d="M6.355,28.384H.469V9.434H6.355ZM3.409,6.849a3.424,3.424,0,1,1,3.409-3.44A3.437,3.437,0,0,1,3.409,6.849ZM28.384,28.384H22.511V19.159c0-2.2-.044-5.018-3.06-5.018-3.06,0-3.529,2.389-3.529,4.859v9.383H10.042V9.434h5.645v2.585h.082a6.185,6.185,0,0,1,5.569-3.06c5.955,0,7.052,3.922,7.052,9.016V28.384h-.006Z" fill="#dbdbdb"/></svg>
  </SocialIcon>
);

export default LinkedIn;