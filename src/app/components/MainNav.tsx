// src/app/components/MainNav.tsx

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./MainNav.module.css"

type Props = {
    href: string
    children: React.ReactNode
}

export const MainNav = ({ href, children }: Props) => {
    const pathname = usePathname()

    const isActive = pathname.startsWith(href)

    return (
        <Link
            href={href}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
        >
            {children}
        </Link>
    )
}