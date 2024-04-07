import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, documentId, where, query, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useContext(CartContext)
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                },
                items: cart,
                total
            }



        const batch = writeBatch(db)
        const outOffStock = []
        const ids = cart.map(prod => prod.id)

        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

        const querySnapShot = await getDocs(productsCollection)
        const { docs } = querySnapShot


        docs.forEach(doc => {
            const data = doc.data()
            const stockDb = data.stock

            const productAddedToCart = cart.find(prod=> prod.id === doc.id)
            const prodQuantity = productAddedToCart.quantity
            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stcock: stockDb - prodQuantity})
            } else {
                outOffStock.push({id: doc.id, ...data})
            }
        })

        if(outOffStock.length === 0) {
            batch.commit()

            const orderCollection = collection(db, 'orders')
            const { id } = await addDoc(orderCollection, objOrder)
            clearCart()
            setOrderId(id)
        }else {
            console.error('hay platos que no estan disponibles')
        }
    } catch (error) {
        console.error('Hubo un error en la generacion de la orden')
    } finally {
        setLoading(false)
    }
}

    if(loading) {
        return <h1>Su orden esta siendo generada...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId} </h1>
    }


return (
    <div>
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="name" value={userData.name} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={userData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Teléfono:
                <input type="tel" name="phone" value={userData.phone} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit">Realizar pedido</button>
        </form>
    </div>
)
}

export default Checkout


