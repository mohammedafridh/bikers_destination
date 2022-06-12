import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

function MeetupList(props){
    return <ul className = {classes.list}>
        {props.meetups.map((meetup,index) =>(
            <div key = {index}>
            <MeetupItem 
                brand = {meetup.brand}
                image = {meetup.image}
                bike_name = {meetup.name}
                capacity = {meetup.capacity}
                color = {meetup.color}/>
            </div>
        ))}
    </ul>
}

export default MeetupList;