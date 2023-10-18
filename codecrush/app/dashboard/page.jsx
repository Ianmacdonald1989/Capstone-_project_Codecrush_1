"use client";
import React, { useState } from "react";
import { UserName } from "./UserName";
import { PythonDifficultySelect } from "./PythonDifficultySelect";
import { UserScore } from "../profile/UserScore";
import { UserStreak } from "../profile/UserStreak";
import { Avatar } from "../profile/Avatar";
import { BottomNav } from "../components/BottomNav";
import Image from "next/image";
import Python from "@/public/images/python_logo.png";
import js from "@/public/images/js_logo.png";
import Java from "@/public/images/java_logo.png";
import cLogo from "@/public/images/c_logo.png";
import Streak from "@/public/images/streak.png";
import Score from "@/public/images/score.png";
import Trophy from "@/public/images/trophy.png";
import { CodingFacts } from "../components/CodingFacts";
import { DayDate } from "../components/DayDate";
import { UserRank } from "../profile/UserRank";
import LightDarkSwitch from "../components/LightDarkSwitch";


export default function Dashboard() {
  const [isPythonModalOpen, setIsPythonModalOpen] = useState(false);

  return (
    <main className="main">
    
      {/* WELCOME */}
      <div className="flex place-content-between">
        <div className="py-8 text-xl">
          <p className="text-base text-gray-500 dark:text-slate-200 dark:opacity-70">Hello,</p>
          <div className="flex">
            <UserName />
            <span className="wave ml-2">👋</span>
          </div>
        </div>
        <LightDarkSwitch />
      </div>

      <DayDate />

      <div className="coding-fact-box">
        <CodingFacts />
      </div>

      {/* STATS */}
      <h2 className="dash-heading">Your stats</h2>
      <div className="dash-stats-container">
        <div className="dash-stats-item">
          <p className="text-sm">Score</p>
          <div className="flex items-center gap-2">
            <b>
              <UserScore />
            </b>
            <Image src={Score} alt="Score" width={16} height={16} />
          </div>
        </div>

        <div className="dash-stats-item">
          <p className="text-sm">Streak</p>
          <div className="flex items-center gap-2">
            <b>
              <UserStreak />
            </b>
            <Image src={Streak} alt="Streak" width={16} height={16} />
          </div>
        </div>

        <div className="dash-stats-item">
          <p className="text-sm">Leaderboard</p>
          <div className="flex items-center gap-2">
              <UserRank/>
            <Image src={Trophy} alt="Trophy" width={16} height={16} />
          </div>
        </div>
      </div>

      <h2 className="dash-heading">Today's challenge</h2>

      {/* PYTHON CARD */}
      <div className="flex place-content-between gap-5 mb-6">
        <button
          className="python-card"
          onClick={() => setIsPythonModalOpen(true)}
        >
          <div className="avatar">
            <div className="code-card-avatar">
              <Image src={Python} alt="Python" placeholder="blur" />
            </div>
          </div>

          <h3 className="text-center my-0 font-semibold dark:text-slate-200">Python</h3>
          <p className="card-description">
            Test your skills in today's Python challenge.
          </p>
        </button>

        {/* JAVASCRIPT CARD */}
        <button className="js-card">
          <div className="avatar">
            <div className="code-card-avatar">
              <Image src={js} alt="Python" placeholder="blur" />
            </div>
          </div>

          <h3 className="text-center my-0 font-semibold dark:text-slate-200">JavaScript</h3>
          <p className="card-description">
            Think you can take on today's JavaScript challenge?
          </p>
        </button>
      </div>

      <PythonDifficultySelect
        isOpen={isPythonModalOpen}
        setIsOpen={setIsPythonModalOpen}
      />

      <h2 className="dash-heading">Coming soon</h2>

      {/* JAVA CARD */}
      <div className="flex place-content-between gap-5 mb-20">
        <div className="java-card">
          <div className="avatar">
            <div className="code-card-avatar">
              <Image src={Java} alt="Java" placeholder="blur" />
            </div>
          </div>

          <h3 className="text-center my-0 font-semibold dark:text-slate-200">Java</h3>
        </div>

        {/* C# CARD */}
        <div className="c-card">
          <div className="avatar">
            <div className="code-card-avatar">
              <Image src={cLogo} alt="C#" placeholder="blur" />
            </div>
          </div>

          <h3 className="text-center my-0 font-semibold dark:text-slate-200">C#</h3>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
