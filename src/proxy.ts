// src/proxy.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { defaultLocale, isLocale, locales } from "@/app/i18n/config"

const getPreferredLocale = (request: NextRequest) => {
    const acceptLanguage = request.headers.get("accept-language")

    if (!acceptLanguage) {
        return defaultLocale
    }

    const browserLanguages = acceptLanguage
        .split(",")
        .map((part) => part.split(";")[0]?.trim().toLowerCase())
        .filter(Boolean)

    for (const language of browserLanguages) {
        const exactMatch = locales.find((locale) => locale === language)

        if (exactMatch) {
            return exactMatch
        }

        const baseLanguage = language.split("-")[0]
        const baseMatch = locales.find((locale) => locale === baseLanguage)

        if (baseMatch) {
            return baseMatch
        }
    }

    return defaultLocale
}

export const proxy = (request: NextRequest) => {
    const { pathname } = request.nextUrl

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next()
    }

    const segments = pathname.split("/")
    const maybeLocale = segments[1]

    if (isLocale(maybeLocale)) {
        return NextResponse.next()
    }

    const locale =
        pathname === "/"
            ? getPreferredLocale(request)
            : defaultLocale

    const url = request.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`

    return NextResponse.redirect(url)
}

export const config = {
    matcher: ["/((?!_next|api|.*\\..*).*)"]
}