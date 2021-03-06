import React from 'react';
import { useFormik } from 'formik';
import './FormYup.css';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required('First Name is required.')
      .min(5, 'Minimum 5 characters required'),
    lastName: yup.string()
    .required('Last Name is required')
    .min(5, 'Minimum 5 characters required'),
    emailId: yup
      .string()
      .required('Email ID is required')
      .email('Enter valid email id'),
      organisation: yup.string()
      .required('Organisation is required')
      .min(5, 'Minimum 5 characters required'),
      mobileNumber: yup.number()
      .required('MobileNumber is required')
      .min(5, 'Minimum 5 characters required'),
  });

const FormYup = () =>  {
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
     
    <div className="login-form">  
      
      <form onSubmit={formik.handleSubmit}>  
      <center><h1> Formik with Yup </h1>  </center>
        <div className="form-group">  
          <label> First Name </label>  
           <br/>
            <input type="text"  placeholder="First Name" {...formik.getFieldProps('firstName')} />  
                    
        </div>  
        {renderErrorMessage('firstName')}
        <div className="form-group">  
          <label> Last Name </label>  
          <br/>
            <input type="text"  placeholder="Last Name"{...formik.getFieldProps('lastName')} />  
            
             </div> 
        {renderErrorMessage('lastName')}  
        <div className="form-group">  
          <label> Organisation </label>  
          <br/>
             <input type="text" placeholder=" Organisation" {...formik.getFieldProps('organisation')} />  
          
        </div> 
        {renderErrorMessage('organisation')} 
        <div className="form-group">  
          <label> Email Id </label>  
         <br/>
            <input type="text"  placeholder="Email id"{...formik.getFieldProps('emailId')} />  
              
        </div>  
        {renderErrorMessage('emailId')}  
        <div className="form-group">  
          <label> Mobile Number </label>  
          <br/>
          <input type="number" placeholder='Mobile Number' {...formik.getFieldProps('mobileNumber')} /> 
                  
        </div>
        {renderErrorMessage('mobileNumber')} 
        
        <div>  
         <center> <button type="submit" className="btn-primary"> Submit </button>  </center>
           
        </div>  
      </form>  
    </div>  

  )
}
export default FormYup;