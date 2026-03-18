import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"
import FitTitle from "./components/FitTitle"
import styles from "./layout.module.css"

import { Vend_Sans } from "next/font/google"

const vendSans = Vend_Sans({
  subsets: ["latin"],
  variable: "--font-vend-sans"
})


export const metadata: Metadata = {
  title: "Chris M Blyth",
  description: "Art Gallery"
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={vendSans.className}>
        <div className={styles.siteShell}>
          <header className={styles.siteHeader}>
            <div className={styles.siteBrand}>
              <Link href="/" className={styles.siteTitle}>
                <FitTitle
                  text="CHRIS M BLYTH"
                  className={styles.siteTitle}
                  minSize={42}
                  maxSize={220}
                />
              </Link>
              <nav className={styles.siteNav}>
                <Link href="/about" className={styles.siteLink}>
                  About
                </Link>


                <Link href="/shipping" className={styles.siteLink}>
                  Shipping
                </Link>
                <Link href="/contact" className={styles.siteLink}>
                  Contact
                </Link>
              </nav>
            </div>

            <div className={styles.subHeader}>

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
      </body>
    </html>
  )
}

export default RootLayout