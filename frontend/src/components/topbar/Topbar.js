import React from 'react'
import style from './topbar.module.scss'
import { NotificationsNone, } from '@material-ui/icons';
import { Squash as Hamburger } from 'hamburger-react'

// import { Logout , NotificationsNone } from '@mui/icons-material';


export default function Topbar() {
    return (
        <div className={style.topBar}>
            <div className={style.topBarMain}>
                <div>
                    <Hamburger/>
                </div>
                <div className={style.topTitle}>Dashboard</div>
                <div className={style.topBarRight}>
                    <div className={style.topBarRight}>
                        <NotificationsNone />
                        <span className={style.notificationNumber}>3</span>
                    </div>

                    <div className={style.topBarRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={style.logout} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}


