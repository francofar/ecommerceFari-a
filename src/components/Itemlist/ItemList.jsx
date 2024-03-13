import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center"}}>
            {
                products?.map((product) => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList