import React from 'react'
import {App} from './components/App'
import {Oops} from './components/Oops'
import {AddDay} from './components/AddDay'
import { HashRouter, Route } from 'react-router-dom'

const routes = (
    <HashRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="list" component={App} />
            <Route path="add" component={AddDay} />
            
        </div>
    </HashRouter>
)

export default routes