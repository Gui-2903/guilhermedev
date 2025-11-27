import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import styles from "./styles/Global.module.css";
import github from "./img/github.png";
export default function App() {
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // CORRIGIDO: Usa o tema salvo no localStorage, ou "dark" como padrão.
    // O operador vírgula foi removido.
    return savedTheme ?? "dark"; 
  });
  console.log("1THEME IN APP OUTSIDE ->", theme);

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
          {console.log("2THEME IN APP OUTSIDE ->", theme)}
          <ThemeToggle theme={theme} setTheme={setTheme} />
          {console.log("3THEME IN APP OUTSIDE ->", theme)}
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

        <section id="contact" className={styles.contact}>
          <Contact />
        </section>
      </main>

      <footer className={styles.footer}>
        <div>© {new Date().getFullYear()} — Guilherme. Desenvolvedor .</div>
        <div className={styles.btnGit}>
          <a href="https://github.com/Gui-2903" target="_blank" rel="noreferrer" className={styles.gitLink}>
            <img src={github} alt="githubft" className={styles.gitImg} />
          </a>
        </div>
      </footer>
    </div>
  );
}