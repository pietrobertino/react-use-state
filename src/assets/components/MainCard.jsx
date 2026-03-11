export default function MainCard(selected, cardTitle, cardDescription) {


    return (

        <div className="card p-3" >
            <div className=" card-title fs-3 fw-bolder">
                {(selected != 0) ? cardTitle : "Nessun linguaggio selezionato"}
                {/* se selected è diverso da zero (un linguaggio è selezionato) mostra il titolo, altrimenti il messaggio di default */}
            </div>
            <div className=" card-text">
                {(selected != 0) && cardDescription}
                {/* se un linguaggio è selezionato mostrane la descrizione */}
            </div>
        </div>
    )
}