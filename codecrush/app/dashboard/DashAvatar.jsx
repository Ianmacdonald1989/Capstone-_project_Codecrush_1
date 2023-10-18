import React from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

export const DashAvatar = () => {
  const { user } = UserAuth();

  return (
    <Link href="/profile" className="flex items-center cursor-grab">
        <div className="avatar placeholder">
          <div className="bg-slate-700 text-slate-200 rounded-full w-16 h-16">
            <span className="text-xl">
              {user && user[0].username ? user[0].username.charAt(0) : ""}
            </span>
          </div>
        </div>
    </Link>
  );
};
