import React from "react";
import style from "./stickySide.module.scss";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import ForumIcon from "@mui/icons-material/Forum";
import { Divider } from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { Home } from "@material-ui/icons";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { connect } from "react-redux";
import * as ActionType from "../../Store/actionType";
import { useHistory } from 'react-router';

function StickySide(props) {
  function ActiveBar(s) {
    return props.active === s ? style.active : "";
  }

  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push("/login");    
  }

  return (
    <div className={style.mainSideWrapper}>
      <div className={style.sidePart}>
        <div className={style.sidePartMain}>
          <div className={style.sidePartMenu}>
            <h3
              className={`${style.sidePartMenuTitle} ${style.dashboard}`}
              style={{ marginBottom: 25 }}
            >
              Dashboard
            </h3>
            <div>
              <ul className={style.sidePartList}>
                <li
                  onClick={() => props.onChangePage("home")}
                  className={`${style.sidePartListItem} ${ActiveBar("home")}`}
                >
                  <Home className={style.sidePartIcon} />
                  Home
                </li>

                <li
                  onClick={() => props.onChangePage("food")}
                  className={`${style.sidePartListItem} ${ActiveBar("food")}`}
                >
                  <FoodBankIcon className={style.sidePartIcon} />
                  Foods
                </li>

                <li className={style.sidePartListItem}>
                  <ForumIcon className={style.sidePartIcon} />
                  Community
                </li>

                <li
                  onClick={() => props.onChangePage("remainder")}
                  className={`${style.sidePartListItem} ${ActiveBar(
                    "remainder"
                  )}`}
                >
                  <NotificationsActiveIcon className={style.sidePartIcon} />
                  Reminders
                </li>

                <li className={style.sidePartListItem}>
                  <Divider className={style.sidePartIconDivider} />
                </li>
              </ul>
            </div>
          </div>

          <div className={style.sidePartMenu}>
            <h3 className={style.sidePartMenuTitle}>Reports</h3>
            <div>
              <ul className={style.sidePartList}>
                <li
                  onClick={() => props.onChangePage("medical")}
                  className={`${style.sidePartListItem} ${ActiveBar(
                    "medical"
                  )}`}
                >
                  <MedicalServicesIcon className={style.sidePartIcon} />
                  Medical Reports
                </li>

                <li className={style.sidePartListItem}>
                  <LocalHospitalIcon className={style.sidePartIcon} />
                  Find a Vet
                </li>

                <li className={style.sidePartListItem}>
                  <ImportContactsIcon className={style.sidePartIcon} />
                  Puppy Guide
                </li>

                <li className={style.sidePartListItem}>
                  <Divider className={style.sidePartIconDivider} />
                </li>
              </ul>
            </div>
          </div>

          <div className={style.sidePartMenu}>
            <h3 className={style.sidePartMenuTitle}>Info</h3>
            <div>
              <ul className={style.sidePartList}>
                {/* <li className={style.sidePartListItem}>
                  <InfoIcon className={style.sidePartIcon} />
                  About
                </li> */}

                <li className={style.sidePartListItem}>
                  <NextPlanIcon className={style.sidePartIcon} />
                  What's Next?
                </li>

                {/* <li className={style.sidePartListItem}>
                  <BugReportIcon className={style.sidePartIcon} />
                  Report a Bug
                </li> */}

                <li className={style.sidePartListItem}>
                  <Divider className={style.sidePartIconDivider} />
                </li>
              </ul>
            </div>
          </div>

          <div className={style.sidePartMenu}>
            <div className={style.logout}>
              <ul className={style.sidePartList}>
                <li className={style.sidePartListItem}>
                  <Divider className={style.sidePartIconDivider} />
                </li>
                <li className={style.sidePartListItem} onClick={handleLogout}>
                  <LogoutIcon className={style.sidePartIcon} />
                  Log out
                </li>
              </ul>
            </div>
          </div>
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

const mapDisptachToProps = (dispatch) => {
  return {
    onChangePage: (val) =>
      dispatch({ type: ActionType.CHANGE_ACTIVE, page: val }),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(StickySide);
