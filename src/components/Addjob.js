import React, { useState } from 'react'
import { MdAssignmentAdd } from "react-icons/md";



export default function Addjob() {
  const [company,setCompany]=useState('')
  const [jobrole,setJobrole]=useState('')
  const [dateapplied,setDateapplied]=useState('')
  const [jobstatus,setJobstatus]=useState('')
  const [notes,setNotes]=useState('')


  
  return (
    <div style={{display:'flex',justifyContent:'center'}}>

   
    <div className='Job-container' style={{display:'flex', justifyContent:'flex-start',flexDirection:'column',height:'350px',width:'70%',border:'5px solid #66b2b2', borderRadius:'20px'}}>
    
    <div className='wrapper' style={{display:'flex',justifyContent:'center',margin:'30px'}}>
    <MdAssignmentAdd size={40} color={'#008080'}/>
      <h1>Add Application</h1>
    </div>

    <div >
    <form style={{display:'flex',justifyContent:'space-around',flexWrap: 'wrap',gap:'90px'}}>
      <label>
        Company:
        <input
          type="text"
          value={company}
          onChange={(e)=>setCompany(e.target.value)}
          required/>
      </label>

      <label>
        Job Role:
        <input
          type="text"
          value={jobrole}
          onChange={(e)=>setJobrole(e.target.value)}
          required/>
      </label>

      <label>
        Date Applied:
        <input
          type="date"
          value={dateapplied}
          onChange={(e)=>setDateapplied(e.target.value)}
          required/>
      </label>

      <label>
        Status


        <select
          value={jobstatus}
          onChange={(e) => setJobstatus(e.target.value)}
          required
        >
          <option value="">Select Status</option>
          <option value="Rejected">Rejected</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="No reply">No reply</option>
          <option value="In Review">In Review</option>
        </select>
        
      </label>


      <label>
        Additional Notes
        <textarea
          type="text"
          value={notes}
          onChange={(e)=>setNotes(e.target.value)}
          required/>
      </label>



    </form>


    </div>

    

   
      
    </div>
    </div>
  )
}
