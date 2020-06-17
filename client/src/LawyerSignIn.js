import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Container, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import abeLogo from "./abeLogo.png";

let endpoint = "http://localhost:8080";

class LawyerSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmailAddress: "",
      Password: "",
      redirect: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onPress = () => {
    const { EmailAddress, Password } = this.state;
    axios
      .post(
        endpoint + "/lawyerdashboard/api/signin",
        {
          EmailAddress: EmailAddress,
          Password: Password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        this.getAuthentication();
      });
  };

  getAuthentication = () => {
    axios.get(endpoint + "/lawyerdashboard/api/signin").then((res) => {
      if (res.data) {
        this.setState({ redirect: true });
      }
    });
  };

  render() {
    const { EmailAddress, Password } = this.state;
    if (this.state.redirect) {
      return <Redirect to={"/lawyerdashboard"} />;
    }
    return (
      <Container>
        <div className="App">
          <img src={abeLogo} className="logo" alt="logo"></img>
          <div>
            <h2>BLANK</h2>
            <h1>Sign In</h1>
            <h3>To continue to your dashboard</h3>
            <div>
              <form onSubmit={this.onSubmit}>
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

                <div>
                  <button type="submit" class="formButton">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p>
            Don't have an account? Create one{" "}
            <a href="/lawyerdashboard/sign_up">here</a>
          </p>
        </div>
      </Container>
    );
  }
}

export default LawyerSignIn;
