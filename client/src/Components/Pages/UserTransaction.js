import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import {Button} from 'react-bootstrap';
import axios from 'axios';

class UserTransaction extends Component{
    constructor(props){
        super(props);
this.state={
  error:null,
  isLoaded:false,
  data:[],
  selectedUser1:null,
  selectedUser2:null,
  readyToTransfer:false,
  redirect:null
};  
}

AddTransaction=(e,user)=>{
  e.stopPropagation();
  if(this.state.selectedUser1==null){
    var filteredArray = this.state.data.filter(function(element) { return element.accNo !== user.accNo; }); 
    this.setState({
      data:filteredArray,
      selectedUser1:user
    });


  }else{
this.setState({
  selectedUser2:user,
  readyToTransfer:true,
  redirect:{    
      pathname: '/transferFund',
      state: { user1: this.state.selectedUser1 ,user2:user}
  }
})
  }
}
componentDidMount(){
  axios.get('https://easytransc.herokuapp.com//userdata')
    .then(
        (result) => {
            this.setState({
                isLoaded : true,
                data : result.data
            });
        },
  
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        },
    )
 
 
  }
getUserDetails(e,userdata){

  this.setState({
    redirect:{
      pathname:'/userInfo',
      state:{
        user:userdata
      }
    }
  })
}
  renderTransactionHeader() {
    let header=["S.No","Name","Acc.No","Balance","Actions"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  renderTransactionData() {
    return this.state.data.map((user,index) => {
        const { _id, userName, accNo,balance} = user
        
          return (
            <tr key={_id} user-info={user} onClick={(e)=>this.getUserDetails(e,user)}>
               <td>{index+1}</td>
               <td>{userName}</td>
               <td>{accNo}</td>
               <td>{balance}</td>
               <td>
                 <Button className='shadow-none' onClick={(e)=>this.AddTransaction(e,user)}>Transfer</Button>
               </td>
            </tr>
         );
    })
  }
  
render(){
    const {error, isLoaded, redirect} = this.state;
   if(redirect){
return <Redirect to={redirect}/>
   }
   else if(error){
      return <div>
        <Sidebar title="User Transaction"/>
       <div className="pageBody"> Error in loading</div></div>
  }else if (!isLoaded) {
      return <div>
       <Sidebar title="User Transaction"/>
        <div className="pageBody">
        Loading ...
          </div></div>
  }else{
    return(
        <div>
           <Sidebar title= "User Transaction"/>
            <div className='pageBody'>
             <div id="pageContent">
             <div>
             <h3 className='transferFundTitle'>
               {(this.state.selectedUser1!=null&&this.state.selectedUser2==null)?`Transfer fund from ${this.state.selectedUser1.userName} to :`:'Registered Users'}
             </h3>
             </div>   
             <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <table id='users' style={{width:'80%'}}>
              <tbody>
                <tr>
                  {this.renderTransactionHeader()}
                </tr>
                {this.renderTransactionData()}
              </tbody>
            </table>
            </div>
            </div>      
            </div>
            </div>
    );
  }
}
}
export default UserTransaction;
