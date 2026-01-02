import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display text-white">
            {/* Navigation */}
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-input-border bg-background-dark/95 backdrop-blur-md px-4 py-3 md:px-10">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[32px]">fitness_center</span>
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">FitPlan</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <nav className="hidden items-center gap-9 md:flex">
                        <a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#features">Features</a>
                        <a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#testimonials">Testimonials</a>
                        <a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#pricing">Pricing</a>
                    </nav>
                    <div className="flex gap-2">
                        <Link to="/login" className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-input-border hover:bg-[#2f5e3d] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Login</span>
                        </Link>
                        <Link to="/signup" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-[#0fd650] transition-colors text-surface-dark text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Get Started</span>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex flex-col grow">
                {/* Hero Section */}
                <section className="px-4 md:px-40 flex flex-1 justify-center py-5">
                    <div className="flex flex-col max-w-[960px] flex-1 w-full">
                        <div className="@container">
                            <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row-reverse items-center">
                                <div className="w-full rounded-xl shadow-2xl shadow-primary/10 @[480px]:min-w-[400px] @[864px]:w-1/2 overflow-hidden relative">
                                    <img
                                        src="/imgs/homepg-img.png"
                                        alt="Athletic person lifting weights in a gym with dramatic lighting"
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent"></div>
                                </div>
                                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center @[864px]:w-1/2">
                                    <div className="flex flex-col gap-4 text-left">
                                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl">
                                            Build the Body You Want. <span className="text-primary">Track the Progress</span> You Need.
                                        </h1>
                                        <h2 className="text-input-placeholder text-lg font-normal leading-relaxed">
                                            The ultimate weekly planner for serious fitness enthusiasts. Log workouts, set PRs, and visualize your gains without the clutter.
                                        </h2>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link to="/signup" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-[#0fd650] transition-all text-surface-dark text-base font-bold leading-normal tracking-[0.015em]">
                                            <span className="truncate">Start Your Journey</span>
                                        </Link>
                                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border border-input-border hover:bg-input-bg transition-all text-white text-base font-bold leading-normal tracking-[0.015em]">
                                            <span className="truncate">View Demo</span>
                                        </button>
                                    </div>
                                    {/* <div className="flex items-center gap-2 text-input-placeholder text-sm">
                                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                        <span>No credit card required</span>
                                        <span className="mx-2">•</span>
                                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                        <span>14-day free trial</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="px-4 md:px-40 flex flex-1 justify-center py-5 bg-[#14281c] border-y border-input-border" id="features">
                    <div className="flex flex-col max-w-[960px] flex-1 w-full">
                        <div className="flex flex-col gap-10 px-4 py-16 @container">
                            <div className="flex flex-col gap-4 items-center text-center">
                                <div className="inline-flex items-center justify-center rounded-full bg-input-bg border border-input-border px-3 py-1 mb-2">
                                    <p className="text-primary text-xs font-bold uppercase tracking-wider">Features</p>
                                </div>
                                <h2 className="text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
                                    Everything You Need to Succeed
                                </h2>
                                <p className="text-input-placeholder text-lg font-normal leading-normal max-w-[600px]">Designed for focus and efficiency. We stripped away the noise so you can focus on the lift.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-0">
                                {/* Feature 1 */}
                                <div className="group flex flex-1 gap-5 rounded-xl border border-input-border bg-input-bg p-6 flex-col hover:border-primary/50 transition-all duration-300">
                                    <div className="text-primary bg-input-border w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">flag</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-xl font-bold leading-tight">Set Weekly Goals</h3>
                                        <p className="text-input-placeholder text-base font-normal leading-relaxed">Define your targets and crush them with weekly planning tools that adapt to your schedule.</p>
                                    </div>
                                </div>
                                {/* Feature 2 */}
                                <div className="group flex flex-1 gap-5 rounded-xl border border-input-border bg-input-bg p-6 flex-col hover:border-primary/50 transition-all duration-300">
                                    <div className="text-primary bg-input-border w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">edit_note</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-xl font-bold leading-tight">Log Every Rep</h3>
                                        <p className="text-input-placeholder text-base font-normal leading-relaxed">Intuitive logging for weights, cardio, and intervals without the clutter. Just tap and lift.</p>
                                    </div>
                                </div>
                                {/* Feature 3 */}
                                <div className="group flex flex-1 gap-5 rounded-xl border border-input-border bg-input-bg p-6 flex-col hover:border-primary/50 transition-all duration-300">
                                    <div className="text-primary bg-input-border w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">monitoring</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-xl font-bold leading-tight">Visualize Progress</h3>
                                        <p className="text-input-placeholder text-base font-normal leading-relaxed">Charts and analytics that show your transformation over time. See your strength skyrocket.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Showcase / Card Section */}
                <section className="px-4 md:px-40 flex flex-1 justify-center py-5">
                    <div className="flex flex-col max-w-[960px] flex-1 w-full">
                        <div className="p-4 py-12 @container">
                            <div className="flex flex-col-reverse items-center justify-start rounded-2xl @xl:flex-row @xl:items-center shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-linear-to-br from-input-bg to-background-dark border border-input-border overflow-hidden">
                                <div className="flex w-full min-w-72 grow flex-col items-start justify-center gap-6 py-8 px-6 @xl:px-10 @xl:py-12 @xl:w-1/2">
                                    <h3 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Intuitive Workout Logging</h3>
                                    <p className="text-input-placeholder text-lg font-normal leading-relaxed">
                                        A clean, distraction-free interface that lets you focus on your lift, not your phone. Quickly add sets, modify weights, and rest with built-in timers.
                                    </p>
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex items-center gap-3 text-white">
                                            <span className="material-symbols-outlined text-primary">check</span>
                                            <span>One-tap set completion</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-white">
                                            <span className="material-symbols-outlined text-primary">check</span>
                                            <span>Auto-calculated warmups</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-white">
                                            <span className="material-symbols-outlined text-primary">check</span>
                                            <span>Previous lift history overlay</span>
                                        </li>
                                    </ul>
                                    <button className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-input-border hover:bg-[#2f5e3d] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                                        <span className="truncate">See How It Works</span>
                                    </button>
                                </div>
                                <div className="w-full @xl:w-1/2 h-full bg-background-dark relative flex items-center justify-center p-8">
                                    <div className="relative z-10 w-[240px] rounded-4xl border-4 border-input-border bg-surface-dark overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-500">
                                        <div className="bg-linear-to-b from-input-bg to-[#0b160f] h-[480px] w-full">
                                            <div className="absolute inset-0 bg-black/40 flex flex-col p-4">
                                                <div className="w-full h-8 flex justify-between items-center mb-6">
                                                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                                    <div className="w-20 h-4 rounded-full bg-white/20"></div>
                                                </div>
                                                <div className="w-3/4 h-8 rounded-lg bg-white/10 mb-2"></div>
                                                <div className="w-1/2 h-4 rounded-lg bg-white/10 mb-8"></div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between items-center p-3 rounded-lg bg-input-bg border-l-4 border-primary">
                                                        <div className="w-1/3 h-4 rounded bg-white/20"></div>
                                                        <div className="w-8 h-8 rounded-full border border-primary/50"></div>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 rounded-lg bg-input-bg border-l-4 border-primary">
                                                        <div className="w-1/3 h-4 rounded bg-white/20"></div>
                                                        <div className="w-8 h-8 rounded-full border border-primary/50"></div>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 rounded-lg bg-input-bg/50 border-l-4 border-white/10">
                                                        <div className="w-1/3 h-4 rounded bg-white/20"></div>
                                                        <div className="w-8 h-8 rounded-full border border-white/10"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full z-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-input-border bg-background-dark py-10 px-4 md:px-40 z-10">
                <div className="flex flex-col md:flex-row justify-between max-w-[960px] mx-auto gap-8 w-full">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-white">
                            <span className="material-symbols-outlined text-primary">fitness_center</span>
                            <span className="font-bold text-lg">FitPlan</span>
                        </div>
                        <p className="text-[#5b7a66] text-sm max-w-[240px]">The modern workout tracker for athletes who want results.</p>
                    </div>
                    <div className="flex gap-16 flex-wrap">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold text-sm">Product</h4>
                            <a className="text-input-placeholder hover:text-primary text-sm" href="#">Features</a>
                            <a className="text-input-placeholder hover:text-primary text-sm" href="#">Pricing</a>
                            <a className="text-input-placeholder hover:text-primary text-sm" href="#">Download</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold text-sm">Company</h4>
                            <a className="text-input-placeholder hover:text-primary text-sm" href="#">About</a>
                            <a className="text-input-placeholder hover:text-primary text-sm" href="#">Blog</a>
                            <a className="text-input-placeholder hover:text-primary text-sm" href="#">Careers</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-bold text-sm">Legal</h4>
                            <a className="text-input-placeholder hover:text-primary text-sm" href="#">Privacy</a>
                            <a className="text-input-placeholder hover:text-primary text-sm" href="#">Terms</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-[960px] mx-auto mt-10 pt-6 border-t border-input-bg text-center text-[#5b7a66] text-xs">
                    © 2023 FitPlan Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Home;
