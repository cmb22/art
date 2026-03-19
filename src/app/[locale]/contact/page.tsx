// src/app/[locale]/contact/page.tsx
import { notFound } from "next/navigation"
import { isLocale } from "@/app/i18n/config"
import { messages } from "@/app/i18n/messages"
import styles from "./contact.module.css"
import layoutStyles from "@/app/[locale]/layout.module.css"

const ContactPage = async ({
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
        <main className={styles.page}>
            <section className={styles.intro}>
                <h1 className={layoutStyles.heading}>{t.contact.heading}</h1>
            </section>

            <section className={styles.content}>
                <p className={styles.item}>
                    <span className={styles.label}>{t.contact.email}</span>
                    <a href="mailto:chrismblyth@gmail.com" className={styles.link}>
                        chrismblyth@gmail.com
                    </a>
                </p>

                <p className={styles.item}>
                    <span className={styles.label}>{t.contact.phone}</span>
                    <a href="tel:+4915168634515" className={styles.link}>
                        +49 151 686 34 515
                    </a>
                </p>
            </section>
        </main>
    )
}

export default ContactPage