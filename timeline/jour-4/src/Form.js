import React, { Component } from 'react'

class FormTache extends Component {
    state = {
        tache: ''
    }

    handleChange = (e) => {
        this.setState({
            tache: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleNewTache(this.state.tache)
        this.setState({
            tache: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" onChange={this.handleChange} type="text" value={this.state.tache} placeholder="Nouvelle tâche" />
                    </div>
                    <div className="control">
                        <input type="submit" className="button is-info" value="Ajouter" />
                    </div>
                </div>
            </form>
        )
    }
}

export default FormTache;