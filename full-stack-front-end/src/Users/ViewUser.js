import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewUser() {

    //let navigate = useNavigate();
    const{id} = useParams();

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
      
      
    
    

    

    return (
        <div className='container'>
            <div className='row' >
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' >
                    <div className='modal-header'>
                        <h2>View User</h2>
                        <Link to={"/"} className="btn-close" aria-label="Close"></Link>

                    </div>
                    <div className='mb-3'>
                        <form>
                            <input  value={name} type={"text"} className='form-control' placeholder='Name' name='name' />
                            <br />
                            <input  value={username} type={"text"} className='form-control' placeholder='UserName' name='username' />
                            <br />
                            <input value={email} type={"text"} className='form-control' placeholder='E-Mail' name='email' />
                            <br />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
