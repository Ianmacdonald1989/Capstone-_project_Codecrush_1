import React, { useState, useEffect } from "react";
import Request from "../helpers/Request";
import Image from "next/image";
import { BottomNav } from "../components/BottomNav";
import Score from "@/public/images/score.png";
import Trophy from "@/public/images/trophy.png";
import bronzecup from "@/public/images/bronzecup.svg";
import silvercup from "@/public/images/trophysilver.svg";
import goldcup1 from "@/public/images/trophy.svg";
import { UserScore } from "../profile/UserScore";

export const LeaderboardComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const request = new Request();
    request.get("http://localhost:8082/api/users").then((data) => {
      setUsers(data);
    });
  }, []);

  const orderedUsers = users.sort(
    (a, b) => b.score - a.score && b.streak - a.streak
  );

  const userLeaderboard = orderedUsers.map((user, index) => {
    const firstName = user.username.split(" ")[0];

    return (
      <div key={index}>
        <p>{firstName}</p>
      </div>
    );
  });

  const leaderboardRows = orderedUsers.map((user, index) => {
    const firstName = user.username.split(" ")[0];

    return (
      <tr className="border-slate-200 dark:border-slate-400" key={index}>
        <td className="text-slate-900"><b>{index + 1}</b></td>
        <td className="text-slate-900">{firstName}</td>
        <td className="text-slate-900">{user.score}</td>
      </tr>
    );
  });

  return (
    <>
      <section className="flex place-content-between mt-4 mb-6">
        <div className="flex">
          <h2 className="py-8 text-xl font-semibold text-gray-700 dark:text-slate-200">Leaderboard</h2>
        </div>
        
        <div className="flex items-center">
          <div className="bg-slate-200 rounded-full py-1 px-3">
            <div className="flex items-center gap-2">
              <b className="text-gray-700">
                <UserScore />
              </b>
              <Image
                className="mb-1"
                src={Score}
                alt="Score"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PLAYER CARDS */}
      <div className="flex gap-3 pb-8">

        {/* player 1 card */}
        <section className="c-card gold-card">
          <div className="avatar">
            <div className="w-14 rounded-full p-2 bg-slate-50 dark:bg-slate-700">
              <Image src={goldcup1} alt="Trophy Gold" width={16} height={16} />
            </div>
          </div>
          <p className="font-semibold">{userLeaderboard[0]}</p>
        </section>

        {/* player 2 card */}
        <section className="c-card silver-card">
          <div className="avatar">
            <div className="w-14 rounded-full p-2 bg-slate-50 dark:bg-slate-700">
              <Image
                src={silvercup}
                alt="Trophy Silver"
                width={16}
                height={16}
              />
            </div>
          </div>
          <p className="font-semibold">{userLeaderboard[1]}</p>
        </section>

        {/* player 3 card */}
        <section className="c-card bronze-card">
          <div className="avatar">
            <div className="w-14 rounded-full p-2 bg-slate-50 dark:bg-slate-700">
              <Image
                src={bronzecup}
                alt="Trophy Bronze"
                width={16}
                height={16}
              />
            </div>
          </div>
          <p className="font-semibold">{userLeaderboard[2]}</p>
        </section>
      </div>


      {/* TABLE */}
      <table className="table shadow-md rounded-md mt-4 bg-slate-100 dark:bg-slate-300">
        <thead>
          <tr className="bg-blue-100 border-b-slate-200 dark:bg-slate-700">
            <th className="flex gap-2 text-slate-900 dark:text-slate-200 text-sm">
              Rank
              <div className="flex items-center">
              <Image src={Trophy} alt="Trophy" width={14} height={14} />
              </div>
            </th>
            <th className="text-slate-900 dark:text-slate-200 text-sm ">Player</th>
            <th className="flex gap-2 text-slate-900 dark:text-slate-200 text-sm">
              Score
              <div className="flex items-center">
              <Image src={Score} alt="Score" width={14} height={14} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{leaderboardRows}</tbody>
      </table>

      <BottomNav />
    </>
  );
};
