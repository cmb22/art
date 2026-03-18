// src/app/page.tsx
import Link from "next/link"
import { paintings } from "@/data/paintings"
import styles from "./home.module.css"

const Home = () => {
  return (
    <main className={styles.page}>
      {/* TITLE BLOCK */}
      <section className={styles.intro}>
        <h1 className={styles.heading}>Art Gallery</h1>
      </section>

      {/* GRID */}
      <section className={styles.grid}>
        {paintings.map((p) => (
          <Link
            key={p.slug}
            href={`/painting/${p.slug}`}
            className={styles.item}
          >
            <img
              src={p.images[0]}
              alt={p.title}
              className={styles.image}
            />

            <div className={styles.meta}>
              <span className={styles.title}>{p.title}</span>
              <span className={styles.price}>{p.price}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home