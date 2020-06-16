import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Container } from "semantic-ui-react";
import abeLogo from "./abeLogo.png";

let endpoint = "http://localhost:8080";

class LawyerSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      EmailAddress: "",
      StateOfLicense: "",
      Expertise: "",
      Password: "",
      RetypePassword: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = () => {
    const {
      FirstName,
      LastName,
      PhoneNumber,
      EmailAddress,
      StateOfLicense,
      Expertise,
      Password,
      RetypePassword,
    } = this.state;
    axios
      .post(
        endpoint + "/lawyerdashboard/sign_up/api/signup",
        {
          FirstName: FirstName,
          LastName: LastName,
          PhoneNumber: PhoneNumber,
          EmailAddress: EmailAddress,
          StateOfLicense: StateOfLicense,
          Expertise: Expertise,
          Password: Password,
          RetypePassword: RetypePassword,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => console.log(FirstName));
  };

  render() {
    const {
      FirstName,
      LastName,
      PhoneNumber,
      EmailAddress,
      StateOfLicense,
      Expertise,
      Password,
      RetypePassword,
    } = this.state;
    return (
      <Container>
        <div className="App">
          <img src={abeLogo} className="logo" alt="logo"></img>
          <div>
            <h2>BLANK</h2>
            <h1>Create your account</h1>
            <h3>To register as an Abe Counsel, fill in info below</h3>
            <div>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="FirstName">First Name</label>
                  <input
                    type="text"
                    id="FirstName"
                    class="formStyle"
                    placeholder=""
                    name="FirstName"
                    onChange={this.handleChange}
                    value={FirstName || ""}
                  />
                </div>

                <div className="form-group">
                  <label for="LastName">Last Name</label>
                  <input
                    type="text"
                    class="formStyle"
                    placeholder=""
                    name="LastName"
                    onChange={this.handleChange}
                    value={LastName || ""}
                  />
                </div>

                <div className="form-group">
                  <label for="EmailAddress">Email Address</label>
                  <input
                    type="email"
                    name="EmailAddress"
                    id="EmailAddress"
                    class="formStyle"
                    placeholder=""
                    onChange={this.handleChange}
                    value={EmailAddress || ""}
                  />
                </div>

                <div className="form-group">
                  <label for="PhoneNumber">Phone Number</label>
                  <input
                    type="text"
                    name="PhoneNumber"
                    id="PhoneNumber"
                    class="formStyle"
                    placeholder=""
                    onChange={this.handleChange}
                    value={PhoneNumber || ""}
                  />
                </div>

                <div className="form-group">
                  <label for="StateOfLicense">State of License</label>
                  <input
                    type="text"
                    id="StateOfLicense"
                    name="StateOfLicense"
                    class="formStyle"
                    placeholder=""
                    onChange={this.handleChange}
                    value={StateOfLicense || ""}
                  />
                </div>

                <div className="form-group">
                  <label for="Expertise">Area of Expertise</label>
                  <input
                    type="text"
                    id="Expertise"
                    name="Expertise"
                    class="formStyle"
                    placeholder=""
                    onChange={this.handleChange}
                    value={Expertise || ""}
                  />
                </div>

                <div className="form-group">
                  <label for="Password">Password</label>
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    class="formStyle"
                    placeholder=""
                    onChange={this.handleChange}
                    value={Password || ""}
                  />
                </div>

                <div className="form-group">
                  <label for="RetypePassword">Confirm Password</label>
                  <input
                    type="password"
                    name="RetypePassword"
                    class="formStyle"
                    placeholder=""
                    onChange={this.handleChange}
                    value={RetypePassword || ""}
                  />
                </div>

                <div>
                  <a type="submit" class="formButton">
                    Submit
                  </a>
                </div>

                <div>
                  <p>
                    Already have an account? Click{" "}
                    <a href="/lawyerdashboard">here</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default LawyerSignUp;
