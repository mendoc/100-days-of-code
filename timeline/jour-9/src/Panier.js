import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Panier extends Component {
    render() {
        return (
            <Link to='/panier'>
                <div className={`panier pointer ${this.props.quantite > 0 ? 'bg-primary' : 'bg-dark'} text-white rounded cursor-pointer`}>
                    <i className="bi bi-cart3 py-1 pl-2 d-inline-block"></i>
                    <span className='d-inline-block px-2'>{this.props.quantite > 0 ? 'Mes courses' : 'Panier vide'}</span>
                    {this.props.quantite > 0 &&
                        <span className='d-inline-block px-3 rounded-right py-1 bg-dark'>{this.props.quantite}</span>
                    }
                </div>
            </Link>
        )
    }
}