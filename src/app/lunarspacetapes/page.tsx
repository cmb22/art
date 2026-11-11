
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { translations, type Language } from "./translations";

const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
} as const;

const supportedLanguages: Language[] = ["en", "de", "fr"];

const videos = [
    {
        id: "z4UvI-4D9dk",
        title: "You and I",
        thumbnail: "/lunarspacetapes/you-and-I.png",
        local: true,
    },
    {
        id: "qkbhrRzQwEE",
        title: "Lunar Space Tapes — Live",
        thumbnail:
            "https://i.ytimg.com/vi/qkbhrRzQwEE/hqdefault.jpg",
        local: false,
    },
];

// SoundCloud recordings
// For private tracks, use the API URL including secret_token.
const audioTracks = [
    {
        title: "Flower Girl",
        url: "https://api.soundcloud.com/tracks/soundcloud:tracks:2436078738?secret_token=s-9kc5mPUV2d4",
    },
    {
        title: "Gateway",
        url: "https://api.soundcloud.com/tracks/soundcloud:tracks:2436077208?secret_token=s-dXuMERsM5sy",
    },
    {
        title: "Lucius Clouds See Saw Nine",
        url: "https://api.soundcloud.com/tracks/soundcloud:tracks:2436074181?secret_token=s-AdxwhTouNTu",
    },
];

const audioSectionTitles: Record<Language, string> = {
    en: "Listen to Our Music",
    de: "Unsere Musik",
    fr: "Écoutez notre musique",
};

function getSoundCloudPlayerUrl(trackUrl: string) {
    const params = new URLSearchParams({
        url: trackUrl,
        color: "#333333",
        auto_play: "false",
        hide_related: "true",
        show_comments: "false",
        show_user: "false",
        show_reposts: "false",
        show_teaser: "false",
        visual: "false",
    });

    return `https://w.soundcloud.com/player/?${params.toString()}`;
}

