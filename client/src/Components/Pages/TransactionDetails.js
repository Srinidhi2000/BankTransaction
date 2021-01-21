import React,{Component} from 'react';
import Sidebar from '../Common/Sidebar';
import {Link,Redirect} from 'react-router-dom';
import {Card} from 'react-bootstrap'; 
import moment from 'moment';
import * as FiIcons from "react-icons/fi";
class TransactionDetails extends Component{

    renderTransactionHeader() {
        let header=["S.No","Paid To", "Account No","Transaction Type", "Amount",  "Date"]
        return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
        })
      }
    renderTransactionInfo(user){
        return user.transactions.map((data,index) => {
            const {toUser,
                toAccNo,
                amount,
                transferType,
                date} = data
              return (
                <tr key={index}>
                   <td>{index+1}</td>
                   <td>{toUser}</td>
                   <td>{toAccNo}</td>
                   <td>{transferType}</td>
                   <td>{amount}</td>
                   <td>{moment(date).format("DD-MM-YYYY")}</td>
                </tr>
             );
        })
         }
    render(){      
      if(this.props.location.state==null){
        return <Redirect to='/userTransac'/>
      }else{ 
           const {user}=this.props.location.state;
              return(
                  <div>
                  <Sidebar title="Transaction Details"/>
                  <div className="pageBody align-start">
         <div style={{width:'100%'}}>
                <div >
                <div><h1>
                  Transactions
                  </h1></div>
                  <hr/></div>
               <br/>
               <Card style={{ width: '100%'}}>
        <Card.Body>
            <br/>
            <Card.Title className="align-left" style={{marginBottom:'2rem'}}>Transaction report for {user.userName} (A/c No.{user.accNo})</Card.Title>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>   
        {(user.transactions.length>0)?
       <table id='users' style={{width:'80%'}}>
       <tbody>
       <tr>
     {this.renderTransactionHeader()}
   </tr>
         {this.renderTransactionInfo(user)}
       </tbody>
     </table>:
     <div><FiIcons.FiClock size='30px' color='#d81b60'/><h4  style={{display:'inline',marginLeft:'12px'}}>No Transactions Yet</h4> </div>
      }       
                  </div>
                  <br/><br/>
                  <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                  <Link className="btn btn-primary  text-uppercase" id="goback" to='/userTransac'>Back</Link></div>
                 
        </Card.Body>
      </Card>
               </div>
               </div>
               </div>
              );
    }}
}export default TransactionDetails;