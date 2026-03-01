import { useState, useEffect } from 'react';

export const useCountdown = (startDate) => {
  // Initialize with a proper calculation so it doesn't flash 0 on load
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      // difference = Now (2026) minus the Start Date (2025)
      const difference = new Date().getTime() - new Date(startDate).getTime();

      // If the difference is positive, we calculate the elapsed time
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / (1000 * 60)) % 60),
          secs: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return timeLeft;
};