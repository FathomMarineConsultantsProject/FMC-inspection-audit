{/**
🔹 floating icons
🔹 animated glass particles
🔹 password eye toggle
🔹 Form validation + toast messages 
*/}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back2 from "../../src/assets/images/back2.jpg"

type LoginForm = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div
            className="
            relative min-h-screen flex items-center justify-center overflow-hidden
            px-4 py-6"
            style={{
                backgroundImage: `url(${back2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Glass card */}
            <div
                className="
                    relative z-10 w-full max-w-5xl
                    rounded-3xl
                    border border-white/20
                    bg-white/10
                    backdrop-blur-sm
                    shadow-[0_12px_60px_rgba(0,0,0,0.55)]
                    overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* LEFT PANEL*/}
                    <div className="hidden md:flex md:w-1/2 flex-col justify-center px-10 py-14 text-white">
                        <h1 className="text-4xl font-semibold mb-4">Let&apos;s Get Started</h1>
                        <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                            Welcome back, to the Inspection Audit Platform
                        </p>
                    </div>

                    {/* RIGHT PANEL – Login form */}
                    <div className="w-full md:w-[70%] lg:w-1/2 mx-auto px-7 py-9 sm:px-9 sm:py-10">
                        <div className="mb-7">
                            <h2 className="text-3xl font-semibold text-white">Sign in</h2>
                            <p className="text-sm text-white/70 mt-1">
                                Welcome back! Please enter your details.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email */}
                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="
                                        w-full rounded-full
                                        border border-white/30
                                        bg-white/10
                                        px-4 py-2.5
                                        text-sm text-white
                                        placeholder:text-white/60
                                        outline-none
                                        focus:border-emerald-400
                                        focus:ring-2 focus:ring-emerald-400/30" />
                            </div>

                            {/* Password */}
                            <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium text-white">
                                        Password
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => navigate("/forgot-password")}
                                        className="text-xs text-emerald-300 hover:text-emerald-200"
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="
                                        w-full rounded-full
                                        border border-white/30
                                        bg-white/10
                                        px-4 py-2.5
                                        text-sm text-white
                                        placeholder:text-white/60
                                        outline-none
                                        focus:border-emerald-400
                                        focus:ring-2 focus:ring-emerald-400/30"/>
                            </div>

                            {/* Login button */}
                            <button
                                type="submit"
                                className="
                                    w-full rounded-full
                                    bg-emerald-500/90 hover:bg-emerald-400
                                    px-4 py-2.5
                                    text-sm font-semibold text-white
                                    shadow-lg shadow-emerald-500/35
                                    transition active:scale-[0.97]">
                                Log in
                            </button>

                            {/* OR divider */}
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-px bg-white/20" />
                                <span className="text-xs text-white/60">OR</span>
                                <div className="flex-1 h-px bg-white/20" />
                            </div>

                            {/* Google button at bottom */}
                            <button
                                type="button"
                                className="
                                    w-full rounded-full
                                    border border-white/30
                                    bg-white/15
                                    px-5 py-3
                                    text-[15px] font-semibold text-white
                                    hover:bg-white/25
                                    active:scale-[0.97]
                                    transition
                                    flex items-center justify-center gap-3
                                    shadow-sm
                                "
                                >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                                <span>Continue with Google</span>
                                </button>


                            {/* Sign up link */}
                            <p className="pt-1 text-center text-xs text-white/75">
                                Don&apos;t have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => navigate("/register")}
                                    className="font-semibold text-emerald-300 hover:text-emerald-200"
                                >
                                    Sign up
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
