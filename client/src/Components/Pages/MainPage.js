import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import Dashboard from './Dashboard';
import PaymentRequest from './PaymentRequest';
import UserTransaction from './UserTransaction';

class MainPage extends Component{
render(){
    return(
       <Router>
           <Sidebar/> 
         
  
           
       </Router>
    );
}
}
export default MainPage;