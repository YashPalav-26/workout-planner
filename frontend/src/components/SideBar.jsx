import { Link } from 'react-router-dom';

const Sidebar = ({ handleLogout }) => {
        return (
        <aside className="hidden md:flex flex-col w-72 h-full border-r border-border-subtle bg-surface overflow-y-auto z-30">
            <div className="p-8">
                <div className="flex items-center gap-3 mb-12">
                    <div className="bg-primary text-background-dark rounded-xl size-10 flex items-center justify-center shadow-glow">
                        <span className="material-symbols-outlined text-[24px]">fitness_center</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-text-main text-xl font-bold tracking-tight">RepStack</h1>
                    </div>
                </div>
                <div className="mb-8">
                    <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4 pl-4 opacity-70">Menu</p>
                    <nav className="flex flex-col gap-2">
                        <a className="flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-text-main text-background-dark font-semibold shadow-lg" href="#">
                            <span className="material-symbols-outlined text-[22px]" data-weight="fill">grid_view</span>
                            <span className="text-sm">Dashboard</span>
                        </a>
                        <Link to="/goals" className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group">
                            <span className="material-symbols-outlined text-[22px]">flag</span>
                            <span className="text-sm font-medium">Goals</span>
                        </Link>
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
                    <button onClick={handleLogout} className="p-2 text-text-secondary hover:text-text-main transition-colors">
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
