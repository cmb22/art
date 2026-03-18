import type { Metadata } from "next"
import Link from "next/link"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const metadata: Metadata = {
  title: "Christopher Blyth",
  description: "Paintings"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="site-shell">
          <header className="site-header">
            <Link href="/" className="site-title">
              Christopher Blyth
            </Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}