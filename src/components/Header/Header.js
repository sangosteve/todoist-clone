import React,{useState,useContext} from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import { IoMenuOutline} from "react-icons/io5";
import {IoHomeOutline} from "react-icons/io5";
import {IoSearchCircleOutline} from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { VscBell} from "react-icons/vsc";
import { Button,Modal } from 'react-bootstrap'
import {SideBarContext} from '../Sidebar/SidebarContext';
function Header(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [sidebar,setSidebar] = useContext(SideBarContext)
    function ToggleMenu(){
        setSidebar(!sidebar);
        
      }
    return(
        <navmenu>
         <div id="nav-left">
            <IoMenuOutline className="nav-icon" id="Btn-ToggleMenu" onClick={ToggleMenu}/>
            <Link to="/today"> <IoHomeOutline className="nav-icon"/></Link>
            <div id="search-input-wrapper">
                <input placeholder="Find" />
                <FiSearch size="14px" id="icon-search"/>
            </div>
         </div>
         <div id="nav-right">
            <FiPlus className="nav-icon" onClick={handleShow}/>
            <FiTrendingUp className="nav-icon"/>
            <BsQuestionCircle className="nav-icon"/>
            <VscBell className="nav-icon"/>
            <div id="profile-wrapper">
                <span id="image-holder">
                </span>    
            </div>
         </div>

         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        </navmenu>
    )
}
export default Header;