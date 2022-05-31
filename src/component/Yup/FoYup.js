import React from 'react';
import { useFormik } from 'formik';
import './FoYup.css';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required('First name is required.')
      .min(5, 'Minimum 5 characters required'),
    lastName: yup.string()
    .required('Last name is required')
    .min(5, 'Minimum 5 characters required'),
    emailId: yup
      .string()
      .required('Email ID is required')
      .email('Enter valid email id'),
      organisation: yup.string()
      .required('organisation is required')
      .min(5, 'Minimum 5 characters required'),
      mobileNumber: yup.number()
      .required('mobileNumber is required')
      .min(5, 'Minimum 5 characters required'),
  });

const FoYup = () =>  {
    const formik = useFormik({  
        initialValues: {  
          firstName: '',  
          lastName: '',  
          organisation:'',
          emailId: '',  
          mobileNumber: '',  
          
        },  
        onSubmit: values => {  
          alert(  
            'Registration Form Submitted \n ' + JSON.stringify(values, null, 2)  
          );  
          formik.resetForm();  
        },  
        validationSchema: validationSchema  
      });  
      
      const renderErrorMessage = field => {  
        return (  
          formik.touched[field] && (  
            <div className="text-error">{formik.errors[field]}</div>  
          )  
        );  
      };     
  return (
    <div className="root">  
    <div className="form login-form">  
      <h1> Formik with Yup </h1>  
      <form onSubmit={formik.handleSubmit}>  
        <div className="form-group">  
          <label> First Name </label>  
          <div>  
            <input type="text" {...formik.getFieldProps('firstName')} />  
            {renderErrorMessage('firstName')}  
          </div>  
        </div>  
        <div className="form-group">  
          <label> Last Name </label>  
          <div>  
            <input type="text" {...formik.getFieldProps('lastName')} />  
            {renderErrorMessage('lastName')}  
          </div>  
        </div> 
        <div className="form-group">  
          <label> Organisation </label>  
          <div>  
            <input type="text" {...formik.getFieldProps('organisation')} />  
            {renderErrorMessage('organisation')}  
          </div>  
        </div> 
        <div className="form-group">  
          <label> Email Id </label>  
          <div>  
            <input type="text" {...formik.getFieldProps('emailId')} />  
            {renderErrorMessage('emailId')}  
          </div>  
        </div>  
        <div className="form-group">  
          <label> Mobile Number </label>  
          <div>
          <input type="number" {...formik.getFieldProps('mobileNumber')} /> 
          {renderErrorMessage('mobileNumber')} 
        </div>  
        </div>
       
        
        <div>  
          <button type="submit" className="btn-primary">  
            Submit  
          </button>  
           
        </div>  
      </form>  
    </div>  
   
  </div>
  )
}
export default FoYup;