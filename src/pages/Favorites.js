import {useContext} from 'react'
import FavoriteBikes from '../store/FavoriteContext'
import MeetupList from '../components/meetups/MeetupList'

function Favorites(props){

    const favBike = useContext(FavoriteBikes)

    return (
        <div>
            <h1>My Favorites</h1>   
            <MeetupList meetups = {favBike.favorites}/>
        </div>
    )
}

export default Favorites;