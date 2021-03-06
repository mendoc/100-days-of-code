import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        users: []
    }

    handleSubmit = (user) =>{
        this.setState({
            users: [...this.state.users, user]
        })
    }

    removeUser = (index) => {
        const { users } = this.state

        this.setState({
            users: users.filter((user, i) => {
                return i !== index
            })
        })
    }

    render() {
        return (
            <div className="container">
                <Form handleSubmit={this.handleSubmit} />
                <Table userData={this.state.users} removeUser={this.removeUser} />
            </div>
        )
    }
}

export default App;