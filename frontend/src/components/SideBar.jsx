import { Link, useLocation } from "react-router-dom";
import LogoSvg from "./LogoSvg";
import {
  Grid,
  Calendar,
  Flag,
  Dumbbell,
  BarChart2,
  LayoutDashboard,
} from "lucide-react";

const Sidebar = ({ handleLogout }) => {
  const location = useLocation();
  return (
    <aside className="hidden md:flex flex-col w-72 h-full border-r border-border-subtle bg-surface overflow-y-auto z-30">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-primary text-black rounded-xl size-10 flex items-center justify-center shadow-glow">
            <LogoSvg width="48" height="34" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-text-main text-xl font-bold tracking-tight leading-none">
              RepStack
            </h1>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4 pl-4 opacity-70">
            Menu
          </p>
          <nav className="flex flex-col gap-2">
            <Link
              to="/dashboard"
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${
                location.pathname === "/dashboard"
                  ? "bg-primary text-background-dark font-semibold shadow-glow"
                  : "text-text-secondary hover:bg-surface-highlight hover:text-text-main"
              }`}
            >
              <LayoutDashboard size={22} />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              to="/schedule"
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${
                location.pathname === "/schedule"
                  ? "bg-primary text-background-dark font-semibold shadow-glow"
                  : "text-text-secondary hover:bg-surface-highlight hover:text-text-main"
              }`}
            >
              <Calendar size={22} />
              <span className="text-sm font-medium">Schedule</span>
            </Link>
            <Link
              to="/goals"
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${
                location.pathname === "/goals"
                  ? "bg-primary text-background-dark font-semibold shadow-glow"
                  : "text-text-secondary hover:bg-surface-highlight hover:text-text-main"
              }`}
            >
              <Flag size={22} />
              <span className="text-sm font-medium">Goals</span>
            </Link>
            <a
              className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group"
              href="#"
            >
              <Dumbbell size={22} />
              <span className="text-sm font-medium">Workouts</span>
            </a>
            <a
              className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group"
              href="#"
            >
              <BarChart2 size={22} />
              <span className="text-sm font-medium">Analytics</span>
            </a>
          </nav>
        </div>
        <div>
          <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4 pl-4 opacity-70">
            Account
          </p>
          <nav className="flex flex-col gap-2">
            <a
              className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group"
              href="#"
            >
              <span className="material-symbols-outlined text-[22px]">
                account_circle
              </span>
              <span className="text-sm font-medium">Profile</span>
            </a>
            <a
              className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-text-secondary hover:bg-surface-highlight hover:text-text-main transition-all group"
              href="#"
            >
              <span className="material-symbols-outlined text-[22px]">
                settings
              </span>
              <span className="text-sm font-medium">Settings</span>
            </a>
          </nav>
        </div>
      </div>
      <div className="mt-auto p-6 border-t border-border-subtle bg-surface/50">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-surface-highlight overflow-hidden border border-border-subtle">
            <div
              className="bg-center bg-no-repeat bg-cover w-full h-full"
              style={{ backgroundImage: 'url("/imgs/img1.png")' }}
            ></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-text-main truncate">
              Alex Morgan
            </p>
            <p className="text-xs text-text-secondary truncate">Free Account</p>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-text-secondary hover:text-text-main transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
