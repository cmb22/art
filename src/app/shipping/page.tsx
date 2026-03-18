import styles from "./shipping.module.css"

const ShippingPage = () => {
    return (
        <main className={styles.page}>
            <section className={styles.intro}>
                <h1 className={styles.heading}>Shipping</h1>
            </section>

            <section className={styles.content}>
                <p className={styles.text}>
                    Paintings can be shipped worldwide.
                </p>

                <p className={styles.text}>
                    Shipping costs and delivery times depend on destination, size and
                    packaging requirements.
                </p>

                <p className={styles.text}>
                    Please get in touch before purchase if you would like a shipping quote
                    or more information about delivery.
                </p>
            </section>
        </main>
    )
}

export default ShippingPage