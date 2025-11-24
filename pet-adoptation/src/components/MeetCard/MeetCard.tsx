import styles from "./MeetCard.module.css"

export default function MeetCard(){
   return (<div className={styles.meet_card}>
            <div className={styles.meet_card_content}>
              <img src="././public/img/quizzle/other.png" className={styles.meet_card_img}></img>
              <p className={styles.meet_card_text}>367675 more pets available on Petfinder</p>
            </div>
            <div className={styles.meet_card_footer}>
              <p className={styles.meet_card_message}>MEET THEM</p>
            </div>
    </div>);
}