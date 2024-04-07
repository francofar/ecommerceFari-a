import { useState, useEffect } from "react"
import ItemList from "../Itemlist/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, where, query} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const productsCollection = categoryId ? (
            query(collection (db, 'products'),  where('category', '==', categoryId))
        ) : (
            collection(db, 'products')
        )
        getDocs(productsCollection)
            .then(
                querySnapShot =>{
                    const productsAdapted = querySnapShot.docs.map(doc =>{
                        const data = doc.data()

                        return {id: doc.id, ...data}
                    })
                    setProducts(productsAdapted)
                })
                .catch()
            }, [categoryId]) 
    
    return (
        <main>
            <h1 style ={{fontSize:'3rem', backgroundColor:'orange'}}>{ greeting }</h1>
            <ItemList products={products} />
        </main>
            
        
    )
}

export default ItemListContainer

