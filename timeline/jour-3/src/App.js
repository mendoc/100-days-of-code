import React, { Component } from 'react'
import { Container, Header, Form, TextArea, Button, Message, Icon } from 'semantic-ui-react'
import axios from 'axios'
import './App.css'

class App extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        sent: false,
        progress: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            sent: false
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            progress: true
        })

        const url = 'https://sheet.best/api/sheets/287d1dd0-f413-4290-acc9-8911e52498a8'

        const { name, email, message } = this.state

        axios.post(url, { name, email, message })
            .then(res => {
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    sent: true,
                    progress: false
                })
            }).catch(err => {
                this.setState({
                    progress: false
                })
                console.log(res)
            })
    }

    render() {
        return (
            <Container fluid className="container" >
                <Header as="h2">Formulaire de contact</Header>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Votre nom</label>
                        <input placeholder="Nom complet" name="name" required value={this.state.name} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Votre adresse e-mail</label>
                        <input placeholder="Adresse e-mail" type="email" name="email" required value={this.state.email} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Votre message</label>
                        <TextArea placeholder="Laisser un message" name="message" required value={this.state.message} onChange={this.handleChange} />
                    </Form.Field>

                    <Button color="blue" className={this.state.progress ? 'loading disabled' : ''} type="submit">Envoyer</Button>
                </Form>
                <Message success className={this.state.sent ? '' : 'hidden'}>
                    <Icon name='check circle' /> Message envoyé
                </Message>
            </Container>
        )
    }
}

export default App;