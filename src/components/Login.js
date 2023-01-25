import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import noteContext from '../context/notes/noteContext'



const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const context = useContext(noteContext)
  const {swalAlert} = context
  let navigate = useNavigate();


const handleSubmit = async (e) => {
    e.preventDefault();
    //   fetch()
    // API Call 
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      swalAlert("success","Login successfully")
      navigate("/");
    }
    else {
      swalAlert("error","Invalid Credentials")
     }
    }

   const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <>    
 <div className="row" style={{marginTop:'130px'}}>
        <div className="col-6 mt-2">
        <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" />
        </div>
  <div className="col-6 mt-4">
      <div className='container mt-5' >
          <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >Login to continue to iNotebook</h2>
           <form onSubmit={handleSubmit}>
            <div className="mb-3 my-4">
                <label htmlFor="email" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Email address</label>
                <input type="email" className="form-control" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'rgb(63, 62, 62)' : 'white' }} value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 my-4">
                <label htmlFor="password" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >Password</label>
                <input type="password" className="form-control" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'rgb(63, 62, 62)' : 'white' }} value={credentials.password} onChange={onChange} name="password" id="password" />
            </div>
            <div className='d-flex justify-content-center'> 
                <button type="submit" className="btn btn-primary my-3 "  style={{ color: props.mode === 'dark' ? 'white' : 'black',backgroundColor: props.mode === 'dark' ? 'rgb(63, 62, 62)' : 'white' }} >Submit</button>
            </div>
           </form>
      </div>
     
            <div className="text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
                        You don't have account?
                         <Link to="/signup">Signup</Link>
            </div>
  </div>
 </div>
    </>

  )
}

export default Login
