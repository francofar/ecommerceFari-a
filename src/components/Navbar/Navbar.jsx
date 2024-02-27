import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logo1 from './assets/parrilla.png'


const Navbar = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src={logo1}/>
            <nav>
                <a className={classes.nav}>minutas</a>
                <a className={classes.nav}>pastas</a>
                <a className={classes.nav}>postres</a>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar