import classes from './BikeList.module.css'
import BikeItem from './BikeItem'

function BikeList(props){
    return <ul className = {classes.list}>
        {props.meetups.map((meetup,index) =>(         
            <BikeItem 
            key = {index}
                id = {meetup.id}
                brand = {meetup.brand}
                image = {meetup.image}
                bike_name = {meetup.name}
                capacity = {meetup.capacity}
                color = {meetup.color}/>
        ))}
    </ul>
}

export default BikeList;