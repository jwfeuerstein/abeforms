import React, { Component } from "react";
import axios from "axios";
import { Card, Icon } from "semantic-ui-react";
import './App.css';
import { useForm } from "react-hook-form";

let endpoint = "http://localhost:8080";

class Clients extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      items: []
    };
  }

  componentDidMount() {
    this.getTask();
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = () => {
    let { task } = this.state;
    // console.log("pRINTING task", this.state.task);
    if (task) {
      axios
        .post(
          endpoint + "/api/task",
          {
            task
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          this.getTask();
          this.setState({
            task: ""
          });
          console.log(res);
        });
    }
  };

  getTask = () => {
    axios.get(endpoint + "/api/task").then(res => {
      console.log(res);
      if (res.data) {
        this.setState({
          items: res.data.map(item => {
            let color = "yellow";

            if (item.status) {
              color = "green";
            }
            return (
              <Card key={item._id} color={color} fluid>
                <Card.Content>
                  <Card.Header textAlign="left">
                    <div style={{ wordWrap: "break-word" }}>{item.task}</div>
                  </Card.Header>

                  <Card.Meta textAlign="right">
                    <Icon
                      name="check circle"
                      color="green"
                      onClick={() => this.updateTask(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Done</span>
                    <Icon
                      name="undo"
                      color="yellow"
                      onClick={() => this.undoTask(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Undo</span>
                    <Icon
                      name="delete"
                      color="red"
                      onClick={() => this.deleteTask(item._id)}
                    />
                    <span style={{ paddingRight: 10 }}>Delete</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            );
          })
        });
      } else {
        this.setState({
          items: []
        });
      }
    });
  };
  
  render() {
    const {register,handleSubmit, errors} = useForm();

    const onSubmit = (data) => {console.log(data)}
    
    return (
        <div className="App">
        <header>
            Case Form
        </header>
    <form onSubmit={handleSubmit(onSubmit)}>

        {errors.firstName && <p>{errors.firstName.message}</p>}
        <div>
        <input type = "text" placeholder="First Name" name="firstName" ref={register({required: "first name required"})}/>
        </div>

        {errors.lastName && <p>{errors.lastName.message}</p>}
        <div>
        <input type = "text" placeholder="Last Name" name="lastName" ref={register({required: "last name required"})}/>
        </div>

        {errors.emailAddress && <p>{errors.emailAddress.message}</p>}
        <div>
        <input type = "text" placeholder="Email" name="emailAddress" ref={register({required: "email address required"})}/>
        </div>

        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        <div>
        <input type = "text" placeholder="Phone Number" name="phoneNumber" ref={register}/>
        </div>

        {errors.locationOfLegalIssue && <p>{errors.locationOfLegalIssue.message}</p>}
        <div>
        <input type = "text" placeholder="Location of Legal Issue" name="locationOfLegalIssue" ref={register({required: "location of legal issue required"})}/>
        </div>

        <div>
        <input type="submit" />
        </div>

    </form>
    </div>
    );
  }
}

export default Clients;