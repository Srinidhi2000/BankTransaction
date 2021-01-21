import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div className="homepage">
            <header className="masthead" >
               <div className="masthead-subheading">Welcome to our Online Banking system</div>
               <div className="masthead-heading">Your Bank at Your Fingertips</div>
              <Link className="btn btn-primary" to="/dashboard">Start</Link>
       </header>
       </div>
        );
    }
}
export default Home;