import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain' //this is to get only ht eicons needed
import Run from 'react-icons/lib/md/directions-run'
import Calendar from 'react-icons/lib/fa/calendar'
import Rain from 'react-icons/lib/ti/weather-downpour'
import {PropTypes} from 'react'

//methods to do calculations
const percentToDecimal = (decimal) => ((decimal * 100) + '%')

const calculateGoalProgress = (total, goal) => percentToDecimal(total/goal)


//Stateless component: use destructuring to select properties to be used in this fuunction.
export const RunDayCount = ({total, hill, rain, goal}) => (//can use () if only returning JSX element
    
    <div className="run-day-count">
            <div className="total-days">
                <span>{total}</span>
                    <Calendar />
                <span> days</span>
            </div>
            <div className="rainy-days">
                <span>{rain}</span>
                    <Rain />
                <span> days</span>
            </div>
            <div className="sprint-days">
                <span>{hill}</span>
                    <Terrain />
                <span> </span>
            </div>
            <div className="sprint-days">
                <span>{calculateGoalProgress(total, goal)}</span>
            </div>
    </div>
)

RunDayCount.defaultProps = {
    total: 50, 
    hill: false, 
    rain: false, 
    goal: 50
}

//setting types for all properties
RunDayCount.propTypes = {
    total: PropTypes.number, 
    hill: PropTypes.number, 
    rain: PropTypes.number, 
    goal: PropTypes.number
}
