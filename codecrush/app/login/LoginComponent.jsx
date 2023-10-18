import React from "react";
import { UserAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";

export default function LoginComponent() {
  const { googleSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
   
      <motion.div className="flex flex-col items-center gap-8"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
  
     <Image 
              className=""
              src={Logo}
              alt="Logo"
             
            />
        <button
          onClick={handleSignIn}
          type="button"
          className="google-btn"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
      </motion.div>
    
    </main>
  );
}
