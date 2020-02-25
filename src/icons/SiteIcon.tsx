import React from "react";
import Icon from "../styles/Icon";
import siteIcon from "./icon.png";

const SiteIcon = ({icon}: {icon?: string}) => (
  <Icon large rounded>
    <img src={icon ? icon : siteIcon} alt="Site Logo" />
  </Icon>
);

export default SiteIcon;