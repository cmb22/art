export const LogoTitle = () => {
    return (
        <div style={{ position: "relative", width: "100%" }}>
            <h1 className="srOnly">Chris M Blyth</h1>

            <svg
                viewBox="0 0 1280 180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block", width: "100%", height: "auto" }}
            >
                <text
                    x="0"
                    y="145"
                    textLength="1280"
                    lengthAdjust="spacingAndGlyphs"
                    style={{
                        fontFamily: '"Vend Sans", sans-serif',
                        fontSize: 180,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "-0.06em"
                    }}
                >
                    CHRIS M BLYTH
                </text>
            </svg>
        </div>
    )
}

