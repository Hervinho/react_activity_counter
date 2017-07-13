import Terrain from 'react-icons/lib/md/terrain'
import Run from 'react-icons/lib/md/directions-run'
import Calendar from 'react-icons/lib/fa/calendar'
import Rain from 'react-icons/lib/ti/weather-downpour'
import {PropTypes} from 'react'

export const RunDayRow = ({location, date, hill, street, rain}) => (//can use () if only returning JSX element
    <tr>
        <td>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</td>
        <td>{location}</td>
        <td>{street}</td>
        <td>{(hill) ? <Terrain/> : null}</td>
        <td>{(rain) ? <Rain/> : null}</td>
    </tr>
)

//setting types for all properties
RunDayRow.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired, 
    hill: PropTypes.bool.isRequired, 
    location: PropTypes.string.isRequired, 
    street: PropTypes.string.isRequired,
    rain: PropTypes.bool.isRequired
}