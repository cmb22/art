// src/proxy.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { defaultLocale, isLocale, locales } from "@/app/i18n/config"

const localeCookieName = "NEXT_LOCALE"

const getPreferredLocale = (request: NextRequest) => {
    const savedLocale = request.cookies.get(localeCookieName)?.value

    if (savedLocale && isLocale(savedLocale)) {
        return savedLocale
    }

    const acceptLanguage = request.headers.get("accept-language")

    if (!acceptLanguage) {
        return defaultLocale
    }

    const browserLanguages = acceptLanguage
        .split(",")
        .map((part) => part.split(";")[0]?.trim().toLowerCase())
        .filter(Boolean)

    for (const language of browserLanguages) {
        if (isLocale(language)) {
            return language
        }

        const baseLanguage = language.split("-")[0]

        if (isLocale(baseLanguage)) {
            return baseLanguage
        }
    }

    return defaultLocale
}

export const proxy = (request: NextRequest) => {
    const { pathname } = request.nextUrl

    if (
        pathname.startsWith("/lunarspacetapes") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next()
    }

    const segments = pathname.split("/")
    const maybeLocale = segments[1]

    if (isLocale(maybeLocale)) {
        const response = NextResponse.next()

        response.cookies.set(localeCookieName, maybeLocale, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365
        })

        return response
    }

    const locale = getPreferredLocale(request)

    const url = request.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`

    return NextResponse.redirect(url)
}

export const config = {
    matcher: ["/((?!_next|api|.*\\..*).*)"]
}