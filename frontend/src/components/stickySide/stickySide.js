import React from 'react'
import style from './stickySide.module.scss'
import PetsIcon from '@mui/icons-material/Pets';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ForumIcon from '@mui/icons-material/Forum';

export default function StickySide() {
    return (
        <div className={style.sidePart}>
            <div className={style.sidePartMain}>
                <div className={style.sidePartMenu}>
                    <div>
                        <ul className={style.sidePartList}>
                            <li className={style.sidePartListItem}>
                                <PetsIcon className={style.sidePartIcon} />
                                Home
                            </li>

                            <li className={style.sidePartListItem}>
                                <FoodBankIcon className={style.sidePartIcon} />
                                Foods
                            </li>

                            <li className={style.sidePartListItem}>
                                <ForumIcon className={style.sidePartIcon} />Community
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={style.sidePartMenu}>
                    <div>
                        <ul className={style.sidePartList}>
                            <li className={style.sidePartListItem}>
                                <PetsIcon className={style.sidePartIcon} />
                                Home
                            </li>

                            <li className={style.sidePartListItem}>
                                <FoodBankIcon className={style.sidePartIcon} />
                                Foods
                            </li>

                            <li className={style.sidePartListItem}>
                                <ForumIcon className={style.sidePartIcon} />Community
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={style.sidePartMenu}>
                    <div>
                        <ul className={style.sidePartList}>
                            <li className={style.sidePartListItem}>
                                <PetsIcon className={style.sidePartIcon} />
                                Home
                            </li>

                            <li className={style.sidePartListItem}>
                                <FoodBankIcon className={style.sidePartIcon} />
                                Foods
                            </li>

                            <li className={style.sidePartListItem}>
                                <ForumIcon className={style.sidePartIcon} />Community
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={style.sidePartMenu}>
                    <div>
                        <ul className={style.sidePartList}>
                            <li className={style.sidePartListItem}>
                                <PetsIcon className={style.sidePartIcon} />
                                Home
                            </li>

                            <li className={style.sidePartListItem}>
                                <FoodBankIcon className={style.sidePartIcon} />
                                Foods
                            </li>

                            <li className={style.sidePartListItem}>
                                <ForumIcon className={style.sidePartIcon} />Community
                            </li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
