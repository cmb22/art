import styles from "./contact.module.css"

const ContactPage = () => {
    return (
        <main className={styles.page}>
            <section className={styles.intro}>
                <h1 className={styles.heading}>Contact</h1>
            </section>

            <section className={styles.content}>
                <p className={styles.item}>
                    <span className={styles.label}>Email</span>
                    <a href="mailto:chrismblyth@gmail.com" className={styles.link}>
                        chrismblyth@gmail.com
                    </a>
                </p>

                <p className={styles.item}>
                    <span className={styles.label}>Phone</span>
                    <a href="tel:+4915168634515" className={styles.link}>
                        +49 151 686 34 515
                    </a>
                </p>
            </section>
        </main>
    )
}

export default ContactPage