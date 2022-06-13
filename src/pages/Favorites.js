import {useContext} from 'react'
import FavoriteBikes from '../store/FavoriteContext'
import BikeList from '../components/accessories/BikeList'

function Favorites(props){

    const favBike = useContext(FavoriteBikes);
    let content = <p>No favorites yet. Start adding some!</p>;
    let favList = <BikeList meetups = {favBike.favorites} />;

    function favManager(){
        if(favBike.totalFavorites === 0){
            return content
        }else{
            return favList
        }
    }

    return (
        <div>
            <h1>My Favorites</h1>   
            {favManager()}
        </div>
    )
}

export default Favorites;