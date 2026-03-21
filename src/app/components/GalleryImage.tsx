// src/app/components/GalleryImage.tsx

"use client"

import Image from "next/image"
import { useState } from "react"
import styles from "./GalleryImage.module.css"

type GalleryImageProps = {
    src: string
    alt: string
    priority?: boolean
    sizes?: string
    className?: string
}

export const GalleryImage = ({
    src,
    alt,
    priority = false,
    sizes = "(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw",
    className = ""
}: GalleryImageProps) => {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className={styles.wrap}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes}
                className={`${styles.image} ${loaded ? styles.loaded : ""} ${className}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}