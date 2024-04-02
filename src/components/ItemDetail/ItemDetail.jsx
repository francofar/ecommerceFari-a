import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import "./ItemDetail.css"
import { CartContext } from "../../context/CartContext"

const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al pedido</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initialValue = 1}) => {
    const [count, setCount] = useState(initialValue)

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button className="botonMid" onClick={() => onAdd(count)}>Agregar al pedido</button>
            <button className="botonMin" onClick={decrement}>-</button>
            <button className="botonMas" onClick={increment}>+</button>
        </div>
    )
}



const ItemDetail = ({ id, name, category, price, img, description, stock }) => {
    // console.log("datos recibidos", {name, category, price, img, description, stock})
    const [inputType, setInputType] = useState('button')

    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        console.log(objProductToAdd)

        setQuantity(quantity)

        addItem(objProductToAdd)
    }
    return (
        <article className="componentCard">
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <h3 className="compCat">{category}</h3>
            <img src={img} style={{width:100}}/>
            <h4 className="compName">{name}</h4>
            <h4 className="compPri">${price}</h4>
            <h4 className="compDes">{description}</h4>
            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart'>Finalizar pedido</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail