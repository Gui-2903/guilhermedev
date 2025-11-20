import React from "react";
import styles from "./Header.module.css";
import { useTyping } from "../utils/hooks";

export default function Header() {
  const typed = useTyping("EEu sou Guilherme, Desenvolvedor", 60);

  return (
    <header className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          <span className={styles.type}> {typed}</span>
          {console.log("TYPED ->", typed)}

        </h1>
        <p className={styles.subtitle}>
          Construo aplicações web escaláveis .
        </p>

        <div className={styles.ctaRow}>
          <a className={`${styles.cta} ${styles.primary}`} href="#projects">Veja meus projetos</a>
          <a className={styles.cta} href="https://github.com/Gui-2903" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <div className={styles.meta}>
          <div>Estudante de Sistemas de Informação —  Universidade do estado de Minas Gerais - UEMG.</div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.snippetTitle}>Principais Tecnologias</div>
          <div className={styles.tags}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>Node.js</span>
            <span className={styles.tag}>Back-end</span>
            <span className={styles.tag}>JavaScript</span>
            <span className={styles.tag}>Docker</span>
            <span className={styles.tag}>java</span>
          </div>
        </div>
      </div>
    </header>
  );
}
