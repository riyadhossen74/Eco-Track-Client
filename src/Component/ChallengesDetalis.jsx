import React from "react";
import { useLoaderData } from "react-router";

const ChallengesDetalis = () => {
  const data = useLoaderData();
  console.log(data);
   const {
    title,
    description,
    duration,
    target,
    participants,
    impactMetric,
    createdBy,
    startDate,
    endDate,
  } = data;
  return (
   
        <article className="container my-20 py-20 mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden ring-1 ring-slate-100 dark:ring-slate-700 p-6">

      {/* Header Section */}
      <header className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-500 dark:text-slate-400">Duration</p>
          <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
            {duration} days
          </p>
        </div>
      </header>

      {/* Info Sections */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

        {/* Target Section */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/40">
          <p className="text-xs text-slate-500 dark:text-slate-300 uppercase">Target</p>
          <p className="mt-1 font-medium text-slate-900 dark:text-white">{target}</p>

          <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-block mr-3">
              Participants: <strong>{participants}</strong>
            </span>
            <span className="inline-block">
              Impact Metric: <strong>{impactMetric}</strong>
            </span>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/40">
          <p className="text-xs text-slate-500 dark:text-slate-300 uppercase">Schedule</p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-100">
            <strong>
                { startDate}
                </strong> —{" "}
            <strong>
                {endDate}
                </strong>
          </p>

          <p className="mt-3 text-xs text-slate-500 dark:text-slate-300">Created by</p>
          <p className="text-sm font-medium text-slate-900 dark:text-white">{createdBy}</p>
        </div>

      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between">
        <div className="flex items-center gap-3">

          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Join
          </button>

          <button
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-transparent hover:bg-slate-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5v14l7-5 7 5V5z"></path>
            </svg>
            Save
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500 dark:text-slate-300">Share</span>
          <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/40">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v.01M12 12v.01M20 12v.01M7 12h10"></path>
            </svg>
          </button>
        </div>
      </footer>

    </article>
  );
};

export default ChallengesDetalis;
