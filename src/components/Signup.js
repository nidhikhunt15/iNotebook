import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const context = useContext(noteContext)
  const { swalAlert } = context
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    // fetch()
    // API Call 
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      swalAlert("success", "Signup successfully")
    }
    else {
      swalAlert("error", "Invalid Credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="row" style={{ marginTop: '130px' }}>
        <div className="col-6 mt-4">
          <img src="https://st.depositphotos.com/18722762/51522/v/600/depositphotos_515228776-stock-illustration-online-registration-sign-login-account.jpg" alt="" />
        </div>
        <div className="col-6">
          <div className='container mt-2 '>
            <h2 className='my-3 mt-4' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Create an account to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                  <label htmlFor="name" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Name </label>
                  <input type="text" className="form-control" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'rgb(63, 62, 62)' : 'white' }} id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Email address</label>
                    <input type="email" className="form-control" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'rgb(63, 62, 62)' : 'white' }} id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Password</label>
                    <input type="password" className="form-control" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'rgb(63, 62, 62)' : 'white' }} id="password" name="password" onChange={onChange} minLength={5} required />
              </div>
              <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Confirm Password</label>
                    <input type="password" className="form-control" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'rgb(63, 62, 62)' : 'white' }} id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
              </div>
              <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'rgb(63, 62, 62)' : 'white' }}>Submit</button>
              </div>
            </form>
          </div>
              <div className="text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                   Already have an account?
                  <Link to="/login">Login</Link>
              </div>
        </div>
      </div>
    </>


  )
}

export default Signup
