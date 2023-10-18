import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';

export const UserScore = () => {
  const { user } = UserAuth();
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (user) {
      setScore(user[0].score);
    }
  }, [user]);

  return <p>{score}</p>;
};
