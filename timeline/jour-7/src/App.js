import React, { Component } from 'react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import List from './List'
import { Container, Divider, Header } from 'semantic-ui-react'

class App extends Component {

    state = {
        items: []
    }

    componentDidMount = () => {
        this.getArticles()
    }

    getArticles = () => {

        const URL = 'https://cross-origin.herokuapp.com/https://www.futura-sciences.com/rss/actualites.xml'

        axios.get(URL)
            .then(res => {
                if (res.status === 200) {
                    const data = res.request.responseXML
                    const articles = data.querySelectorAll('channel item')

                    let items = []

                    articles.forEach(article => {
                        const item = {
                            title: article.querySelector('title').textContent,
                            description: article.querySelector('description').textContent,
                            pubDate: article.querySelector('pubDate').textContent,
                            link: article.querySelector('guid').textContent,
                            image: article.querySelector('enclosure').getAttribute('url'),
                            author: article.querySelector('author').textContent
                        }

                        items = [...items, item]
                    })

                    this.setState({
                        items: items
                    })
                }
            })
    }

    render() {
        return (
            <Container>
                <Header as='h2'>Futura News</Header>
                <p>Dernières actualités du site <a href="https://www.futura-sciences.com/rss/actualites.xml">Futura Sciences</a></p>
                <Divider />
                <List items={this.state.items} />
            </Container>
        )
    }
}

export default App;