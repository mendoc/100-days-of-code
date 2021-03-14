import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Commande extends Component {

    handleOnChange = () => {
        console.log('OnchangeQty')
    }

    render() {
        const produits = this.props.produits
        const liste = produits.map(item => (
            <div key={item.code} className='produit d-flex align-items-center justify-content-between mb-3'>
                <div className='d-flex'>
                    <img src={item.image} />
                    <div className='pl-2'>
                        <span>{item.nom}</span>
                        <span className='font-weight-bold d-block'>{item.quantite} x {item.prix} F = {item.prix * item.quantite} F</span>
                    </div>
                </div>
                <span onClick={() => { this.props.removeProduct(item) }} className='btn text-xs btn-sm mt-2 pointer align-text-bottom bg-danger text-white'><i className="bi bi-trash"></i> Retirer</span>
            </div>
        ))

        return (
            <div className="container-md mt-5 mx-auto">
                <Link to='/'><i class="bi bi-chevron-left"></i> Retour à la boutique</Link>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <h2 className='h2'>Votre commande</h2>
                </div>
                <p>Total à payer : <strong>{this.props.total} F</strong></p>
                <hr />
                <div className='produits'>
                    {liste}
                </div>
            </div>
        )
    }
}