"use client"

import { useEffect, useRef, useState } from "react"

type FitTitleProps = {
    text: string
    className?: string
    minSize?: number
    maxSize?: number
}

const FitTitle = ({
    text,
    className,
    minSize = 32,
    maxSize = 220
}: FitTitleProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const measureRef = useRef<HTMLSpanElement | null>(null)
    const [fontSize, setFontSize] = useState(maxSize)

    useEffect(() => {
        const updateSize = () => {
            const wrapper = wrapperRef.current
            const measure = measureRef.current

            if (!wrapper || !measure) return

            measure.style.fontSize = `${maxSize}px`

            const availableWidth = wrapper.offsetWidth
            const textWidth = measure.offsetWidth

            if (!availableWidth || !textWidth) return

            const nextSize = Math.floor((availableWidth / textWidth) * maxSize)
            const safeSize = Math.max(minSize, Math.min(maxSize, nextSize))

            setFontSize(safeSize)
        }

        updateSize()

        const resizeObserver = new ResizeObserver(() => {
            updateSize()
        })

        if (wrapperRef.current) {
            resizeObserver.observe(wrapperRef.current)
        }

        window.addEventListener("resize", updateSize)

        if ("fonts" in document) {
            document.fonts.ready.then(updateSize)
        }

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener("resize", updateSize)
        }
    }, [text, minSize, maxSize])

    return (
        <div ref={wrapperRef} className={className}>
            <span
                style={{
                    fontSize: `${fontSize}px`,
                    display: "block",
                    whiteSpace: "nowrap",
                    lineHeight: 0.9
                }}
            >
                {text}
            </span>

            <span
                ref={measureRef}
                style={{
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    fontSize: `${maxSize}px`
                }}
            >
                {text}
            </span>
        </div>
    )
}

export default FitTitle