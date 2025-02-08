import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginValidation from './Validations/LoginVal'
import axios from 'axios'
function LoginEmployee() {
  const [values, setValues] = useState({
    id:'',
    password:''
  })
  const navigate = useNavigate()
  const [errors, setErrors] = useState({
  })
  const handleInput =(event)=>{
    setValues(prev => ({...prev, [event.target.id]: [event.target.value]}))
  }
  const handleLogin = (event)=>{
    event.preventDefault();
    setErrors(LoginValidation(values));
    if(errors.id === "" && errors.password ===  "") {
      axios.post('http://localhost:3100/login', values)
      .then(res => {
        if(res.data === 'Login Successful') {
          navigate('/EmployeeHome');
        }else {
          alert('Not register as employee')
        }
      })
      .catch(err => console.log(err));
    }
  }
  return(
    <form onSubmit={handleLogin}>
      <h1>Login Employee</h1>
      <div>
        <label >ID</label>
        <input type="text" name='id' id='id' onChange={handleInput}/>
          {errors.id && <p>{errors.id}</p>}
      </div>
      <div>
        <label >Password</label>
        <input type="password" name='password' id='password' onChange={handleInput}/> 
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <button  onSubmit={handleLogin}>Login</button>
      </div>
    </form>
  )
}
export default LoginEmployee;