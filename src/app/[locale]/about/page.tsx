// src/app/[locale]/about/page.tsx
import { notFound } from "next/navigation"
import { isLocale } from "@/app/i18n/config"
import { messages } from "@/app/i18n/messages"
import styles from "./about.module.css"
import layoutStyles from "@/app/[locale]/layout.module.css"

const AboutPage = async ({
    params
}: {
    params: Promise<{ locale: string }>
}) => {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    const t = messages[locale]

    return (
        <>
            <section className={styles.intro}>
                <h1 className={layoutStyles.heading}>{t.about.heading}</h1>

            </section>

            <main className={styles.page}>
                <div className={styles.content}>
                    <p className={styles.text}>
                        {t.about.p1}
                    </p>

                    <p className={styles.text}>
                        {t.about.p2}
                    </p>

                    <div className={styles.links}>
                        <a
                            href="https://soundcloud.com/lunarspacetapes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            {t.about.soundcloud}
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutPage