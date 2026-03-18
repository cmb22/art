import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <>
            <section className={styles.intro}>
                <h1 className={styles.heading}>About</h1>
            </section>
            <main className={styles.page}>
                <div className={styles.content}>


                    <p className={styles.text}>
                        Christopher Blyth is a Berlin-based artist and musician. His paintings
                        focus on abstraction, movement and atmosphere, with an emphasis on
                        spontaneity, texture and emotional tension.
                    </p>

                    <p className={styles.text}>
                        Alongside painting, he also writes and records music with his music project Lunar Space Tapes. A selection of
                        of work can be found on SoundCloud.
                    </p>

                    <div className={styles.links}>
                        <a
                            href="https://soundcloud.com/lunarspacetapes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            LUNAR SPACE TAPES ON SOUNDCLOUD
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutPage