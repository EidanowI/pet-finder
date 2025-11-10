import styles from "./SignInButton.module.css"

interface SignInButtonProps {
  children: React.ReactNode;
}

export default function SignInButton({children} : SignInButtonProps){
  return (
    <button className={styles.signin_button}><img src="../../public/img/login-person.png" className={styles.signin_img}></img>{children}</button>
  );
}