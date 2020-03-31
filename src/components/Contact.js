import React, {Component} from 'react';
import './Style.css';

class Contact extends Component{

  constructor(props) {
    super(props);
      this.state = {  
      avatar : 'https://cdn.icon-icons.com/icons2/884/PNG/128/person_4_icon-icons.com_68900.png',
      name : 'ilyes',
      status : true,
      msg : "Abdel",
      }
    };

  render(){
    return(
  <div className="Contact">
    <img className = 'avatar' src = {this.state.avatar} alt = ''></img>
    <div className= 'container'>
      <h4 className= 'name' >{this.state.name}</h4>
      <div className = 'status'>
        <p className = "status-online"></p>
        {this.state.status}
        <p className = 'status-text'>{this.state.msg}</p> 
      </div>
    </div>
  </div> 
    );

  }
}

export default Contact;
