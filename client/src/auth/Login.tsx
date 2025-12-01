import React,{useState, type FormEvent} from 'react'

type LoginForm = {
    email: string
    password: string
}
const Login: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({
        email:"",
        password:"",
    })
    const [error, setError] = useState<string|null>(null);

    const handleChange(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}= e.target;
        setForm(prev=>({...prev,[name]:value}));
    }
    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();
        console.log(form);
    }

    return (
        <div>
            <div>
            <h1>Log in</h1>
            
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label>Email</label>
                            <input type='text' name='email' value={form.email} onChange={handleChange} />
                            <label>Password</label>
                            <input type='text' name='password' value={form.password} onChange={handleChange} />
                        </div>
                        <div>
                            <button>Sign In</button>
                        </div>
                        <div>
                            <span><button>Forgot password? </button></span>
                        </div>
                        <div>
                            <div>Not a user?
                                <span><button>Register</button></span>
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