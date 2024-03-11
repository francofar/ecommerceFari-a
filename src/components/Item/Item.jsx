import { Link } from "react-router-dom"

const Item = ({ id, name, category, price, img }) => {
    return (
        <article>
            <h3>{category}</h3>
            <h4>{name}</h4>
            <img src={img} style={{width:100}}/>
            <h4>{price}</h4>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </article>

    )
}

export default Item