"use client"

import { useCurrency } from "@/app/context/CurrencyProvider"

export const PaintingPrice = ({
    priceEur,
    soldLabel,
    status
}: {
    priceEur: number
    soldLabel: string
    status: "available" | "sold"
}) => {
    const { formatPrice } = useCurrency()

    return (
        <>
            {status === "sold" ? soldLabel : formatPrice(priceEur)}
        </>
    )
}