import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export function ThemeDebug() {
  const { theme } = useTheme();
  const [currentClass, setCurrentClass] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    setCurrentClass(root.className);
  }, [theme]);

  // Only show in development
  if (import.meta.env.MODE !== "development") return null;

  return (
    <div className="fixed top-20 right-4 bg-red-500 text-white p-2 text-xs z-50 rounded">
      <div>Theme: {theme}</div>
      <div>Classes: {currentClass}</div>
      <div>Is Dark: {document.documentElement.classList.contains('dark') ? 'Yes' : 'No'}</div>
    </div>
  );
}