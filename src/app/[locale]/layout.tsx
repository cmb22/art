// src/app/[locale]/layout.tsx

import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { isLocale, locales } from "@/app/i18n/config"
import { CurrencyProvider } from "@/app/context/CurrencyProvider"
import { messages } from "@/app/i18n/messages"
import Link from "next/link"
import { LocaleSwitch } from "@/app/components/LocaleSwitch"
import { LogoTitle } from "@/app/components/LogoTitle"
import { MainNav } from "@/app/components/MainNav"
import { CurrencySwitch } from "@/app/components/CurrencySwitch"
import styles from "./layout.module.css"

export const generateStaticParams = () => {
    return locales.map((locale) => ({ locale }))
}

export const generateMetadata = async ({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> => {
    const { locale } = await params

    if (!isLocale(locale)) {
        return {}
    }

    const metadataByLocale = {
        en: {
            title: "Chris M Blyth – Abstract Paintings",
            description:
                "Original abstract paintings by Chris M Blyth. Acrylic on canvas. View available works and enquire directly."
        },
        de: {
            title: "Chris M Blyth – Abstrakte Gemälde",
            description:
                "Originale abstrakte Gemälde von Chris M Blyth. Acryl auf Leinwand. Verfügbare Werke ansehen und direkt anfragen."
        },
        fr: {
            title: "Chris M Blyth – Peintures abstraites",
            description:
                "Peintures abstraites originales de Chris M Blyth. Acrylique sur toile. Voir les œuvres disponibles et faire une demande."
        }
    } as const

    return {
        title: metadataByLocale[locale].title,
        description: metadataByLocale[locale].description,
        alternates: {
            canonical: `/${locale}`,
            languages: {
                en: "/en",
                de: "/de",
                fr: "/fr"
            }
        },
        openGraph: {
            title: metadataByLocale[locale].title,
            description: metadataByLocale[locale].description,
            url: `https://www.chrismblyth.com/${locale}`,
            siteName: "Chris M Blyth",
            type: "website"
        }
    }
}

const LocaleLayout = async ({
    children,
    params
}: {
    children: ReactNode
    params: Promise<{ locale: string }>
}) => {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    const t = messages[locale]

    return (
        <>
            <CurrencyProvider>
                <div className={styles.siteShell}>
                    <header className={styles.siteHeader}>
                        <div className={styles.siteBrand}>
                            <Link href={`/${locale}`} className={styles.siteTitleLink}>
                                <LogoTitle />
                            </Link>

                            <nav className={styles.siteNav}>
                                <div className={styles.firstNav}>
                                    <MainNav href={`/${locale}/about`}>
                                        {t.nav.about}
                                    </MainNav>
                                    <MainNav href={`/${locale}/shipping`}>
                                        {t.nav.shipping}
                                    </MainNav>
                                    <MainNav href={`/${locale}/contact`}>
                                        {t.nav.contact}
                                    </MainNav>
                                </div>

                                <div className={styles.localeSwitch}>
                                    <CurrencySwitch />
                                    <LocaleSwitch />
                                </div>
                            </nav>
                        </div>
                    </header>

                    <div className={styles.siteDivider} />

                    {children}
                </div>

                <footer className={styles.footer}>
                    <div className={styles.footerInner}>
                        <span>Chris M Blyth</span>
                        <span>{new Date().getFullYear()}</span>
                    </div>
                </footer>
            </CurrencyProvider>
        </>
    )
}

export default LocaleLayout