import { notFound } from "next/navigation"
import { getPaintingBySlug } from "@/data/paintings"
import styles from "./painting.module.css"

const PaintingPage = async ({
  params
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const painting = getPaintingBySlug(slug)

  if (!painting) return notFound()

  const subject = encodeURIComponent(`Enquiry about "${painting.title}"`)
  const body = encodeURIComponent(
    `Hello,

I'm interested in "${painting.title}" (${painting.price}).

Please let me know if it is still available and what the shipping options would be.

Best regards`
  )

  const mailto = `mailto:chrismblyth@gmail.com?subject=${subject}&body=${body}`

  return (
    <>
      <section className={styles.intro}>
        <h1 className={styles.heading}>{painting.title}</h1>
      </section>
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

          <p className={styles.price}>{painting.price}</p>

          {painting.note && (
            <p className={styles.note}>{painting.note}</p>
          )}

          {painting.status === "available" && (
            <a href={mailto} className={styles.buyButton}>
              Acquire
            </a>
          )}

          {painting.status === "sold" && (
            <p className={styles.sold}>Sold</p>
          )}
        </div>
      </main>
    </>
  )
}

export default PaintingPage