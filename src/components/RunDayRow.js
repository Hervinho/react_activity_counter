import Terrain from 'react-icons/lib/md/terrain'
import Run from 'react-icons/lib/md/directions-run'
import Calendar from 'react-icons/lib/fa/calendar'
import Rain from 'react-icons/lib/ti/weather-downpour'

export const RunDayRow = ({location, date, hill, street, rain}) => (//can use () if only returning JSX element
    <tr>
        <td>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</td>
        <td>{location}</td>
        <td>{street}</td>
        <td>{(hill) ? <Terrain/> : null}</td>
        <td>{(rain) ? <Rain/> : null}</td>
    </tr>
)