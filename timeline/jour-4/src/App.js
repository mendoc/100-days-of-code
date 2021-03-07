import React, { Component } from 'react'
import FormTache from './Form'
import Liste from './Liste'

class App extends Component {
    state = {
        taches: []
    }

    ajouterTache = (tache) => {
        this.setState({
            taches: [tache, ...this.state.taches]
        })
    }

    supprimerTache = (index) => {
        const { taches } = this.state

        this.setState({
            taches: taches.filter((tache, ind) => {
                return ind !== index
            })
        })
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="column is-half">
                        <FormTache handleNewTache={this.ajouterTache} />
                    </div>
                    <Liste tacheData={this.state.taches} handleSupprimer={this.supprimerTache} />
                </div>
            </div>

        )
    }
}

export default App;