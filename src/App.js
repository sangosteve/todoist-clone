import React,{useState,useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Modal } from 'react-bootstrap';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import {SideBarProvider} from './components/Sidebar/SidebarContext';
import {AccordionMenuProvider} from './components/AccordionMenu/AccordionMenuContext'
import Today from './pages/Today/Today';
import Inbox from './pages/Inbox/Inbox'; 
import Upcoming from './pages/Upcoming/Upcoming';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Router>
    <SideBarProvider>
    <AccordionMenuProvider>
    <div className="App">
     <Header/>

     <div id="app-content-wrapper">
     <Sidebar />
     <div id="page-content-wrapper">
       <Switch>
       <Route path="/" exact component={Today}/>
       <Route path="/inbox" component={Inbox}/>
         <Route path="/today" component={Today}/>
         <Route path="/upcoming" component={Upcoming}/>
       </Switch>
      </div>
     </div>
    </div>
    </AccordionMenuProvider>  
    </SideBarProvider>
    </Router>
  )
  
}

export default App;
