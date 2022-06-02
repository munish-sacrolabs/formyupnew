import React from "react";
import { Form, Field } from "react-final-form";
import "./FinalForm.css";

const FinalForm = () => {
  const initialData = {
    email: "",
    password: "",
    username: "",
    organisation: "",
    phone: "",
  };

  const onSubmit = (e) => {};

  const validate = (e) => {
    const errors = {};
    if (e.firstname && e.firstname.length < 3)
      errors.firstname = <p className="error">Too Small</p>;

    if (e.lastname && e.lastname.length < 3)
      errors.lastname = <p className="error">Too Small</p>;

    if (e.organisation && e.organisation.length < 3)
      errors.organisation = <p className="error">Too Small</p>;

    if (e.phone && e.phone.length < 10)
      errors.phone = <p className="error">enter valid Format</p>;

    if (!e.firstname) {
      errors.firstname = <p className="error">First Name Required</p>;
    }
    if (!e.lastname) {
      errors.lastname = <p className="error">Last Name Required</p>;
    }
    if (!e.email) {
      errors.email = <p className="error">Email Required</p>;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)) {
      errors.email = "Invalid email address";
    }
    if (!e.organisation) {
      errors.organisation = <p className="error">Organisation Required</p>;
    }
    if (!e.phone) {
      errors.phone = <p className="error">Phone Required</p>;
    }

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="login-form">
            <center><h1>Final Form</h1></center>
          <Field name="firstname">
            {({ input, meta }) => (
              <div>
                <label>First name</label>
                <input type="text" {...input} placeholder="First Name" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="lastname">
            {({ input, meta }) => (
              <div>
                <label>Last Name</label>
                <input type="text" {...input} placeholder="Last Name" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="organisation">
            {({ input, meta }) => (
              <div>
                <label>Organisation Name</label>
                <input type="text" {...input} placeholder="Organisation" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input type="text" {...input} placeholder="Email" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
         
          <Field name="phone">
            {({ input, meta }) => (
              <div>
                <label>Phone Number</label>
                <input type="text" {...input} placeholder="Phone Number" maxLength="10" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <center><button type="submit">Submit</button></center>
        </form>
      )}
    />
  );
};
export default FinalForm;
