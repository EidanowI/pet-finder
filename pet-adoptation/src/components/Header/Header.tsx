import styles from "./Header.module.css"
import SignInButton from "../SignInButton/SignInButton"

export default function Header(){
  return (
  <header className={styles.header_conteiner}>
      <div className={styles.logo_conteiner}><img src="././public/petfinder-logo.png"></img></div>
      <div className={styles.middle_conteiner}>afa</div>
      <div className={styles.button_conteiner}><SignInButton>SIGN IN</SignInButton></div>
  </header>);
}