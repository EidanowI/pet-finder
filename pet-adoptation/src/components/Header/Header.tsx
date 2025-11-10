import styles from "./Header.module.css"
import SignInButton from "../SignInButton"

export default function Header(){
  return (
  <header className={styles.header_conteiner}>
      <div className={styles.logo_conteiner}><img src="././public/petfinder-logo.png"></img></div>
      <div className={styles.middle_conteiner}>
         <img src="././public/img/favorites_icon.png" className={styles.favorites_img}></img>
        <div className={styles.vertical_line}>
         
        </div>
      </div>
      <div className={styles.button_conteiner}><SignInButton>SIGN IN</SignInButton></div>
  </header>);
}