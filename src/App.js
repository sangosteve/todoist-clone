import React,{useState,useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import {SideBarProvider} from './components/Sidebar/SidebarContext';
import {AccordionMenuProvider} from './components/AccordionMenu/AccordionMenuContext'
function App() {
 
  return (
    <SideBarProvider>
    <AccordionMenuProvider>
    <div className="App">
     <Header/>
     <Sidebar />
    </div>
    </AccordionMenuProvider>  
    </SideBarProvider>
  )
  
}

export default App;
