import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Deepak Page is loaded");
        loadUsers();
    },[]);

    const loadUsers = async () =>{
        const result = await axios.get("http://localhost:8081/user");
        setUsers(result.data);
    }

    const deleteUserData=async (deleteId) =>{
        const result = await axios.delete("http://localhost:8081/user/"+deleteId);
        //setUser(result.data);
        loadUsers();
      }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table table-striped  shadow">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=>(
                        <tr>
                            <th scope="row" key={user.id} >{index+1}</th>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className='btn btn-outline-primary' to={"viewuser/"+user.id} >View</Link>&nbsp;
                                <Link className='btn btn-outline-warning' to={"edituser/"+user.id} >Edit</Link>&nbsp;
                                <button className='btn btn-outline-danger' onClick={() => deleteUserData(user.id)} >Delete</button>
                            </td>
                        </tr>
                            ))
                        }
                        
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
