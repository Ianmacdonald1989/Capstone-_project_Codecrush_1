import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 0.5 },
  exit: { opacity: 0 },
  transition: { duration: 0.7, ease: "easeInOut" },
};

const difficultySelectAnimation = {
  initial: { y: "100vh", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100vh", opacity: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

export const PythonDifficultySelect = ({ isOpen, setIsOpen }) => {
  const closeSelect = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <AnimatePresence>
        {isOpen && (
          <div>
            <motion.div
              className="bg-overlay"
              onClick={closeSelect}
              {...overlayAnimation}
            ></motion.div>

            <motion.div
              className="difficulty-select"
              {...difficultySelectAnimation}
            >
              <div className="p-8 pt-6">
                <button
                  className="pb-5 hover:text-gray-500 dark:text-slate-400 dark:hover:text-slate-500"
                  onClick={closeSelect}
                >
                  <b>X</b>
                </button>

                <div className="flex flex-col gap-6">
                  <Link href="/beginner">
                    <button className="difficulty-btn hover:bg-green-100 dark:hover:bg-slate-200">
                      Beginner
                    </button>
                  </Link>
                  <Link href="/intermediate">
                    <button className="difficulty-btn hover:bg-orange-100 dark:hover:bg-slate-200">
                      Intermediate
                    </button>
                  </Link>
                  <Link href="/advanced">
                    <button className="difficulty-btn hover:bg-red-100 dark:hover:bg-slate-200">
                      Advanced
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};
