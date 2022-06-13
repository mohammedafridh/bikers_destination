import classes from './MeetupItem.module.css';
import Card from '../../ui/Card'
import {useContext} from 'react'
import FavoriteBikes from '../../store/FavoriteContext';

function MeetupItem(props){

    const favContext = useContext(FavoriteBikes);
    const bikeIsFavorite = favContext.favoriteBike(props.id)

    function FavoritesManager(){
        if(bikeIsFavorite){
            favContext.removeFavorite(props.id)
        }
        else{
            favContext.addFavorite({
                id:props.id,
                brand:props.brand,
                image:props.image,
                name:props.bike_name,
                capacity:props.capacity,
                color:props.color
            })
        }
    }

     return <li className = {classes.item}>
        <Card>
        <div className = {classes.image}>
            <img src = {props.image} alt = {props.bike_name} />
        </div>
        <div className = {classes.content}>
            <h1>{props.brand}</h1>
            <h1>{props.bike_name}</h1>
            <h2>{props.capacity}</h2>
            <h3>{props.color}</h3>
        </div>
        <div className = {classes.actions}>
            <button className = {classes.btn} onClick = {FavoritesManager}>
                {bikeIsFavorite?'Favorites':'Add to Favorites'}
            </button>
        </div>
        </Card>     
    </li>
}

export default MeetupItem;