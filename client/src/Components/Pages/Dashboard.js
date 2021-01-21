import React, { Component } from 'react';
import Sidebar from '../Common/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'; 
import * as BsIcons from "react-icons/bs";
import {Link} from 'react-router-dom';
import axios from 'axios';
class Dashboard extends Component {
  constructor(props){
super(props);
this.state={
  error:null,
  isLoaded:false,
  datalength:null
};  
  }
  componentDidMount(){
    axios.get('/userdata')
      .then(
          (result) => {
              this.setState({
                  isLoaded : true,
                  datalength : result.data.length
              });
          },
    
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              })
          },
      );
   
    }
 render(){
  return(
  <div>
    <Sidebar title="Dashboard"/>
    <div className="pageBody align-start">
    <Card className='IntroCard'>
  <Card.Img variant="top" src="../assets/img/dashboard.jpg"/>
  <Card.Body>    
    <div style={{display:'flex',flexDirection:'row'}}>
    <div  className='verticalLine'><BsIcons.BsFiles size='24px'color='#d81b60'/><Link to="/userTransac">View list of users</Link></div>    
     {(this.state.datalength>
      0)?<div className='userNum'><div>All Users</div><div className='numUsers'><h4>{this.state.datalength}</h4></div></div>:''}
    </div>
  </Card.Body>
</Card>
    </div>
  </div>
  );
}
}

export default Dashboard;
