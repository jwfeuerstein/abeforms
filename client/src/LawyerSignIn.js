import React, { Component } from "react";
import axios from "axios";
import './App.css';
import { Container } from "semantic-ui-react";


let endpoint = "http://localhost:8080";

class LawyerSignIn extends Component{
    constructor(props){
      super (props);
      this.state = {
        EmailAddress: "",
        Password: "",
      };
    }
    handleChange = (event) =>{
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    onSubmit = () =>{
      
      const { EmailAddress, Password } = this.state;
      axios.post(endpoint + "/lawyerdashboard/api/signin",
        {
          EmailAddress: EmailAddress,
          Password: Password,
        },
        {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
      ).then((response) => {
          console.log(response);
      })
      };
    
    
    render() {
      
        const { EmailAddress, Password } = this.state;
      return (
        <Container>
          <div className="App">
              <div className="container" id="registration-form">
                  <div className="image"></div>
                  <div className="frm">
                      <h1>Create your Abe Legal Account</h1>
                <form onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <h5>Email Address:</h5>
                    <div>
                      <input
                          type="text"
                          class="form-control"
                          placeholder="Enter email address"
                          name= "EmailAddress"
                          id="EmailAddress"
                          onChange={this.handleChange}
                          value = {EmailAddress || ''}
  
                      />
                    </div>
                  </div>
  
  
                  <div class="form-group">
                    <h5>Password:</h5>
                    <div>
                      <input
                          type="password"
                          class="form-control"
                          placeholder="Enter password"
                          name="Password"
                          id="Password"
                          onChange={this.handleChange}
                          value = {Password || ''}
  
                      />
                    </div>
                  </div>
  
                  <div class="form-group">
                    <button type="submit" class="btn btn-success btn-lg">
                      Submit
                    </button>
                  </div>
                  <p>Don't have an account? Click <a href="/lawyerdashboard/sign_up">here</a></p>
                </form>
                  </div>
              </div>
          </div>
          </Container>
      );
    }
  }

export default LawyerSignIn