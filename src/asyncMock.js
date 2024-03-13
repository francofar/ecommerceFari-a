const products = [
    {
        id: '1' ,
        name: 'Papas noisette 4 quesos', 
        price: 3000 , 
        category: 'minutas', 
        img:'https://media-cdn.tripadvisor.com/media/photo-l/0d/f9/60/07/salmon-con-papas-noisette.jpg',
        stock: 35, 
        description:'papas noisette con salsa 4 quesos'
    },
    {id: '2', name: 'fideos salteados', price: 4000, category: 'pastas', img: 'https://c8i5i9x9.stackpathcdn.com/download/bancorecursos/recetas/receta-hakka-noodles-fideos-salteados-chinos.jpg', stock: 10, description: 'fideos con vegetales salteados y salsa de soja' },
    {id: '3', name: 'Ensalada Cesar', price: 3500, category: 'ensaladas', img: 'https://www.comedera.com/wp-content/uploads/2023/10/shutterstock_1087243763.jpg', stock: 15, description: 'ensalada con base de hojas verdes con pollo, quesos, crutones y aderezo cesar'},
    {id: '4', name: 'volcan de chocolate', price: 4200, category: 'postres', img: 'https://mandolina.co/wp-content/uploads/2023/07/volcan-de-chocolate.png', stock: 10, description: 'postre de chocolate con chocolate fundido dentro'},
    {id: '5', name: 'hamburgesa', price: 1800, category: 'minutas', img: 'https://www.lanacion.com.ar/resizer/v2/hamburguesa-blt-de-john-john-burger-bacon-lettuce-RHVGX3MHVRB7VGEXBEVCCZHW5I.jpg?auth=53776ee5a203ae1fbe457df3473f7c2d9470016ad51a458c73c5b950966a4f57&width=880&height=586&quality=70&smart=true', stock: 12, description: 'hamburgesa simple con lechuga y tomate'},
]




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}