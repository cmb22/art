"use client"

import Image from "next/image"
import { useState } from "react"
import styles from "./PaintingImage.module.css"

type PaintingImageProps = {
    src: string
    alt: string
    priority?: boolean
}

export const PaintingImage = ({
    src,
    alt,
    priority = false
}: PaintingImageProps) => {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className={styles.wrap}>
            <Image
                src={src}
                alt={alt}
                width={1600}
                height={1200}
                priority={priority}
                sizes="(max-width: 900px) 100vw, 1200px"
                className={`${styles.image} ${loaded ? styles.loaded : ""}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}