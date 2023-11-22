import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate = useNavigate();

    const {id} = useParams();
    //console.log("id is ${id}")
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const { name, username, email } = user;

    const loadUserData=async () =>{
      const result = await axios.get("http://localhost:8081/user/"+id, user);
      setUser(result.data);
      
    }
    
    useEffect(()=>{
      loadUserData();
    }, [])
    
    
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put("http://localhost:8081/user/"+id, user);
        
        navigate("/");
    }

    return (
        <div className='container'>
            <div className='row' >
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
                    <div className='modal-header'>
                        <h2>Edit User</h2>
                        <Link to={"/"} className="btn-close" aria-label="Close"></Link>

                    </div>
                    <div className='mb-3'>
                        <form onSubmit={(e)=>{onSubmit(e)}}>
                            <input onChange={(e) => { onInputChange(e) }} value={name} type={"text"} className='form-control' placeholder='Name' name='name' />
                            <br />
                            <input onChange={(e) => { onInputChange(e) }} value={username} type={"text"} className='form-control' placeholder='UserName' name='username' />
                            <br />
                            <input onChange={(e) => { onInputChange(e) }} value={email} type={"text"} className='form-control' placeholder='E-Mail' name='email' />
                            <br />
                            <button type="submit" className='btn btn-warning' >Edit User</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
