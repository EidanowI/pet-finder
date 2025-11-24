import styles from "./Suggestions.module.css"
import AvailablePets from "./../AvailablePets"
import PetCard from "./../PetCard"
import MeetCard from "../MeetCard";


export default function Suggestions(){
  return (
    <div className={styles.suggestions_conteiner}>
      <AvailablePets marginTop="150px"></AvailablePets>
      <div className={styles.petsCard_conteiner}>
        <PetCard label="Chaplin" iconPath="././public/img/cartedPets/pet1.jpg"></PetCard>
        <PetCard label="Maca Ronnie" iconPath="././public/img/cartedPets/pet2.jpg"></PetCard>
        <PetCard label="Opalite" iconPath="././public/img/cartedPets/pet3.jpg"></PetCard>
        <PetCard label="Amour" iconPath="././public/img/cartedPets/pet4.jpg"></PetCard>
        <MeetCard/>
      </div>
    </div>
  );
}