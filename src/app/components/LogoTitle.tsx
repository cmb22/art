// src/app/components/LogoTitle.tsx

import styles from "./LogoTitle.module.css"

export const LogoTitle = () => {
    return (
        <h1 className={styles.logoWrap}>
            <svg
                viewBox="0 0 1280 180"
                aria-label="Chris M Blyth"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.logoSvg}
                preserveAspectRatio="xMinYMid meet"
            >
                <text
                    x="-6"
                    y="145"
                    textLength="1292"
                    lengthAdjust="spacingAndGlyphs"
                    className={styles.logoText}
                >
                    CHRIS M BLYTH
                </text>
            </svg>
        </h1>
    )
}

