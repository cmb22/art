"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { translations, type Language } from "./translations";

const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
} as const;

export default function LunarSpaceTapesEPK() {
    const [videoOpen, setVideoOpen] = useState(false);
    const [language, setLanguage] = useState<Language>("en");

    const t = translations[language];

    useEffect(() => {
        document.body.style.overflow = videoOpen ? "hidden" : "";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setVideoOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [videoOpen]);

    return (
        <main
            id="lunar-epk"
            className={styles.page}
            lang={language}
        >
            <div className={styles.languageSwitcher}>
                <select
                    value={language}
                    onChange={(event) =>
                        setLanguage(event.target.value as Language)
                    }
                    className={styles.languageSelect}
                    aria-label="Select language"
                >
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                </select>
            </div>

            <header className={styles.hero}>
                <div className={styles.logoWrapper}>
                    <Image
                        src="/lunarspacetapes/logo.jpg"
                        alt="Lunar Space Tapes"
                        width={1400}
                        height={1400}
                        priority
                        className={styles.logo}
                        sizes="(max-width: 700px) 88vw, 760px"
                    />
                </div>

                <div className={styles.contentWidth}>
                    <button
                        type="button"
                        className={styles.videoPreview}
                        onClick={() => setVideoOpen(true)}
                        aria-label={t.playVideo}
                    >
                        <Image
                            src="/lunarspacetapes/you-and-I.png"
                            alt={t.videoPreview}
                            width={1600}
                            height={900}
                            className={styles.videoThumbnail}
                            sizes="(max-width: 700px) calc(100vw - 24px), 1100px"
                        />

                        <span
                            className={styles.playButton}
                            aria-hidden="true"
                        >
                            ▶
                        </span>
                    </button>
                </div>
            </header>

            <section
                className={`${styles.section} ${styles.bioSection}`}
            >
                <p className={styles.bio}>{t.bio}</p>
            </section>

            <section className={styles.photoSection}>
                <Image
                    src="/lunarspacetapes/bandfoto.jpg"
                    alt="Lunar Space Tapes"
                    width={1600}
                    height={1000}
                    className={styles.bandPhoto}
                    sizes="100vw"
                />
            </section>

            <section className={styles.section}>
                <h2>{t.lineup}</h2>

                <div className={styles.lineup}>
                    <div className={styles.member}>
                        <strong>Chris M Blyth</strong>
                        <span>{t.vocalsGuitar}</span>

                        <Image
                            src="/lunarspacetapes/chris.jpg"
                            alt="Chris M Blyth"
                            width={700}
                            height={900}
                            className={styles.memberPhoto}
                            sizes="(max-width: 700px) 100vw, 33vw"
                        />
                    </div>

                    <div className={styles.member}>
                        <strong>Stefan Meinking</strong>
                        <span>{t.drums}</span>

                        <Image
                            src="/lunarspacetapes/stefan.jpg"
                            alt="Stefan Meinking"
                            width={700}
                            height={900}
                            className={styles.memberPhoto}
                            sizes="(max-width: 700px) 100vw, 33vw"
                        />
                    </div>

                    <div className={styles.member}>
                        <strong>Christian Nass</strong>
                        <span>{t.bass}</span>

                        <Image
                            src="/lunarspacetapes/christian.jpg"
                            alt="Christian Nass"
                            width={700}
                            height={900}
                            className={styles.memberPhoto}
                            sizes="(max-width: 700px) 100vw, 33vw"
                        />
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2>{t.listenFollow}</h2>

                <div className={styles.links}>
                    <a
                        href="https://soundcloud.com/lunarspacetapes"
                        {...externalLinkProps}
                    >
                        SoundCloud
                    </a>

                    <a
                        href="https://instagram.com/lunarspacetapes"
                        {...externalLinkProps}
                    >
                        Instagram
                    </a>

                    <a
                        href="https://youtu.be/z4UvI-4D9dk"
                        {...externalLinkProps}
                    >
                        YouTube
                    </a>
                </div>
            </section>

            <section className={styles.section}>
                <h2>{t.technicalInformation}</h2>

                <a
                    href="/lunarspacetapes/lunar-space-tapes-techrider.pdf"
                    className={styles.button}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t.viewTechRider}
                </a>
            </section>

            <footer className={styles.footer}>
                <h2>{t.bookingContact}</h2>

                <p>Chris M Blyth</p>

                <div className={styles.contactLinks}>
                    <a href="mailto:chrismblyth@gmail.com">
                        chrismblyth@gmail.com
                    </a>

                    <a href="tel:+4915168634515">
                        +49 151 686 34515
                    </a>
                </div>

                <p className={styles.location}>{t.location}</p>
            </footer>

            {videoOpen && (
                <div
                    className={styles.lightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label={t.videoDialog}
                    onClick={() => setVideoOpen(false)}
                >
                    <div
                        className={styles.lightboxContent}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => setVideoOpen(false)}
                            aria-label={t.closeVideo}
                        >
                            ×
                        </button>

                        <iframe
                            src="https://www.youtube.com/embed/z4UvI-4D9dk?autoplay=1&rel=0"
                            title="Lunar Space Tapes — You and I"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </main>
    );
}