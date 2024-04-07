import logo from './assets/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to={'/cart'}>
            <img src= {logo}/>
            { totalQuantity}
        </Link>
    )
}

export default CartWidget