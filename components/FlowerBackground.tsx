import type { CSSProperties } from "react";

type Flower = "azul" | "amarela" | "verde" | "roxa";

const FLOWERS: Record<Flower, { src: string; boost: number }> = {
  azul: { src: "/images/flor-azul.png", boost: 1 },
  amarela: { src: "/images/flor-amarela.png", boost: 1.4 }, // mais clara, precisa de mais força
  verde: { src: "/images/flor-verde.png", boost: 1.1 },
  roxa: { src: "/images/flor-roxa.png", boost: 1 },
};
const NAMES = Object.keys(FLOWERS) as Flower[];

// Gerador pseudoaleatório com semente: parece aleatório, mas é estável entre
// servidor e navegador (evita erro de hidratação no Next.js).
function mulberry32(seed: number) {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Item = { src: string; style: CSSProperties; className: string };

const EDGE_COUNT = 44; // flores nas laterais (todas as telas)
const MID_COUNT = 34; // flores mais fracas no meio (a partir de sm)

function generate(seed: number, strength: number): Item[] {
  const rand = mulberry32(seed * 104729 + 12345);
  const items: Item[] = [];
  let lastColor: Flower | null = null;

  const pickColor = () => {
    let c: Flower;
    do {
      c = NAMES[Math.floor(rand() * NAMES.length)];
    } while (c === lastColor);
    lastColor = c;
    return c;
  };

  // Laterais: faixas verticais ao longo de TODA a página, para não ficar buraco
  for (let i = 0; i < EDGE_COUNT; i++) {
    const r = rand();
    const color = pickColor();
    const side = rand() < 0.5 ? "left" : "right";
    const top = ((i + rand() * 0.8) / EDGE_COUNT) * 97;
    const opacity = (0.35 + rand() * 0.25) * FLOWERS[color].boost * strength;
    const cut = 0.15 + rand() * 0.2;
    items.push({
      src: FLOWERS[color].src,
      className: "absolute h-auto",
      style: {
        ["--w" as string]: `clamp(${75 + Math.round(r * 25)}px, ${10 + r * 5}vw, ${150 + Math.round(r * 70)}px)`,
        width: "var(--w)",
        top: `${top}%`,
        [side]: `calc(var(--w) * -${cut.toFixed(2)})`,
        opacity: Math.min(opacity, 0.85),
        transform: `rotate(${Math.round(rand() * 360)}deg)`,
      },
    });
  }

  // Meio: mais fracas, só a partir de sm
  for (let i = 0; i < MID_COUNT; i++) {
    const r = rand();
    const color = pickColor();
    const top = ((i + 0.05 + rand() * 0.9) / MID_COUNT) * 96;
    const left = 12 + rand() * 70;
    const opacity = (0.18 + rand() * 0.12) * FLOWERS[color].boost * strength;
    items.push({
      src: FLOWERS[color].src,
      className: "absolute h-auto hidden sm:block",
      style: {
        top: `${top}%`,
        left: `${left}%`,
        width: `clamp(${60 + Math.round(r * 20)}px, ${6 + r * 4}vw, ${110 + Math.round(r * 60)}px)`,
        opacity: Math.min(opacity, 0.4),
        transform: `rotate(${Math.round(rand() * 360)}deg)`,
      },
    });
  }

  return items;
}

type Props = {
  /** Para refazer o sorteio do site inteiro, mude este número (0, 1, 2, ...). */
  seed?: number;
  /** Intensidade geral: 1 = padrão, 0.7 = mais suave, 1.3 = mais forte. */
  strength?: number;
};

export default function FlowerBackground({ seed = 0, strength = 1 }: Props) {
  const items = generate(seed, strength);

  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {items.map((it, i) => (
        <img key={i} src={it.src} alt="" className={it.className} style={it.style} />
      ))}
    </div>
  );
}