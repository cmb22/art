import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout