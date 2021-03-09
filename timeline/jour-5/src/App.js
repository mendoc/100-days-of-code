import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Container, Divider, Header, Form, Button, Message } from 'semantic-ui-react'

const options = [
    { key: '1', text: 'Janvier', value: '1' },
    { key: '2', text: 'Février', value: '2' },
    { key: '3', text: 'Mars', value: '3' },
    { key: '4', text: 'Avril', value: '4' },
    { key: '5', text: 'Mai', value: '5' },
    { key: '6', text: 'juin', value: '6' },
    { key: '7', text: 'Juillet', value: '7' },
    { key: '8', text: 'Août', value: '8' },
    { key: '9', text: 'Septembre', value: '9' },
    { key: '10', text: 'Octobre', value: '10' },
    { key: '11', text: 'Novembre', value: '11' },
    { key: '12', text: 'Décembre', value: '12' },
]

class App extends Component {

    state = {
        jour: 1,
        mois: 1,
        message: ''
    }

    handleChange = (e, data) => {
        this.setState({
            [data.name]: parseInt(data.value)
        })
    }

    handlesubmit = (e) => {
        e.preventDefault()
        this.setState({
            message: ''
        })

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
                message = 'Votre annivesaire c\'est bientôt'
            } else if (ajourdhuiJour > jour) {
                message = 'Votre annivesaire est déjà passé'
            } else {
                message = 'Joyeux anniversaire !!!'
            }
        }

        this.setState({
            message: message
        })
    }

    render() {
        return (
            <Container>
                <Header as='h2'>Joyeux anniversaire</Header>
                <p>Renseignez quand est-ce que vous êtes né</p>
                <Divider />
                <Form onSubmit={this.handlesubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input type="number" onChange={this.handleChange} name='jour' min='1' max='31' fluid label='Jour de naissance' placeholder='Jour de naissance' />
                        <Form.Select
                            fluid
                            name='mois'
                            label='Mois de naissance'
                            options={options}
                            placeholder='Mois de naissance'
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Field>
                        <Button type='submit'>Analyser</Button>
                    </Form.Field>
                </Form>
                {this.state.message !== '' &&
                    <Message>
                        <p>{this.state.message}</p>
                    </Message>
                }
            </Container>
        )
    }
}

export default App;