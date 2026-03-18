import { notFound } from "next/navigation"
import { getPaintingBySlug } from "@/data/paintings"
import styles from "./painting.module.css"

export const PaintingPage = async ({
  params
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const painting = getPaintingBySlug(slug)

  if (!painting) return notFound()

  return (
    <main className={styles.page}>
      <div className={styles.gallery}>
        {painting.images.map((img) => (
          <img
            key={img}
            src={img}
            alt={painting.title}
            className={styles.image}
          />
        ))}
      </div>

      <div className={styles.meta}>
        <h1 className={styles.title}>{painting.title}</h1>
        <p className={styles.price}>{painting.price}</p>

        {painting.note && (
          <p className={styles.note}>{painting.note}</p>
        )}

        {painting.paypalUrl && painting.status === "available" && (
          <a
            href={painting.paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buyButton}
          >
            Acquire
          </a>
        )}

        {painting.status === "sold" && (
          <p className={styles.sold}>Sold</p>
        )}
      </div>
    </main>
  )
}

export default PaintingPage