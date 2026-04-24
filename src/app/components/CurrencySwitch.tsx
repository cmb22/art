// src/app/components/CurrencySwitch.tsx
"use client"

import { useCurrency } from "@/app/context/CurrencyProvider"
import styles from "./CurrencySwitch.module.css"

const currencies = ["EUR", "GBP", "USD"] as const

export const CurrencySwitch = () => {
    const { currency, setCurrency } = useCurrency()

    return (
        <div className={styles.switch}>
            <div className={styles.buttons}>
                {currencies.map((item) => (
                    <button
                        key={item}
                        type="button"
                        className={
                            item === currency
                                ? `${styles.button} ${styles.active}`
                                : styles.button
                        }
                        onClick={() => setCurrency(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <select
                className={styles.select}
                value={currency}
                onChange={(event) =>
                    setCurrency(event.target.value as typeof currencies[number])
                }
                aria-label="Select currency"
            >
                {currencies.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}