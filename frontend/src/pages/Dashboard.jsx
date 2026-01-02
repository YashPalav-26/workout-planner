import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 h-full border-r border-[#23482f] bg-background-dark overflow-y-auto">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex items-center justify-center rounded-full size-10 bg-linear-to-br from-primary to-[#0bda43] shadow-[0_0_15px_rgba(19,236,91,0.3)] text-background-dark">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-white text-lg font-bold leading-normal tracking-tight">FitTrack</h1>
                            <p className="text-primary text-xs font-medium leading-normal">Pro Plan</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <a className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/20 text-primary border border-primary/10" href="#">
                            <span className="material-symbols-outlined text-[20px]">dashboard</span>
                            <p className="text-sm font-semibold leading-normal">Dashboard</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#92c9a4] hover:bg-[#23482f] hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                            <p className="text-sm font-medium leading-normal">Schedule</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#92c9a4] hover:bg-[#23482f] hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                            <p className="text-sm font-medium leading-normal">Exercises</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#92c9a4] hover:bg-[#23482f] hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-[20px]">pie_chart</span>
                            <p className="text-sm font-medium leading-normal">Reports</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#92c9a4] hover:bg-[#23482f] hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined text-[20px]">settings</span>
                            <p className="text-sm font-medium leading-normal">Settings</p>
                        </a>
                    </nav>
                </div>
                <div className="mt-auto p-6">
                    <div onClick={handleLogout} className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#92c9a4] hover:bg-[#23482f] hover:text-white cursor-pointer transition-colors">
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                        <p className="text-sm font-medium leading-normal">Log Out</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Header */}
                <header className="shrink-0 px-6 py-5 md:px-10 border-b border-[#23482f] bg-background-dark/95 backdrop-blur z-10">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-white text-2xl md:text-3xl font-black leading-tight tracking-[-0.033em]">Good Evening, Alex</h2>
                            <p className="text-[#92c9a4] text-sm font-normal leading-normal mt-1">Wednesday, Oct 25</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-2 bg-[#1c3326] px-3 py-1.5 rounded-full border border-[#23482f]">
                                <span className="material-symbols-outlined text-primary text-sm">local_fire_department</span>
                                <span className="text-white text-xs font-bold">5 Day Streak</span>
                            </div>
                            <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-primary hover:bg-[#0bda43] text-background-dark text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-[0_0_20px_rgba(19,236,91,0.2)]">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                <span className="truncate">Log Workout</span>
                            </button>
                            {/* Mobile Menu Button */}
                            <button className="md:hidden p-2 text-white">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar">
                    <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
                        {/* Row 1: Goal & Chart */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Weekly Goal Card */}
                            <div className="lg:col-span-4 flex flex-col bg-surface-dark rounded-xl p-6 border border-[#23482f] shadow-sm">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-white text-lg font-bold">Weekly Goal</h3>
                                        <p className="text-[#92c9a4] text-sm">Keep pushing!</p>
                                    </div>
                                    <div className="bg-[#23482f] p-2 rounded-lg">
                                        <span className="material-symbols-outlined text-primary">flag</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-6 justify-between items-end">
                                        <p className="text-4xl font-black text-white">3<span className="text-xl text-[#92c9a4] font-medium">/5</span></p>
                                        <p className="text-white text-sm font-medium bg-[#23482f] px-2 py-1 rounded">60%</p>
                                    </div>
                                    <div className="w-full bg-[#102216] rounded-full h-3">
                                        <div className="bg-primary h-3 rounded-full shadow-[0_0_10px_rgba(19,236,91,0.5)]" style={{ width: '60%' }}></div>
                                    </div>
                                    <p className="text-[#92c9a4] text-sm font-normal leading-normal mt-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">info</span>
                                        2 workouts left to hit your goal!
                                    </p>
                                </div>
                            </div>
                            {/* Activity Volume Chart */}
                            <div className="lg:col-span-8 flex flex-col bg-surface-dark rounded-xl p-6 border border-[#23482f] shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-white text-lg font-bold">Activity Volume</h3>
                                        <p className="text-[#92c9a4] text-sm">Last 30 Days</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-white tracking-tight text-2xl font-bold">18,450 <span className="text-sm text-[#92c9a4] font-normal">kcal</span></p>
                                        <p className="text-primary text-sm font-medium flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">trending_up</span> +12%
                                        </p>
                                    </div>
                                </div>
                                {/* Custom CSS Chart */}
                                <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 min-h-[160px] pt-6">
                                    {/* Bar 1 */}
                                    <div className="flex flex-col items-center gap-2 flex-1 group">
                                        <div className="w-full bg-[#23482f] rounded-t-sm relative h-full flex items-end group-hover:bg-[#2c583b] transition-colors overflow-hidden">
                                            <div className="w-full bg-primary/80 h-[60%]"></div>
                                        </div>
                                        <span className="text-[#92c9a4] text-xs font-medium">Week 1</span>
                                    </div>
                                    {/* Bar 2 */}
                                    <div className="flex flex-col items-center gap-2 flex-1 group">
                                        <div className="w-full bg-[#23482f] rounded-t-sm relative h-full flex items-end group-hover:bg-[#2c583b] transition-colors overflow-hidden">
                                            <div className="w-full bg-primary/80 h-[45%]"></div>
                                        </div>
                                        <span className="text-[#92c9a4] text-xs font-medium">Week 2</span>
                                    </div>
                                    {/* Bar 3 */}
                                    <div className="flex flex-col items-center gap-2 flex-1 group">
                                        <div className="w-full bg-[#23482f] rounded-t-sm relative h-full flex items-end group-hover:bg-[#2c583b] transition-colors overflow-hidden">
                                            <div className="w-full bg-primary h-[75%] shadow-[0_0_15px_rgba(19,236,91,0.2)]"></div>
                                        </div>
                                        <span className="text-white text-xs font-bold">Week 3</span>
                                    </div>
                                    {/* Bar 4 */}
                                    <div className="flex flex-col items-center gap-2 flex-1 group">
                                        <div className="w-full bg-[#23482f] rounded-t-sm relative h-full flex items-end group-hover:bg-[#2c583b] transition-colors overflow-hidden">
                                            <div className="w-full bg-primary/80 h-[55%]"></div>
                                        </div>
                                        <span className="text-[#92c9a4] text-xs font-medium">Week 4</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {/* Stat 1 */}
                            <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-dark border border-[#23482f]">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-[#92c9a4]">local_fire_department</span>
                                    <p className="text-[#92c9a4] text-sm font-medium">Calories</p>
                                </div>
                                <p className="text-white text-2xl font-bold">2,500 <span className="text-sm font-normal text-[#92c9a4]">kcal</span></p>
                                <p className="text-primary text-xs font-medium">+5% from last week</p>
                            </div>
                            {/* Stat 2 */}
                            <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-dark border border-[#23482f]">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-[#92c9a4]">timer</span>
                                    <p className="text-[#92c9a4] text-sm font-medium">Active Time</p>
                                </div>
                                <p className="text-white text-2xl font-bold">320 <span className="text-sm font-normal text-[#92c9a4]">min</span></p>
                                <p className="text-primary text-xs font-medium">+10% from last week</p>
                            </div>
                            {/* Stat 3 */}
                            <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-dark border border-[#23482f]">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-[#92c9a4]">map</span>
                                    <p className="text-[#92c9a4] text-sm font-medium">Distance</p>
                                </div>
                                <p className="text-white text-2xl font-bold">12.5 <span className="text-sm font-normal text-[#92c9a4]">km</span></p>
                                <p className="text-primary text-xs font-medium">+2% from last week</p>
                            </div>
                            {/* Stat 4 */}
                            <div className="flex flex-col gap-2 rounded-xl p-5 bg-surface-dark border border-[#23482f]">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-[#92c9a4]">monitor_weight</span>
                                    <p className="text-[#92c9a4] text-sm font-medium">Weight</p>
                                </div>
                                <p className="text-white text-2xl font-bold">185 <span className="text-sm font-normal text-[#92c9a4]">lbs</span></p>
                                <p className="text-[#fa5538] text-xs font-medium">-1% from last week</p>
                            </div>
                        </div>

                        {/* Row 3: Recent & Widgets */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Recent Workouts List */}
                            <div className="lg:col-span-7 flex flex-col bg-surface-dark rounded-xl border border-[#23482f] overflow-hidden">
                                <div className="p-6 border-b border-[#23482f] flex justify-between items-center">
                                    <h3 className="text-white text-lg font-bold">Recent Workouts</h3>
                                    <a className="text-primary text-sm font-bold hover:underline" href="#">View All</a>
                                </div>
                                <div className="flex flex-col">
                                    {/* Item 1 */}
                                    <div className="flex items-center gap-4 p-4 hover:bg-[#23482f]/50 transition-colors border-b border-[#23482f]/50 last:border-0">
                                        <div className="size-12 rounded-lg bg-[#23482f] flex items-center justify-center text-white shrink-0">
                                            <span className="material-symbols-outlined">directions_run</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white text-base font-medium truncate">Morning Run</h4>
                                            <p className="text-[#92c9a4] text-sm truncate">Cardio • 5.2 km</p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <p className="text-white text-sm font-bold">45 min</p>
                                            <p className="text-[#92c9a4] text-xs">Today</p>
                                        </div>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="flex items-center gap-4 p-4 hover:bg-[#23482f]/50 transition-colors border-b border-[#23482f]/50 last:border-0">
                                        <div className="size-12 rounded-lg bg-[#23482f] flex items-center justify-center text-white shrink-0">
                                            <span className="material-symbols-outlined">fitness_center</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white text-base font-medium truncate">Upper Body Power</h4>
                                            <p className="text-[#92c9a4] text-sm truncate">Strength • Chest & Back</p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <p className="text-white text-sm font-bold">60 min</p>
                                            <p className="text-[#92c9a4] text-xs">Yesterday</p>
                                        </div>
                                    </div>
                                    {/* Item 3 */}
                                    <div className="flex items-center gap-4 p-4 hover:bg-[#23482f]/50 transition-colors border-b border-[#23482f]/50 last:border-0">
                                        <div className="size-12 rounded-lg bg-[#23482f] flex items-center justify-center text-white shrink-0">
                                            <span className="material-symbols-outlined">self_improvement</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white text-base font-medium truncate">Recovery Yoga</h4>
                                            <p className="text-[#92c9a4] text-sm truncate">Mobility • Full Body</p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <p className="text-white text-sm font-bold">30 min</p>
                                            <p className="text-[#92c9a4] text-xs">Oct 23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Widgets Column */}
                            <div className="lg:col-span-5 flex flex-col gap-6">
                                {/* Next Workout Widget */}
                                <div className="bg-surface-dark rounded-xl p-6 border border-[#23482f] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="material-symbols-outlined text-8xl text-white">calendar_month</span>
                                    </div>
                                    <h3 className="text-[#92c9a4] text-sm font-medium mb-1 uppercase tracking-wider">Up Next</h3>
                                    <h4 className="text-white text-xl font-bold mb-4">Leg Day Hypertrophy</h4>
                                    <div className="flex gap-4 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-white bg-[#23482f] px-3 py-1.5 rounded-full">
                                            <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                                            5:30 PM
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-white bg-[#23482f] px-3 py-1.5 rounded-full">
                                            <span className="material-symbols-outlined text-sm text-primary">timer</span>
                                            75 min
                                        </div>
                                    </div>
                                    <button className="w-full py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-background-dark font-bold text-sm transition-colors">
                                        View Details
                                    </button>
                                </div>
                                {/* Motivation Widget */}
                                <div className="flex-1 bg-linear-to-br from-primary/20 to-surface-dark rounded-xl p-6 border border-primary/20 flex flex-col justify-center items-center text-center relative overflow-hidden">
                                    {/* CSS Pattern for texture */}
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                                    <div className="relative z-10">
                                        <div className="size-12 rounded-full bg-primary flex items-center justify-center text-background-dark mx-auto mb-4 shadow-[0_0_15px_rgba(19,236,91,0.5)]">
                                            <span className="material-symbols-outlined">emoji_events</span>
                                        </div>
                                        <p className="text-white text-lg font-bold italic">"The only bad workout is the one that didn't happen."</p>
                                        <p className="text-[#92c9a4] text-sm mt-2 font-medium">Keep crushing it, Alex!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="mt-10 mb-6 text-center">
                        <p className="text-[#92c9a4]/50 text-xs">© 2023 FitTrack. All rights reserved.</p>
                    </footer>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
