import React from 'react'
import style from './topbar.module.scss'
import { NotificationsNone, PetsRounded, PetsTwoTone, } from '@material-ui/icons';
import { Squash as Hamburger } from 'hamburger-react'

// import { Logout , NotificationsNone } from '@mui/icons-material';


export default function Topbar() {
    return (
        <div className={style.topBar}>
            <div className={style.topBarMain}>
                <div>
                    <PetsTwoTone/>
                </div>
                <div className={style.topTitle}>Dashboard</div>
                <div className={style.topBarRight}>
                    <div className={style.topBarRight}>
                        <NotificationsNone />
                        <span className={style.notificationNumber}>3</span>
                    </div>

                    
                </div>

            </div>
        </div>
    );
}


