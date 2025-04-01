// components/CustomCursor.jsx
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // More accurate pointer detection using elementFromPoint
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (!element) return;

      const computedStyle = window.getComputedStyle(element);
      const isClickable =
        element.closest(
          'a, button, [role="button"], [onclick], [href], label, input, select, textarea'
        ) ||
        ["pointer", "button"].includes(computedStyle.cursor) ||
        element.classList.contains("cursor-pointer") ||
        element.tagName === "a" ||
        element.tagName === "BUTTON";
      //@ts-ignore
      setIsPointer(isClickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setPosition({ x: -100, y: -100 }); // Move off-screen
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.15s ease",
      }}
    >
      {isPointer ? (
        // Pointer SVG (hand cursor)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="31"
          viewBox="0 0 70 81"
          fill="none"
          className="cursor-svg"
        >
          <path
            d="M24.09 41.23L11.52 32.5C8.93998 30.69 5.52998 30.7 2.93998 33.28C0.359978 35.86 0.00997782 39.71 2.15998 41.86L27.01 66.71C29.53 69.23 32.95 70.65 36.52 70.65H54.83C59.48 70.65 63.81 68.24 66.26 64.28C67.59 62.13 68.29 59.65 68.27 57.12L68.2 45.06V29.28C68.2 26.23 65.73 23.77 62.69 23.77C59.64 23.77 57.18 26.24 57.18 29.28V40.63"
            fill="white"
          />
          <path
            d="M24.09 41.23L11.52 32.5C8.93998 30.69 5.52998 30.7 2.93998 33.28C0.359978 35.86 0.00997782 39.71 2.15998 41.86L27.01 66.71C29.53 69.23 32.95 70.65 36.52 70.65H54.83C59.48 70.65 63.81 68.24 66.26 64.28C67.59 62.13 68.29 59.65 68.27 57.12L68.2 45.06V29.28C68.2 26.23 65.73 23.77 62.69 23.77C59.64 23.77 57.18 26.24 57.18 29.28V40.63"
            stroke="#242424"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.0898 41.23V6.26C24.0898 3.21 26.5598 0.75 29.5998 0.75C32.6498 0.75 35.1098 3.22 35.1098 6.26V40.62"
            fill="white"
          />
          <path
            d="M24.0898 41.23V6.26C24.0898 3.21 26.5598 0.75 29.5998 0.75C32.6498 0.75 35.1098 3.22 35.1098 6.26V40.62"
            stroke="#242424"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.1201 41.01V25.53C35.1201 22.48 37.5901 20.02 40.6301 20.02C43.6801 20.02 46.1401 22.49 46.1401 25.53V41.01"
            fill="white"
          />
          <path
            d="M35.1201 41.01V25.53C35.1201 22.48 37.5901 20.02 40.6301 20.02C43.6801 20.02 46.1401 22.49 46.1401 25.53V41.01"
            stroke="#242424"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46.1499 40.63V27.3C46.1499 24.25 48.6199 21.79 51.6599 21.79C54.7099 21.79 57.1699 24.26 57.1699 27.3V41.01"
            fill="white"
          />
          <path
            d="M46.1499 40.63V27.3C46.1499 24.25 48.6199 21.79 51.6599 21.79C54.7099 21.79 57.1699 24.26 57.1699 27.3V41.01"
            stroke="#242424"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M64.8798 67.34H27.4098C25.5541 67.34 24.0498 68.8443 24.0498 70.7V76.76C24.0498 78.6156 25.5541 80.12 27.4098 80.12H64.8798C66.7355 80.12 68.2398 78.6156 68.2398 76.76V70.7C68.2398 68.8443 66.7355 67.34 64.8798 67.34Z"
            fill="#242424"
            stroke="#242424"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        // Default cursor SVG (arrow cursor)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="23"
          viewBox="0 0 65 63"
          fill="none"
          className="cursor-svg"
        >
          <path
            d="M61.4398 16.2L15.2898 0.930011C13.2698 0.260011 11.1198 1.50001 10.6798 3.59001L0.829809 51.19C0.209809 54.2 3.43981 56.53 6.09981 55L14.7298 50.02C15.6098 49.51 16.2298 48.65 16.4398 47.66L20.0198 30.39L36.5898 59.09C37.9998 61.54 41.1298 62.37 43.5798 60.96L48.5298 58.1C50.9798 56.69 51.8098 53.56 50.3998 51.11L33.8298 22.41L50.5798 27.95C51.5398 28.27 52.5998 28.16 53.4798 27.65L62.1098 22.67C64.7698 21.13 64.3698 17.17 61.4498 16.2H61.4398Z"
            fill="white"
            stroke="#242424"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default CustomCursor;
