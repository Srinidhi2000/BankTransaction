import React,{Component, useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarItems} from './SidebarItems';
import * as IoIcons from "react-icons/io";
import * as IoIcons5 from "react-icons/io5";
import './sidebar.css';
import {IconContext} from 'react-icons';
class Sidebar extends Component {

    render(){
        //const [sidenavbar,setSideBar]= useState(false);
       // const displaySideBar=()=> setSideBar(!sidenavbar);
        return (
            <div>
                <IconContext.Provider value={{color:'#fff'}}>
            <div className="sidebar">
                          {/* { <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={displaySideBar}/>
                        </Link> } */}
                        <h1 id='title'>EasyTransc</h1>
                        <h2 id='PageTitle'>{this.props.title}</h2>

            </div>*/
            <nav className={'nav-menu active'}>
                <ul className='nav-menu-items' >
                    {/* <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                        <IoIcons.IoMdArrowBack size='24px'/>
                        </Link>
                    </li> */}
                    {SidebarItems.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path} >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
            </div>
        );
    }
    
}

export default Sidebar
