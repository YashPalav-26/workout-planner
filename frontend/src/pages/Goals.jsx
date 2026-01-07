import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Goals = () => {
    const [goals, setGoals] = useState([
        { id: 1, text: 'Run 5 miles without stopping', completed: false, category: 'Cardio', icon: 'directions_run', progress: 64, unit: 'km', current: 3.2, target: 5, color: 'orange' },
        { id: 2, text: 'Bench Press 200 lbs max', completed: false, category: 'Strength', icon: 'fitness_center', progress: 92, unit: 'lbs', current: 185, target: 200, color: 'indigo' },
        { id: 3, text: 'Drink 3L of water daily', completed: true, category: 'Nutrition', icon: 'water_drop', progress: 100, unit: 'L', current: 3, target: 3, color: 'emerald' },
    ]);

    const [newGoal, setNewGoal] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showModal, setShowModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen || showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen, showModal]);

    const handleAddGoal = () => {
        if (newGoal.trim() !== '') {
            const newGoalObject = {
                id: goals.length + 1,
                text: newGoal,
                completed: false,
                category: 'Uncategorized',
                icon: 'flag',
                progress: 0,
                unit: '%',
                current: 0,
                target: 100,
                color: 'primary',
            };
            setGoals([...goals, newGoalObject]);
            setNewGoal('');
            setShowModal(false);
        }
    };

    const handleToggleCompletion = (id) => {
        setGoals(
            goals.map((goal) =>
                goal.id === id ? { ...goal, completed: !goal.completed } : goal
            )
        );
    };

    const handleDeleteGoal = (id) => {
        setGoals(goals.filter((goal) => goal.id !== id));
    };

    const filteredGoals = selectedCategory === 'All'
        ? goals
        : goals.filter((goal) => goal.category === selectedCategory);

    const categories = ['All', 'Cardio', 'Strength', 'Nutrition', 'Habits'];

    const completedGoals = goals.filter(goal => goal.completed).length;
    const totalGoals = goals.length;
    const overallProgress = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

    return (
        <div className="bg-background-dark text-text-main h-screen overflow-hidden transition-colors duration-300 antialiased flex">
            <aside className={`fixed inset-y-0 left-0 z-50 md:static md:z-30 w-72 h-full border-r border-border-subtle bg-surface transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} md:flex flex-col overflow-y-auto`}>
                <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary text-background-dark rounded-xl size-10 flex items-center justify-center shadow-glow">
                                <span className="material-symbols-outlined text-[24px]">fitness_center</span>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-text-main text-xl font-bold tracking-tight">RepStack</h1>
                            </div>
                        </div>
                        <button onClick={() => setMobileMenuOpen(false)} className="md:hidden p-2 text-text-secondary hover:text-text-main">
                            <span className="material-symbols-outlined text-[24px]">close</span>
                        </button>
                    </div>
                    <div className="mb-8">
                        <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4 pl-4 opacity-70">Menu</p>
                        <nav className="flex flex-col gap-2">
                            <Link to="/dashboard" className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group">
                                <span className="material-symbols-outlined text-[22px]">grid_view</span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </Link>
                            <a className="flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-primary text-background-dark font-semibold shadow-glow" href="#">
                                <span className="material-symbols-outlined text-[22px]" data-weight="fill">flag</span>
                                <span className="text-sm">Goals</span>
                            </a>
                            <a className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group" href="#">
                                <span className="material-symbols-outlined text-[22px]">calendar_month</span>
                                <span className="text-sm font-medium">Schedule</span>
                            </a>
                            <a className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group" href="#">
                                <span className="material-symbols-outlined text-[22px]">fitness_center</span>
                                <span className="text-sm font-medium">Workouts</span>
                            </a>
                            <a className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group" href="#">
                                <span className="material-symbols-outlined text-[22px]">monitoring</span>
                                <span className="text-sm font-medium">Analytics</span>
                            </a>
                        </nav>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4 pl-4 opacity-70">Account</p>
                        <nav className="flex flex-col gap-2">
                            <a className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group" href="#">
                                <span className="material-symbols-outlined text-[22px]">account_circle</span>
                                <span className="text-sm font-medium">Profile</span>
                            </a>
                            <a className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group" href="#">
                                <span className="material-symbols-outlined text-[22px]">settings</span>
                                <span className="text-sm font-medium">Settings</span>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="mt-auto p-6 border-t border-border-subtle bg-surface/50">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-surface-highlight overflow-hidden border border-border-subtle">
                            <div className="bg-center bg-no-repeat bg-cover w-full h-full" style={{ backgroundImage: 'url("/imgs/img1.png")' }}></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-text-main truncate">Alex Morgan</p>
                            <p className="text-xs text-text-secondary truncate">Free Account</p>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark">
                <header className="flex-shrink-0 px-8 py-8 md:px-12 bg-background-dark z-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-text-secondary hover:text-text-main">
                            <span className="material-symbols-outlined text-[24px]">menu</span>
                        </button>
                        <div className="flex flex-col gap-1 md:gap-3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-text-main tracking-tight">Goal Setting</h2>
                            <div className="flex items-center gap-2 text-text-secondary">
                                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-text-secondary">Weekly Focus</span>
                                <span className="w-1 h-1 bg-text-secondary rounded-full"></span>
                                <span className="text-xs sm:text-sm font-medium">Oct 23 — Oct 30</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setShowModal(true)} className="bg-primary hover:bg-primary-hover text-background-dark font-bold py-2.5 px-4 sm:py-3 sm:px-6 md:py-3.5 md:px-7 rounded-xl flex items-center justify-center gap-1 sm:gap-2 transition-all shadow-glow hover:-translate-y-1 text-sm sm:text-base">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        <span className="hidden sm:inline">Create Goal</span>
                        <span className="sm:hidden">Add</span>
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto px-8 pb-8 md:px-12 md:pb-12 no-scrollbar">
                    <div className="max-w-[1600px] mx-auto flex flex-col gap-6 sm:gap-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-8 rounded-2xl sm:rounded-3xl bg-surface border border-border-subtle shadow-card relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                    <span className="material-symbols-outlined text-[150px] sm:text-[200px] text-text-main">emoji_events</span>
                                </div>
                                <div className="flex flex-col h-full justify-between relative z-10">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
                                        <div>
                                            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-text-secondary mb-2 sm:mb-3">Overall Progress</h3>
                                            <div className="flex items-baseline gap-2 sm:gap-4">
                                                <span className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black text-text-main tracking-tighter leading-none">{overallProgress}%</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:items-end gap-1">
                                            <span className="text-xs sm:text-sm font-medium text-primary flex items-center gap-1 bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                                                <span className="material-symbols-outlined text-[14px] sm:text-[16px]">trending_up</span> +12%
                                            </span>
                                            <span className="text-[10px] sm:text-xs text-text-secondary font-medium mt-1">vs last week</span>
                                        </div>
                                    </div>
                                    <div className="w-full space-y-3 sm:space-y-4">
                                        <div className="flex justify-between text-[10px] sm:text-xs font-bold text-text-secondary uppercase tracking-wider">
                                            <span>Weekly Target</span>
                                            <span>{completedGoals} / {totalGoals} Goals</span>
                                        </div>
                                        <div className="w-full h-4 sm:h-6 bg-surface-highlight rounded-full overflow-hidden p-1">
                                            <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-sm relative" style={{ width: `${overallProgress}%` }}>
                                                <div className="absolute right-1 top-1/2 -translate-y-1/2 size-2 bg-text-main/30 rounded-full animate-pulse"></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <p className="text-xs sm:text-sm font-medium text-text-secondary">You're on track to hit your weekly goal!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 flex flex-col gap-4">
                                <div className="flex-1 p-6 rounded-2xl sm:rounded-3xl bg-primary text-background-dark shadow-glow flex items-center justify-between group cursor-default">
                                    <div>
                                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Current Streak</p>
                                        <div className="flex items-baseline gap-2">
                                            <p className="text-4xl sm:text-4xl font-black">12</p>
                                            <span className="text-xs sm:text-sm font-bold opacity-60">days</span>
                                        </div>
                                    </div>
                                    <div className="size-12 sm:size-14 rounded-full bg-background-dark/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl sm:text-3xl">local_fire_department</span>
                                    </div>
                                </div>
                                <div className="flex-1 p-6 rounded-2xl sm:rounded-3xl bg-surface border border-border-subtle shadow-card flex items-center justify-between group hover:border-text-secondary transition-colors">
                                    <div>
                                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Goals Met</p>
                                        <div className="flex items-baseline gap-2">
                                            <p className="text-4xl sm:text-4xl font-black text-text-main">{completedGoals}</p>
                                            <span className="text-xs sm:text-sm font-bold text-text-secondary">/ {totalGoals}</span>
                                        </div>
                                    </div>
                                    <div className="size-12 sm:size-14 rounded-full bg-surface-highlight flex items-center justify-center group-hover:bg-surface-highlight transition-colors">
                                        <span className="material-symbols-outlined text-2xl sm:text-3xl text-text-secondary">check_circle</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 sm:gap-8">
                            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 sm:mx-0 px-4 sm:px-0">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md whitespace-nowrap ${
                                            selectedCategory === category
                                                ? 'bg-primary text-background-dark'
                                                : 'bg-surface hover:bg-surface-highlight text-text-secondary hover:text-text-main transition-colors'
                                        }`}
                                    >
                                        {category === 'All' ? 'All Goals' : category}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                {filteredGoals.map((goal) => (
                                    <div key={goal.id} className={`group relative flex flex-col p-5 rounded-2xl sm:rounded-3xl ${
                                        goal.completed
                                            ? 'bg-primary/10 border border-primary/20'
                                            : 'bg-surface border border-border-subtle hover:border-primary/50'
                                    } transition-all cursor-pointer hover:shadow-xl hover:shadow-primary/10`}>
                                        <div className="flex justify-between items-start">
                                            <div className="size-12 sm:size-14 rounded-xl sm:rounded-2xl flex items-center justify-center bg-primary/10 text-primary">
                                                <span className="material-symbols-outlined text-[24px] sm:text-[28px]">{goal.icon}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {goal.completed && (
                                                    <div className="flex items-center gap-1.5 bg-surface px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-primary text-[10px] font-bold tracking-widest uppercase shadow-sm">
                                                        <span className="material-symbols-outlined text-[14px]">check</span> Done
                                                    </div>
                                                )}
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => handleDeleteGoal(goal.id)} className="size-7 sm:size-8 flex items-center justify-center rounded-full hover:bg-surface-highlight text-text-secondary transition-colors">
                                                        <span className="material-symbols-outlined text-[18px] sm:text-[20px]">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-6">
                                            <h3 className={`text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary ${
                                                goal.completed ? 'text-primary line-through' : 'text-text-main'
                                            } transition-colors`}>
                                                {goal.text}
                                            </h3>
                                            <p className="text-text-secondary text-xs sm:text-sm mt-2 font-medium">
                                                {goal.category}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-3 sm:gap-4 mt-6 pt-6 border-t border-border-subtle">
                                            <div className="flex justify-between items-end">
                                                <span className={`text-3xl sm:text-4xl font-bold tracking-tighter ${goal.completed ? 'text-primary' : 'text-text-main'}`}>
                                                    {goal.current}<span className="text-sm sm:text-base font-semibold text-text-secondary ml-1">{goal.unit}</span>
                                                </span>
                                                <span className="text-[10px] sm:text-xs font-bold bg-surface-highlight px-2 sm:px-2.5 py-1 rounded-md text-text-secondary">
                                                    {goal.progress}%
                                                </span>
                                            </div>
                                            <div className="w-full h-1.5 sm:h-2 bg-surface-highlight rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${goal.completed ? 'bg-primary' : 'bg-text-main'}`} style={{ width: `${goal.progress}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div onClick={() => setShowModal(true)} className="group flex flex-col justify-center items-center p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border-2 border-dashed border-border-subtle hover:border-text-secondary hover:bg-surface-highlight/50 cursor-pointer transition-all">
                                    <div className="size-14 sm:size-16 rounded-full bg-surface-highlight group-hover:bg-text-main group-hover:text-background-dark flex items-center justify-center text-text-secondary transition-colors mb-3 sm:mb-4 duration-300">
                                        <span className="material-symbols-outlined text-2xl sm:text-3xl">add</span>
                                    </div>
                                    <p className="text-base sm:text-lg font-bold text-text-secondary group-hover:text-text-main transition-colors">Create New Goal</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 sm:gap-6">
                            <div className="flex justify-between items-end border-b border-border-subtle pb-3 sm:pb-4">
                                <h3 className="text-lg sm:text-xl font-bold text-text-main">Recent Activity</h3>
                                <button className="text-xs sm:text-sm text-text-secondary hover:text-text-main font-semibold transition-colors flex items-center gap-1 group">
                                    View History <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                                </button>
                            </div>

                            <div className="hidden md:block overflow-x-auto rounded-2xl sm:rounded-3xl border border-border-subtle bg-surface shadow-card">
                                <table className="w-full text-left text-xs sm:text-sm">
                                    <thead className="bg-surface-highlight/50 text-text-secondary uppercase tracking-wider text-[10px] sm:text-[11px] font-bold">
                                        <tr>
                                            <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-tl-2xl sm:rounded-tl-3xl">Activity Name</th>
                                            <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-5">Date & Time</th>
                                            <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-5">Performance</th>
                                            <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 text-right rounded-tr-2xl sm:rounded-tr-3xl">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-subtle">
                                        <tr className="hover:bg-surface-highlight/30 transition-colors group">
                                            <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                                                <div className="flex items-center gap-3 sm:gap-4">
                                                    <div className="size-8 sm:size-10 rounded-xl bg-surface-highlight flex items-center justify-center text-text-secondary group-hover:bg-text-secondary group-hover:text-background-dark transition-colors">
                                                        <span className="material-symbols-outlined text-[18px] sm:text-[20px]">directions_run</span>
                                                    </div>
                                                    <span className="font-bold text-text-main text-sm sm:text-base">Morning Jog</span>
                                                </div>
                                            </td>
                                            <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-text-main text-xs sm:text-sm">Today</span>
                                                    <span className="text-[10px] sm:text-xs text-text-secondary">7:00 AM</span>
                                                </div>
                                            </td>
                                            <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                                                <span className="text-text-main font-bold bg-surface-highlight px-2 py-1 rounded text-[10px] sm:text-xs">3.2 km</span>
                                            </td>
                                            <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-right">
                                                <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                                                    <span className="size-1 sm:size-1.5 rounded-full bg-primary animate-pulse"></span> Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-surface-highlight/30 transition-colors group">
                                            <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                                                <div className="flex items-center gap-3 sm:gap-4">
                                                    <div className="size-8 sm:size-10 rounded-xl bg-surface-highlight flex items-center justify-center text-text-secondary group-hover:bg-text-secondary group-hover:text-background-dark transition-colors">
                                                        <span className="material-symbols-outlined text-[18px] sm:text-[20px]">fitness_center</span>
                                                    </div>
                                                    <span className="font-bold text-text-main text-sm sm:text-base">Upper Body</span>
                                                </div>
                                            </td>
                                            <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-text-main text-xs sm:text-sm">Yesterday</span>
                                                    <span className="text-[10px] sm:text-xs text-text-secondary">6:30 PM</span>
                                                </div>
                                            </td>
                                            <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                                                <span className="text-text-main font-bold bg-surface-highlight px-2 py-1 rounded text-[10px] sm:text-xs">45 mins</span>
                                            </td>
                                            <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-right">
                                                <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                                                    <span className="size-1 sm:size-1.5 rounded-full bg-primary animate-pulse"></span> Completed
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="md:hidden space-y-3">
                                <div className="bg-surface border border-border-subtle rounded-2xl p-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-xl bg-surface-highlight flex items-center justify-center text-text-secondary">
                                                <span className="material-symbols-outlined text-[20px]">directions_run</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-text-main text-sm">Morning Jog</h4>
                                                <p className="text-xs text-text-secondary">Today • 7:00 AM</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
                                            <span className="size-1 rounded-full bg-primary animate-pulse"></span> Completed
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-text-main font-bold bg-surface-highlight px-2 py-1 rounded text-xs">3.2 km</span>
                                    </div>
                                </div>

                                <div className="bg-surface border border-border-subtle rounded-2xl p-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-xl bg-surface-highlight flex items-center justify-center text-text-secondary">
                                                <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-text-main text-sm">Upper Body</h4>
                                                <p className="text-xs text-text-secondary">Yesterday • 6:30 PM</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
                                            <span className="size-1 rounded-full bg-primary animate-pulse"></span> Completed
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-text-main font-bold bg-surface-highlight px-2 py-1 rounded text-xs">45 mins</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-surface border border-border-subtle rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full mx-2 sm:mx-4 shadow-2xl animate-in fade-in zoom-in duration-200">
                            <div className="flex justify-between items-center mb-4 sm:mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-text-main">Create New Goal</h3>
                                <button onClick={() => setShowModal(false)} className="p-1 text-text-secondary hover:text-text-main transition-colors">
                                    <span className="material-symbols-outlined text-[24px]">close</span>
                                </button>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <div>
                                    <label className="block text-xs sm:text-sm font-bold text-text-secondary mb-2">Goal Name</label>
                                    <input
                                        type="text"
                                        value={newGoal}
                                        onChange={(e) => setNewGoal(e.target.value)}
                                        placeholder="Enter your goal..."
                                        className="w-full p-3 sm:p-4 bg-background-dark border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text-main text-sm sm:text-base"
                                    />
                                </div>
                                <button onClick={handleAddGoal} className="w-full bg-primary cursor-pointer hover:bg-primary-hover text-background-dark font-bold py-3 sm:py-4 rounded-xl transition-all text-sm sm:text-base">
                                    Create Goal
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {mobileMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>
                )}
            </main>
        </div>
    );
};

export default Goals;
