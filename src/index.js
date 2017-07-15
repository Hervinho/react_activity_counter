import React from 'react'
import {render} from 'react-dom' 
import {RunDayList} from './components/RunDayList'
import {RunDayCount} from './components/RunDayCount'
import {App} from './components/App'
import {Oops} from './components/Oops'
import {AddDay} from './components/AddDay'
import { HashRouter, Route } from 'react-router-dom'
import routes from './routes'

window.React = React//to avoid errors such as 'React is not defined'

//Render our React element.
render( 
    routes,
    document.getElementById('react-container') 
)