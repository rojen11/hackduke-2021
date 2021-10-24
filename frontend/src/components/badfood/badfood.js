import React from 'react'
import style from './badfood.module.scss'

export default function BadFood() {
    return (
        <div>
            <h1 className={style.hgood}>Bad Food for Dogs</h1>
            <ul className={style.goodUL}>
                <li>
                    <h2 className={style.hgood}>
                        Grapes
                    </h2>
                    <p className={style.details}>
                    Even one grape can make a dog sick no matter their size, age and overall health. Eating just one grape, however, may produce less severe symptoms of grape toxicity than eating several. The more grapes a dog has eaten relative to their body weight, the more danger they are in.
                    </p>
                </li>
                <li>
                    <h2 className={style.hgood}>
                        Avacados
                    </h2>
                    <p className={style.details}>
                    The leaves, fruit, seeds and bark of avocados contain persin, which can cause vomiting and diarrhea in dogs, and more serious signs in other animals due to a wide range in sensitivity across species. Birds, horses and rodents are especially sensitive to avocado toxicity. </p>
                </li>

                <li>
                    <h2 className={style.hgood}>
                        Chocolates
                    </h2>
                    <p className={style.details}>
                    Chocolate is poisonous to dogs mostly because of its theobromine content, which dogs are unable to metabolize effectively. If your dog eats chocolate, you should monitor them closely and seek veterinary attention if they show any symptoms, or if they are very young, pregnant or have other health concerns.
                    </p>
                </li>

             
            </ul>
        </div>

        
    )
}
