import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import back2 from "../../src/assets/images/back2.jpg"
import back6 from "../../src/assets/images/back-6.jpg"
import back7 from "../../src/assets/images/back-7.jpg"
import back8 from "../../src/assets/images/back-8.jpg"

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
        setUserDetails(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(userDetails);
    }

    const navigate = useNavigate();
    return (
        <div className='relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-6'
            style={{
                backgroundImage: `url(${back2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            {/*Dark overlay*/}
            <div className='absolute inset-0 black/30' />
            {/*Glass card*/}
            <div className='relative z-10 w-full max-w-5xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xs shadow-[0 12px 60px rgba(0,0,0,0.55)] overflow-hidden'>
                <div className='flex flex-col md:flex-row'>
                    {/*Left panel*/}
                    <div className='hidden md:flex md:w-1/2 flex-col justify-center px-10 py-14 text-white'>
                        <h1 className='text-4xl font-semibold mb-4'>Sign Up</h1>
                        <p className='text-sm text-white/80 leading-relaxed max-w-sm'>
                            Join the Inspection Audit Platform and start managing your audits
                            with ease and confidence.
                        </p>
                    </div>
                    {/*Right Panel*/}
                    <div className='w-full md:w-[70%] lg:w-1/2 mx-auto px-7 py-9 sm:px-9 sm:py-10'>
                        <div className='mb-7'>
                            <h2 className='text-3xl font-semibold text-white'>Sign Up</h2>
                            <p className='text-sm text-white/70 mt-1'>
                                To get started, please enter your details
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className='space-y-6'>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {/*Full Name*/}
                                <div className='space-y-1'>
                                    <label className='block text-sm font-medium text-white'>
                                        Full Name
                                    </label>
                                    <input type='text' name='name' value={userDetails.name} onChange={handleChange} placeholder='Enter your Full Name'
                                        className='w-full rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30'/>
                                </div>
                                {/*Company name*/}
                                <div className='space-y-1'>
                                    <label className='block text-sm font-medium text-white'>
                                        Company Name
                                    </label>
                                    <input type='text' name='company_name' value={userDetails.company_name} onChange={handleChange} placeholder='Enter your company name' 
                                        className='w-full rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30'/>
                                </div>
                            </div>
                            {/*Email*/}
                            <div className='space-y-1'>
                                <label className='block text-sm font-medium text-white'>
                                    Email
                                </label>
                                <input type='text' name='email' value={userDetails.email} onChange={handleChange} placeholder='Enter your email'
                                    className='w-full rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus: border-emerald-400 focus:ring-2 focus:ring-emerald-400/30'/>
                            </div>
                            {/*Password*/}
                            <div className='space-y-1'>
                                <label className='block text-sm font-medium text-white'>
                                    <h2>Password</h2>
                                </label>
                                <input type='password' name='password' value={userDetails.password} onChange={handleChange} placeholder='Create a password'
                                    className='w-full rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30'/>
                            </div>
                            {/*Sign Up button*/}
                            <button type='submit'
                                className='w-full rounded-full bg-emerald-500/90 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/35 transition active:scale-[0.97]'>
                                Sign Up
                            </button>
                        

                        <div className='flex items-center gap-3'>
                            <div className='flex-1 h-px bg-white/20'/>
                            <span className='text-xs text-white/60'>OR</span>
                            <div className='flex-1 h-px bg-white/20'/>  
                        </div>
                        {/*Google button*/}
                        <button type="button" className='w-full rounded-full border border-white/30 bg-white/15 px-5 py-3 text-[15px] font-semibold text-white hover:bg-white/25 active:scale-[0.97] transition flex items-center justify-center gap-3 shadow-sm'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                alt="Google"
                                className="w-5 h-5"/>
                            <span>Sign up with Google</span>
                        </button>
                        <p className='pt-1 text-center text-s text-white/75'>
                            Have an account  ?{"   "}
                            <button onClick={() => navigate('/login')} 
                                className='font-semibold text-emerald-300 hover:text-emerald-200'>
                                Login
                            </button>


                        </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register