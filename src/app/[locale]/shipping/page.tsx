// src/app/[locale]/shipping/page.tsx
import { notFound } from "next/navigation"
import { isLocale } from "@/app/i18n/config"
import { messages } from "@/app/i18n/messages"
import styles from "./shipping.module.css"

const ShippingPage = async ({
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
                <h1 className={styles.heading}>{t.shipping.heading}</h1>
            </section>

            <section className={styles.content}>
                <p className={styles.text}>
                    {t.shipping.p1}
                </p>

                <p className={styles.text}>
                    {t.shipping.p2}
                </p>

                <p className={styles.text}>
                    {t.shipping.p3}
                </p>
            </section>
        </main>
    )
}

export default ShippingPage