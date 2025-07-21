import React, { useEffect, useState } from 'react';
import './Loader.css';
import { CircleLoader } from 'react-spinners';

const Loader = () => {
  const [loaderSize, setLoaderSize] = useState(120);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setLoaderSize(60); // Small mobile
      } else if (width < 768) {
        setLoaderSize(80); // Tablet
      } else {
        setLoaderSize(120); // Desktop
      }
    };

    updateSize(); 
    window.addEventListener('resize', updateSize); // Listen on resize

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="loader-container">
      <CircleLoader color="#6455b6" size={loaderSize} />
    </div>
  );
};

export default Loader;
