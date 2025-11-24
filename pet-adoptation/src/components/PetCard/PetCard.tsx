import styles from "./PetCard.module.css"

interface PetCardProps{
  label: string;
  iconPath: string;
}

export default function PetCard({label, iconPath} : PetCardProps){
  return (<div className={styles.pet_card}>
            <img src={iconPath} className={styles.pet_card_img}></img>
            <div className={styles.pet_card_footer}>
              <p className={styles.pet_card_name}>{label}</p>
            </div>
    </div>);
}