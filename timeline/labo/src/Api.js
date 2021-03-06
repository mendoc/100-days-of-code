import React, { Component } from 'react'

class App extends Component {

    state = {
        links: [],
        texts: []
    }

    componentDidMount() {
        const url = 'https://fr.wikipedia.org/w/api.php?action=opensearch&search=Kotlin&format=json&origin=*'

        fetch(url)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    texts: res[1],
                    links: res[3]
                })
            })
    }

    render() {
        const { texts, links } = this.state

        const rows = texts.map((row, index) => {
            return <li key={index}><a href={links[index]} target="_blank" rel="noreferrer">{row}</a></li>
        })

        return (
            <ul>{rows}</ul>
        )
    }
}

export default App;