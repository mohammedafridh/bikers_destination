import {useContext} from 'react'
import FavoriteBikes from '../store/FavoriteContext';
import MeetupList from '../components/meetups/MeetupList';

function Favorites(props){

    const displayFav = useContext(FavoriteBikes)

    return (
        <div>
            <h1>My Favorites</h1>   
            <MeetupList meetups = {displayFav.favorites}/>
        </div>
    )
}

export default Favorites;