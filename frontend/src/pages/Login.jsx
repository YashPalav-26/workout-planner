import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify({ email, password });
            const res = await axios.post('http://localhost:5000/api/auth/login', body, config);

            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            alert(err.response ? err.response.data.msg : 'Error logging in');
        }
    };

    return (
        <div className="flex min-h-screen w-full font-display bg-background-dark text-white">
            <div className="relative hidden w-1/2 lg:block bg-background-dark overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0">
                    <img
                        src="/imgs/workout img.jpg"
                        alt="Workout motivation"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background-dark/40 mix-blend-multiply"></div>
                </div>
                <div className="absolute bottom-0 left-0 z-20 p-16">
                    <blockquote className="border-l-4 border-primary pl-6">
                        <p className="text-3xl font-bold leading-tight text-white mb-4">
                            "The only bad workout is the one that didn't happen."
                        </p>
                        <footer className="text-lg text-primary font-medium">
                            — Track your progress daily
                        </footer>
                    </blockquote>
                </div>
            </div>
            {/* Right Side: Login Form */}
            <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-12 lg:w-1/2 xl:px-16 bg-surface-dark">
                <div className="mx-auto w-full max-w-sm">
                    {/* Titles */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                        <p className="mt-2 text-sm text-gray-400">Log in to track your weekly progress and crush your goals.</p>
                    </div>
                    {/* Form */}
                    <form className="space-y-6" onSubmit={onSubmit}>
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="block text-xs font-medium text-gray-200 ml-1" htmlFor="email">
                                Email address
                            </label>
                            <div className="relative">
                                <input autoComplete="email" className="block w-full rounded-lg border border-input-border bg-input-bg text-white placeholder:text-input-placeholder/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-0 sm:text-sm h-11 px-3 transition-colors" id="email" name="email" placeholder="user@example.com" required type="email" value={email} onChange={handleChange} />
                            </div>
                        </div>
                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label className="block text-xs font-medium text-gray-200" htmlFor="password">
                                    Password
                                </label>
                                <div className="text-xs">
                                    <a className="font-medium text-primary hover:text-primary/80 transition-colors" href="#">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="relative flex items-center">
                                <input autoComplete="current-password" className="block w-full rounded-lg border border-input-border bg-input-bg text-white placeholder:text-input-placeholder/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-0 sm:text-sm h-11 px-3 pr-10 transition-colors" id="password" name="password" placeholder="••••••••••" required type={showPassword ? "text" : "password"} value={password} onChange={handleChange} />
                                <div className="absolute right-0 flex h-full items-center pr-3">
                                    <span className="material-symbols-outlined cursor-pointer text-input-placeholder hover:text-white transition-colors select-none" style={{ fontSize: '18px' }} onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'visibility' : 'visibility_off'}</span>
                                </div>
                            </div>
                        </div>
                        {/* Login Button */}
                        <button className="flex w-full justify-center rounded-lg bg-primary px-3 py-2.5 text-sm font-bold text-surface-dark shadow-[0_0_20px_rgba(19,236,91,0.2)] hover:bg-[#0fd650] hover:shadow-[0_0_30px_rgba(19,236,91,0.4)] transition-all transform active:scale-[0.98] mt-6 text-black cursor-pointer" type="submit">
                            Log In
                        </button>
                    </form>
                    {/* Footer Sign Up */}
                    <p className="mt-6 text-center text-xs text-gray-400">
                        Don't have an account?
                        <Link className="font-bold text-white hover:text-primary transition-colors ml-1" to="/signup">Sign up free</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
