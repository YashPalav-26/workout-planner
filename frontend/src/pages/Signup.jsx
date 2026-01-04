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

    const { firstName, lastName, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.type === 'checkbox' ? 'checked' : e.target.id || e.target.type]: e.target.value });

    // Fix for form data mapping since structure is slightly different in inputs
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
            // Assuming backend is on port 5000, may need proxy in vite config
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
            {/* Left Side: Visual/Hero */}
            <div className="relative hidden lg:flex w-full lg:w-1/2 bg-surface-dark flex-col justify-between p-12 overflow-hidden">
                {/* Hero Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/imgs/signup-img.png"
                        alt="Fitness motivation"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background-dark/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                </div>
                {/* Logo Area */}

                {/* Hero Text */}
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
                                <input name="password" value={password} onChange={handleChange} className="form-input w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-input-border bg-input-bg focus:border-primary h-10 pl-3 pr-9 placeholder:text-input-placeholder/50 text-sm" placeholder="Min. 8 chars" type="password" required />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-input-placeholder hover:text-white transition-colors flex items-center justify-center" type="button">
                                    <span className="material-symbols-outlined text-[18px]">visibility_off</span>
                                </button>
                            </div>
                            {/* Password Strength Indicator */}
                            <div className="flex gap-1 mt-2 h-1 w-full">
                                <div className="h-full w-1/4 bg-red-500 rounded-full"></div>
                                <div className="h-full w-1/4 bg-input-border rounded-full"></div>
                                <div className="h-full w-1/4 bg-input-border rounded-full"></div>
                                <div className="h-full w-1/4 bg-input-border rounded-full"></div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-[#0fd650] transition-all text-surface-dark text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(19,236,91,0.2)] hover:shadow-[0_0_30px_rgba(19,236,91,0.4)]" type="submit">
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
