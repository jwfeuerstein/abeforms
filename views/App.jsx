import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App(){
    render(){
    const {register,handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
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

export default App;
