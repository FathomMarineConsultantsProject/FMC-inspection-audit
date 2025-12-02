import React, { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
type LoginForm = {
    email: string
    password: string
}
const Login: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <div>
            <div>
                <h1>Log in</h1>
                <h2>Welcome back! Please enter your details</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label>Email</label>
                                <input type='text' name='email' value={form.email} onChange={handleChange} placeholder='Enter your email'/>
                                <label>Password</label>
                                
                                <input type='text' name='password' value={form.password} onChange={handleChange} placeholder='Enter your password'/>
                                <button type='button' onClick={()=>navigate('/forgot-password')}>Forgot password ?</button>
                            </div>
                            <div>
                                <button>Log In</button>
                            </div>
                            <div>
                                <h2>OR</h2>
                                <button>Login with Google</button>
                            </div>
                            <div>
                                <div>Don't have an account?
                                    <span>
                                        <button onClick={()=>navigate('/register')}>Sign up</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login