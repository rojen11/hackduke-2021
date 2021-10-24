import style from './reminderCard.module.scss';

export default function ReminderCard() {
    return (
        <div className={style.reminderCards}>
            <div className={style.card}>
                <span className={style.cardTitle}>
                    <h3>Take Buddy to Vet</h3>
                </span>
 
                <div className={style.cardReminderDate}>
                <span className={style.cardTitle}>
                    <p>on October 28, 2021</p>
                </span>
                </div>

                <div className={style.cardContent}>
                <span className={style.cardTitle}>
                    <p>Annual Check-up</p>
                </span>
                </div>
            </div>

            <div className={style.card}>
                <span className={style.cardTitle}>
                    <h3>Grooming Day</h3>
                </span>
 
                <div className={style.cardReminderDate}>
                <span className={style.cardTitle}>
                    <p>on November 03, 2021</p>
                </span>
                </div>

                <div className={style.cardContent}>
                <span className={style.cardTitle}>
                    <p>Appointment at Pet's Grooming Center at 10AM</p>
                </span>
                </div>
            </div>

            <div className={style.card}>
                <span className={style.cardTitle}>
                    <h3>Playdate with Tucker</h3>
                </span>
 
                <div className={style.cardReminderDate}>
                <span className={style.cardTitle}>
                    <p>on November 28, 2021</p>
                </span>
                </div>

                <div className={style.cardContent}>
                <span className={style.cardTitle}>
                    <p>Time to meet my best friend Tucker :D </p>
                </span>
                </div>
            </div>
            
        </div>
    )
}
