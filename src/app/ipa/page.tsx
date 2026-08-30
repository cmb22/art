"use client";

import { useRef, useState } from "react";
import { germanVowels, type GermanVowel } from "../../data/germanVowels";
import { germanConsonants } from "../../data/germanConsonants";

const positions: Record<string, { left: number; top: number }> = {
  "i-long": { left: 13, top: 14 },
  "y-long": { left: 20, top: 14 },
  "i-short": { left: 27, top: 28 },
  "y-short": { left: 34, top: 28 },

  "e-long": { left: 27, top: 43 },
  "oe-long": { left: 35, top: 43 },

  "e-open-long": { left: 39, top: 66 },
  "e-short": { left: 46, top: 66 },
  "oe-short": { left: 54, top: 66 },

  "schwa": { left: 61, top: 52 },
  "r-schwa": { left: 67, top: 75 },

  "u-long": { left: 88, top: 14 },
  "u-short": { left: 84, top: 28 },
  "o-long": { left: 88, top: 43 },
  "o-short": { left: 88, top: 66 },

  "a-short": { left: 58, top: 89 },
  "a-long": { left: 72, top: 89 },
};

const tableGroups = {
  frontLong: ["i-long", "y-long", "e-long", "oe-long", "e-open-long"],
  frontShort: ["i-short", "y-short", "e-short", "oe-short"],
  centralLong: ["a-long"],
  centralShort: ["a-short"],
  centralNeutral: ["schwa", "r-schwa"],
  backLong: ["u-long", "o-long"],
  backShort: ["u-short", "o-short"],
};

