import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {SidebarItems} from './SidebarItems';
import './sidebar.css';
import {IconContext} from 'react-icons';
class Sidebar extends Component {
    render(){
        return (
            <div>
                <IconContext.Provider value={{color:'#fff'}}>
            <div className="sidebar">
                        <h1 id='title'>EasyTransc</h1>
                        <h2 id='PageTitle'>{this.props.title}</h2>

            </div>
            <nav className={'nav-menu active'}>
                <ul className='nav-menu-items' >
                    {SidebarItems.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link  to={item.path} >
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
