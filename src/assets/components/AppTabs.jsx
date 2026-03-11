import { use, useState } from "react"
import MainCard from "./MainCard"

export default function AppTabs({ languages }) {

    const [show, setShow] = useState(1); // ho dato come valore iniziale l'id di html (primo linguaggio)

    //dichiarando le seguenti variabili registro l'oggetto dell'array corrispondente all'id e accedo al suo valore associato alla chiave description
    const cardToShow = languages.find(language => { return language.id === show });
    const cardDescription = cardToShow.description;

    return (
        <div className="container">
            {/* Creo la lista di bottoni */}

            {languages.map(language => (
                <button key={language.id} onClick={() => setShow(language.id)}>{language.title}</button>
            ))}
            {/* in questo modo il valore di show è 1 all'inizio e diventa un altro corrispondente all'id di un linguaggio quando il relativo pulsante viene premuto */}

            {/* Inserirsco all'interno della card la descrizione del linguaggio */}
            <div className="card">
                {cardDescription}
            </div>


        </div>
    )
}