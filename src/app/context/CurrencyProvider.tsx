"use client"

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode
} from "react"

type Currency = "EUR" | "GBP" | "USD"

type CurrencyContextValue = {
    currency: Currency
    setCurrency: (currency: Currency) => void
    formatPrice: (priceEur: number) => string
}

const rates: Record<Currency, number> = {
    EUR: 1,
    GBP: 0.86,
    USD: 1.08
}

const currencySymbols: Record<Currency, string> = {
    EUR: "€",
    GBP: "£",
    USD: "$"
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null)

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrencyState] = useState<Currency>("EUR")

    useEffect(() => {
        const savedCurrency = window.localStorage.getItem("currency")

        if (
            savedCurrency === "EUR" ||
            savedCurrency === "GBP" ||
            savedCurrency === "USD"
        ) {
            setCurrencyState(savedCurrency)
        }
    }, [])

    const setCurrency = (newCurrency: Currency) => {
        setCurrencyState(newCurrency)
        window.localStorage.setItem("currency", newCurrency)
    }

    const formatPrice = (priceEur: number) => {
        const converted = Math.round(priceEur * rates[currency])
        return `${currencySymbols[currency]}${converted}`
    }

    const value = useMemo(
        () => ({
            currency,
            setCurrency,
            formatPrice
        }),
        [currency]
    )

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => {
    const context = useContext(CurrencyContext)

    if (!context) {
        throw new Error("useCurrency must be used inside CurrencyProvider")
    }

    return context
}