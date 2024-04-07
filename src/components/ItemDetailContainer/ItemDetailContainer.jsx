
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { getDoc, doc,  collection, getDocs} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    // useEffect(() => {

    //     const productsCollection = categoryId ? (
    //         query(collection (db, 'products'),  where('category', '==', categoryId))
    //     ) : (
    //         collection(db, 'products')
    //     )
    //     getDocs(productsCollection)
    //         .then(
    //             querySnapShot =>{
    //                 const productsAdapted = querySnapShot.docs.map(doc =>{
    //                     const data = doc.data()

    //                     return {id: doc.id, ...data}
    //                 })
    //                 setProduct(productsAdapted)
    //             })
    //             .catch()
    //         }, [categoryId])

    useEffect(() => {
        const productDoc = doc (db, 'products', itemId)
        getDoc(productDoc)
            .then(quereDocumentSnapshot =>{
                const data = quereDocumentSnapshot.data()
                const productAdapted = {id: quereDocumentSnapshot.id, ...data}

                setProduct(productAdapted)
            })
            .catch()
        
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