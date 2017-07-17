import {PropTypes, Component} from 'react'

export class AddDay extends Component{
    render(){
        const {location, date, street, hill, rain} = this.props //initialize with defalut values in AddDay.defaultProps

        return (
            <form className="add-day-form">
                <label htmlFor="location">Location Name</label>
                <input id="location" type="text" defaultValue={location} required/>

                <label htmlFor="date">Date</label>
                <input id="date" type="date" defaultValue={date} required/>

                <label htmlFor="street">Street Name</label>
                <input id="street" type="text" defaultValue={street} required/>

                <div>
                     <input id="hill" type="checkbox" defaultChecked={hill} required/>
                    <label htmlFor="hill">Hill Day</label>
                </div>
                

                <div>
                    <input id="rain" type="checkbox" defaultChecked={rain} required/>
                    <label htmlFor="rain">Rain Day</label>
                </div>
            </form>
        )
    }
}

AddDay.defaultProps = {
    location: "Somewhere",
    date: "2017/01/01",
    hill: true,
    street: "Street name",
    rain: false
}

AddDay.PropTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hill: PropTypes.bool.isRequired,
    street: PropTypes.string.isRequired,
    rain: PropTypes.bool.isRequired
}