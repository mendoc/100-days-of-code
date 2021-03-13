import React, { Component } from 'react'

import Produits from './Produits'
import Panier from './Panier'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'


class App extends Component {

    state = {
        produitsPanier: [],
        quantite: 0,
        produits: [
            {
                code: 'P1',
                nom: 'Cotton T-Shirt',
                image: 'https://preview.colorlib.com/theme/ashion/img/trend/bs-1.jpg',
                prix: 12000
            },
            {
                code: 'P2',
                nom: 'Chain bucket bag',
                image: 'https://preview.colorlib.com/theme/ashion/img/trend/ht-1.jpg',
                prix: 6000
            },
            {
                code: 'P3',
                nom: 'Pendant earrings',
                image: 'https://preview.colorlib.com/theme/ashion/img/trend/ht-2.jpg',
                prix: 5000
            }
        ]
    }

    handleAddCart = (produit) => {
        let trouve = false
        let totalProds = 0

        let produitsPanier = this.state.produitsPanier.map(prod => {
            if (prod.code === produit.code) {
                trouve = true
                prod.quantite = prod.quantite + 1
            }
            totalProds += prod.quantite
            return prod
        })

        if (!trouve) {
            produitsPanier = [...produitsPanier, { ...produit, quantite: 1 }]
            totalProds++
        }

        this.setState({
            produitsPanier: produitsPanier,
            quantite: totalProds
        })
    }

    computeNBCart = () => {


        this.state.produitsPanier.map(prod => {

        })

        return totalProds
    }

    render() {
        return (
            <div className="container-md mt-5 mx-auto">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className='h2'>Panier</h2>
                    <Panier quantite={this.state.quantite} />
                </div>
                <p>Ajoutez des produits dans le <strong>panier</strong></p>
                <hr />
                <Produits produits={this.state.produits} onAddToCart={this.handleAddCart} />
            </div>
        )
    }
}

export default App;