import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain' //this is to get only ht eicons needed
import Run from 'react-icons/lib/md/directions-run'
import Calendar from 'react-icons/lib/fa/calendar'

//methods to do calculations
const percentToDecimal = (decimal) => ((decimal * 100) + '%')

const calculateGoalProgress = (total, goal) => percentToDecimal(total/goal)


//Stateless component: use destructuring to select properties to be used in this fuunction.
export const RunDayCount = ({total, weather, location, goal}) => (//can use () if only returning JSX element
    
    <div className="run-day-count">
            <div className="total-days">
                <span>{total}</span>
                    <Calendar />
                <span> days</span>
            </div>
            <div className="rainy-days">
                <span>{weather}</span>
                    <Run />
                <span> days</span>
            </div>
            <div className="sprint-days">
                <span>{location}</span>
                    <Terrain />
                <span> </span>
            </div>
            <div className="sprint-days">
                <span>{calculateGoalProgress(total, goal)}</span>
            </div>
    </div>
)
