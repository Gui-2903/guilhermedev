import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import styles from "./styles/Global.module.css";

export default function App() {
  const [theme, setTheme] = useState(() => {
    // prefer system? default to dark-theme (preto-no-branco)
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // smooth scroll behavior already in css, but ensure anchor links work
  return (
    <div className={styles.app}>
      <nav className={styles.topNav}>
        <div className={styles.logo}>Guilherme.Dev  </div>
        <div className={styles.navLinks}>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>

      <Header />

      <main className={styles.main}>
        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className={styles.footer}>
        <div>© {new Date().getFullYear()} — Seu Nome. Desenvolvedor Full Stack.</div>
        <div>
          <a href="https://github.com/username" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
