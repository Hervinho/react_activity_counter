import {PropTypes, Component} from 'react'

export class AddDay extends Component{
    //Constructor
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this) //to make sure custom method with *this* can be accessible with JSX
    }
    //submit method
    submit(e){
        e.preventDefault() //this prevents default form behavior of clearing out
        console.log('Location: ', this.refs.location.value) //refs ensures parent components can access children
        console.log('Date: ', this.refs.date.value)
        console.log('Street: ', this.refs.street.value)
        console.log('Hill: ', this.refs.hill.checked)
        console.log('Rain: ', this.refs.rain.checked)
    }

    render(){
        const {location, date, street, hill, rain} = this.props //initialize with defalut values in AddDay.defaultProps

        return (
            <form className="add-day" onSubmit={this.submit}>
                <label htmlFor="location">Location Name</label>
                <input id="location" type="text" defaultValue={location} required ref="location"/>

                <label htmlFor="date">Date</label>
                <input id="date" type="date" defaultValue={date} required ref="date"/>

                <label htmlFor="street">Street Name</label>
                <input id="street" type="text" defaultValue={street} required ref="street"/>

                <div>
                     <input id="hill" type="checkbox" defaultChecked={hill} required ref="hill"/>
                    <label htmlFor="hill">Hill Day</label>
                </div>
                

                <div>
                    <input id="rain" type="checkbox" defaultChecked={rain} required ref="rain"/>
                    <label htmlFor="rain">Rain Day</label>
                </div>

                <button>Add Day</button>
            </form>
        )
    }
}

AddDay.defaultProps = {
    location: "Somewhere",
    date: "01/01/2017",
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