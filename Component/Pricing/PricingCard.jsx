
"use client"
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck,faXmark} from "@fortawesome/free-solid-svg-icons";
import { pricingcontent } from '../Common/herocontent';

export default function PricingCard() {
const data = pricingcontent;
   const [popup,setPopup] = useState(false)
const Popupmenu = ()=>{
    setPopup(!popup);
}
  
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
    email: "",
    message: "",
  },
  validationSchema: Yup.object({
    first_name: Yup.string().required("required"),
    last_name: Yup.string().required("required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  }),
  onSubmit: () => {
    sendRequest().then(()=>notify()).finally(()=>formik.resetForm())
    Popupmenu();
  },
});

const sendRequest = async () => {
  
  const res = await axios
    .post("https://stackhomme.com/api/post", {
      first_name: formik.values.first_name,
      last_name:formik.values.last_name,
      email:formik.values.email,
      subject:formik.values.subject,
      message:formik.values.message,
    })
    .catch((error) => {
      setErr(error.response.data.message) 
    })

   
};








  return (
<section className='pricingCard'>
    <div className="pricingcontent">
    <h2>Software Consulting and</h2>
    <h2>Development Services</h2>
    <p>Stack Homme provides comprehensive healthcare software consulting and development services that include everything from idea generation through development completion including quality assurance testing and consultation and deployment support as part of our value proposition.</p>
    </div>
<div className="box-container">
 {data.map((data,index)=>(
  <motion.div
  initial={{opacity: 0,y:200 }}
            whileInView={{opacity: 1,y:0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once:false }}
  
  className="pricing-box" key={index}>
  <div className="pricingtitle">
      <h2>{data.title}</h2>
      <p>{data.tagline}</p>
  </div>
  <div className="pricingoffers">
    {data.offers.map((data,Nindex)=>(
      <p key={Nindex}><span><FontAwesomeIcon icon={faCircleCheck}/></span>{data}</p>
    ))}
     
     
  </div>
  <div className="requestQuote">
      <button className='btn' onClick={Popupmenu} >Get a Free Quote</button>
  </div>
  </motion.div>  
 ))}

<ToastContainer/>


 
</div>
{(popup &&(
    <section className="pricingform">
    
<div className="form-box">
<button className="btn" onClick={Popupmenu}><FontAwesomeIcon className="cross" icon={faXmark} /></button>  
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
      
      </div>
   </section>
))}
</section>
  )
}