export default function LunarSpaceTapesEPK() {
    const [selectedVideo, setSelectedVideo] = useState<
        string | null
    >(null);

    const [language, setLanguage] =
        useState<Language>("en");

    const t = translations[language];

    const availableTracks = audioTracks.filter(
        (track) => track.url.trim().length > 0
    );

    useEffect(() => {
        const savedLanguage = localStorage.getItem(
            "lunar-space-tapes-language"
        ) as Language | null;

        if (
            savedLanguage &&
            supportedLanguages.includes(savedLanguage)
        ) {
            setLanguage(savedLanguage);
            return;
        }

        const browserLanguage =
            navigator.language.toLowerCase();

        if (browserLanguage.startsWith("de")) {
            setLanguage("de");
        } else if (browserLanguage.startsWith("fr")) {
            setLanguage("fr");
        } else {
            setLanguage("en");
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedVideo
            ? "hidden"
            : "";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedVideo(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [selectedVideo]);

    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newLanguage =
            event.target.value as Language;

        setLanguage(newLanguage);

        localStorage.setItem(
            "lunar-space-tapes-language",
            newLanguage
        );
    };

    const activeVideo = videos.find(
        (video) => video.id === selectedVideo
    );

    return (
        <main
            id="lunar-epk"
            className={styles.page}
            lang={language}
        >
            <div className={styles.languageSwitcher}>
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className={styles.languageSelect}
                    aria-label={t.selectLanguage}
                    title={t.selectLanguage}
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
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            style={{
                                marginTop:
                                    index === 0 ? 0 : "2rem",
                            }}
                        >
                            <button
                                type="button"
                                className={styles.videoPreview}
                                onClick={() =>
                                    setSelectedVideo(video.id)
                                }
                                aria-label={`${t.playVideo}: ${video.title}`}
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    width={1600}
                                    height={900}
                                    unoptimized={!video.local}
                                    className={
                                        styles.videoThumbnail
                                    }
                                    sizes="(max-width: 700px) calc(100vw - 24px), 1100px"
                                />

                                <span
                                    className={styles.playButton}
                                    aria-hidden="true"
                                >
                                    ▶
                                </span>
                            </button>

                            <p
                                style={{
                                    textAlign: "center",
                                    marginTop: "0.75rem",
                                }}
                            >
                                {video.title}
                            </p>
                        </div>
                    ))}
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

            {/* BAND LINEUP */}

            <section className={styles.section}>
                <h2>{t.lineup}</h2>

                <div className={styles.lineup}>
                    <div className={styles.member}>
                        <strong>Stefan Meinking</strong>
                        <span>{t.drums}</span>
                    </div>

                    <div className={styles.member}>
                        <strong>Chris M Blyth</strong>
                        <span>{t.vocalsGuitar}</span>
                    </div>

                    <div className={styles.member}>
                        <strong>Christian Nass</strong>
                        <span>{t.bass}</span>
                    </div>
                </div>
            </section>

            {/* INSTAGRAM */}

            <section
                className={[
                    styles.section,
                    styles.listenFollow,
                ].join(" ")}
                id="listen-follow"
            >
                <h2>Instagram</h2>

                <div className={styles.links}>
                    <a
                        href="https://instagram.com/lunarspacetapes"
                        {...externalLinkProps}
                    >
                        @lunarspacetapes
                    </a>
                </div>
            </section>

            {/* SOUNDCLOUD AUDIO */}

            {availableTracks.length > 0 && (
                <section
                    className={styles.section}
                    id="music"
                >
                    <h2>{audioSectionTitles[language]}</h2>

                    <div
                        style={{
                            maxWidth: "800px",
                            margin: "2rem auto 0",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                        }}
                    >
                        {availableTracks.map((track) => (
                            <div key={track.title}>
                                <h3
                                    style={{
                                        marginBottom: "0.75rem",
                                        textAlign: "center",
                                    }}
                                >
                                    {track.title}
                                </h3>

                                <iframe
                                    title={`Lunar Space Tapes — ${track.title}`}
                                    width="100%"
                                    height="166"
                                    scrolling="no"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    loading="lazy"
                                    src={getSoundCloudPlayerUrl(
                                        track.url
                                    )}
                                    style={{
                                        border: 0,
                                        borderRadius: "4px",
                                        display: "block",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* TECHNICAL RIDER */}

            <section
                className={`${styles.section} ${styles.technicalSection}`}
            >
                <h2>{t.technicalInformation}</h2>

                <a
                    href="/lunarspacetapes/lunar-space-tapes-techrider.pdf"
                    className={`${styles.button} ${styles.techRiderButton}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t.viewTechRider}
                </a>
            </section>

            {/* DOWNLOADABLE EPK */}

            <section className={styles.section}>
                <h2>Electronic Press Kit</h2>

                <a
                    href="/lunarspacetapes/epk.pdf"
                    download="Lunar-Space-Tapes-EPK.pdf"
                    className={styles.button}
                >
                    {t.downloadEPK}
                </a>
            </section>

            {/* BOOKING CONTACT */}

            <footer className={styles.footer}>
                <h2>{t.bookingContact}</h2>

                <p className={styles.contactName}>
                    Chris M Blyth
                </p>

                <div className={styles.contactLinks}>
                    <a href="mailto:chrismblyth@gmail.com">
                        chrismblyth@gmail.com
                    </a>

                    <a href="tel:+4915168634515">
                        +49 151 686 34515
                    </a>
                </div>

                <p className={styles.location}>
                    {t.location}
                </p>
            </footer>

            {/* VIDEO LIGHTBOX */}

            {activeVideo && (
                <div
                    className={styles.lightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label={t.videoDialog}
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className={styles.lightboxContent}
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() =>
                                setSelectedVideo(null)
                            }
                            aria-label={t.closeVideo}
                        >
                            ×
                        </button>

                        <iframe
                            key={activeVideo.id}
                            src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                            title={`Lunar Space Tapes — ${activeVideo.title}`}
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
