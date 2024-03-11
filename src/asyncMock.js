const products = [
    {
        id: '1', 
        name: 'Papas noisette 4 quesos', 
        price: 3000 , 
        category: 'minutas', 
        img:'https://media-cdn.tripadvisor.com/media/photo-l/0d/f9/60/07/salmon-con-papas-noisette.jpg',
        stock: 35, 
        description:'papas noisette con salsa 4 quesos'
    },
    {id: '2', name: 'fideos salteados', price: 4000, category: 'pastas', img: 'https://unsplash.com/es/fotos/fotografia-de-alimentos-de-pasta-cocida-con-rebanada-de-ehrbs-c3esWyvW3E4', stock: 10, description: 'fideos con vegetales salteados y salsa de soja' },
    {id: '3', name: 'Ensalada Cesar', price: 3500, category: 'ensaladas', img: 'https://unsplash.com/es/fotos/una-mesa-cubierta-con-muchos-platos-de-comida-jundT9Qza0M',stock: 10, description: 'base de hojas verdes con pollo en cubos, quesos varios, crutones  y aderezo Cesar'},
    {id: '4', name: 'volcan de chocolate', price: 4200, category: 'postres', img: 'https://unsplash.com/es/fotos/bizcocho-redondo-horneado-en-plato-1su-ueyLoe0', stock: 10, description: 'postre de chocolate con chocolate fundido dentro'},
    {id: '5', name: 'hamburgesa', price: 1800, category: 'minutas', img: 'https://unsplash.com/es/fotos/hamburguesa-sobre-mesa-de-madera-marron-K9vGRD_47do', stock: 12, description: 'hamburgesa simple con lechuga y tomate'},
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