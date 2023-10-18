"use client";
import React from "react";
import { motion } from "framer-motion";
import IntermediateQuestion from "./IntermediateQuestion";

export default function Intermediate() {
  return (
    <main className="main">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <IntermediateQuestion/>
      </motion.div>
    </main>
  );
}

