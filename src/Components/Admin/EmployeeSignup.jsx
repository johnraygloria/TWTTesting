import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import './EmployeeSignup.css';
import axios from "axios";
import Validation from '../Validations/SignupVal'

import logotwt from '../../Assets/logo.png'
function EmployeeSignup() {

  const [values, setValues] = useState({
    id:'',
    name:'',
    email:'',
    phone:'',
    password:'',
    date:''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ 
  })
  const handleInput = (event)=>{
    setValues(prev => ({...prev, [event.target.id]: event.target.value}))
  }
  const handleSignup = (event)=>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.id ===  "" && errors.name ===  "" && errors.email ===  "" && errors.phone ===  "" && errors.password ===  "" && errors.cpassword ===  "" && errors.date ===  ""){
      axios.post('http://localhost:3100/signup', values)
      .then(res => 
        navigate('/LoginEmployee')
      )
      .catch(err => console.log(err))
  }
}
  return(
<>
  <div className='signup-container'>
    <div className="signup-twt-main">
      <div className='logo-container'>
        <img className="logo-twt-container" src={logotwt} alt="logo" />
      </div>

        <div className="add-text-twt">
          <span className="desing-twt"></span>
            <h2>Welcome</h2>
          <span className="desing-twt"></span>
        </div>

      <form className="container-form-twt" action="" onSubmit={handleSignup}>
        <div className="containere-form-main-twt">
          <div className="container-form-twt-id">
            <label >ID:</label>
              <input type="text" name="id" id="id" onChange={handleInput}/>
              {errors.id && <span className="error">{errors.id}</span>}
          </div>

          <div className="container-form-twt-id">
            <label >Name:</label>
            <input type="text" id="name" onChange={handleInput}/>
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
        </div>

        <div className="container-form-email-contact">
          <div className="container-form-twt-id">
            <label >Email:</label>
              <input 
                type="email"
                placeholder=''
                id="email"
                onChange={handleInput} />
              {errors.email && <span className="error">{errors.email}</span>}
          </div>
              
          <div className="container-form-twt-id">
            <label >Phone:</label>
            <input type="number" id="phone" onChange={handleInput}/>
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <div className="container-form-password">
          <div className="container-form-twt-id">
            <label >Password:</label>
            <input type="password" id="password" onChange={handleInput}/>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="container-form-twt-id">
            <label >Confirm Password:</label>
            <input type="password" id="cpassword" onChange={handleInput}/> 
            {errors.cpassword && <span className="error">{errors.cpassword}</span>}
          </div>

        </div>
        <div className="container-form-twt-date">
            <label>Start Date:</label>
            <input type="date" id="date" onChange={handleInput} />
            {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div className="form-twt-create">
          <button className="btn-twt-create">Create</button>
        </div>

      </form>
    </div>
  </div>
</> 
  )
}
export default EmployeeSignup;