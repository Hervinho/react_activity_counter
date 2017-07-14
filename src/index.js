import React from 'react'
import {render} from 'react-dom' //render property comes from React DOM
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
/*<HashRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="list" component={App} />
            <Route path="add" component={AddDay} />
            
        </div>
    </HashRouter>,*/
    routes,
    document.getElementById('react-container') //where we wanna render the element
)