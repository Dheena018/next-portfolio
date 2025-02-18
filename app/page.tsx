import Navbar from "./components/Navbar/navbar";
import HomePage from "./components/Home/homePage";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Services />
      {/* <Work /> */}
      <Contact />
    </>
  );
}
