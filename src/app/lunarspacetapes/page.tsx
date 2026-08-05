import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
    title: "Lunar Space Tapes — Electronic Press Kit",
    description: "Psychedelic rock trio from Berlin.",
};

const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
} as const;

export default function LunarSpaceTapesEPK() {
    return (
        <main id="lunar-epk" className={styles.page}>
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
                    <div className={styles.video}>
                        <iframe
                            src="https://www.youtube.com/embed/z4UvI-4D9dk"
                            title="Lunar Space Tapes — You and I live"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            </header>

            <section className={`${styles.section} ${styles.bioSection}`}>
                <p className={styles.bio}>
                    Lunar Space Tapes is a psychedelic rock trio from Berlin.
                    Founded by guitarist and songwriter Chris M Blyth, the band
                    combines melodic songwriting, spacey guitars, hypnotic
                    grooves and improvisation. The goal is simple: to write
                    great songs, launch them into the universe and see where
                    they land.
                </p>
            </section>

            <section className={styles.photoSection}>
                <Image
                    src="/lunarspacetapes/bandfoto.jpg"
                    alt="Lunar Space Tapes band photo"
                    width={1600}
                    height={1000}
                    className={styles.bandPhoto}
                    sizes="100vw"
                />
            </section>

            <section className={styles.section}>
                <h2>Line-up</h2>

                <div className={styles.lineup}>
                    <p>
                        <strong>Chris M Blyth</strong>
                        <span>Vocals / Guitar</span>
                    </p>

                    <p>
                        <strong>Stefan Meinking</strong>
                        <span>Drums</span>
                    </p>

                    <p>
                        <strong>Christian Nass</strong>
                        <span>Bass</span>
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2>Listen &amp; Follow</h2>

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
                <h2>Technical information</h2>

                <a
                    href="/lunarspacetapes/lunar-space-tapes-techrider.pdf"
                    className={styles.button}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Tech Rider
                </a>
            </section>

            <footer className={styles.footer}>
                <h2>Booking &amp; Contact</h2>

                <p>Chris M Blyth</p>

                <div className={styles.contactLinks}>
                    <a href="mailto:chrismblyth@gmail.com">
                        chrismblyth@gmail.com
                    </a>

                    <a href="tel:+4915168634515">
                        +49 151 686 34515
                    </a>
                </div>

                <p className={styles.location}>Berlin, Germany</p>
            </footer>
        </main>
    );
}