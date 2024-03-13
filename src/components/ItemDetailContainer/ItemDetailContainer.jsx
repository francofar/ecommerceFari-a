
import { useState, useEffect } from "react"
import { getProductsByCategory, getProducts } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

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
        <div>
            <h1>detalle del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer