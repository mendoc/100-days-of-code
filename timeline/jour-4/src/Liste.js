import React, { Component } from 'react'

class Liste extends Component {

    render() {
        const taches = this.props.tacheData

        const liste = taches.map((tache, index) => {
            return (
                <div key={index} className="notification mt-3">
                    <button className="delete" onClick={() => {this.props.handleSupprimer(index)}}></button>
                    {tache}
                </div>
            )
        })
        return (
            <div className="column is-half">
                {liste}
            </div>
        )
    }
}
export default Liste;