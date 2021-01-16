import React, { Component } from 'react'
import Sidebar from '../Common/Sidebar';

class Dashboard extends Component {
  constructor(props){
super(props);
this.state={
  error:null,
  isLoaded:false,
  data:[]
};  
}
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then( response => response.json())
  .then(
      (result) => {
          this.setState({
              isLoaded : true,
              data : result
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
renderTransactionHeader() {
  let header = Object.keys(this.state.data[0])
  return header.map((key, index) => {
     return key.toUpperCase()=='USERID'?null:<th key={index}>{key.toUpperCase()}</th>
  })
}
renderTransactionData() {
  return this.state.data.map((user) => {
      const { id, title, body} = user
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{title}</td>
           <td>{body}</td>
        </tr>
     )
  })
}
 render(){
  const {error, isLoaded, data} = this.state;
  if(error){
    return <div>
      <Sidebar title="Dashboard"/>
      Error in loading</div>
}else if (!isLoaded) {
    return <div>
     <Sidebar title="Dashboard"/>
      Loading ...</div>
}else{
  return(
      <div>
         <Sidebar title= "Dashboard"/>
          {/* <ol className='userTransactions'>
          {
              data.map(user => (
                  <li key={user.id} align="start">
                      <div>
                          <p>{user.title}</p>
                          <p>{user.body}</p>
                      </div>
                  </li>
              ))
          }
          </ol> */}
          <div className='pageBody'>
          <table id='users'>
            <tbody>
              <tr>
                {this.renderTransactionHeader()}
              </tr>
              {this.renderTransactionData()}
            </tbody>
          </table>
          </div>
         
      </div>
  );
}    
 }
}

export default Dashboard;
