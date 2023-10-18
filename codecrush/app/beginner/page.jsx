"use client";
import React from "react";
import { motion } from "framer-motion";
import BeginnerQuestion from "./BeginnerQuestion";

export default function Beginner() {
  return (
    <main className="main">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <BeginnerQuestion />
      </motion.div>
    </main>
  );
}

