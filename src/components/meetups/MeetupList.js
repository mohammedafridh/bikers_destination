import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

function MeetupList(props){
    return <ul className = {classes.list}>
        {props.meetups.map((meetup) =>(         
            <MeetupItem 
                id = {meetup.id}
                brand = {meetup.brand}
                image = {meetup.image}
                bike_name = {meetup.name}
                capacity = {meetup.capacity}
                color = {meetup.color}/>
        ))}
    </ul>
}

export default MeetupList;