export default function Home() {
  const [selected, setSelected] = useState<GermanVowel | null>(null);
  const [error, setError] = useState("");
  const player = useRef<HTMLAudioElement | null>(null);

  const mono = germanVowels.filter(v => v.group === "monophthong");
  const diphthongs = germanVowels.filter(v => v.group === "diphthong");

  const byId = (id: string) => mono.find(v => v.id === id)!;

  async function play(v: GermanVowel) {
    setSelected(v);
    setError("");
    player.current?.pause();
    const audio = new Audio(v.audioUrl);
    player.current = audio;
    try {
      await audio.play();
    } catch {
      setError("Audio konnte nicht abgespielt werden.");
    }
  }

  async function playConsonant(audioUrl: string) {
    setError("");
    player.current?.pause();
    const audio = new Audio(audioUrl);
    player.current = audio;
    try {
      await audio.play();
    } catch {
      setError("Konsonanten-Audio konnte nicht abgespielt werden.");
    }
  }

  function Sound({ id }: { id: string }) {
    const v = byId(id);
    return (
      <button
        type="button"
        className={`sound ${v.length} ${selected?.id === v.id ? "active" : ""}`}
        onClick={() => play(v)}
        title={`${v.example} – ${v.audioUrl}`}
      >
        {v.ipa}
      </button>
    );
  }

  function Group({ ids }: { ids: string[] }) {
    return <div className="soundGroup">{ids.map(id => <Sound key={id} id={id} />)}</div>;
  }


  return (
    <main className="page">
      <header>
        <p className="kicker">AUSSPRACHETRAINING · DEUTSCH</p>
        <h1>Deutsche Vokale</h1>
        <p className="intro">Klicke auf einen Laut, um ihn zu hören.</p>
      </header>

      <section className="card">
        <h2>Übersicht</h2>

        <div className="simpleTable vowelTableV14">
          <div className="tableHead lengthCol">Länge</div>
          <div className="tableHead openingCol">Öffnung</div>

          <div className="tableHead positionHead frontHead">Vorne</div>
          <div className="tableHead positionHead centralHead">Zentral</div>
          <div className="tableHead positionHead backHead">Hinten</div>

          <div className="tableSubHead frontUnrounded">ungerundet</div>
          <div className="tableSubHead frontRounded">gerundet</div>
          <div className="tableSubHead centralUnrounded">ungerundet</div>
          <div className="tableSubHead centralRounded">gerundet</div>
          <div className="tableSubHead backUnrounded">ungerundet</div>
          <div className="tableSubHead backRounded">gerundet</div>

          <div className="lengthHead longV14">Lang</div>
          <div className="openness longClosedV14">geschlossen</div>
          <div className="tableCell"><Group ids={["i-long"]} /></div>
          <div className="tableCell"><Group ids={["y-long"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["u-long"]} /></div>

          <div className="openness longMidV14">halbgeschlossen</div>
          <div className="tableCell"><Group ids={["e-long"]} /></div>
          <div className="tableCell"><Group ids={["oe-long"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["o-long"]} /></div>

          <div className="openness longOpenV14">halboffen / offen</div>
          <div className="tableCell"><Group ids={["e-open-long"]} /></div>
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["a-long"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />

          <div className="lengthHead shortV14">Kurz</div>
          <div className="openness shortClosedV14">fast geschlossen</div>
          <div className="tableCell"><Group ids={["i-short"]} /></div>
          <div className="tableCell"><Group ids={["y-short"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["u-short"]} /></div>

          <div className="openness shortOpenV14">halboffen</div>
          <div className="tableCell"><Group ids={["e-short"]} /></div>
          <div className="tableCell"><Group ids={["oe-short"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["o-short"]} /></div>

          <div className="openness shortAV14">offen</div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["a-short"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />

          <div className="lengthHead neutralV14">Neutral</div>
          <div className="openness neutralMiddleV14">mittel</div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["schwa"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />

          <div className="openness neutralOpenV14">fast offen</div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["r-schwa"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />
        </div>
      </section>

      <section className="card">
        <div className="sectionHeading">
          <div>
            <h2>Position im Mund</h2>
            <p>Vorne ← Zungenposition → Hinten</p>
          </div>
        </div>

        <div className="trapezoidScroller">
          <div className="trapezoid">
            <div className="axisLabel frontLabel">Vorne</div>
            <div className="axisLabel centralLabel">Zentral</div>
            <div className="axisLabel backLabel">Hinten</div>

            <svg className="vowelGeometry" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="12,12 88,12 88,89 58,89" />
              <line x1="27" y1="43" x2="88" y2="43" />
              <line x1="39" y1="66" x2="88" y2="66" />
              <line x1="12" y1="12" x2="58" y2="89" />
              <line x1="50" y1="12" x2="72" y2="89" />
              <line className="rightTrapezoidEdge" x1="88" y1="12" x2="88" y2="89" />
            </svg>

            {mono.map(v => {
              const pos = positions[v.id];
              if (!pos) return null;
              return (
                <button
                  key={v.id}
                  type="button"
                  className={`trapSound ${v.length} ${selected?.id === v.id ? "active" : ""}`}
                  style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                  onClick={() => play(v)}
                  title={`${v.example} – ${v.audioUrl}`}
                >
                  {v.ipa}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Diphthonge</h2>
        <div className="diphthongs">
          {diphthongs.map(v => (
            <button
              key={v.id}
              type="button"
              className={`sound diph ${selected?.id === v.id ? "active" : ""}`}
              onClick={() => play(v)}
            >
              {v.ipa}
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Konsonanten</h2>
        <p className="consonantIntro">Klicke auf einen Laut.</p>
        <div className="consonantGrid">
          {["Plosive", "Frikative", "Nasale", "Liquide / Approximanten", "Affrikaten"].map(group => (
            <div className="consonantRow" key={group}>
              <strong>{group}</strong>
              <div className="soundGroup">
                {germanConsonants
                  .filter(c => c.group === group)
                  .map(c => (
                    <button
                      type="button"
                      className="consonantSound"
                      key={c.ipa}
                      onClick={() => playConsonant(c.audioUrl)}
                      title={`${c.ipa} abspielen`}
                    >
                      {c.ipa}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <section className="detail">
          <div className="ipa">{selected.ipa}</div>
          <div>
            <strong>{selected.example}</strong>
            <p>{selected.sentence}</p>
            <a href={selected.audioUrl} target="_blank" rel="noreferrer">
              Audiodatei öffnen
            </a>
          </div>
          <button className="replay" onClick={() => play(selected)}>
            ▶ Noch einmal
          </button>
          {error && <p className="error">{error}</p>}
        </section>
      )}
    </main>
  );
}
