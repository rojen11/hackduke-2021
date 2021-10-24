import style from "./foodheader.module.scss";

export default function FoodHeader() {
    return (
        <div className={style.header}>
            <div className={style.headerTitles}>
                <span className={style.headerTitle}>GOOD FOODS AND BAD FOODS FOR YOUR FURRY FRIEND</span>
            </div>
            <img
                className={style.headerImg}
                src="https://st2.depositphotos.com/1177973/12257/i/950/depositphotos_122578364-stock-photo-healthy-dog-food.jpg"
                alt=""
            />
        </div>
    );
}