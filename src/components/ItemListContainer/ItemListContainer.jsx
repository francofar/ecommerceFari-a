import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../Itemlist/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect (() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId)
            .then(result =>{
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])
    return (
        <main>
            <h1 style ={{fontSize:'3rem', backgroundColor:'orange'}}>{ greeting }</h1>
            <ItemList products={products} />
        </main>
            
        
    )
}

export default ItemListContainer