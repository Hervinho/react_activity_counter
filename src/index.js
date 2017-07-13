import React from 'react'
import {render} from 'react-dom' //render property comes from React DOM
import {RunDayCount} from './components/RunDayCount'

window.React = React//to avoid errors such as 'React is not defined'

//Render our React element.
render( 
    //adding properties to our component
    < RunDayCount total={10} weather={19} location="Weavind Park" goal={100}/>,
    document.getElementById('react-container') //where we wanna render the element
)