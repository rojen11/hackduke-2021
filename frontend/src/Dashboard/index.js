//function ko name Dashboard hunu parcha
import React from "react";
import HomeScreenDashboard from "../components/homeScreenDashboard/homeScreenDashboard.js";
import StickySide from "../components/stickySide/stickySide.js";
import Topbar from "../components/topbar/Topbar.js";
import style from "./dashboard.module.scss";
import StickyBox from "react-sticky-box";
import Footer from "../components/footer/footer.js";

function Dashboard() {
  return (
    <div className={style.App}>
      <Topbar />
      <div className={style.container}>
        <div>
          <StickySide />
        </div>
        <div className={style.rightPart}>
          <HomeScreenDashboard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
