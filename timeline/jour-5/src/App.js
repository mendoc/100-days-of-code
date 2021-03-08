import React, { Component } from 'react'

class App extends Component {

    state = {
        jour: 1,
        mois: 1,
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlesubmit = (e) => {
        e.preventDefault()
        const { jour, mois } = this.state
        let message = '';

        const ajourdhui = new Date()
        const ajourdhuiJour = ajourdhui.getDate()
        const ajourdhuiMois = ajourdhui.getMonth() + 1

        if (ajourdhuiMois > mois) {
            message = 'Votre annivesaire est déjà passé'
        } else if (ajourdhuiMois < mois) {
            message = 'Votre annivesaire est encore loin'
        } else {
            if (ajourdhuiJour < jour) {
                message = 'Votre annivesaire est déjà passé'
            } else if (ajourdhuiJour > jour) {
                message = 'Votre annivesaire c\'est bientôt'
            } else {
                message = 'Joyeux anniversaire !!!'
            }
        }

        this.setState({
            message: message
        })
        console.log(this.state, ajourdhuiJour, ajourdhuiMois)
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mx-auto px-4">
                    <div className="mt-12">
                        <form onSubmit={this.handlesubmit} className="flex flex-col justify-center">
                            <div className="flex">
                                <div className="">
                                    <input name="jour" onChange={this.handleChange} className="px-3 py-2 border w-24" min="1" max="31" type="number" placeholder="Jour de naissance" />
                                </div>
                                <div className="select ml-3 px-3 py-2">
                                    <select name="mois" onChange={this.handleChange}>
                                        <optgroup label="Mois" unselectable="true">
                                            <option value="1">Janvier</option>
                                            <option value="2">Février</option>
                                            <option value="3">Mars</option>
                                            <option value="4">Avril</option>
                                            <option value="5">Mai</option>
                                            <option value="6">Juin</option>
                                            <option value="7">Juillet</option>
                                            <option value="8">Août</option>
                                            <option value="9">Septembre</option>
                                            <option value="10">Octobre</option>
                                            <option value="11">Novembre</option>
                                            <option value="12">Décembre</option>
                                        </optgroup>

                                    </select>
                                </div>
                            </div>
                            <input type="submit" value="Analyser" />
                        </form>
                        <p>{this.state.message}</p>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default App;