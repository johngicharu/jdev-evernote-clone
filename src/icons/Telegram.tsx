import React from "react";
import SocialIcon from "../styles/SocialIcon";

const Telegram = ({customLink}: {customLink: string}) => (
  <SocialIcon href={customLink}>
   <svg xmlns="http://www.w3.org/2000/svg" width="28.39" height="28.39" viewBox="0 0 28.39 28.39"><path d="M14.2,8a14.195,14.195,0,1,0,14.2,14.195A14.193,14.193,0,0,0,14.2,8Zm6.972,9.725L18.837,28.7c-.172.778-.635.967-1.282.6l-3.549-2.616-1.711,1.648a.9.9,0,0,1-.715.349l.252-3.612,6.577-5.941c.286-.252-.063-.395-.441-.143L9.839,24.107l-3.5-1.093c-.761-.24-.778-.761.16-1.128l13.686-5.277C20.817,16.38,21.373,16.763,21.167,17.725Z" transform="translate(0 -8)" fill="#dbdbdb"/></svg>
  </SocialIcon>
);

export default Telegram;