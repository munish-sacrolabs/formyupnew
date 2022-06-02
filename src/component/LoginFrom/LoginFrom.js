import React from "react";
import { useForm } from "react-hook-form";
import './FinalForm.css';
const LoginFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    
    <div className="login-form">
     
           <form onSubmit={handleSubmit(onSubmit)}>
      
        <div >
          <center><h1>Simple Login Form</h1></center>
          <div className="form-control">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="firstname"
              className={`${errors.firstName && "invalid"}`}
              {...register("firstName", { required: "Required" })}
              onKeyUp={() => {
                trigger("firstName");
              }}
            />
            {errors.firstName && (
              <p style={{ color: "red" }}>{errors.firstName.message}</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="firstName">Last Name</label>
            <input
              type="text"
              placeholder="lastname"
              className={`${errors.lastName && "invalid"}`}
              {...register("lastName", { required: "Required" })}
              onKeyUp={() => {
                trigger("lastName");
              }}
            />
            {errors.lastName && (
              <p style={{ color: "red" }}>{errors.lastName.message}</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="organisationName">Organisation Name</label>
            <input
              type="text"
              placeholder="Organisation"
              className={`${errors.organisationName && "invalid"}`}
              {...register("organisationName", { required: "Required" })}
              onKeyUp={() => {
                trigger("organisationName");
              }}
            />
            {errors.organisationName && (
              <p style={{ color: "red" }}>{errors.organisationName.message}</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="organisationName">Email:</label>
            <input
              type="text"
              placeholder="Enter the email"
              className={`form-control ${errors.email && "invalid"}`}
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="firstName">Phoneno</label>
            <input
              type="text"
              placeholder="Phoneno"
              className={`form-control ${errors.phone && "invalid"}`}
              {...register("phoneNumber", {
                required: "Required",
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
              })}
              onKeyUp={() => {
                trigger("phoneNumber");
              }}
            />
            {errors.phoneNumber && (
              <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
            )}
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginFrom;
