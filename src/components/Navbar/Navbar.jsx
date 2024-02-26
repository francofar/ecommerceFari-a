import classes from './Navbar.module.css'


const Navbar = () => {
    return (
        <header className={classes.header}>
            <h4 style={{fontSize:30}}>logo</h4>
            <nav>
                <a className={classes.nav}>minutas</a>
                <a className={classes.nav}>pastas</a>
                <a className={classes.nav}>postres</a>
            </nav>
        </header>
    )
}

export default Navbar