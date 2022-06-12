import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNavigation(){
    return(
        <header className = {classes.header}>
            <div><h1 className={classes.title}>Bikers Destination</h1></div>
            <div><h3 className = {classes.head2}>-Respect for Riders-</h3></div>
            <nav>
                <ul>
                    <li><Link to = '/'>Bikes Gallery</Link></li>
                    <li><Link to = '/add'>Add Bike</Link></li>
                    <li><Link to = '/fav'>Favorites</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;