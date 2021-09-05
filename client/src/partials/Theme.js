import React, { useEffect, useState } from 'react';

function Theme() {
  // Store theme
  const [color, setColor] = useState();

  function setTheme() {
    if (!('theme' in localStorage) || localStorage.theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }

  // Save
  useEffect(() => {
    localStorage.setItem('theme', color);
  }, [color]);

  // get
  useEffect(() => {
    const color = localStorage.getItem('theme');
    if (color) {
      setColor(color);
    }
  }, []);

  return (
    <div className='flex items-center justify-end p-2 mx-2'>
      <button
        onClick={setTheme}
        className='text-black underline border-black bg-white'>
        ☉ Toggle Theme
      </button>
    </div>
  );
}

export default Theme;
