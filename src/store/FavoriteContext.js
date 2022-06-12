import {createContext,useState} from 'react'

const FavoriteBikes = createContext({
    favorites:[],
    totalFavorites:0,
    favoriteItem:(bikeId)=>{},
    addFavorite:(newBike)=>{},
    removeFavorite:(bikeId)=>{}
})

export function FavoritesManager(props){

    const [userFavorite,setUserFavorite] = useState([]);

    function itemIsFavorite(bikeId){
        return userFavorite.some(bike => bike.id === bikeId)
    }
    function addFavoriteItem(newBike){
        setUserFavorite((prevUserFavorite)=>{
            return prevUserFavorite.concat(newBike)
        })
    }
    function removeFavoriteItem(bikeId){
        setUserFavorite((prevUserFavorite)=>{
            return prevUserFavorite.filter(bike=> bike.id !== bikeId)
        })
    }

    const context = {
        favorites:userFavorite,
        totalFavorites:userFavorite.length,
        favoriteItem:itemIsFavorite,
        addFavorite:addFavoriteItem,
        removeFavorite:removeFavoriteItem
    }

    return <FavoriteBikes.Provider value = {context}>
        {props.children}
    </FavoriteBikes.Provider>
}

export default FavoriteBikes;