import React from 'react'
import {render} from 'react-dom' //render property comes from React DOM
import {RunDayList} from './components/RunDayList'

window.React = React//to avoid errors such as 'React is not defined'

//Render our React element.
render( 
    //adding properties to our component
    < RunDayList days={
        [
            {location: "Weavind Park", date: new Date("06/22/2015"), run: true, street: "Osbourne Rd", weather: "rainy"},
            {location: "Weavind Park", date: new Date("07/26/2016"), run: true, street: "Cresswell St", weather: "cold"},
            {location: "Weavind Park", date: new Date("09/30/2016"), run: true, street: "Ripley Rd", weather: "sunny"}
        ]
    }/>,
    document.getElementById('react-container') //where we wanna render the element
)