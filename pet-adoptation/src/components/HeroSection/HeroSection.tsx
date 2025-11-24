import styles from "./HeroSection.module.css"
import QuizzleCard from "../QuizzleCard/QuizzleCard";

export default function HeroSection(){
  return (
    <>
      <div className={styles.hero_conteiner}>
        <img className={styles.hero_img} src="../../public/img/background-main.png"></img>
        <h1 className={styles.text_overlay}>Find your New Best Friend and Adopt a Pet with Petfinder</h1>
        <p className={styles.paragraph_overlay}>Browse pets from our network of over 14,500 shelters and rescues.</p>
      </div>
      <div className={styles.filtered_redirect_conteiner}>
        <div className={styles.cards_conteiner}>
            <QuizzleCard label="Dogs" iconPath="../../public/img/quizzle/dog.png"></QuizzleCard>
            <QuizzleCard label="Cats" iconPath="../../public/img/quizzle/cat.png"></QuizzleCard>
            <QuizzleCard label="Other Animals" iconPath="../../public/img/quizzle/other.png"></QuizzleCard>
            <QuizzleCard label="Shelters & Rescues" iconPath="../../public/img/quizzle/shelters.png"></QuizzleCard>
        </div>
      </div>
    </>
  );
}