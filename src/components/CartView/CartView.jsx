import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import "./CartView.css"


const CartView = () => {
    const {cart, removeItem} = useContext(CartContext)
    return (
        <div className="list">
            <h1 >Pedido</h1>
                <section>
                {cart.map(prod => {
                    return (
                        <article key={prod.id} style={{display:'flex'}} >
                        <h2 className="pedidoNom">{prod.name}</h2>
                        <button className="eliminateButton" onClick={() => removeItem(prod.id)}>Eliminar</button>
                        </article>
                    )
                })

                }

                </section>
                <Link to ='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartView