import Link from "next/link"
import { paintings } from "@/data/paintings"
import styles from "./home.module.css"

const Home = () => {
  return (
    <main className={styles.page}>
      <section className={styles.grid}>
        {paintings.map((p) => (
          <Link
            key={p.slug}
            href={`/painting/${p.slug}`}
            className={styles.card}
          >
            <img
              src={p.images[0]}
              alt={p.title}
              className={styles.image}
            />

            <div className={styles.meta}>
              <span>{p.title}</span>
              <span>{p.price}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home