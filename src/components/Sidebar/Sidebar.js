import React,{useState,useContext} from "react";
import './Sidebar.css'
import { BsInbox} from "react-icons/bs";
import { BsCalendar} from "react-icons/bs";
import { BsCardChecklist} from "react-icons/bs";
import {SideBarContext} from './SidebarContext';
import AccordionMenu from '../AccordionMenu/AccordionMenu';

function Sidebar(){
    const [sidebar,setSidebar] = useContext(SideBarContext);
    return(
        <div className={sidebar?"side-menu active":"side-menu"} id="sidebar">
            <div id="side-menu-container">
            <ul id="sidebar-nav-menu">

                <li><BsInbox color="#246fe0" className="menu-icon"/>Inbox</li>
                <li><BsCalendar color="#058527"  className="menu-icon"/>Today</li>
                <li><BsCardChecklist  color="#692fc2" className="menu-icon"/>Upcoming</li>

            </ul>
            <AccordionMenu/>
            </div>
        </div>
    )
}


export default Sidebar;