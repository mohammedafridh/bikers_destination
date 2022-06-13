import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
import {useContext} from 'react'
import FavoriteBikes from '../../store/FavoriteContext';

function MainNavigation(){

    const favCount = useContext(FavoriteBikes)

    return(
        <header className = {classes.header}>
            <div><h1 className={classes.title}>Bikers Destination</h1></div>
            <div><h3 className = {classes.head2}>-Respect for Riders-</h3></div>
            <nav>
                <ul>
                    <li><Link to = '/'>Bikes Gallery</Link></li>
                    <li><Link to = '/add'>Add Bike</Link></li>
                    <li><Link to = '/fav'>Favorites</Link>
                    <span className={classes.badge}>{favCount.totalFavorites}</span></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;