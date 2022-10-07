import BikeList from '../components/accessories/BikeList'
import {useState,useEffect} from 'react';

function Bike(){

    const[isLoading,setIsLoading] = useState(true);
    const[bikeLoading,setBikeLoading] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://bikers-destination-default-rtdb.firebaseio.com/bikes.json'
        ).then(response =>{
            return response.json();
        }).then(data =>{
            const bikes = [];
            for(const key in data){
                const bike = {
                    id:key,
                ...data[key]
                }
               bikes.push(bike); 
            }
            setIsLoading(false);
            setBikeLoading(bikes);
        })
    },
    [])
    if(isLoading){
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <div>
                <h1>Bikes Gallery</h1>
            </div>
            <BikeList meetups = {bikeLoading}/>
        </section>
    )
}

export default Bike;