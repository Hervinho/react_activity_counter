import '../stylesheets/ui.scss'

//methods to do calculations
const percentToDecimal = (decimal) => ((decimal * 100) + '%')

const calculateGoalProgress = (total, goal) => percentToDecimal(total/goal)


//Stateless component: use destructuring to select properties to be used in this fuunction.
export const RunDayCount = ({total, weather, location, goal}) => (//can use () if only returning JSX element
    
    <div className="run-day-count">
            <div className="total-days">
                <span>{total}</span>
                <span> days</span>
            </div>
            <div className="rainy-days">
                <span>{weather}</span>
                <span> days</span>
            </div>
            <div className="sprint-days">
                <span>{location}</span>
            </div>
            <div className="sprint-days">
                <span>{calculateGoalProgress(total, goal)}</span>
            </div>
    </div>
)
