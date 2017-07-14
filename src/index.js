import React from 'react'
import {render} from 'react-dom' //render property comes from React DOM
import {RunDayList} from './components/RunDayList'
import {RunDayCount} from './components/RunDayCount'
import {App} from './components/App'
import {Oops} from './components/Oops'
import {AddDay} from './components/AddDay'
import { HashRouter, Route } from 'react-router-dom'

window.React = React//to avoid errors such as 'React is not defined'

//Render our React element.
render( 
    //adding properties to our component
    /*< RunDayList days={
        [
            {location: "Silverton", date: new Date("06/22/2015"), hill: true, street: "Pitts", rain: true},
            {location: "Silverton", date: new Date("07/26/2016"), hill: false, street: "Cresswell", rain: true},
            {location: "Silverton", date: new Date("09/30/2016"), hill: true, street: "Ripley", rain: false}
        ]
    }/>,
    < RunDayCount total="me"/>,
    <App />,*/
    <HashRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="list" component={App} />
            
        </div>
    </HashRouter>,
    document.getElementById('react-container') //where we wanna render the element
)