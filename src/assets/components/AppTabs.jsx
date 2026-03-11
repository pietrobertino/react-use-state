import { use, useState } from "react"
import MainCard from "./MainCard"

export default function AppTabs({ languages }) {

    const [show, setShow] = useState(1); // ho dato come valore iniziale l'id di html (primo linguaggio)

    //dichiarando le seguenti variabili registro l'oggetto dell'array corrispondente all'id e accedo al suo valore associato alla chiave description e alla chaive title
    const cardToShow = languages.find(language => { return language.id === show });
    const cardTitle = cardToShow.title;
    const cardDescription = cardToShow.description;

    return (
        <div className="container px-5">
            {/* Creo la lista di bottoni */}

            {languages.map(language => (
                <button key={language.id} className=" btn btn-primary me-3 mb-3" onClick={() => setShow(language.id)}>{language.title}</button>
            ))}
            {/* in questo modo il valore di show è 1 all'inizio e diventa un altro corrispondente all'id di un linguaggio quando il relativo pulsante viene premuto */}

            {/* Inserirsco all'interno della card la descrizione del linguaggio */}
            <div className="card p-3">
                <div className=" card-title fs-3 fw-bolder">
                    {cardTitle}
                </div>
                <div className=" card-text">
                    {cardDescription}
                </div>
            </div>


        </div>
    )
}