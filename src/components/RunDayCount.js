import React from 'react'
import '../stylesheets/ui.scss'

//React class
export const RunDayCount = React.createClass({
    render(){
        //return HTML element using JSX
        return(
            <div className="run-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <span> days</span>
                </div>
                <div className="rainy-days">
                    <span>{this.props.weather}</span>
                    <span> days</span>
                </div>
                <div className="sprint-days">
                    <span>{this.props.location}</span>
                </div>
                <div className="sprint-days">
                    <span>Goal: </span>
                    <span>{this.props.goal}</span>
                </div>
                
            </div>
        )
    }
})