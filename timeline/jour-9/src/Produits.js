import { Component } from 'react'

export default class Produits extends Component {
    render() {
        const prods = this.props.produits
        const liste = prods.map((item, idx) => {
            return (
                <div key={item.code} className='produit d-flex mb-3'>
                    <img src={item.image} />
                    <div className='details d-flex flex-column pl-2'>
                        <span>{item.nom}</span>
                        <span className='font-weight-bold d-block'>{item.prix} F</span>
                        <span onClick={() => { this.props.onAddToCart(item) }} className='btn text-xs btn-sm mt-2 pointer align-text-bottom bg-dark text-white'>Ajouter au panier</span>
                    </div>
                </div>
            )
        })
        return (
            <div className='produits d-md-flex flex-wrap justify-content-between'>
                {liste}
            </div>
        )
    }
}