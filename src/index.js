import React from 'react'
import {render} from 'react-dom' //render property comes from React DOM
import {RunDayCount} from './components/RunDayCount'

window.React = React//to avoid errors such as 'React is not defined'

//Render our React element.
render( 
    
    < RunDayCount />,
    document.getElementById('react-container') //where we wanna render the element
)