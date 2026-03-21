// src/app/[locale]/shipping/page.tsx

import { notFound } from "next/navigation"
import { isLocale } from "@/app/i18n/config"
import { messages } from "@/app/i18n/messages"
import styles from "./shipping.module.css"
import layoutStyles from "@/app/[locale]/layout.module.css"

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

            <section className={layoutStyles.intro}>
                <h1 className={layoutStyles.heading}>
                    {t.shipping.heading}
                </h1>
            </section>

            <section className={styles.grid}>

                <div className={styles.content}>

                    <p className={styles.text}>
                        {t.shipping.p1}
                    </p>

                    <p className={styles.text}>
                        {t.shipping.p2}
                    </p>

                    <p className={styles.text}>
                        {t.shipping.p3}
                    </p>

                </div>

                <div className={styles.side}>

                    <div className={styles.block}>
                        <div className={styles.label}>
                            Worldwide
                        </div>

                        <p className={styles.sideText}>
                            {locale === "de" && "Versand weltweit möglich."}
                            {locale === "en" && "Worldwide shipping available."}
                            {locale === "fr" && "Expédition internationale possible."}
                        </p>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.label}>
                            Packaging
                        </div>

                        <p className={styles.sideText}>
                            {locale === "de" && "Sichere Verpackung je nach Format."}
                            {locale === "en" && "Secure packaging depending on size."}
                            {locale === "fr" && "Emballage sécurisé selon le format."}
                        </p>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.label}>
                            Quote
                        </div>

                        <p className={styles.sideText}>
                            {locale === "de" && "Versandkosten auf Anfrage."}
                            {locale === "en" && "Shipping quote on request."}
                            {locale === "fr" && "Devis sur demande."}
                        </p>
                    </div>

                </div>

            </section>

        </main>
    )
}

export default ShippingPage