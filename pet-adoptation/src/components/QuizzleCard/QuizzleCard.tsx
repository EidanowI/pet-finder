import styles from "./QuizzleCard.module.css"

interface QuizzleCardProps{
  label: string;
  iconPath: string;
}

export default function QuizzleCard({label, iconPath} : QuizzleCardProps){
  return (<>
            <div className={styles.quizzle_img_conteiner}>
              <img src={iconPath} className={styles.quizzle_img}></img>
            </div>
            <p className={styles.quizzle_paragraph}>{label}</p>
        </>);
}