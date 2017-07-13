import React from 'react'
import '../stylesheets/ui.scss'

//React class
export const RunDayCount = React.createClass({
    render(){
        //return HTML element using JSX
        return(
            <div className="run-day-count">
                <div className="total-days">
                    <span>1 day</span>
                </div>
                <div className="rainy-days">
                    <span>1 day</span>
                </div>
                <div className="sprint-days">
                    <span>1 day</span>
                </div>
                
            </div>
        )
    }
})