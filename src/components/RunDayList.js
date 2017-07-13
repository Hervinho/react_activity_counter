import Terrain from 'react-icons/lib/md/terrain'
import Run from 'react-icons/lib/md/directions-run'
import Calendar from 'react-icons/lib/fa/calendar'
import Rain from 'react-icons/lib/ti/weather-downpour'
import {RunDayRow} from './RunDayRow'

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
            {days.map((day, i) => <RunDayRow key = {i}
                                             {... day} /> )}
        </tbody>
    </table>

)