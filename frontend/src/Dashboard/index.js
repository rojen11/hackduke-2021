//function ko name Dashboard hunu parcha
import React from 'react';
import StickySide from '../components/stickySide/stickySide.js';
import Topbar from '../components/topbar/Topbar.js';
import style from './dashboard.module.scss';

function Dashboard() {
    return (
        <div>
            <Topbar />
            <div className='container'>
                <StickySide />
                <div className='otherPart'>
                    right side page
                </div>

            </div>
        </div>
    );
}

export default Dashboard;