import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-text-main overflow-x-hidden font-body antialiased selection:bg-primary selection:text-background-dark">
            <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-6 bg-background-dark/80 backdrop-blur-xl text-white border-b border-border-subtle">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[28px] text-primary">fitness_center</span>
                        <h2 className="text-xl font-bold tracking-tight font-display">RepStack</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide uppercase">
                        <a className="hover:text-primary transition-colors duration-300" href="#features">The System</a>
                        <a className="hover:text-primary transition-colors duration-300" href="#how-it-works">Workflow</a>
                        <a className="hover:text-primary transition-colors duration-300" href="#testimonials">Community</a>
                    </nav>
                    <div className="flex items-center gap-6">
                        <Link to="/login" className="hidden sm:block text-sm font-medium hover:text-primary transition-colors">Log in</Link>
                        <Link to="/signup" className="px-5 py-2 bg-primary text-background-dark text-sm font-bold rounded-full hover:bg-white transition-colors duration-300">
                            Join Now
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-grow pt-32 pb-24 px-6">
                <section className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)] grid-dense mb-24">
                    <div className="md:col-span-8 md:row-span-2 rounded-3xl bg-surface p-10 md:p-16 flex flex-col justify-between border border-border-subtle relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-75"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                                <span className="size-1.5 rounded-full bg-primary"></span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">System v2.0</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight text-white leading-[0.9] text-balance mb-6">
                                Design your <br/>
                                <span className="font-bold text-primary">evolution.</span>
                            </h1>
                        </div>
                        <div className="relative z-10 max-w-lg mt-auto">
                            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                A minimalistic planner for the dedicated athlete. Strip away the noise and focus on raw progression.
                            </p>
                            <div className="flex items-center gap-4">
                                <Link to="/signup" className="h-12 px-8 bg-white text-black rounded-full font-bold hover:bg-primary transition-colors duration-300 flex items-center justify-center">Start Trial</Link>
                                <button className="size-12 rounded-full border border-border-subtle flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">arrow_downward</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 md:row-span-2 rounded-3xl overflow-hidden relative min-h-[400px]">
                        <div className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("/imgs/img3.jpg")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8">
                            <p className="text-white font-display text-2xl font-bold">Focus Mode</p>
                            <p className="text-primary text-sm">Distraction-free logging</p>
                        </div>
                    </div>

                    <div className="md:col-span-3 md:row-span-1 rounded-3xl bg-surface-highlight/50 border border-border-subtle p-8 flex flex-col justify-center hover:bg-surface-highlight transition-colors">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4">trending_up</span>
                        <h3 className="text-white font-bold text-lg">Linear Progression</h3>
                    </div>

                    <div className="md:col-span-5 md:row-span-1 rounded-3xl bg-primary p-8 flex flex-col justify-center text-background-dark relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="font-bold text-3xl mb-2 font-display">Data Driven</h3>
                            <p className="font-medium opacity-80">Visualize your volume, intensity, and 1RM estimates instantly.</p>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">bar_chart</span>
                    </div>

                    <div className="md:col-span-4 md:row-span-1 rounded-3xl overflow-hidden relative min-h-[200px]">
                        <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: 'url("/imgs/img1.png")' }}></div>
                    </div>
                </section>

                <section className="max-w-[1440px] mx-auto mb-32" id="features">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-2">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white max-w-xl leading-none">
                            Engineered for <br/> <span className="text-text-secondary font-light">performance.</span>
                        </h2>
                        <p className="text-text-secondary text-right mt-4 md:mt-0 max-w-xs text-sm">
                            Tools that adapt to your specific training methodology, not the other way around.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
                        <div className="md:col-span-1 md:row-span-2 bg-surface rounded-3xl p-8 border border-border-subtle flex flex-col relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="mt-auto relative z-10">
                                <div className="size-12 rounded-xl bg-surface-highlight flex items-center justify-center mb-6 text-primary">
                                    <span className="material-symbols-outlined">calendar_month</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Flexible Scheduling</h3>
                                <p className="text-text-secondary leading-relaxed mb-8">
                                    Life is unpredictable. Drag, drop, and adjust your training days on the fly without breaking your streaks.
                                </p>
                                <div className="w-full bg-surface-highlight rounded-xl p-4 border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
                                    <div className="flex justify-between items-center text-xs text-text-secondary mb-2">
                                        <span>MON</span>
                                        <span>TUE</span>
                                        <span>WED</span>
                                    </div>
                                    <div className="flex justify-between gap-2">
                                        <div className="h-16 w-full bg-primary/20 rounded-md border border-primary/30"></div>
                                        <div className="h-16 w-full bg-surface rounded-md border border-white/5"></div>
                                        <div className="h-16 w-full bg-primary/20 rounded-md border border-primary/30"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-surface rounded-3xl p-8 md:p-12 border border-border-subtle flex flex-col md:flex-row items-center gap-8 group">
                            <div className="flex-1">
                                <span className="text-primary font-mono text-xs uppercase tracking-widest mb-2 block">Real-time</span>
                                <h3 className="text-3xl font-bold text-white mb-4">Smart Logging</h3>
                                <p className="text-text-secondary">
                                    Input sets, reps, and RPE with zero friction. The interface remembers your history and auto-suggests weights.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 bg-black/40 rounded-2xl p-6 border border-white/5 shadow-2xl transform md:rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                                    <div>
                                        <div className="text-white font-bold">Bench Press</div>
                                        <div className="text-xs text-text-secondary">Set 3 of 5</div>
                                    </div>
                                    <span className="text-primary font-mono font-bold">225 lbs</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-10 w-12 bg-surface-highlight rounded flex items-center justify-center text-white text-sm">8</div>
                                    <div className="h-10 flex-grow bg-primary text-black rounded font-bold flex items-center justify-center text-sm cursor-pointer hover:bg-white transition-colors">Log Set</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface rounded-3xl p-8 border border-border-subtle hover:border-primary/30 transition-colors">
                            <div className="size-10 rounded-full bg-surface-highlight flex items-center justify-center mb-6 text-white">
                                <span className="material-symbols-outlined">bolt</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Quick Templates</h3>
                            <p className="text-text-secondary text-sm">Start with 5/3/1, PPL, or build your own routine in seconds.</p>
                        </div>

                        <div className="bg-surface rounded-3xl border border-border-subtle overflow-hidden relative group h-64 md:h-auto">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("/imgs/img2.jpg")' }}></div>
                            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end items-start">
                                <h3 className="text-xl font-bold text-white mb-1">Video Library</h3>
                                <p className="text-gray-300 text-sm">Perfect your form</p>
                                <span className="material-symbols-outlined text-primary mt-4 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-[1440px] mx-auto mb-32" id="testimonials">
                    <div className="mb-16 text-center md:text-left px-2">
                        <h2 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-[0.85] tracking-tighter opacity-20 select-none pointer-events-none absolute -mt-10 -ml-4">
                            STORIES
                        </h2>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white relative z-10 pt-4">Trusted by the dedicated</h2>
                    </div>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        <div className="break-inside-avoid bg-surface border border-border-subtle p-8 rounded-3xl">
                            <div className="flex gap-1 text-primary mb-4 text-xs">
                                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                            </div>
                            <blockquote className="text-lg text-white font-medium mb-6">"Finally, an app that isn't trying to be a social network. It's just me, the weights, and the data."</blockquote>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("/imgs/img2.jpg")' }}></div>
                                <div>
                                    <div className="text-white font-bold text-sm">Alex Rivera</div>
                                    <div className="text-text-secondary text-xs">Powerlifter</div>
                                </div>
                            </div>
                        </div>

                        <div className="break-inside-avoid bg-primary text-background-dark p-8 rounded-3xl">
                            <span className="material-symbols-outlined text-4xl mb-4">format_quote</span>
                            <blockquote className="text-xl font-bold leading-tight mb-6">"I broke through a 3-month plateau on my squat thanks to the progressive overload tracking."</blockquote>
                            <div className="flex items-center gap-3 border-t border-black/10 pt-4">
                                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("/imgs/img1.png")' }}></div>
                                <div>
                                    <div className="font-bold text-sm">Mike Thompson</div>
                                    <div className="text-black/60 text-xs">Bodybuilder</div>
                                </div>
                            </div>
                        </div>

                        <div className="break-inside-avoid bg-surface border border-border-subtle p-8 rounded-3xl">
                            <blockquote className="text-white mb-6">"The ability to copy previous weeks saves me so much planning time. It's streamlined my Sunday routine perfectly."</blockquote>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("/imgs/img3.jpg")' }}></div>
                                <div>
                                    <div className="text-white font-bold text-sm">Sarah Jenkins</div>
                                    <div className="text-text-secondary text-xs">CrossFit Athlete</div>
                                </div>
                            </div>
                        </div>

                        <div className="break-inside-avoid bg-surface-highlight/30 border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
                            <span className="text-4xl font-display font-bold text-white mb-1">10k+</span>
                            <span className="text-text-secondary text-sm uppercase tracking-widest">Active Athletes</span>
                        </div>
                    </div>
                </section>

                <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4" id="how-it-works">
                    <div className="bg-surface rounded-3xl p-12 lg:p-24 flex flex-col justify-center border border-border-subtle relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready to <br/>level up?</h2>
                            <p className="text-lg text-text-secondary max-w-md mb-10">
                                Start your 14-day free trial today. Experience the difference of a distraction-free environment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/signup" className="px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                                    Get Started Free
                                </Link>
                                <button className="px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center">
                                    View Pricing
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary rounded-3xl min-h-[400px] lg:min-h-auto relative overflow-hidden group">
                        <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url("/imgs/img4.jpg")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                        <div className="absolute bottom-12 left-12 right-12">
                            <span className="material-symbols-outlined text-6xl text-background-dark mb-4 block">fitness_center</span>
                            <p className="text-background-dark text-2xl font-display font-bold max-w-sm">"The only bad workout is the one that didn't happen."</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-border-subtle bg-background-dark py-16 px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                        <div className="md:col-span-4">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-primary text-[24px]">fitness_center</span>
                                <span className="text-white font-bold text-xl font-display">RepStack</span>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
                                The modern standard for workout tracking. Built for those who take their training seriously.
                            </p>
                        </div>
                        <div className="md:col-span-2 md:col-start-7">
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Product</h4>
                            <ul className="space-y-3 text-sm text-text-secondary">
                                <li><a className="hover:text-primary transition-colors" href="#features">Features</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
                            <ul className="space-y-3 text-sm text-text-secondary">
                                <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#testimonials">Community</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
                            <ul className="space-y-3 text-sm text-text-secondary">
                                <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Legal</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-text-secondary text-xs">© 2024 RepStack Inc. All rights reserved.</p>
                        <div className="flex gap-6 text-xs text-text-secondary">
                            <a className="hover:text-white transition-colors" href="#">Privacy</a>
                            <a className="hover:text-white transition-colors" href="#">Terms</a>
                            <a className="hover:text-white transition-colors" href="#">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
