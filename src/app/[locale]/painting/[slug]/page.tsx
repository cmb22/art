// src/app/[locale]/painting/[slug]/page.tsx

import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPaintingBySlug } from "@/data/paintings"
import { isLocale } from "@/app/i18n/config"
import { messages } from "@/app/i18n/messages"
import styles from "./painting.module.css"
import layoutStyles from "@/app/[locale]/layout.module.css"

export const generateMetadata = async ({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> => {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const painting = getPaintingBySlug(slug)

  if (!painting) {
    return {}
  }

  return {
    title: painting.title,
    description: painting.note?.[locale] ?? painting.title,
    alternates: {
      canonical: `/${locale}/painting/${painting.slug}`,
      languages: {
        en: `/en/painting/${painting.slug}`,
        de: `/de/painting/${painting.slug}`,
        fr: `/fr/painting/${painting.slug}`
      }
    },
    openGraph: {
      title: painting.title,
      description: painting.note?.[locale] ?? painting.title,
      images: [
        {
          url: painting.images[0]
        }
      ]
    }
  }
}

const PaintingPage = async ({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) => {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const painting = getPaintingBySlug(slug)

  if (!painting) {
    notFound()
  }

  const t = messages[locale]

  const subject = encodeURIComponent(
    t.email.subject.replace("{title}", painting.title)
  )

  const body = encodeURIComponent(
    t.email.body
      .replace("{title}", painting.title)
      .replace("{price}", painting.price)
  )

  const mailto = `mailto:chrismblyth@gmail.com?subject=${subject}&body=${body}`

  return (
    <>
      <section className={styles.intro}>
        <h1 className={layoutStyles.heading}>{painting.title}</h1>
      </section>

      <main className={styles.page}>
        <div className={styles.gallery}>
          {painting.images.map((img, index) => (
            <Image
              key={img}
              src={img}
              alt={painting.title}
              width={1600}
              height={1200}
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 1200px"
              priority={index === 0}
            />
          ))}
        </div>

        <div className={styles.meta}>
          <p className={styles.price}>{painting.price}</p>

          {painting.note?.[locale] && (
            <p className={styles.note}>{painting.note[locale]}</p>
          )}

          {painting.status === "available" && (
            <a href={mailto} className={styles.buyButton}>
              {t.painting.acquire}
            </a>
          )}

          {painting.status === "sold" && (
            <p className={styles.sold}>{t.painting.sold}</p>
          )}
        </div>
      </main>
    </>
  )
}

export default PaintingPage