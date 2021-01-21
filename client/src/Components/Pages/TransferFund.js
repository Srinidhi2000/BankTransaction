import React,{Component} from 'react';
import Sidebar from '../Common/Sidebar';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
let Fromuser=null;
let toUser=null;
class TransferFund extends Component{
  constructor(props){
    super(props);
    this.state={
      redirect:null,
      error:null,
  isLoaded:false,
    }
  }

 
  render(){
    if(this.props.location.state==null){
      return <Redirect to='/userTransac'/>
    }else{
      const {user1,user2}=this.props.location.state
      Fromuser=user1;
      toUser=user2;
      if(this.state.redirect)
      {return (
        <Redirect to={this.state.redirect}/>
      );}else{
     return(
       <div>
           <Sidebar title="User Transaction"/>
           <div className="pageBody align-start">
  <div style={{width:'100%'}}>
         <div >
         <div><h1>
           Transfer Funds
           </h1></div>
           <hr/></div>
        <br/>
         <h5 style={{display:'inline',fontStyle:'italic'}} className="bold">From :  </h5>
           <h5  style={{display:'inline'}}>{user1.userName}</h5>  
         <br/><br/>
         <h5 style={{display:'inline',fontStyle:'italic'}} className="bold">Account No :  </h5>
         <h5  style={{display:'inline'}}>{user1.accNo}</h5>  
         <br/><br/>
         <h5 style={{display:'inline',fontStyle:'italic'}} className="bold">To :  </h5>
         <h5  style={{display:'inline'}}>{user2.userName}</h5>  
         <br/><br/>
         <h5 style={{display:'inline',fontStyle:'italic'}} className="bold">Account No :  </h5>
         <h5  style={{display:'inline'}}>{user2.accNo}</h5>  
         <br/><br/>
         <h5 className="bold" style={{marginBottom:'16px',fontStyle:'italic'}}>Enter Amount (In INR) :  </h5>
        <Formik
        initialValues={{
          amount:''
        }}
        validationSchema={Yup.object().shape({
          amount:Yup.number().required('Please enter an amount to transfer').min(1,"Amount cant be less than one rupee").max((Fromuser)?Fromuser.balance:Number.MAX_VALUE,"Insuffecient Balance")
        })}
        onSubmit={values=>{
        
        const user1={
          userName: Fromuser.userName,
          accNo: Fromuser.accNo,
          adharNo: Fromuser.adharNo,
          emailID: Fromuser.emailID,
          phoneNo: Fromuser.phoneNo,
          balance: Fromuser.balance-values['amount'],
          address: Fromuser.address,
          createdOn: Fromuser.createdOn,
          transactions:[{
            toUser:toUser.userName,
            toAccNo:toUser.accNo,
            amount:values['amount'],
            transferType:"Debit",
            date:Date(moment().format("DD-MM-YYYY hh:mm:ss"))
          }],
        }
        const user2={
          userName: toUser.userName,
          accNo: toUser.accNo,
          adharNo: toUser.adharNo,
          emailID: toUser.emailID,
          phoneNo: toUser.phoneNo,
          balance: toUser.balance+values['amount'],
          address: toUser.address,
          createdOn: toUser.createdOn,
          transactions:[{
            toUser:Fromuser.userName,
            toAccNo:Fromuser.accNo,
            amount:values['amount'],
            transferType:"Credit",
            date:Date(moment().format("DD-MM-YYYY hh:mm:ss"))
          }],
        }
       
        axios.put(`/userdata/${Fromuser._id}`,user1)
        .then((response)=>{
        
          axios.put(`/userdata/${toUser._id}`,user2)
        .then((response)=>{
          alert("Amount Transferred",JSON.stringify(values['amount']));
         this.setState({
           isLoaded:true,
           redirect:'/userTransac'
         })
        }).catch((error)=>{
          console.log(error)
          alert("Not able to transfer the fund..Try again later!",JSON.stringify(values['amount']));  
          this.setState({
            isLoaded:true,
            redirect:'/userTransac'
          }) 
        });
        }).catch((error)=>{
          console.log(error)
          alert("Not able to transfer the fund..Try again later!",JSON.stringify(values['amount']));
          this.setState({
            isLoaded:true,
            redirect:'/userTransac'
          })
        });        
        }}
        render={({ errors, status, touched }) => (
   
          <Form  id="transferAmt">
          <div className="form-group" >
            <Field 
       className="form-control"
       id="amount"
       type="number"
       placeholder="Enter The Amount To Transfer"
       required="required"
       data-validation-required-message="Please enter the transfer amount." 
       name='amount'
       />
       </div>
       {(errors['amount'])?<p className="help-block text-danger" style={{marginBottom:"0"}}>
       <span> {errors['amount']}</span>
       </p>:null}
       <br/>
            <button className="btn btn-primary  text-uppercase" id="transferAmt" type="submit" >Transfer Fund</button>
            <Link className="btn btn-primary  text-uppercase" id="goback" to='/userTransac' >Back</Link>
             </Form>
       
        )}
        />     
  </div>
  </div>
  </div>
     );   
      } 
    }
     }
}
export default TransferFund;
