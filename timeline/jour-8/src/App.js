import React, { Component } from 'react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Container, Divider, Header, Form, Button, Message, Icon } from 'semantic-ui-react'

class App extends Component {

    state = {
        progress: false,
        adresse: '',
        sent: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            progress: true,
            sent: false
        })

        const URL = 'https://sheet.best/api/sheets/e1290331-9be9-48a5-88a2-3e7e79685985'

        const data = {
            time: new Date().toUTCString(),
            adresse: this.state.adresse
        }

        axios.post(URL, data)
            .then(res => {
                console.log(res)
                this.setState({
                    sent: true,
                    progress: false,
                    adresse: ''
                })
            }).catch(err => {
                this.setState({
                    progress: false
                })
                console.log(err)
            })

        console.log(this.state)
    }

    render() {
        return (
            <Container>
                <Header as='h2'>Newsletter</Header>
                <p>Pour ne rien rater de mon aventure <strong>100DaysOfCode</strong>, abonnez-vous pour être souvent notifié quand je publie un projet.</p>
                <Divider />
                {!this.state.sent &&
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Votre adresse e-mail</label>
                            <input value={this.state.adresse} onChange={this.handleChange} name="adresse" type="email" placeholder="Renseigner votre adresse e-mail" required />
                        </Form.Field>
                        <Button loading={this.state.progress} disabled={this.state.progress} primary type="submit">Ok, tiens moi au courant</Button>
                    </Form>
                }
                <Message success className={this.state.sent ? '' : 'hidden'}>
                    <Icon name='check circle' /> Souscription réussie ! <br/> Vous serez notifié en cas de nouveauté. 😉
                </Message>
            </Container>
        )
    }
}

export default App;