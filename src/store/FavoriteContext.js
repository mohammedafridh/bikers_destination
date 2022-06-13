import {createContext, useState} from 'react'

const FavoriteBikes = createContext({
    favorites: [],
    totalFavorites:0,
    favoriteBike:(bikeId)=>{},
    addFavorite:(bikeDetails)=>{},
    removeFavorite:(bikeId)=>{}
})

export function FavoriteBikesProvider(props){

    const [favBike,setFavBike] = useState([])

    function BikeIsFavorite(bikeId){
        return favBike.some(bike=>bike.id === bikeId) 
    }

    function AddBikeFavorite(bikeDetails){
        setFavBike((prevFavBike)=>{
            return prevFavBike.concat(bikeDetails)
        })
    }

    function RemoveBikeFavorite(bikeId){
        setFavBike((prevFavBike)=>{
            return prevFavBike.filter(bike => bike.id !== bikeId)
        })
    }

    const context = {
        favorites:favBike,
        totalFavorites:favBike.length,
        favoriteBike:BikeIsFavorite,
        addFavorite:AddBikeFavorite,
        removeFavorite:RemoveBikeFavorite
    }

    return <FavoriteBikes.Provider value = {context}>
        {props.children}
    </FavoriteBikes.Provider>
}

export default FavoriteBikes;