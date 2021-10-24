import style from "./foodheader.module.scss";

export default function FoodHeader() {
    return (
        <div className={style.header}>
            <div className={style.headerTitles}>
                <span className={style.headerTitle}>DELICIOUS DISH FOR YOUR FURRY FRIEND</span>
                <span className={style.headerTitleRight}>UPLOAD YOUR RECIPE</span>
            </div>
            <img
                className={style.headerImg}
                src="https://st2.depositphotos.com/1177973/12257/i/950/depositphotos_122578364-stock-photo-healthy-dog-food.jpg"
                alt=""
            />
        </div>
    );
}