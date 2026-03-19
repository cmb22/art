"use client"

import Link from "next/link"
import styles from "./LocaleSwitch.module.css"
import { usePathname } from "next/navigation"

export const LocaleSwitch = () => {
    const pathname = usePathname()

    const segments = pathname.split("/")
    const currentLocale = segments[1]
    const restPath = segments.slice(2).join("/") // entfernt aktuelle locale

    return (
        <div className={styles.localeSwitch}>
            <Link className={currentLocale === "en" ? styles.active : ""} href={`/en/${restPath}`}>EN</Link>
            <Link className={currentLocale === "de" ? styles.active : ""} href={`/de/${restPath}`}>DE</Link>
            <Link className={currentLocale === "fr" ? styles.active : ""} href={`/fr/${restPath}`}>FR</Link>
        </div>
    )
}

