import styles from "./AvailablePets.module.css"

interface AvailablePetsProps {
  marginTop: string;
}

export default function AvailablePets({marginTop} : AvailablePetsProps){
  const cssVariables = {
    '--topMargin': marginTop,
  } as React.CSSProperties;

  return (<>
    <div className={styles.available_pets_conteiner}>
      <div className={styles.available_pets_link} style={cssVariables}>
        <a href="https://example.com"><p>Pets Available for Adoption<span><img src="../../public/img/arrow-icon.png"></img></span></p></a>
        </div>
    </div>
    </>
  );
}