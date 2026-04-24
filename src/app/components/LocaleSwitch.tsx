// src/app/components/LocaleSwitch.tsx
"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import styles from "./LocaleSwitch.module.css"

const locales = ["en", "de", "fr"] as const

export const LocaleSwitch = () => {
    const pathname = usePathname()
    const router = useRouter()

    const segments = pathname.split("/")
    const currentLocale = segments[1]
    const restPath = segments.slice(2).join("/")

    const getHref = (locale: typeof locales[number]) =>
        restPath ? `/${locale}/${restPath}` : `/${locale}`

    return (
        <div className={styles.localeSwitch}>
            <div className={styles.links}>
                {locales.map((locale) => (
                    <Link
                        key={locale}
                        className={currentLocale === locale ? styles.active : ""}
                        href={getHref(locale)}
                    >
                        {locale.toUpperCase()}
                    </Link>
                ))}
            </div>

            <select
                className={styles.select}
                value={currentLocale}
                onChange={(event) =>
                    router.push(getHref(event.target.value as typeof locales[number]))
                }
                aria-label="Select language"
            >
                {locales.map((locale) => (
                    <option key={locale} value={locale}>
                        {locale.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    )
}