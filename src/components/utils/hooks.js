import { useEffect, useState, useRef } from "react";

/** Typing hook: recebe texto e velocidade (ms por char) */
export function useTyping(text = "", speed = 80) {
  const [value, setValue] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    setValue("");
    idx.current = 0;
    let raf;
    function tick() {
      if (idx.current < text.length) {
        setValue((v) => v + text[idx.current]);
        idx.current += 1;
        raf = setTimeout(tick, speed);
      } else {
        // opcional: manter cursor piscando (feito via CSS)
      }
    }
    tick();
    return () => clearTimeout(raf);
  }, [text, speed]);

  return value;
}
