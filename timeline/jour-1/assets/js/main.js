'use strict'

const e = React.createElement;

class BoutonJaime extends React.Component {

    constructor(props) {
        super(props)
        this.state = { aime: false }
    }

    render() {
        if (this.state.aime === true) {
            return e(
                'p', 
                { className: "has-text-success" }, 
                'Vous aimez déjà'
            )
        }

        return e(
            'button',
            { className: 'button', onClick: () => this.setState({ aime: true }) },
            'J\'aime'
        )
    }
}

const bouton = document.querySelector('#bouton-jaime');
ReactDOM.render(e(BoutonJaime), bouton);


