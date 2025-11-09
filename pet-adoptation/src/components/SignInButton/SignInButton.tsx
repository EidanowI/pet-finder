import styles from "./SignInButton.module.css"

interface SignInButtonProps {
  children: React.ReactNode;
}

export default function SignInButton({children} : SignInButtonProps){
  return (
    <button className={styles.button}><img src="../../public/img/login-person.png"></img>{children}</button>
  );
}