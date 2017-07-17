import {PropTypes, Component} from 'react'

export const AddDay = (location, date, street, hill, rain) => { //initialize with defalut values in AddDay.defaultProps
    let _date, _hill, _location, _rain, _street
    console.log('Pamars: ', location.date)
    
    //submit method
    const submit = (e) => {
        e.preventDefault() //this prevents default form behavior of clearing out
        console.log('Location: ', _location.value) //refs ensures parent components can access children
        console.log('Date: ', _date.value)
        console.log('Street: ', _street.value)
        console.log('Hill: ', _hill.checked)
        console.log('Rain: ', _rain.checked)
    }

    //ref={input => _location = input} : set whatever content of the input filed in the _reference variable
    //i.e. this.refs. = _
        return (
            <form className="add-day" onSubmit={submit}>
                <label htmlFor="location">Location Name</label>
                <input id="location" type="text" defaultValue={location.location} ref={input => _location = input}/> 

                <label htmlFor="date">Date</label>
                <input id="date" type="date" defaultValue={location.date} ref={input => _date = input}/>

                <label htmlFor="street">Street Name</label>
                <input id="street" type="text" defaultValue={location.street} ref={input => _street = input}/>

                <div>
                     <input id="hill" type="checkbox" defaultChecked={location.hill} ref={input => _hill = input}/>
                    <label htmlFor="hill">Hill Day</label>
                </div>
                

                <div>
                    <input id="rain" type="checkbox" defaultChecked={location.rain} ref={input => _rain = input}/>
                    <label htmlFor="rain">Rain Day</label>
                </div>

                <button>Add Day</button>
            </form>
        )
}


AddDay.defaultProps = {
    location: "Somewhere",
    date: "2017-01-01",
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