import React from 'react'
import style from './goodfood.module.scss'

export default function GoodFood() {
    return (
        <div>
            <h1 className={style.hgood}>Good Food for Dogs</h1>
            <ul className={style.goodUL}>
                <li>
                    <h2 className={style.hgood}>
                        Eggs
                    </h2>
                    <p className={style.details}>
                        Eggs are perfectly safe for dogs, Eggs are a great source of nutrition for your canine companion. They are high in protein, fatty acids, vitamins, and fatty acids that help support your dog inside and out. Remember that eggs are only as good as the chicken they come from.
                    </p>
                </li>

                <li>
                    <h2 className={style.hgood}>
                        Bananas
                    </h2>
                    <p className={style.details}>
                    Bananas are a great low-calorie treat for dogs. They're high in potassium, vitamins, biotin, fiber, and copper. They are low in cholesterol and sodium, but because of their high sugar content, bananas should be given as a treat, not part of your dog's main diet.                    </p>
                </li>

                <li>
                    <h2 className={style.hgood}>
                        Blueberries
                    </h2>
                    <p className={style.details}>
                    Blueberries are a superfood rich in antioxidants, which prevent cell damage in humans and canines alike. They're packed with fiber and phytochemicals as well.
                    </p>
                </li>

                <li>
                    <h2 className={style.hgood}>
                        Peanut Butter
                    </h2>
                    <p className={style.details}>
                    dogs can eat peanut butter as long as it is fed in moderation and does not contain xylitol, so get out that peanut butter jar and share the good news.
                    </p>
                </li>
            </ul>
        </div>


    )
}
