//function ko name Dashboard hunu parcha
import React from "react";
import StickySide from "../components/stickySide/stickySide.js";
import Topbar from "../components/topbar/Topbar.js";
import style from "./dashboard.module.scss";

function Dashboard() {
  return (
    <div className={style.App}>
      <Topbar />
      <div className={style.container}>
        <StickySide />
        <div className={style.otherPart}>right side page</div>
      </div>
    </div>
  );
}

export default Dashboard;
