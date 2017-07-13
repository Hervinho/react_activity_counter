import Terrain from 'react-icons/lib/md/terrain'
import Run from 'react-icons/lib/md/directions-run'
import Calendar from 'react-icons/lib/fa/calendar'
import Rain from 'react-icons/lib/ti/weather-downpour'
import {RunDayRow} from './RunDayRow'
import {PropTypes} from 'react'

export const RunDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <td>Date</td>
                <td>Location</td>
                <td>Street</td>
                <td>Hill</td>
                <td>Rain</td>
            </tr>
        </thead>
        <tbody>
            {
                days.map(
                    (day, i) => <RunDayRow key = {i}
                                           {... day} /> 
                        )
            }
        </tbody>
    </table>

)

//setting types for all properties
RunDayList.propTypes = {
    //days: PropTypes.array
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error("RunDayList must be an array")
        }
        else if(!props.days.length){
            return new Error("RunDayList must have at least one item")
        }
        else{
            return null
        }
    }
}