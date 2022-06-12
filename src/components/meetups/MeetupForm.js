import {useRef} from 'react'
import classes from './MeetupForm.module.css'

function MeetupForm(props){

    const brand = useRef();
    const bikeName = useRef();
    const imageURL = useRef();
    const capacity = useRef();
    const color = useRef();

    function selectHandler(event){
        event.preventDefault();
        
        const selectBrand = brand.current.value
        const selectBike = bikeName.current.value
        const selectImage = imageURL.current.value
        const selectCapacity = capacity.current.value
        const selectColor = color.current.value

        const addBike = {
            brand: selectBrand,
            name: selectBike,
            image:selectImage,
            capacity:selectCapacity,
            color:selectColor
        }
        props.addDetails(addBike)
    }
   

    return <form className = {classes.form} onSubmit = {selectHandler}>
        <div className = {classes.content}>
            <label htmlFor = 'brands'>Brand :</label>
            <select ref = {brand}>
                <option value = 'YAMAHA' ref = {brand}>YAMAHA</option>
                <option value = 'KTM' ref = {brand}>KTM</option>
                <option value = 'BAJAJ' ref = {brand}>BAJAJ</option>
                <option value = 'HONDA' ref = {brand}>HONDA</option>
                <option value = 'TVS' ref = {brand}>TVS</option>
            </select>
        </div>
        <div className = {classes.content}>
            <label htmlFor = 'bikeName'> Bike Name :</label>
            <input type = 'text' required id = 'bikeName' ref = {bikeName}/>
        </div>
        <div className = {classes.content}>
            <label htmlFor = 'url'> Image URL :</label>
            <input type = 'url' required id = 'url' ref = {imageURL}/>
        </div>
        <div className = {classes.content}>
            <label htmlFor = 'capacity'> Capacity :</label>
            <input type = 'text' required id = 'capacity' ref = {capacity} />
        </div>
        <div className = {classes.content}>
            <label htmlFor = 'color'> Color :</label>
            <input type = 'text' required id = 'color' ref = {color}/>
        </div>
        <div className = {classes.actions}>
            <button>Add Bike</button>
        </div>

    </form>
}

export default MeetupForm;