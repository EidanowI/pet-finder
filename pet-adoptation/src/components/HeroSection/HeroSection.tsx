import styles from "./HeroSection.module.css"

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
          <div className={styles.quizzle_card}>
            <div className={styles.quizzle_img_conteiner}>
              <img src="../../public/img/quizzle/dog.png" className={styles.quizzle_img}></img>
            </div>
            <p className={styles.quizzle_paragraph}>Dogs</p>
          </div>
          <div className={styles.quizzle_card}>
            <div className={styles.quizzle_img_conteiner}>
              <img src="../../public/img/quizzle/cat.png" className={styles.quizzle_img}></img>
            </div>
            <p className={styles.quizzle_paragraph}>Cats</p>
          </div>
          <div className={styles.quizzle_card}>
            <div className={styles.quizzle_img_conteiner}>
              <img src="../../public/img/quizzle/other.png" className={styles.quizzle_img}></img>
            </div>
            <p className={styles.quizzle_paragraph}>Other Animals</p>
          </div>
          <div className={styles.quizzle_card}>
            <div className={styles.quizzle_img_conteiner}>
              <img src="../../public/img/quizzle/shelters.png" className={styles.quizzle_img}></img>
            </div>
            <p className={styles.quizzle_paragraph}>Shelters & Rescues</p>
          </div>
        </div>
      </div>
      <div className={styles.debug_div}> 
        ff
      </div>
    </>
  );
}