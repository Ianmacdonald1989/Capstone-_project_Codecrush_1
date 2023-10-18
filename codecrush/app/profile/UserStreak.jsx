import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';

export const UserStreak = () => {
  const { user } = UserAuth();
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (user) {
      setStreak(user[0].streak);
    }
  }, [user]);

  return <p>{streak}</p>;
};
