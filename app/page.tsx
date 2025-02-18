"use client";
import Navbar from "./components/Navbar/navbar";
import HomePage from "./components/Home/homePage";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  console.log(isDarkMode);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HomePage />
      <About isDarkMode={isDarkMode} />
      <Services />
      {/* <Work isDarkMode={isDarkMode} setIsDarkMode={ setIsDarkMode}/> */}
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
