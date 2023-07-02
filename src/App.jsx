import "./App.scss";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Social } from "./components/social/social";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import whatsapp from "./assets/whatsapp.png";
import facebook from "./assets/facebook.png";
import discord from "./assets/discord.png";
import twitter from "./assets/twitter.png";
import { Projects } from "./pages/projects/projects";
import { Contact } from "./pages/contact/contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li");
    const indicator = document.querySelector("nav .indicator");
    const profile = document.querySelector(".profile");

    const pages = document.querySelectorAll(".page");

    function handleScroll() {
      let homeBottom = pages[0].getBoundingClientRect().bottom;
      let homeHeight = pages[0].offsetHeight;

      if (homeBottom < homeHeight / 2) {
        profile.classList.add("active");
      } else {
        profile.classList.remove("active");
      }

      for (let i = 0; i < pages.length; i++) {
        let currentPage = pages[i];

        let pageTop = currentPage.getBoundingClientRect().top;

        if (pageTop < 300) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          navLinks[i].classList.add("active");

          let width = navLinks[i].offsetWidth,
            left = navLinks[i].offsetLeft;

          indicator.style.width = `${width + 28}px`;
          indicator.style.left = `${left}px`;
        }
      }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <div className="page" id="home">
            <Home />
          </div>
          <div className="page" id="about">
            <About />
          </div>
          <div className="socials-wrapper">
            <h2 className="quick-links">Quick Links</h2>
            <div className="socials">
              <Social logo={github} title="GitHub" />
              <Social logo={linkedin} title="Linkedin" />
              <Social logo={whatsapp} title="Whatsapp" />
              <Social logo={facebook} title="Facebook" />
              <Social logo={discord} title="Discord" />
              <Social logo={twitter} title="Twitter" />
            </div>
          </div>
          <div className="page" id="projects">
            <Projects />
          </div>
          <div className="page" id="contact">
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
