import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar.jsx";
import LogoSvg from "../components/LogoSvg.jsx";
import { getDashboardStats } from "../api/metricsService.js";
import { getRecentWorkouts } from "../api/workoutService.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [recentWorkouts, setRecentWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [dashboardStats, workouts] = await Promise.all([
          getDashboardStats(),
          getRecentWorkouts(5),
        ]);

        setStats(dashboardStats);
        setRecentWorkouts(workouts);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="bg-background-dark text-text-main overflow-hidden h-screen flex transition-colors duration-300 antialiased">
        <Sidebar handleLogout={handleLogout} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading dashboard...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-background-dark text-text-main overflow-hidden h-screen flex transition-colors duration-300 antialiased">
        <Sidebar handleLogout={handleLogout} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-background-dark px-4 py-2 rounded"
            >
              Retry
            </button>
          </div>
        </main>
      </div>
    );
  }

  const todayStats = stats?.today || {};
  const weeklyData = stats?.weekly || [];
  const goalsProgress = stats?.goalsProgress || {};
  const streak = stats?.streak || 0;

  // Prepare chart data
  const chartData = {
    labels: weeklyData.map((d) => d.day),
    datasets: [
      {
        label: "Active Minutes",
        data: weeklyData.map((d) => d.activeMinutes),
        borderColor: "#0ea5e9",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#94a3b8",
          font: { size: 12 },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#94a3b8",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(148, 163, 184, 0.1)",
        },
        ticks: {
          color: "#94a3b8",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#94a3b8",
        },
      },
    },
  };

  return (
    <div className="bg-background-dark text-text-main overflow-hidden h-screen flex transition-colors duration-300 antialiased">
      <Sidebar handleLogout={handleLogout} />

      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-dark">
        <header className="flex-shrink-0 px-8 py-8 md:px-12 bg-background-dark z-20 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight mb-1">
              Dashboard
            </h2>
            <p className="text-text-secondary font-medium">
              Your weekly performance at a glance.
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-2">
              <span
                className="material-symbols-outlined text-orange-500 text-[24px]"
                data-weight="fill"
              >
                local_fire_department
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-main leading-none">
                  {streak} Days
                </span>
                <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                  Streak
                </span>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-border-subtle hidden md:block"></div>
            <div className="flex items-center gap-4">
              <button className="size-10 rounded-full flex items-center justify-center text-text-main hover:bg-surface transition-all relative">
                <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border border-background-dark"></span>
                <span className="material-symbols-outlined text-[24px]">
                  notifications
                </span>
              </button>
              <button className="md:hidden p-2 text-text-main">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-8 pb-8 md:px-12 md:pb-12 no-scrollbar">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-surface p-8 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-default flex flex-col justify-between h-48 md:h-56 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  <span className="material-symbols-outlined text-[120px]">
                    local_fire_department
                  </span>
                </div>
                <div className="flex justify-between items-start z-10">
                  <div className="flex items-center gap-2 text-text-secondary font-bold text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[20px]">
                      local_fire_department
                    </span>
                    Calories
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-500 bg-green-900/30 px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[14px]">
                      trending_up
                    </span>{" "}
                    5.2%
                  </span>
                </div>
                <div className="z-10">
                  <h3 className="text-5xl lg:text-6xl font-extrabold text-text-main tracking-tighter mb-1">
                    {todayStats.caloriesBurned || 0}
                  </h3>
                  <p className="text-text-secondary font-medium">
                    kcal burned today
                  </p>
                </div>
              </div>

              <div className="bg-surface p-8 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-default flex flex-col justify-between h-48 md:h-56 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  <span className="material-symbols-outlined text-[120px]">
                    timer
                  </span>
                </div>
                <div className="flex justify-between items-start z-10">
                  <div className="flex items-center gap-2 text-text-secondary font-bold text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[20px]">
                      timer
                    </span>
                    Active Time
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-500 bg-green-900/30 px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[14px]">
                      trending_up
                    </span>{" "}
                    12%
                  </span>
                </div>
                <div className="z-10">
                  <h3 className="text-5xl lg:text-6xl font-extrabold text-text-main tracking-tighter mb-1">
                    {todayStats.activeMinutes || 0}
                  </h3>
                  <p className="text-text-secondary font-medium">
                    minutes this week
                  </p>
                </div>
              </div>

              <div className="bg-surface p-8 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-default flex flex-col justify-between h-48 md:h-56 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  <span className="material-symbols-outlined text-[120px]">
                    monitor_weight
                  </span>
                </div>
                <div className="flex justify-between items-start z-10">
                  <div className="flex items-center gap-2 text-text-secondary font-bold text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[20px]">
                      monitor_weight
                    </span>
                    Current Weight
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-500 bg-green-900/30 px-2 py-1 rounded-md">
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_downward
                    </span>{" "}
                    1.5%
                  </span>
                </div>
                <div className="z-10">
                  <h3 className="text-5xl lg:text-6xl font-extrabold text-text-main tracking-tighter mb-1">
                    {todayStats.weight || "—"}
                  </h3>
                  <p className="text-text-secondary font-medium">
                    lbs recorded
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
              <div className="xl:col-span-2 bg-surface rounded-3xl shadow-card p-8 flex flex-col">
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <h3 className="text-xl font-bold text-text-main mb-1">
                      Activity Overview
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Active minutes over the last 7 days
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-background-dark">
                      Weekly
                    </button>
                    <button className="px-4 py-2 text-xs font-bold rounded-lg text-text-secondary hover:bg-surface-highlight transition-colors">
                      Monthly
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  {weeklyData.length > 0 ? (
                    <Line data={chartData} options={chartOptions} />
                  ) : (
                    <p className="text-text-secondary text-center py-8">
                      No data available
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-surface rounded-3xl shadow-card p-8 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="w-full flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-text-main mb-1">
                      Weekly Goal
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Workouts completed
                    </p>
                  </div>
                  <div className="p-2 bg-surface-highlight rounded-lg">
                    <span className="material-symbols-outlined text-[20px] text-text-main">
                      flag
                    </span>
                  </div>
                </div>
                <div className="relative size-56 flex items-center justify-center">
                  <svg
                    className="size-full -rotate-90 transform transition-all duration-1000"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-surface-highlight"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                    <path
                      className="text-primary stroke-current"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeDasharray={`${
                        (goalsProgress.percentage || 0) * 0.88
                      }, 100`}
                      strokeLinecap="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-6xl font-extrabold text-text-main tracking-tight">
                      {goalsProgress.completed || 0}
                      <span className="text-2xl text-text-secondary font-bold">
                        /{goalsProgress.total || 0}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm font-medium text-text-secondary">
                    You're{" "}
                    <span className="text-primary font-bold">
                      {goalsProgress.percentage || 0}%
                    </span>
                    of the way there.
                  </p>
                  <button className="mt-4 text-xs font-bold text-primary hover:text-primary-dark uppercase tracking-widest transition-colors">
                    Update Goal
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 pb-4">
              <div className="bg-surface rounded-3xl shadow-card p-8 flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-70"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                    Up Next
                  </h3>
                </div>
                <h2 className="text-3xl font-bold text-text-main mb-2 relative z-10 group-hover:text-primary transition-colors">
                  Leg Day Hypertrophy
                </h2>
                <p className="text-text-secondary font-medium mb-8 max-w-md relative z-10">
                  Focus on quads and calves today. Don't skip the warm-up set!
                </p>
                <div className="flex gap-4 mb-8 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-text-secondary tracking-wider mb-1">
                      Time
                    </span>
                    <span className="text-lg font-bold text-text-main">
                      5:30 PM
                    </span>
                  </div>
                  <div className="w-px h-10 bg-border-subtle"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-text-secondary tracking-wider mb-1">
                      Duration
                    </span>
                    <span className="text-lg font-bold text-text-main">
                      75 min
                    </span>
                  </div>
                </div>
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-background-dark font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all relative z-10 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">play_arrow</span>
                  Start Workout
                </button>
              </div>

              <div className="bg-surface rounded-3xl shadow-card p-8 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold text-text-main">
                    Recent Workouts
                  </h3>
                  <a
                    className="text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                    href="#"
                  >
                    View All
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  {recentWorkouts.length > 0 ? (
                    recentWorkouts.map((workout) => (
                      <div
                        key={workout._id}
                        className="group flex items-center p-4 rounded-2xl hover:bg-background-dark/50 transition-colors cursor-pointer border border-transparent hover:border-border-subtle"
                      >
                        <div className="size-12 rounded-xl bg-orange-50 dark:bg-orange-900/10 text-orange-500 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform">
                          {workout.type === "Cardio" ? (
                            <span className="material-symbols-outlined">
                              directions_run
                            </span>
                          ) : (
                            <LogoSvg className="w-6 h-6" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-text-main text-lg group-hover:text-primary transition-colors">
                            {workout.name}
                          </h4>
                          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                            {workout.type}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-text-main">
                            {workout.duration} min
                          </p>
                          <p className="text-xs text-text-secondary">
                            {new Date(
                              workout.scheduledDate
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-text-secondary text-center py-8">
                      No recent workouts
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
