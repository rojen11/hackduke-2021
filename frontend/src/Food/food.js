import style from './food.module.scss'
import React from 'react'
import BadFood from '../components/badfood/badfood.js'
import FoodHeader from '../components/foodheader/foodheader.js'
import GoodFood from '../components/goodgood/goodfood.js'

export default function Food() {
    return (
        <div>
            <FoodHeader />
            <GoodFood/>
            <div className={style.someMargin}>
            <BadFood/>
            </div>
        </div>
    )
}
