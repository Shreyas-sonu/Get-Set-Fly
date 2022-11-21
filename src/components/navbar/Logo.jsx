import React from 'react';
import Style from "./_navbar.module.css";
import {SiYourtraveldottv} from "react-icons/si"

const Logo = () => {
  return (
    <div className={Style.logoBlock}>
      <a href="#">
        <span className={Style.icon}><SiYourtraveldottv/></span>
        <span>Get Set Fly</span>
      </a>
    </div>
  );
}

export default Logo
