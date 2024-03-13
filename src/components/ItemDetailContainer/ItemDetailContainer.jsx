
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response =>{
                setProduct(response)
            })
    },[itemId])

    return(
        <body className="component">   
            <div className="card">
                <h1 className="detalle">Detalle del producto</h1>
                <ItemDetail {...product} />
            </div>
        </body> 
    )
}

export default ItemDetailContainer