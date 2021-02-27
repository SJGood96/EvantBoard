import React from "react"
import { NavLink } from 'react-router-dom'
import "../styles/navigation_bar.css"
import Button from "./inputs/Button";
import DropDownItem from "./inputs/DropDownItem";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
 
function NavBar() {
    return (
        <div className="nav_list">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/posts'>All Posts</NavLink></li>
                <li><NavLink to='/create'>Create</NavLink></li>

                <li className="dropdown-format"><Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic" className="categoryText-format">
                        Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Outdoor</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Gaming</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Educational</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Celebration</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Other</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </li>                  
            </ul>
        </div>
    );
}
 
export default NavBar