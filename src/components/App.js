import {Component} from 'react'
import {RunDayList} from './RunDayList'
import {RunDayCount} from './RunDayCount'
import {AddDay} from './AddDay'
import {Oops} from './Oops'
import {Menu} from './Menu'
import { NavLink } from 'react-router-dom'

export class App extends Component{
    //initialize default state with ES6 class constructor
    constructor(props){
        super(props)
        this.state = {
            allRunDays: [
                {location: "Silverton", date: "06/22/2015", hill: true, street: "Pitts", rain: true}/*,
                {location: "Silverton", date: "07/26/2016", hill: false, street: "Cresswell", rain: true},
                {location: "Kinshasa", date: "09/30/2016", hill: true, street: "Boulevard du 30 Juin", rain: false}*/
            ]
        }
        this.addDay = this.addDay.bind(this)
    }

    countDays(filter){
        const {allRunDays} = this.state
        return allRunDays.filter((day) => (filter) ? day[filter] : day).length // (if(filter) return day[filter]. else return day ).length
    }

    addDay(newDay){//this fnction will just add the new day to the state (from the form)
        this.setState({
            //runDays: this.state.allRunDays.concat({location: "Kinshasa", date: "09/30/2016", hill: true, street: "Boulevard du 30 Juin", rain: false}),
            allRunDays: [...this.state.allRunDays, newDay]
        })
    }

    render(){
        return (
            <div className="app">
                <Menu />
                {
                    //if pathname === "/"
                    (this.props.location.pathname === "/") ? 
                        <RunDayCount 
                            total={this.countDays()} 
                            hill={this.countDays("hill")} 
                            rain={this.countDays("rain")} goal={100} /> : 

                    //else if pathaname === "/add"
                    (this.props.location.pathname === "/add") ? <AddDay onNewDay={this.addDay}/> :

                    //else if pathname === "/list"
                    (this.props.location.pathname === "/list") ? 
                        <RunDayList days={this.state.allRunDays} filter={this.props.filter}/> :

                    //else
                     <Oops />
                }

            </div>
        )
    }
}

