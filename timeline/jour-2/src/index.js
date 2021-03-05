import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function Couleur({ prenom }) {
    if (!prenom) return "";
    let couleur = Array(3).fill(0);
    for (let i = 0; i < prenom.length; i++) {
        couleur[i % 3] = (prenom.charCodeAt(i) % 256);
    }
    return (
        <div className="mt-2" style={{ backgroundColor: `rgb(${couleur[0]}, ${couleur[1]}, ${couleur[2]})` }}>&nbsp;</div>
    );
}

function Champ() {
    const [prenom, setPrenom] = useState("");
    return (
        <div className="field">
            <label className="label is-small">Veuillez saisir votre prénom</label>
            <div className="control">
                <input className="input is-small" onChange={(e) => { setPrenom(e.target.value) }} type="text" placeholder="Votre nom" />
            </div>
            <Couleur prenom={prenom} />
        </div>
    );
}

ReactDOM.render(
    <Champ />,
    document.getElementById('root')
);
