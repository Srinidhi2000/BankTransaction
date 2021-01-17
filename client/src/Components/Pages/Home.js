import React,{Component} from 'react';
import image from '../assets/img/headerbg.jpg';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Home extends Component{
    constructor(){
        super();
        this.state={
                name:"Not yet availabe"
        };
    }
    componentDidMount=()=>{
axios.get("/userdata").then(response=>{
    console.log("Checked"+response.data[1].taskName);
// this.setState({
// name:response.data.taskName
// });
});
    };
    render(){
        return(
            <div className="homepage">
       <nav className="navbar" id="mainNav">
        <div className="container">
            <button className="menubar"  type="button" data-toggle="collapse" data-target="#togglenav" aria-controls="togglenav" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ml-1"></i>
            </button> 
            <div className="collapse navbar-collapse" id="togglenav">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link " to="/services">Services</Link></li>
                    <li className="nav-item"><Link className="nav-link " to="/portfolio">Portfolio</Link></li>
                    <li className="nav-item"><Link className="nav-link " to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link " to="/team">Team</Link></li>
                    <li className="nav-item"><Link className="nav-link " to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
            <header className="masthead" >
               <div className="masthead-subheading">Welcome to our EasyBanking system</div>
               <div className="masthead-heading">Your Bank at Your Fingertips</div>
              <Link className="btn btn-primary" to="/dashboard">Start</Link>
       </header>
       </div>
        );
    }
}
export default Home;