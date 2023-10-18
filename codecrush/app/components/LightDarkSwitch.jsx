import { useState, useEffect } from 'react';
import Image from 'next/image';
import Dark from "@/public/images/light.svg";
import Light from "@/public/images/dark.svg";

const LightDarkSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex items-center">
      <Image
        className="opacity-70 mr-2"
        src={isDark ? Dark : Light}
        alt={isDark ? "Dark mode" : "Light mode"}
        width={25}
        height={25}
        onClick={toggleTheme}
      />
      <div className="">
        <label className="switch">
          <input type="checkbox" className="toggle toggle-md" checked={isDark} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default LightDarkSwitch;
