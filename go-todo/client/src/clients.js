import React, { Component } from "react";
import axios from "axios";
import './App.css';

let endpoint = "http://localhost:8080";



 
class Clients extends Component{
  constructor(props){
    super (props);
    this.state = {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      EmailAddress: "",
      Description: "",
      StateOfIssue: "",
    };
  }
  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit = () =>{
    
    const { FirstName, LastName, PhoneNumber, EmailAddress, Description, StateOfIssue } = this.state;
    axios.post(endpoint + "/api/client",
      {
        FirstName: FirstName,
        LastName: LastName,
        PhoneNumber: PhoneNumber,
        EmailAddress: EmailAddress,
        Description: Description,
        StateOfIssue: StateOfIssue
      },
      {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
    ).then(res => console.log(FirstName));
    };
  
  
  render() {
    
    const { FirstName, LastName, PhoneNumber, EmailAddress, Description, StateOfIssue } = this.state;
    return (
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <form onSubmit={this.onSubmit}>
                <div className="field">
                  <label className="label">First Name</label>
                  <div className="control">
                    <input className="input" type="text" name="FirstName" onChange={this.handleChange} value={FirstName || ''} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Last Name</label>
                  <div className="control">
                    <input className="input" type="text" name="LastName" onChange={this.handleChange} value={LastName || ''} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Phone Number</label>
                  <div className="control">
                    <input className="input" type="text" name="PhoneNumber" onChange={this.handleChange} value={PhoneNumber || ''} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email Address</label>
                  <div className="control">
                    <input className="input" type="email" name="EmailAddress" onChange={this.handleChange} value={EmailAddress || ''} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <input className="input" type="text" name="Description" onChange={this.handleChange} value={Description || ''} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">State Of Issue</label>
                  <div className="control">
                    <input className="input" type="text" name="StateOfIssue" onChange={this.handleChange} value={StateOfIssue || ''} required />
                  </div>
                </div>
                <button type="submit" className="button is-block is-info is-fullwidth">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
 
 
export default Clients;