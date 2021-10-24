//function ko name Dashboard hunu parcha
import React from "react";
import HomeScreenDashboard from "../components/homeScreenDashboard/homeScreenDashboard.js";
import StickySide from "../components/stickySide/stickySide.js";
import Topbar from "../components/topbar/Topbar.js";
import style from "./dashboard.module.scss";
import StickyBox from "react-sticky-box";
import Footer from "../components/footer/footer.js";
import { useState } from "react";
import MedicalReportTabel from "./../components/medicalReport/medicalReportTabel";
import { connect } from "react-redux";
import ReminderCard from "./../components/ReminderCard/reminderCard";
import MedicalReport from "../pages/MedicalReport/index.jsx";

function Dashboard(props) {
  return (
    <div className={style.App}>
      <Topbar />
      <div className={style.container}>
        <div>
          <StickySide />
        </div>
        <div className={style.rightPart}>
          {props.active === "home" ? <HomeScreenDashboard /> : ""}
          {props.active === "medical" ? <MedicalReport /> : ""}
          {props.active === "remainder" ? <ReminderCard /> : ""}
          {props.active === "food" ? <Food /> : ""}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    active: state.active,
  };
};

export default connect(mapStateToProps)(Dashboard);
