import React from "react";
import axios from "axios";
import './App.css';
import { useForm } from "react-hook-form";

let endpoint = "http://localhost:8080";



function App() {

 const {register,handleSubmit, errors} = useForm();

 const onSubmit = (data) => {axios.post(
    endpoint + "/api/client",
    {
      data
    },
    {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "true"
    }
  }

 ).then(res => {console.log(res);})};
    
    return (
      <div className="App">
      <header>
          Case Form
      </header>
    <form onSubmit={handleSubmit(onSubmit)}>
 
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <div>
      <input type = "text" placeholder="First Name" name="FirstName" ref={register({required: "first name required"})}/>
      </div>
 
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <div>
      <input type = "text" placeholder="Last Name" name="LastName" ref={register({required: "last name required"})}/>
      </div>
 
      {errors.PhoneNumber && <p>{errors.PhoneNumber.message}</p>}
      <div>
      <input type = "text" placeholder="Phone Number" name="PhoneNumber" ref={register}/>
      </div>
 
      {errors.EmailAddress && <p>{errors.EmailAddress.message}</p>}
      <div>
      <input type = "text" placeholder="Email" name="EmailAddress" ref={register({required: "email address required"})}/>
      </div>
 
      {errors.Description && <p>{errors.Description.message}</p>}
      <div>
      <input type = "text" placeholder="Description" name="Description" ref={register}/>
      </div>
 
      {errors.StateOfIssue && <p>{errors.StateOfIssue.message}</p>}
      <div>
      <input type = "text" placeholder="State of Issue" name="StateOfIssue" ref={register({required: "location of legal issue required"})}/>
      </div>
 
      <div>
      <input type="submit" />
      </div>
 
  </form>
  </div>
    )
}


export default App;