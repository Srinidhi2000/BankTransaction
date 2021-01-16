import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import Home from './Components/Pages/Home';
import PaymentRequest from './Components/Pages/PaymentRequest';
import UserTransaction from './Components/Pages/UserTransaction';

class App extends Component{
  render(){
    return(
      <Router>    
      <Route
      path='/'
      exact={true}
      component={Home}
    />

    <Route
     path='/dashboard'
     component={Dashboard}
   />
   <Route
     path='/userTransac'
     component={UserTransaction}
   />
   <Route
     path='/payRequest'
     component={PaymentRequest}
   />
   <Route
     path='/userUpdate'
     component={UserTransaction}
   />
   </Router>
    );
  }
}
export default App;
