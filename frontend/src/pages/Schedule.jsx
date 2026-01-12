import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar.jsx";
import {
  getWorkoutsByMonth,
  getWorkoutsByDate,
  createWorkout,
} from "../api/workoutService.js";

const Schedule = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [todayWorkouts, setTodayWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form state
  const [workoutForm, setWorkoutForm] = useState({
    name: "",
    type: "Cardio",
    duration: 30,
    startTime: "07:00",
    description: "",
  });

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        setLoading(true);
        setError(null);

        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const workouts = await getWorkoutsByMonth(month, year);
        setAllWorkouts(workouts);

        const now = new Date();
        const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        const todayWork = workouts.filter((w) => {
          const wDate = new Date(w.scheduledDate);
          const wDateStr = `${wDate.getFullYear()}-${String(wDate.getMonth() + 1).padStart(2, '0')}-${String(wDate.getDate()).padStart(2, '0')}`;
          return wDateStr === todayStr;
        });

        setTodayWorkouts(todayWork);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching workouts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchScheduleData();
  }, [currentDate]);

  const handleAddWorkout = async () => {
    if (!workoutForm.name.trim()) {
      alert("Please enter a workout name");
      return;
    }

    try {
      const now = new Date();
      const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

      const newWorkout = await createWorkout({
        name: workoutForm.name,
        type: workoutForm.type,
        duration: parseInt(workoutForm.duration),
        startTime: workoutForm.startTime,
        description: workoutForm.description,
        scheduledDate: dateStr,
      });

      setAllWorkouts([...allWorkouts, newWorkout]);
      setWorkoutForm({
        name: "",
        type: "Cardio",
        duration: 30,
        startTime: "07:00",
        description: "",
      });
      setShowAddModal(false);
    } catch (err) {
      alert("Error creating workout: " + err.message);
    }
  };

  // Get calendar days
  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    const prevDays = firstDayIndex;
    const nextDays = 6 - lastDayIndex;

    const days = [];

    // Previous month days
    for (let i = prevDays; i > 0; i--) {
      days.push({
        day: prevLastDay.getDate() - i + 1,
        isCurrentMonth: false,
      });
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const now = new Date();
      const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

      const workouts = allWorkouts.filter((w) => {
        const wDate = new Date(w.scheduledDate);
        const wDateStr = `${wDate.getFullYear()}-${String(wDate.getMonth() + 1).padStart(2, '0')}-${String(wDate.getDate()).padStart(2, '0')}`;
        return wDateStr === dateStr;
      });

      days.push({
        day: i,
        isCurrentMonth: true,
        isToday: dateStr === todayStr,
        workouts: workouts,
      });
    }

    // Next month days
    for (let i = 1; i <= nextDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const calendarDays = getCalendarDays();

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-background-dark text-text-main h-screen overflow-hidden transition-colors duration-300 antialiased flex">
      <Sidebar handleLogout={handleLogout} />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-background-dark">
        <header className="flex-shrink-0 px-8 py-8 md:px-12 bg-background-dark z-20 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight mb-1">
              Schedule
            </h2>
            <p className="text-text-secondary font-medium">
              Your fitness journey, planned to perfection.
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-surface rounded-full border border-border-subtle shadow-sm">
              <div className="bg-accent-success/10 p-1.5 rounded-full text-accent-success">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-weight="fill"
                >
                  local_fire_department
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-main leading-none">
                  5 Day Streak
                </span>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-border-subtle hidden md:block"></div>
            <div className="flex items-center gap-4">
              <button className="size-11 rounded-full flex items-center justify-center text-text-main bg-surface border border-border-subtle hover:bg-surface-highlight transition-all relative shadow-sm">
                <span className="absolute top-2.5 right-3 size-2 bg-accent-error rounded-full ring-2 ring-surface"></span>
                <span className="material-symbols-outlined text-[22px]">
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
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 h-full">
            <div className="xl:col-span-8 flex flex-col h-full">
              <div className="bg-surface rounded-3xl shadow-card p-1 flex-1 flex flex-col min-h-[600px] border border-border-subtle/50 overflow-hidden">
                <div className="flex items-center justify-between p-6 md:p-8 border-b border-border-subtle bg-surface/50">
                  <div className="flex items-center gap-6">
                    <h3 className="text-2xl font-extrabold text-text-main">
                      {monthName}
                    </h3>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={handlePrevMonth}
                        className="size-8 flex items-center justify-center rounded-full hover:bg-surface-highlight transition-colors text-text-secondary hover:text-text-main"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          chevron_left
                        </span>
                      </button>
                      <button
                        onClick={handleNextMonth}
                        className="size-8 flex items-center justify-center rounded-full hover:bg-surface-highlight transition-colors text-text-secondary hover:text-text-main"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex p-1 bg-background-dark rounded-xl">
                    <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-surface text-text-main shadow-sm transition-all">
                      Today
                    </button>
                    <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-text-secondary hover:text-text-main transition-colors">
                      Month
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 py-4 bg-surface/30">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center text-[11px] font-bold text-text-secondary/70 uppercase tracking-wider"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 flex-1 auto-rows-fr bg-border-subtle/30 gap-px">
                  {calendarDays.map((day, index) => (
                    <div
                      key={index}
                      className={`bg-surface hover:bg-surface-highlight transition-colors p-3 min-h-[100px] flex flex-col gap-1.5 group cursor-pointer relative ${
                        !day.isCurrentMonth && "text-text-secondary/40"
                      } ${
                        day.isToday
                          ? "ring-1 ring-inset ring-primary/20 z-10"
                          : ""
                      }`}
                    >
                      <span
                        className={`text-sm font-bold ${
                          day.isToday
                            ? "flex items-center justify-center size-7 rounded-full bg-primary text-background-dark shadow-lg shadow-primary/30"
                            : "text-text-secondary group-hover:text-text-main"
                        }`}
                      >
                        {day.day}
                      </span>
                      {day.workouts && day.workouts.length > 0 && (
                        <>
                          {day.workouts.slice(0, 2).map((w, idx) => (
                            <div
                              key={idx}
                              className="px-2 py-1 rounded-md bg-accent-success/10 text-accent-success text-[10px] font-bold truncate flex items-center gap-1"
                            >
                              <span className="size-1.5 rounded-full bg-accent-success hidden md:block"></span>
                              {w.name}
                            </div>
                          ))}
                          {day.workouts.length > 2 && (
                            <div className="px-2 py-1 text-[10px] font-bold text-text-secondary">
                              +{day.workouts.length - 2} more
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 flex flex-col gap-6 lg:gap-8">
              <div className="bg-surface rounded-3xl shadow-card p-6 md:p-8 flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1.5 block">
                      Today's Plan
                    </span>
                    <h3 className="text-3xl font-extrabold text-text-main tracking-tight">
                      {new Date().toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="size-10 rounded-xl bg-surface-highlight flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all group shadow-sm border border-transparent hover:border-primary/20"
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      add
                    </span>
                  </button>
                </div>
                <div className="flex flex-col relative z-10">
                  {todayWorkouts.length > 0 ? (
                    todayWorkouts.map((workout, idx) => (
                      <div
                        key={workout._id}
                        className="flex gap-4 items-start group"
                      >
                        <div className="flex flex-col items-center gap-1 pt-1.5 h-full">
                          {workout.status === "completed" ? (
                            <div className="size-5 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                              <span className="material-symbols-outlined text-background-dark text-[14px] font-bold">
                                check
                              </span>
                            </div>
                          ) : (
                            <div className="size-5 rounded-full border-[3px] border-accent-blue bg-surface shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
                          )}
                          {idx < todayWorkouts.length - 1 && (
                            <div className="w-0.5 flex-1 bg-border-subtle min-h-[40px]"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex justify-between items-start mb-1">
                            <h4
                              className={`font-bold text-lg ${
                                workout.status === "completed"
                                  ? "text-primary line-through"
                                  : "text-text-main"
                              }`}
                            >
                              {workout.name}
                            </h4>
                            <span
                              className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide ${
                                workout.status === "completed"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-accent-blue/10 text-accent-blue"
                              }`}
                            >
                              {workout.status === "completed"
                                ? "Completed"
                                : "Up Next"}
                            </span>
                          </div>
                          <p className="text-sm text-text-secondary font-medium mb-4">
                            {workout.startTime} • {workout.duration} min •{" "}
                            {workout.type}
                          </p>
                          {workout.status !== "completed" && (
                            <div className="flex gap-3">
                              <button className="px-5 py-2.5 rounded-xl bg-primary text-background-dark text-sm font-bold hover:bg-primary-hover hover:-translate-y-0.5 transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">
                                  play_arrow
                                </span>{" "}
                                Start
                              </button>
                              <button className="px-5 py-2.5 rounded-xl border border-border-subtle text-text-secondary hover:text-text-main hover:bg-surface-highlight text-sm font-bold transition-all">
                                Details
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-text-secondary text-center py-8">
                      No workouts scheduled for today
                    </p>
                  )}
                </div>
              </div>
              <div className="bg-surface rounded-3xl shadow-card p-6 md:p-8 flex flex-col">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-text-main mb-1">
                      Monthly Goal
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Consistency tracking
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-extrabold text-primary tracking-tight">
                      85%
                    </span>
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wide">
                      Achieved
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-text-main mb-3">
                      <span>Workouts Completed</span>
                      <span>
                        17{" "}
                        <span className="text-text-secondary font-medium">
                          / 20
                        </span>
                      </span>
                    </div>
                    <div className="w-full bg-surface-highlight rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(14,165,233,0.4)]"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-text-main mb-3">
                      <span>Active Minutes</span>
                      <span>
                        840{" "}
                        <span className="text-text-secondary font-medium">
                          / 1000
                        </span>
                      </span>
                    </div>
                    <div className="w-full bg-surface-highlight rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-accent-success h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                        style={{ width: "84%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between">
                  <div className="flex -space-x-3">
                    <div className="size-9 rounded-full border-2 border-surface bg-surface-highlight"></div>
                    <div className="size-9 rounded-full border-2 border-surface bg-surface-highlight"></div>
                    <div className="size-9 rounded-full border-2 border-surface bg-primary text-background-dark flex items-center justify-center text-[10px] font-bold shadow-md relative z-10">
                      +3
                    </div>
                  </div>
                  <p className="text-xs font-bold text-text-secondary">
                    Friends active today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showAddModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-surface border border-border-subtle rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full mx-2 sm:mx-4 shadow-2xl animate-in fade-in zoom-in duration-200">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-text-main">
                  Schedule Workout
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1 text-text-secondary hover:text-text-main transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    close
                  </span>
                </button>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-text-secondary mb-2">
                    Workout Name
                  </label>
                  <input
                    type="text"
                    value={workoutForm.name}
                    onChange={(e) =>
                      setWorkoutForm({ ...workoutForm, name: e.target.value })
                    }
                    placeholder="e.g., Morning Run"
                    className="w-full p-3 sm:p-4 bg-background-dark border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text-main text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-text-secondary mb-2">
                    Type
                  </label>
                  <select
                    value={workoutForm.type}
                    onChange={(e) =>
                      setWorkoutForm({ ...workoutForm, type: e.target.value })
                    }
                    className="w-full p-3 sm:p-4 bg-background-dark border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text-main text-sm sm:text-base"
                  >
                    <option>Cardio</option>
                    <option>Strength</option>
                    <option>Flexibility</option>
                    <option>Sports</option>
                    <option>Recovery</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-text-secondary mb-2">
                      Start Time
                    </label>
                    <input
                      type="time"
                      value={workoutForm.startTime}
                      onChange={(e) =>
                        setWorkoutForm({
                          ...workoutForm,
                          startTime: e.target.value,
                        })
                      }
                      className="w-full p-3 sm:p-4 bg-background-dark border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text-main text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-text-secondary mb-2">
                      Duration (min)
                    </label>
                    <input
                      type="number"
                      value={workoutForm.duration}
                      onChange={(e) =>
                        setWorkoutForm({
                          ...workoutForm,
                          duration: e.target.value,
                        })
                      }
                      className="w-full p-3 sm:p-4 bg-background-dark border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text-main text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-text-secondary mb-2">
                    Description (Optional)
                  </label>
                  <textarea
                    value={workoutForm.description}
                    onChange={(e) =>
                      setWorkoutForm({
                        ...workoutForm,
                        description: e.target.value,
                      })
                    }
                    placeholder="Add notes..."
                    rows="3"
                    className="w-full p-3 sm:p-4 bg-background-dark border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text-main text-sm"
                  ></textarea>
                </div>

                <button
                  onClick={handleAddWorkout}
                  className="w-full bg-primary cursor-pointer hover:bg-primary-hover text-background-dark font-bold py-3 sm:py-4 rounded-xl transition-all text-sm sm:text-base"
                >
                  Schedule Workout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Schedule;
