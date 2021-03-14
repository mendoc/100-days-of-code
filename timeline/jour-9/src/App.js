import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Commande from './Commande'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

class App extends Component {

    state = {
        quantite: 0,
        total: 0,
        produitsPanier: [],
    }

    handleUpdateCart = (produit) => {

        let trouve = false
        let totalProds = 0
        let total = 0

        let produitsPanier = this.state.produitsPanier.map(prod => {
            if (prod.code === produit.code) {
                trouve = true
                prod.quantite = prod.quantite + 1
            }
            totalProds += prod.quantite
            total += prod.prix * prod.quantite
            return prod
        })

        if (!trouve) {
            produitsPanier = [...produitsPanier, { ...produit, quantite: 1 }]
            totalProds++
            total += produit.prix
        }

        this.setState({
            quantite: totalProds,
            total: total,
            produitsPanier: produitsPanier
        })
    }

    handleRemoveProduct = (produit) => {
        let totalProds = 0
        let total = 0

        const produitsPanier = this.state.produitsPanier.filter(prod => {
            if (prod.code !== produit.code) {
                totalProds += prod.quantite
                total += prod.prix * prod.quantite
            }
            return prod.code !== produit.code
        })

        this.setState({
            quantite: totalProds,
            total: total,
            produitsPanier: produitsPanier
        })
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home updateCart={this.handleUpdateCart} quantite={this.state.quantite} />
                    </Route>
                    <Route path='/panier'>
                        <Commande total={this.state.total} produits={this.state.produitsPanier} removeProduct={this.handleRemoveProduct} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;