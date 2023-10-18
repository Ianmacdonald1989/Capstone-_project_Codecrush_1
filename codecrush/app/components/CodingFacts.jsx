import React from 'react'

export const CodingFacts = () => {

    const facts = [
        "The first computer program was written by Ada Lovelace in the 1800s.",
        "JavaScript is the world's most popular programming language.",
        "The term 'bug' in programming comes from a moth found inside a computer.",
        "GitHub is the largest open-source code repository, owned by Microsoft.",
        "Fortran was the first high-level programming language, developed by IBM in the 1950s.",
        "Python is named after the Monty Python comedy group.",
        "Object-oriented programming (OOP) was pioneered by Alan Kay in the 1960s.",
        "The C programming language was created by Dennis Ritchie at Bell Labs in the early 1970s.",
        "HTML stands for 'HyperText Markup Language' and is used for web page structure.",
        "The first computer mouse was invented by Doug Engelbart in 1964.",
        "Linux, an open-source operating system, was created by Linus Torvalds in 1991.",
        "The '404 Not Found' HTTP error code indicates that a web page could not be found on the server.",
        "The World Wide Web was invented by Sir Tim Berners-Lee in 1989 at CERN."
      ];
    
      const now = new Date();
      const day = now.getDay();
    
      const factIndex = day % facts.length;
      const factToShow = facts[factIndex];

  return (
    <div>
      <p className='text-center text-sm italic text-gray-500 dark:text-slate-900 dark:text-opacity-80 cursor-default'>{factToShow}</p>
    </div>
  )
}
