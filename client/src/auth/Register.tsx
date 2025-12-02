import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
type registerForm = {
    name: string,
    company_name: string,
    email: string,
    password: string,
}
const Register = () => {

    const [userDetails, setUserDetails] = useState<registerForm>({
        name: "",
        company_name: "",
        email: "",
        password: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails(prev=> ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(userDetails);
    }

    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div>
                    <h1>Sign Up</h1>
                    <h3>To get started please enter your details</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Full Name</h2>
                    </label>
                    <input type='text' name='name' value={userDetails.name} onChange={handleChange} />

                    <label>
                        <h2>Company Name</h2>
                    </label>
                    <input type='text' name='company_name' value={userDetails.company_name} onChange={handleChange} />

                    <label>
                        <h2>Email</h2>
                    </label>
                    <input type='text' name='email' value={userDetails.email} onChange={handleChange} />

                    <label>
                        <h2>Password</h2>
                    </label>
                    <input type='text' name='password' value={userDetails.password} onChange={handleChange} />
                    <button type='submit'>
                        Sign Up
                    </button>
                </form>
                <div>
                    <h2>OR</h2>
                    <button>Sign Up with Google</button>
                </div>
                <div>
                    <span>
                        <h2>Have an account already?</h2>
                        <button onClick={() => navigate('/login')}>Login</button>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Register