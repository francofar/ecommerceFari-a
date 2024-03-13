import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ id, name, img, price}) => {
    return (
        <div className="cardItem" >
            <h2>{name}</h2>
            <img src={img} style={{ width: 100}}/>
            <h3>Precio: ${price}</h3>
            <Link className="linkDetail" to={`/item/${id}`}>ver detalle</Link>
        </div>
    )
}

export default Item