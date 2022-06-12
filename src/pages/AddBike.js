import MeetupForm from "../components/meetups/MeetupForm";
import {useNavigate} from 'react-router-dom'

function AddBike(){

    const navigate = useNavigate();

    function getDetails(details){
        fetch('https://react-router-dom-5fd1c-default-rtdb.firebaseio.com/bikes.json',
        {
            method:'POST',
            body:JSON.stringify(details)
        })
        navigate('/')
    }

    return (<div>
        <div><h1>Add Bikes</h1></div>
        <MeetupForm addDetails = {getDetails}/>
    </div>
        
    )
}

export default AddBike;