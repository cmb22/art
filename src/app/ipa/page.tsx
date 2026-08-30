"use client";

import { useCallback, useRef, useState } from "react";
import { germanVowels, type GermanVowel } from "../../data/germanVowels";
import { germanConsonants } from "../../data/germanConsonants";
import { translations, type Language } from "./translations";
import { Tooltip } from "./tooltip";
import { LanguageSwitcher } from "./LanguageSwitcher";

const positions: Record<string, { left: number; top: number }> = {
  "i-long": { left: 13, top: 14 }, "y-long": { left: 20, top: 14 },
  "i-short": { left: 27, top: 28 }, "y-short": { left: 34, top: 28 },
  "e-long": { left: 27, top: 43 }, "oe-long": { left: 35, top: 43 },
  "e-open-long": { left: 39, top: 66 }, "e-short": { left: 46, top: 66 },
  "oe-short": { left: 54, top: 66 }, "schwa": { left: 61, top: 52 },
  "r-schwa": { left: 67, top: 75 }, "u-long": { left: 88, top: 14 },
  "u-short": { left: 84, top: 28 }, "o-long": { left: 88, top: 43 },
  "o-short": { left: 88, top: 66 }, "a-short": { left: 58, top: 89 },
  "a-long": { left: 72, top: 89 },
};

export default function Home() {
  const [selected, setSelected] = useState<GermanVowel | null>(null);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState<Language>("en");
  const player = useRef<HTMLAudioElement | null>(null);
  const t = translations[language];

  const handleLanguageChange = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
  }, []);

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
      setError(t.audioError);
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
      setError(t.consonantAudioError);
    }
  }

  function Sound({ id }: { id: string }) {
    const v = byId(id);

    return (
      <Tooltip soundId={v.id} fallbackWord={v.example} language={language}>
        <button
          type="button"
          className={`sound ${v.length} ${selected?.id === v.id ? "active" : ""}`}
          onClick={() => play(v)}
          aria-label={`${v.ipa}: ${v.example}`}
        >
          {v.ipa}
        </button>
      </Tooltip>
    );
  }

  function Group({ ids }: { ids: string[] }) {
    return (
      <div className="soundGroup">
        {ids.map(id => <Sound key={id} id={id} />)}
      </div>
    );
  }

  const consonantGroups = [
    ["Plosive", t.plosives],
    ["Frikative", t.fricatives],
    ["Nasale", t.nasals],
    ["Liquide / Approximanten", t.liquids],
    ["Affrikaten", t.affricates],
  ] as const;

  return (
    <main className="page" lang={language}>
      <LanguageSwitcher
        language={language}
        onLanguageChange={handleLanguageChange}
        ariaLabel={t.selectLanguage}
      />

      <header>
        <p className="kicker">{t.kicker}</p>
        <h1>{t.title}</h1>
        <p className="intro">{t.intro}</p>
      </header>

      <section className="card">
        <h2>{t.overview}</h2>

        <div className="simpleTable vowelTableV14">
          <div className="tableHead lengthCol">{t.length}</div>
          <div className="tableHead openingCol">{t.openness}</div>
          <div className="tableHead positionHead frontHead">{t.front}</div>
          <div className="tableHead positionHead centralHead">{t.central}</div>
          <div className="tableHead positionHead backHead">{t.back}</div>

          <div className="tableSubHead frontUnrounded">{t.unrounded}</div>
          <div className="tableSubHead frontRounded">{t.rounded}</div>
          <div className="tableSubHead centralUnrounded">{t.unrounded}</div>
          <div className="tableSubHead centralRounded">{t.rounded}</div>
          <div className="tableSubHead backUnrounded">{t.unrounded}</div>
          <div className="tableSubHead backRounded">{t.rounded}</div>

          <div className="lengthHead longV14">{t.long}</div>
          <div className="openness longClosedV14">{t.close}</div>
          <div className="tableCell"><Group ids={["i-long"]} /></div>
          <div className="tableCell"><Group ids={["y-long"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["u-long"]} /></div>

          <div className="openness longMidV14">{t.closeMid}</div>
          <div className="tableCell"><Group ids={["e-long"]} /></div>
          <div className="tableCell"><Group ids={["oe-long"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["o-long"]} /></div>

          <div className="openness longOpenV14">{t.openMidOpen}</div>
          <div className="tableCell"><Group ids={["e-open-long"]} /></div>
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["a-long"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />

          <div className="lengthHead shortV14">{t.short}</div>
          <div className="openness shortClosedV14">{t.nearClose}</div>
          <div className="tableCell"><Group ids={["i-short"]} /></div>
          <div className="tableCell"><Group ids={["y-short"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["u-short"]} /></div>

          <div className="openness shortOpenV14">{t.openMid}</div>
          <div className="tableCell"><Group ids={["e-short"]} /></div>
          <div className="tableCell"><Group ids={["oe-short"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["o-short"]} /></div>

          <div className="openness shortAV14">{t.open}</div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["a-short"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />

          <div className="lengthHead neutralV14">{t.neutral}</div>
          <div className="openness neutralMiddleV14">{t.mid}</div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell"><Group ids={["schwa"]} /></div>
          <div className="tableCell" />
          <div className="tableCell" />
          <div className="tableCell" />

          <div className="openness neutralOpenV14">{t.nearOpen}</div>
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
            <h2>{t.mouthPosition}</h2>
            <p>{t.tonguePosition}</p>
          </div>
        </div>

        <div className="trapezoidScroller">
          <div className="trapezoid">
            <div className="axisLabel frontLabel">{t.front}</div>
            <div className="axisLabel centralLabel">{t.central}</div>
            <div className="axisLabel backLabel">{t.back}</div>

            <svg
              className="vowelGeometry"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
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
                <span
                  key={v.id}
                  className="trapTooltipAnchor"
                  style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                >
                  <Tooltip soundId={v.id} fallbackWord={v.example} language={language}>
                    <button
                      type="button"
                      className={`trapSound ${v.length} ${selected?.id === v.id ? "active" : ""}`}
                      onClick={() => play(v)}
                      aria-label={`${v.ipa}: ${v.example}`}
                    >
                      {v.ipa}
                    </button>
                  </Tooltip>
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="card">
        <h2>{t.diphthongs}</h2>
        <div className="diphthongs">
          {diphthongs.map(v => (
            <Tooltip key={v.id} soundId={v.id} fallbackWord={v.example} language={language}>
              <button
                type="button"
                className={`sound diph ${selected?.id === v.id ? "active" : ""}`}
                onClick={() => play(v)}
              >
                {v.ipa}
              </button>
            </Tooltip>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>{t.consonants}</h2>
        <p className="consonantIntro">{t.clickSound}</p>

        <div className="consonantGrid">
          {consonantGroups.map(([dataGroup, label]) => (
            <div className="consonantRow" key={dataGroup}>
              <strong>{label}</strong>

              <div className="soundGroup">
                {germanConsonants
                  .filter(c => c.group === dataGroup)
                  .map(c => (
                    <Tooltip key={c.ipa} soundId={c.ipa} language={language}>
                      <button
                        type="button"
                        className="consonantSound"
                        onClick={() => playConsonant(c.audioUrl)}
                      >
                        {c.ipa}
                      </button>
                    </Tooltip>
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
              {t.openAudio}
            </a>
          </div>

          <button className="replay" onClick={() => play(selected)}>
            {t.replay}
          </button>

          {error && <p className="error">{error}</p>}
        </section>
      )}
    </main>
  );
}
