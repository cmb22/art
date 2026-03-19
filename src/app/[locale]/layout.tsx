// src/app/[locale]/layout.tsx

import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { isLocale, locales } from "@/app/i18n/config"
import { messages } from "@/app/i18n/messages"
import Link from "next/link"
import { LocaleSwitch } from "@/app/components/LocaleSwitch"
import { LogoTitle } from "@/app/components/LogoTitle"
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

    const titleByLocale = {
        en: "Art Gallery",
        de: "Kunstgalerie",
        fr: "Galerie d’art"
    }

    const descriptionByLocale = {
        en: "Multilingual portfolio website featuring abstract paintings by Chris M Blyth.",
        de: "Mehrsprachige Portfolio-Website mit abstrakten Gemälden von Chris M Blyth.",
        fr: "Site portfolio multilingue présentant les peintures abstraites de Chris M Blyth."
    }

    return {
        title: titleByLocale[locale],
        description: descriptionByLocale[locale],
        alternates: {
            canonical: `/${locale}`,
            languages: {
                en: "/en",
                de: "/de",
                fr: "/fr"
            }
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
            <div className={styles.siteShell}>
                <header className={styles.siteHeader}>
                    <div className={styles.siteBrand}>
                        <Link href={`/${locale}`} className={styles.siteTitleLink}>
                            <LogoTitle />
                        </Link>

                        <nav className={styles.siteNav}>
                            <div className={styles.firstNav}>
                                <Link href={`/${locale}/about`} className={styles.siteLink}>
                                    {t.nav.about}
                                </Link>
                                <Link href={`/${locale}/shipping`} className={styles.siteLink}>
                                    {t.nav.shipping}
                                </Link>
                                <Link href={`/${locale}/contact`} className={styles.siteLink}>
                                    {t.nav.contact}
                                </Link>
                            </div>

                            <div className={styles.localeSwitch}>
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
        </>
    )
}

export default LocaleLayout