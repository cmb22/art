// src/app/[locale]/page.tsx

import Link from "next/link"
import { paintings } from "@/data/paintings"
import { isLocale } from "@/app/i18n/config"
import { messages } from "@/app/i18n/messages"
import { notFound } from "next/navigation"
import styles from "./home.module.css"
import layoutStyles from "./layout.module.css"
import { GalleryImage } from "@/app/components/GalleryImage"

const Home = async ({
  params
}: {
  params: Promise<{ locale: string }>
}) => {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const t = messages[locale]

  const sortedPaintings = paintings.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority
    }
    const priceA = parseInt(a.price.replace(/[^\d]/g, ""))
    const priceB = parseInt(b.price.replace(/[^\d]/g, ""))
    return priceB - priceA
  })

  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <h1 className={layoutStyles.heading}>
          {t.home.heading}
        </h1>
      </section>

      <section className={styles.grid}>
        {sortedPaintings.map((painting, index) => (
          <Link
            key={painting.slug}
            href={`/${locale}/painting/${painting.slug}`}
            className={styles.item}
          >
            <GalleryImage
              src={painting.images[0]}
              alt={painting.title}
              priority={index < 3}
            />

            <div className={styles.meta}>
              <span className={styles.title}>
                {painting.title}
              </span>

              <span className={styles.price}>
                {painting.status === "sold" ? t.painting.sold : painting.price}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home