import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading"; // Import your loading component

const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
        <Loading /> {/* Replace this with your actual loading component */}
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
