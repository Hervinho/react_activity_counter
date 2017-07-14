import {Component} from 'react'
import {RunDayList} from './RunDayList'
import {RunDayCount} from './RunDayCount'

export class App extends Component{
    //initialize default state with ES6 class constructor
    constructor(props){
        super(props)
        this.state = {
            allRunDays: [
                {location: "Silverton", date: new Date("06/22/2015"), hill: true, street: "Pitts", rain: true},
                {location: "Silverton", date: new Date("07/26/2016"), hill: false, street: "Cresswell", rain: false},
                {location: "Silverton", date: new Date("09/30/2016"), hill: true, street: "Ripley", rain: false}
            ]
        }
    }

    countDays(filter){
        const {allRunDays} = this.state
        return allRunDays.filter((day) => (filter) ? day[filter] : day).length // (if(filter) return day[filter]. else return day ).length
    }

    render(){
        return (
            <div className="app">
                <RunDayList days={this.state.allRunDays}/>
                <RunDayCount total={this.countDays()} hill={this.countDays("hill")} rain={this.countDays("rain")} goal={100} />
            </div>
        )
    }
}