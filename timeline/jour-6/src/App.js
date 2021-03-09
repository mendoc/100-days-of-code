import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Container, Divider, Header, Form, Button, Segment, Icon } from 'semantic-ui-react'

const ACCESS_TOKEN = '3a7650a7fc6ff4133d35500c482a176c914c79c0'
const url = 'https://api-ssl.bitly.com/v4/shorten'

class App extends Component {
    state = {
        long_url: '',
        short_url: '',
        progress: false,
        copied: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { long_url } = this.state
        console.log(long_url)

        if (!long_url) return

        this.setState({
            progress: true,
            short_url: '',
            copied: false
        })

        fetch(url, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                domain: "bit.ly",
                long_url: long_url
            })
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.link) {
                    this.setState({
                        short_url: res.link
                    })
                }
                this.setState({
                    progress: false
                })
            })
            .catch(err => {
                this.setState({
                    progress: false
                })
            })
    }

    handleChange = (e) => {
        this.setState({
            long_url: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <Header as='h2'>Raccourci de lien</Header>
                <p>Raccourcissez vos <strong>liens</strong> grace au service Bitly</p>
                <Divider />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Lien à raccourcir</label>
                        <input onChange={this.handleChange} name="url" type="url" placeholder="Renseigner le lien à raccourcir" required />
                    </Form.Field>
                    <Button loading={this.state.progress} disabled={this.state.progress} primary type="submit">Raccourcir</Button>
                </Form>
                {this.state.short_url &&
                    <Segment size='mini'>
                        <div className="ui grid">
                            <div className="eleven wide column">
                                <a href={this.state.short_url} target="_blank">{this.state.short_url}</a>
                            </div>
                            <div className="five wide column">
                                <CopyToClipboard text={this.state.short_url} onCopy={() => this.setState({ copied: true })}>
                                    <Button compact size='mini' className={this.state.copied ? 'green' : 'blue'}><Icon name='copy' />{this.state.copied ? 'Copié' : 'Copier'}</Button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </Segment>
                }
            </Container>
        )
    }
}

export default App;