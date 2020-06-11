import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div class="container" id="registration-form">
        <div class="image"></div>
        <div class="frm">
          <h1>Case Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <div class="form-group">
              <h5>First Name:</h5>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter first name"
                  name="firstName"
                  id="firstName"
                  ref={register({ required: "first name required" })}
                />
              </div>
            </div>

            {errors.lastName && <p>{errors.lastName.message}</p>}
            <div class="form-group">
              <h5>Last Name:</h5>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter last name"
                  name="lastName"
                  id="lastName"
                  ref={register({ required: "last name required" })}
                />
              </div>
            </div>

            {errors.emailAddress && <p>{errors.emailAddress.message}</p>}
            <div class="form-group">
              <h5>Email:</h5>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter email"
                  name="emailAddress"
                  id="emailAddress"
                  ref={register({ required: "email address required" })}
                />
              </div>
            </div>

            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            <div class="form-group">
              <h5>Phone Number:</h5>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  id="phoneNumber"
                  ref={register}
                />
              </div>
            </div>

            {errors.locationOfLegalIssue && (
              <p>{errors.locationOfLegalIssue.message}</p>
            )}
            <div class="form-group">
              <h5>Location of Legal Issue:</h5>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter location of legal issue"
                  name="locationOfLegalIssue"
                  id="locationOfLegalIssue"
                  ref={register({
                    required: "location of legal issue required",
                  })}
                />
              </div>
            </div>

            <div class="form-group">
              <button type="submit" class="btn btn-success btn-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
