import { useEffect, useState } from "react";

export function useShowNavbarOnScroll(threshold = 64) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Gọi ngay một lần để đồng bộ ban đầu
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return showNavbar;
}
