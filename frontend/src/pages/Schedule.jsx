import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar.jsx";

const Schedule = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const calendarDays = [
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true, event: null },
    {
      day: 2,
      isCurrentMonth: true,
      event: { name: "Cardio", color: "primary" },
    },
    { day: 3, isCurrentMonth: true, event: null },
    {
      day: 4,
      isCurrentMonth: true,
      event: { name: "Full Body", color: "primary" },
    },
    { day: 5, isCurrentMonth: true, event: null },
    { day: 6, isCurrentMonth: true, event: { name: "Yoga", color: "primary" } },
    { day: 7, isCurrentMonth: true, event: null },
    { day: 8, isCurrentMonth: true, event: null },
    {
      day: 9,
      isCurrentMonth: true,
      event: { name: "Leg Day", color: "primary" },
    },
    { day: 10, isCurrentMonth: true, event: null },
    {
      day: 11,
      isCurrentMonth: true,
      event: { name: "Upper Body", color: "primary" },
    },
    { day: 12, isCurrentMonth: true, event: null },
    {
      day: 13,
      isCurrentMonth: true,
      event: { name: "Pilates", color: "primary" },
    },
    { day: 14, isCurrentMonth: true, event: null },
    { day: 15, isCurrentMonth: true, event: null },
    {
      day: 16,
      isCurrentMonth: true,
      event: { name: "Running", color: "primary" },
    },
    { day: 17, isCurrentMonth: true, event: null },
    {
      day: 18,
      isCurrentMonth: true,
      event: { name: "Back & Biceps", color: "primary" },
    },
    { day: 19, isCurrentMonth: true, event: null },
    {
      day: 20,
      isCurrentMonth: true,
      event: { name: "HIIT (Missed)", color: "red-500", missed: true },
    },
    { day: 21, isCurrentMonth: true, event: null },
    { day: 22, isCurrentMonth: true, event: null },
    {
      day: 23,
      isCurrentMonth: true,
      event: { name: "Yoga Flow", color: "primary" },
    },
    {
      day: 24,
      isCurrentMonth: true,
      event: { name: "Upper Body", color: "primary" },
    },
    {
      day: 25,
      isCurrentMonth: true,
      isToday: true,
      events: [
        { name: "Morning Run", completed: true },
        { name: "Leg Hyper...", upNext: true },
      ],
    },
    {
      day: 26,
      isCurrentMonth: true,
      event: { name: "Recovery", color: "accent-blue" },
    },
    { day: 27, isCurrentMonth: true, event: null },
    { day: 28, isCurrentMonth: true, event: null },
    {
      day: 29,
      isCurrentMonth: true,
      event: { name: "Cardio & Core", color: "accent-blue" },
    },
    { day: 30, isCurrentMonth: true, event: null },
    {
      day: 31,
      isCurrentMonth: true,
      event: { name: "Chest Day", color: "accent-blue" },
    },
  ];

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
                      October 2024
                    </h3>
                    <div className="flex items-center gap-1">
                      <button className="size-8 flex items-center justify-center rounded-full hover:bg-surface-highlight transition-colors text-text-secondary hover:text-text-main">
                        <span className="material-symbols-outlined text-[20px]">
                          chevron_left
                        </span>
                      </button>
                      <button className="size-8 flex items-center justify-center rounded-full hover:bg-surface-highlight transition-colors text-text-secondary hover:text-text-main">
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
                      {day.event && (
                        <div
                          className={`px-2 py-1 rounded-md bg-${
                            day.event.color === "primary"
                              ? "accent-success"
                              : day.event.color === "accent-blue"
                              ? "accent-blue"
                              : day.event.color === "red-500"
                              ? "accent-error"
                              : day.event.color
                          }/10 text-${
                            day.event.color === "primary"
                              ? "accent-success"
                              : day.event.color === "accent-blue"
                              ? "accent-blue"
                              : day.event.color === "red-500"
                              ? "accent-error"
                              : day.event.color
                          } text-[10px] font-bold truncate flex items-center gap-1 ${
                            day.event.missed && "opacity-70"
                          }`}
                        >
                          <span
                            className={`size-1.5 rounded-full bg-${
                              day.event.color === "primary"
                                ? "accent-success"
                                : day.event.color === "accent-blue"
                                ? "accent-blue"
                                : day.event.color === "red-500"
                                ? "accent-error"
                                : day.event.color
                            } hidden md:block`}
                          ></span>
                          {day.event.name}
                        </div>
                      )}
                      {day.events &&
                        day.events.map((e, i) => (
                          <div
                            key={i}
                            className={`px-2 py-1 rounded-md text-[10px] font-bold truncate flex items-center gap-1 ${
                              e.completed
                                ? "bg-accent-success/10 text-accent-success"
                                : e.upNext
                                ? "bg-accent-blue/10 text-accent-blue border-l-2 border-accent-blue"
                                : ""
                            }`}
                          >
                            {e.completed && (
                              <span className="material-symbols-outlined text-[10px]">
                                check
                              </span>
                            )}
                            {e.name}
                          </div>
                        ))}
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
                      Wed, Oct 25
                    </h3>
                  </div>
                  <button className="size-10 rounded-xl bg-surface-highlight flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all group shadow-sm border border-transparent hover:border-primary/20">
                    <span className="material-symbols-outlined text-[24px]">
                      add
                    </span>
                  </button>
                </div>
                <div className="flex flex-col relative z-10">
                  <div className="flex gap-4 items-start group">
                    <div className="flex flex-col items-center gap-1 pt-1.5 h-full">
                      <div className="size-5 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-background-dark text-[14px] font-bold">
                          check
                        </span>
                      </div>
                      <div className="w-0.5 flex-1 bg-border-subtle min-h-[40px]"></div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-text-secondary line-through decoration-2 decoration-border-subtle/20 text-lg">
                          Morning Run
                        </h4>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-md uppercase tracking-wide">
                          Completed
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary font-medium">
                        07:00 AM • 45 min • Cardio
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="flex flex-col items-center gap-1 pt-1.5 h-full">
                      <div className="size-5 rounded-full border-[3px] border-accent-blue bg-surface shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
                      <div className="w-0.5 flex-1 bg-border-subtle min-h-[40px]"></div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-text-main text-lg">
                          Leg Day Hypertrophy
                        </h4>
                        <span className="text-[10px] font-bold text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-md uppercase tracking-wide">
                          Up Next
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary font-medium mb-4">
                        05:30 PM • 75 min • Strength
                      </p>
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
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="flex flex-col items-center gap-1 pt-1.5 h-full">
                      <div className="size-5 rounded-full border-2 border-border-subtle bg-surface-highlight"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-text-secondary group-hover:text-text-main transition-colors text-lg">
                          Mobility Session
                        </h4>
                      </div>
                      <p className="text-sm text-text-secondary font-medium">
                        08:00 PM • 20 min • Recovery
                      </p>
                    </div>
                  </div>
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
      </main>
    </div>
  );
};

export default Schedule;
