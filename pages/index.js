import { useState, useEffect } from "react";
import LandingPage from "../components/templates/landing/landing";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (typeof window !== undefined) {
      setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return <LandingPage />;
}
