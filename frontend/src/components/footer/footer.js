import { PetsTwoTone } from "@material-ui/icons";
import React from "react";
import style from "./footer.module.scss";

const Footer = () => (
  <div className={style.footer}>
    <span>&copy; The Furry Buddy, 2021 </span>
    <p>
      <PetsTwoTone />
    </p>
  </div>
);

export default Footer;
