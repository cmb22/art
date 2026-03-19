// src/app/layout.tsx

import type { Metadata } from "next"
import "./globals.css"
import { Roboto } from "next/font/google"

export const metadata: Metadata = {
  metadataBase: new URL("https://chrismblyth.com"),
  title: {
    default: "Chris M Blyth",
    template: "%s | Chris M Blyth"
  }
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout