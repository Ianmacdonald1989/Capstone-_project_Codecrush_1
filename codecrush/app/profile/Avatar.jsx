import React from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

export const Avatar = () => {
  const { user } = UserAuth();

  return (
    <Link href="/profile" className="flex items-center cursor-grab">
        <div className="avatar placeholder">
          <div className="bg-gray-700 dark:bg-slate-200 dark:text-gray-700 text-slate-50 rounded-full w-10 h-10">
            <span className="text-xl">
              {user && user[0].username ? user[0].username.charAt(0) : ""}
            </span>
          </div>
        </div>
    </Link>
  );
};
