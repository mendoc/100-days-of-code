import { Component } from 'react'

import Panier from './Panier'
import Produits from './Produits'

export default class Home extends Component {
    state = {
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
        this.props.updateCart(produit)
    }

    render() {
        return (
            <div className="container-md mt-5 mx-auto">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className='h2'>Panier</h2>
                    <Panier quantite={this.props.quantite} />
                </div>
                <p>Ajoutez des produits dans le <strong>panier</strong></p>
                <hr />
                <Produits produits={this.state.produits} onAddToCart={this.handleAddCart} />
            </div>
        )
    }
}