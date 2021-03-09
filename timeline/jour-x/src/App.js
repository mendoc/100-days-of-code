import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Container, Divider, Header, Form, Button, Message } from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
            <Container>
                <Header as='h2'>JourX</Header>
                <p>Description du jour</p>
                <Divider />
            </Container>
        )
    }
}

export default App;