import React,{useState,useContext} from 'react';
import './Header.css'
import { IoMenuOutline} from "react-icons/io5";
import {IoHomeOutline} from "react-icons/io5";
import {IoSearchCircleOutline} from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { VscBell} from "react-icons/vsc";
import {SideBarContext} from '../Sidebar/SidebarContext';
function Header(){
    const [sidebar,setSidebar] = useContext(SideBarContext)
    function ToggleMenu(){
        setSidebar(!sidebar);
        
      }
    return(
        <nav>
         <div id="nav-left">
            <IoMenuOutline className="nav-icon" id="Btn-ToggleMenu" onClick={ToggleMenu}/>
            <IoHomeOutline className="nav-icon"/>
            <div id="search-input-wrapper">
                <input placeholder="Find" />
                <FiSearch size="14px" id="icon-search"/>
            </div>
         </div>
         <div id="nav-right">
            <FiPlus className="nav-icon"/>
            <FiTrendingUp className="nav-icon"/>
            <BsQuestionCircle className="nav-icon"/>
            <VscBell className="nav-icon"/>
            <div id="profile-wrapper">
                <span id="image-holder">
                </span>    
            </div>
         </div>
        </nav>
    )
}
export default Header;