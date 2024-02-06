import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home";
import { useState } from "react";
import FurnitureCard from "./components/Furniture/FurnitureCard";
import NavBarFurniture from "./components/Furniture/NavBarFurniture";
import "./components/Furniture/FurnitureCard"
import ContactForm from "./components/Formulaire/ContactForm";

const furnitureList = [
  {
      name:"Comode",
      imgSrc:"src/assets/chestOfDrawers.png",
      description:"La conception de meubles en bois est un processus méticuleux qui marie la créativité artistique à l'expertise technique. Chez [Nom de votre entreprise], chaque pièce est façonnée avec soin, depuis la sélection des matériaux jusqu'aux détails finaux, pour assurer une qualité exceptionnelle et une esthétique raffinée.",
      
      "Sélection des Bois de Qualité : Le processus commence par la sélection méticuleuse des essences de bois. Nous privilégions des bois de qualité supérieure, choisis pour leur beauté naturelle, leur durabilité et leurs caractéristiques uniques. Que ce soit le chêne robuste, le noyer chaleureux, ou le merisier élégant, chaque type de bois est choisi avec soin pour correspondre au design spécifique du meuble.":
      
      "Artisanat Traditionnel : Nos artisans expérimentés mettent en œuvre des techniques artisanales traditionnelles pour façonner le bois. Des méthodes de travail manuelles, telles que le façonnage, le sculptage et le polissage, sont utilisées avec précision pour créer des détails subtils et des finitions impeccables, conférant à chaque pièce son caractère unique.",
      
      "Assemblage Expert : L'assemblage des pièces est réalisé avec une précision chirurgicale. Que ce soit par des joints tenons-mortaises, des chevilles en bois ou des techniques d'assemblage modernes, chaque meuble est conçu pour garantir une stabilité structurelle exceptionnelle et une durabilité à long terme.":
      
      "Finition Artisanale : La finition est une étape cruciale qui ajoute la touche finale à chaque meuble. Nos artisans appliquent des finitions minutieuses, telles que des vernis naturels, des huiles ou des laques, mettant en valeur la beauté naturelle du bois tout en le protégeant des éléments.",
      
      "Contrôle Qualité Rigoureux : Chaque meuble subit un contrôle qualité rigoureux pour s'assurer qu'il répond aux normes élevées de [Nom de votre entreprise]. Des inspections détaillées sont effectuées pour garantir que chaque pièce est exempte de défauts, assurant ainsi une satisfaction totale du client.":
      
      "Chez [Nom de votre entreprise], la conception de meubles en bois est un mariage entre l'art intemporel de l'ébénisterie et les technologies modernes, garantissant que chaque pièce est une œuvre d'art fonctionnelle qui résiste à l'épreuve du temps.",
  },
  {
      name:"Table de jeu",
      imgSrc:"src/assets/gameTable.png",
  },
  {
      name:"Confiturier",
      imgSrc:"src/assets/jamMaker.png",
  },
  {
      name:"Boîte a clef",
      imgSrc:"src/assets/keyBox.png",
  },
  {
      name:"Boîte de rangement",
      imgSrc:"src/assets/storageBox.png",
  },
];

function App() {
  const [furnitureIndex, setFurnitureIndex] = useState(0)
  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts);

  return (
    <>
    <NavBar />
    <Home/>
    <NavBarFurniture 
    furnitureIndex={furnitureIndex} 
    setFurnitureIndex={setFurnitureIndex} 
    furnitureList={furnitureList}
    />
    <FurnitureCard furniture={furnitureList[furnitureIndex]}/>
    <ContactForm addContact={addContact}/>
    </>
  );
}

export default App;
