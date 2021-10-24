import React from 'react'
import style from './stickySide.module.scss'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ForumIcon from '@mui/icons-material/Forum';
import { Divider } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import NextPlanIcon from '@mui/icons-material/NextPlan';import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import {Home} from '@material-ui/icons';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function StickySide() {
    return (
        <div className={style.mainSideWrapper}>
        <div className={style.sidePart}>
            <div className={style.sidePartMain}>
                <div className={style.sidePartMenu}>
                    <h3 className={`${style.sidePartMenuTitle} ${style.dashboard}`}>Dashboard</h3>
                    <div>
                        <ul className={style.sidePartList}>
                            <li className={`${style.sidePartListItem} ${style.active}`}>
                                <Home className={style.sidePartIcon} />
                                Home
                            </li>

                            <li className={style.sidePartListItem}>
                                <FoodBankIcon className={style.sidePartIcon} />
                                Foods
                            </li>

                            <li className={style.sidePartListItem}>
                                <ForumIcon className={style.sidePartIcon} />Community
                            </li>

                            <li className={style.sidePartListItem}>
                                <NotificationsActiveIcon className={style.sidePartIcon} />Reminders
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
                            <li className={style.sidePartListItem}>
                                <MedicalServicesIcon className={style.sidePartIcon} />
                                Medical Reports
                            </li>

                            <li className={style.sidePartListItem}>
                                <LocalHospitalIcon className={style.sidePartIcon} />
                                Find a Vet
                            </li>

                            <li className={style.sidePartListItem}>
                                <ImportContactsIcon className={style.sidePartIcon} />Puppy Guide
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
                            <li className={style.sidePartListItem}>
                                <InfoIcon className={style.sidePartIcon} />
                                About
                            </li>

                            <li className={style.sidePartListItem}>
                                <NextPlanIcon className={style.sidePartIcon} />
                                What's Next?
                            </li>

                            <li className={style.sidePartListItem}>
                                <BugReportIcon className={style.sidePartIcon} />Report a Bug
                            </li>

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
                            <li className={style.sidePartListItem}>
                                <LogoutIcon className={style.sidePartIcon} />
                                Log out
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
        </div>
    )
}
