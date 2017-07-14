import { NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import AddIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListIcon from 'react-icons/lib/fa/table'

export const Menu = () => 
    <nav className="menu">
        <NavLink to="/" activeClassName="selected"><HomeIcon/></NavLink>
        <NavLink to="/list" activeClassName="selected"><ListIcon/></NavLink>
        <NavLink to="/add" activeClassName="selected"><AddIcon/></NavLink>
    </nav>