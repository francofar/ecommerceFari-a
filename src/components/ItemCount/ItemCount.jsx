import { useState } from "react"
import "./ItemCount.css"
const ItemCount = ({ initialValue = 1, stock, onAdd }) => {
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
        <div className="countCard">
            <h3>{count}</h3>
            <button className="botonMas" onClick={increment}>+</button>
            <button className="botonMid" onClick={() => onAdd(count)}>Agregar al pedido</button>
            <button className="botonMin" onClick={decrement}>-</button>
        </div>
    )
}

export default ItemCount
