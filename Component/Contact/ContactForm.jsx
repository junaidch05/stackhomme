"use client"
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from '../../public/contact.webp'
import Image from "next/image";


export default function ContactForm() {
  const notify = () => {
    toast.success('Your message has been sent. Thank you.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });



  };
  const [err, setErr] = useState();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      subject:"",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("required"),
      last_name: Yup.string().required("required"),
      subject: Yup.string().required("required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: () => {

      sendRequest().then(()=>notify()).finally(()=>formik.resetForm())

    },
  });

  const sendRequest = async () => {
    
     await axios
      .post("https://stackhomme.com/api/post", {
        first_name: formik.values.first_name,
        last_name:formik.values.last_name,
        email:formik.values.email,
        subject:formik.values.subject,
        message:formik.values.message,
      })
      .catch((error) => {
        setErr(error.response) 
      })

     
  };

  return (
    <section className="form-holder">
       <h2>Let’s build something awesome together.</h2>
        <p>We’d love to discuss your ideas and look forward to bring them to life!</p>
      <div className="row">
          <div className="row-image">
            <Image src={contact} alt="contact us" className="img" />
          </div>
           
        <form onSubmit={formik.handleSubmit}>

          <div className="inputbox">
          <input
            type="text"
            name="first_name"
            id="firstname"
            placeholder="First Name"
            className="input"
            autoComplete="on"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.first_name && formik.errors.first_name ?<h4 className='error'>{formik.errors.first_name}</h4>:null}
         
          <input
            type="text"
            name="last_name"
            id="lastname"
            placeholder="Last Name"
            className="input"
            autoComplete="on"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.last_name && formik.errors.last_name ?<h4 className='error'>{formik.errors.last_name}</h4>:null}

          </div>
         
          <div className="inputbox">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="input"
            autoComplete="on"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.email && formik.errors.email ?<h4 className='error'>{formik.errors.email}</h4>:null}
           <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="input"
            autoComplete="on"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.subject && formik.errors.subject ?<h4 className='error'>{formik.errors.subject}</h4>:null}
        
          </div>
         
      
          <textarea
            name="message"
            id="msg"
            placeholder="Write your message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
           {formik.touched.message && formik.errors.message ?<h4 className='error'>{formik.errors.message}</h4>:null}
           {err?<h4 className='error'>{err}</h4>:null}
          <input type="submit" value="Submit" className="btn submit" />
         
        </form>
        <ToastContainer/>
      </div>
    </section>
  );
}