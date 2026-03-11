import { use, useState } from "react"
import MainCard from "./MainCard"

export default function AppTabs({ languages }) {

    const [selected, setSelected] = useState(0);

    //dichiarando le seguenti variabili registro l'oggetto dell'array corrispondente all'id e accedo al suo valore associato alla chiave description e alla chaive title
    let cardToShow = languages.find(language => { return language.id === selected });
    let cardTitle = "";
    let cardDescription = "";

    //le variabili assumono un valore solo quando un linguaggio viene selezionato
    if (selected != 0) {
        cardTitle = cardToShow.title;
        cardDescription = cardToShow.description;
    }

    return (
        <div className="container px-5">
            {/* Creo la lista di bottoni */}

            {languages.map(language => (
                <button
                    key={language.id}
                    className={(language.id == selected) ? "btn btn-warning me-3 mb-3" : "btn btn-primary me-3 mb-3"} // in questo modo le classi del bottone dipendono se il bottone di questa iterazione è o non è quello selezionato
                    onClick={() => setSelected(language.id)}> {/*al click di questo bottone vengono aggiornato il valore di selcted*/}
                    {language.title}
                </button>
            ))}
            {/* in questo modo il valore di selected è 0 all'inizio e diventa un altro corrispondente all'id di un linguaggio quando il relativo pulsante viene premuto */}



            <MainCard selected={selected} cardTitle={cardTitle} cardDescription={cardDescription} />


        </div>
    )
}