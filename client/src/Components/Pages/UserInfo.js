import React,{Component} from 'react';
import Sidebar from '../Common/Sidebar';
import {Card} from 'react-bootstrap'; 
import {Link,Redirect} from 'react-router-dom';
class UserInfo extends Component{
    renderUserInfo(user){
        const userKeys=["Name", "Account No","Current balance","Acc Created On", "Email ID",  "Phone No", "Adhar No", "Address","Total transactions"]
        const userInfo=[
            user.userName,
           user.accNo,
           user.balance,
            user.createdOn,
           user.emailID,
           user.phoneNo,
           user.adharNo,
           user.address,
           user.transactions.length
    ]
       return userKeys.map((val,index)=>{
return <tr key={index}>
<td><div>{val}<div style={{display:'inline'}}> :</div></div></td>
<td>{userInfo[index]}</td>
</tr>
       })  
         }
    render(){
      if(this.props.location.state==null){
        return <Redirect to='/userTransac'/>
      }else{
        const {user}=this.props.location.state;
        return(
            <div>
            <Sidebar title="User Info"/>
            <div className="pageBody align-start">
   <div style={{width:'100%'}}>
          <div >
          <div><h1>
            User Details
            </h1></div>
            <hr/></div>
         <br/>
         <Card  style={{ width: '100%', height:'100%'}}>
  <Card.Body>
    <Card.Title className="userInfoCard"><Link className="btn btn-primary  text-uppercase" to={{pathname:'/transactionDetails',state:{user:user}}}>Transaction details</Link></Card.Title>
    <table id='userInfo' style={{width:'100%'}}>
              <tbody>
                {this.renderUserInfo(user)}
              </tbody>
            </table>
   
  </Card.Body>
</Card>
         </div>
         </div>
         </div>
        );}
}}
export default UserInfo;