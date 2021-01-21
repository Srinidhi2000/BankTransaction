import React,{Component} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import Home from './Components/Pages/Home';
import UserTransaction from './Components/Pages/UserTransaction';
import TransferFund from './Components/Pages/TransferFund';
import UserInfo from './Components/Pages/UserInfo';
import TransactionDetails from './Components/Pages/TransactionDetails';

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
     path='/transferFund'
     component={TransferFund}
    /> 
    <Route
    path='/userInfo'
    component={UserInfo}/>
    <Route
    path='/transactionDetails'
    component={TransactionDetails}/>
   </Router>
    );
  }
}
export default App;
