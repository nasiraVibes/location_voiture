import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [values,setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:3010/register', values)
        .then(res =>{
            if (res.data.Status === "Success"){
                console.log(values)
                navigate('/login')
            }else{
                alert("Error")
            }
        })
        .then(err =>console.log(err));
    }
  return (
    <div>
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg white p-3 rounded w-25">
                <h2>Sign-up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name' onChange={e => setValues({...values, name: e.target.value})} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' onChange={e=>setValues({...values,email:e.target.value})} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password' onChange={e=>setValues({...values,password:e.target.value})} className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0' >Sing up</button>
                    <p>You are agree to aour terms and policies </p>
                    <Link to="/login" className='btn btn-default borde w-100 bg-light rounded-0 text-decoration-none' >Login</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register