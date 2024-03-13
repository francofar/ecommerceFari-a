import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


const ItemDetail = ({ name, category, price, img, description, stock }) => {
    console.log("datos recibidos", {name, category, price, img, description, stock})
    return (
        <article className="componentCard">
            <h3 className="compCat">{category}</h3>
            <img src={img} style={{width:100}}/>
            <h4 className="compName">{name}</h4>
            <h4 className="compPri">${price}</h4>
            <h4 className="compDes">{description}</h4>
            <ItemCount stock={stock} />
        </article>
    )
}

export default ItemDetail