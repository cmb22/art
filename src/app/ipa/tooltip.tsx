import styles from "./tooltip.module.css";
import { type Language } from "./translations";

const soundExamples: Record<string, { word: string; ipa: string }> = {
    "i-long": { word: "bieten", ipa: "[ˈbiːtn̩]" },
    "i-short": { word: "bitten", ipa: "[ˈbɪtn̩]" },
    "y-long": { word: "fühlen", ipa: "[ˈfyːlən]" },
    "y-short": { word: "füllen", ipa: "[ˈfʏlən]" },
    "e-long": { word: "Beet", ipa: "[beːt]" },
    "oe-long": { word: "Höhle", ipa: "[ˈhøːlə]" },
    "e-open-long": { word: "spät", ipa: "[ʃpɛːt]" },
    "e-short": { word: "Bett", ipa: "[bɛt]" },
    "oe-short": { word: "Hölle", ipa: "[ˈhœlə]" },
    "schwa": { word: "bitte", ipa: "[ˈbɪtə]" },
    "r-schwa": { word: "besser", ipa: "[ˈbɛsɐ]" },
    "u-long": { word: "gut", ipa: "[ɡuːt]" },
    "u-short": { word: "Mutter", ipa: "[ˈmʊtɐ]" },
    "o-long": { word: "Ofen", ipa: "[ˈoːfn̩]" },
    "o-short": { word: "offen", ipa: "[ˈɔfn̩]" },
    "a-long": { word: "Staat", ipa: "[ʃtaːt]" },
    "a-short": { word: "Stadt", ipa: "[ʃtat]" },

    "diphthong-ai": { word: "mein", ipa: "[maɪ̯n]" },
    "diphthong-au": { word: "Haus", ipa: "[haʊ̯s]" },
    "diphthong-oy": { word: "heute", ipa: "[ˈhɔʏ̯tə]" },

    p: { word: "Pass", ipa: "[pas]" },
    b: { word: "Ball", ipa: "[bal]" },
    t: { word: "Tag", ipa: "[taːk]" },
    d: { word: "Dach", ipa: "[dax]" },
    k: { word: "Kamm", ipa: "[kam]" },
    ɡ: { word: "gut", ipa: "[ɡuːt]" },
    f: { word: "Fisch", ipa: "[fɪʃ]" },
    v: { word: "Wasser", ipa: "[ˈvasɐ]" },
    s: { word: "Haus", ipa: "[haʊ̯s]" },
    z: { word: "Sonne", ipa: "[ˈzɔnə]" },
    ʃ: { word: "Schule", ipa: "[ˈʃuːlə]" },
    ç: { word: "ich", ipa: "[ɪç]" },
    x: { word: "Bach", ipa: "[bax]" },
    h: { word: "Haus", ipa: "[haʊ̯s]" },
    m: { word: "Mann", ipa: "[man]" },
    n: { word: "Nase", ipa: "[ˈnaːzə]" },
    ŋ: { word: "singen", ipa: "[ˈzɪŋən]" },
    l: { word: "Land", ipa: "[lant]" },
    ʁ: { word: "rot", ipa: "[ʁoːt]" },
    j: { word: "Jahr", ipa: "[jaːɐ̯]" },
    "t͡s": { word: "Zeit", ipa: "[t͡saɪ̯t]" },
    "t͡ʃ": { word: "Tschüss", ipa: "[t͡ʃʏs]" },
    "p͡f": { word: "Pferd", ipa: "[p͡feːɐ̯t]" },
};

type TooltipProps = {
    children: React.ReactNode;
    soundId: string;
    fallbackWord?: string;
    language: Language;
};

export const Tooltip = ({
    children,
    soundId,
    fallbackWord,
    language,
}: TooltipProps) => {
    const example = soundExamples[soundId];

    const exampleLabel =
        language === "de"
            ? "Beispiel"
            : "Example";

    return (
        <span className={styles.soundTooltip}>
            {children}

            <span
                className={styles.soundTooltipPopup}
                role="tooltip"
            >
                <span className={styles.exampleLabel}>
                    {exampleLabel}
                </span>

                <strong>
                    {example?.word ?? fallbackWord ?? soundId}
                </strong>

                <span className={styles.tooltipIpa}>
                    {example?.ipa ?? `[${soundId}]`}
                </span>
            </span>
        </span>
    );
};