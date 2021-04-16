import axios from 'axios';
import React, { useState } from 'react'
import '../Styles/form.css'
import api from '../api/constants'

function Form(props) {
    const [userNameInput, setUserNameInput] = useState("");
    const [exists, setExists] = useState(true);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const user = await axios.get(`${api + userNameInput}`);
        props.onSubmit(user.data);
        setUserNameInput('');
        setExists(true);
        }catch(err){
            setExists(false);
        }
    }
    return (
        <div>
        {
        exists === false && <div className="errorMessage">User not Found</div>
        }
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a Github Username" value={userNameInput} onChange={(e) => setUserNameInput(e.target.value)} required />
            <button>Add User</button>
        </form>
        </div>
    )
}

export default Form
