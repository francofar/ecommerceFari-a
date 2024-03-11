import { useState } from "react"

const ItemCount =({initialValue = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initialValue)

    const decrement = () =>{
        if (count > 1){
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if (count < stock){
            setCount(prev => prev + 1)
        }
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={()=> onAdd(count)}>agregar al pedido</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount