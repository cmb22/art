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
                            {/* <img
                                src="/chris-m-blyth.svg"
                                alt="Chris M Blyth"
                                className={styles.siteTitleImage}
                            /> */}
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