"use client"
import React from 'react'
import { useState } from 'react';
import useFetch from '../Common/useFetch';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp,faAnglesDown} from "@fortawesome/free-solid-svg-icons";


export default function CareerContent() {
  const {data} =useFetch("https://stackhomme.com/api/jobs")
  const [expandedRows, setExpandedRows] = useState([]);
  const handleRowClick = (jobId) => {
    const isRowExpanded = expandedRows.includes(jobId);
    const newExpandedRows = isRowExpanded
      ? expandedRows.filter((id) => id !== jobId)
      : [...expandedRows, jobId];
    setExpandedRows(newExpandedRows);
  };

  return (
    <section className="careercontent">
        <h2>Work At</h2>
        <h2>The Heart Of Change</h2>
        <p>You’re a talented and motivated individual looking to join a fast-paced organization,</p>
        <p>we’re the right choice for you.</p>
        {data.length===0? <h1>No Job Post Available</h1>: <>
        
        <div className="careerlist">
         {data.map((data,index)=>{
          return(
            <>
            <div className="row" key={index}>
            <h2>{data.postion}</h2>
            <button className="btn btnicon" onClick={() => handleRowClick(data._id)}>{expandedRows.includes(data._id) ? <FontAwesomeIcon icon={faAnglesUp} /> : <FontAwesomeIcon icon={faAnglesDown} />}</button>
            </div>
            {expandedRows.includes(data._id) && (
              <>
              <div className="secondrow">
                <h3>Job Description</h3>
                <p>{data.desc}</p>
                <h3>Experience</h3>
                <ul><li><p>{data.experience}</p></li></ul>
                <h3>Job Type</h3>
                <ul><li><p>{data.jobtype}</p></li></ul>
                <h3>Role</h3>
           
                  {data.role.map((role,role_index) => (
                    <ul key={role_index}>
                      <li><p>{role}</p>
                      </li>
                    </ul>
                  ) )}

               <h3>Requirments</h3>

               {data.requirments.map((requirments,req_index) => (
                    <ul key={req_index}>
                      <li><p>{requirments}</p>
                      </li>
                    </ul>
                  ) )}
             

                 <button className="btn"><a href={data.submitLink}>Apply</a></button>

  </div>
              
              
              
              
              </>
            )}
            </>
          )
         })}
        </div>
        
        </>}

    </section>
  )
}
