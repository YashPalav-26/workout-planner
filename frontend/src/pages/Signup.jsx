import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    const calculatePasswordStrength = (password) => {
        if (password.length === 0) return 0;
        if (password.length < 8) return 1; 
        if (password.length < 12) return 2; 
        if (password.length < 16) return 3; 
        return 4; 
    };

    const { firstName, lastName, email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'password') {
            setPasswordStrength(calculatePasswordStrength(value));
        }
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify({ firstName, lastName, email, password });
            const res = await axios.post('http://localhost:5000/api/auth/signup', body, config);

            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            alert(err.response ? err.response.data.msg : 'Error registering');
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row font-display bg-background-dark text-white">
            <div className="relative hidden lg:flex w-full lg:w-1/2 bg-surface-dark flex-col justify-between p-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/imgs/signup-img.png"
                        alt="Fitness motivation"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background-dark/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                </div>

                <div className="relative z-10 mt-auto max-w-lg">
                    <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-[-0.02em] mb-4">
                        Unlock Your <br />
                        <span className="text-primary">True Potential</span>
                    </h1>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Join thousands of athletes tracking their workouts, setting ambitious goals, and visualizing their progress every single day.
                    </p>
                </div>
            </div>

            {/* Right Side: Sign Up Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-10 lg:px-16 bg-surface-dark relative">
                <div className="max-w-sm mx-auto w-full">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
                        <p className="text-input-placeholder text-sm">Join us to start tracking your fitness progress today.</p>
                    </div>



                    {/* Form */}
                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                        {/* Name Fields */}
                        <div className="flex gap-3">
                            <div className="flex-1 space-y-1">
                                <label className="text-white text-xs font-medium ml-1">First Name</label>
                                <input name="firstName" value={firstName} onChange={handleChange} className="form-input w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-input-border bg-input-bg focus:border-primary h-10 px-3 placeholder:text-input-placeholder/50 text-sm" placeholder="John" type="text" required />
                            </div>
                            <div className="flex-1 space-y-1">
                                <label className="text-white text-xs font-medium ml-1">Last Name</label>
                                <input name="lastName" value={lastName} onChange={handleChange} className="form-input w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-input-border bg-input-bg focus:border-primary h-10 px-3 placeholder:text-input-placeholder/50 text-sm" placeholder="Doe" type="text" required />
                            </div>
                        </div>
                        {/* Email Field */}
                        <div className="space-y-1">
                            <label className="text-white text-xs font-medium ml-1">Email Address</label>
                            <div className="relative">
                                <input name="email" value={email} onChange={handleChange} className="form-input w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-input-border bg-input-bg focus:border-primary h-10 pl-3 pr-9 placeholder:text-input-placeholder/50 text-sm" placeholder="john@example.com" type="email" required />
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-input-placeholder text-[18px] pointer-events-none">mail</span>
                            </div>
                        </div>
                        {/* Password Field */}
                        <div className="space-y-1">
                            <label className="text-white text-xs font-medium ml-1">Password</label>
                            <div className="relative">
                                <input name="password" value={password} onChange={handleChange} className="form-input w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-input-border bg-input-bg focus:border-primary h-10 pl-3 pr-9 placeholder:text-input-placeholder/50 text-sm" placeholder="Min. 8 chars" type={passwordVisible ? 'text' : 'password'} required />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-input-placeholder hover:text-white transition-colors flex items-center justify-center" type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
                                    <span className="material-symbols-outlined text-[18px]">{passwordVisible ? 'visibility' : 'visibility_off'}</span>
                                </button>
                            </div>
                            {/* Password Strength Indicator */}
                            <div className="flex gap-1 mt-2 h-1 w-full">
                                <div className={`h-full w-1/4 rounded-full ${passwordStrength >= 1 ? (passwordStrength === 1 ? 'bg-red-500' : passwordStrength === 2 ? 'bg-orange-500' : passwordStrength === 3 ? 'bg-yellow-500' : 'bg-green-500') : 'bg-input-border'}`}></div>
                                <div className={`h-full w-1/4 rounded-full ${passwordStrength >= 2 ? (passwordStrength === 2 ? 'bg-orange-500' : passwordStrength === 3 ? 'bg-yellow-500' : 'bg-green-500') : 'bg-input-border'}`}></div>
                                <div className={`h-full w-1/4 rounded-full ${passwordStrength >= 3 ? (passwordStrength === 3 ? 'bg-yellow-500' : 'bg-green-500') : 'bg-input-border'}`}></div>
                                <div className={`h-full w-1/4 rounded-full ${passwordStrength >= 4 ? 'bg-green-500' : 'bg-input-border'}`}></div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-[#0fd650] transition-all text-surface-dark text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(19,236,91,0.2)] hover:shadow-[0_0_30px_rgba(19,236,91,0.4)] text-black" type="submit">
                            Create Account
                        </button>
                    </form>
                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-input-placeholder">
                            Already have an account?
                            <Link className="text-white font-bold hover:text-primary transition-colors ml-1" to="/login">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
