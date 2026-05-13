"use client"

import { useCurrency } from "@/app/context/CurrencyProvider"
import { HIDE_PRICES } from "@/data/paintings"

const priceOnRequestLabels = {
    en: "Price on request",
    de: "Preis auf Anfrage",
    fr: "Prix sur demande"
} as const

export const PaintingPrice = ({
    priceEur,
    soldLabel,
    status,
    language
}: {
    priceEur: number
    soldLabel: string
    status: "available" | "sold"
    language: "en" | "de" | "fr"
}) => {
    const { formatPrice } = useCurrency()

    if (status === "sold") {
        return soldLabel
    }

    if (HIDE_PRICES) {
        return priceOnRequestLabels[language]
    }

    return formatPrice(priceEur)
}