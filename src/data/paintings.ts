// src/data/paintings.ts

type LocaleNote = {
  en: string
  de: string
  fr: string
}

type Painting = {
  slug: string
  title: string
  price: string
  status: "available" | "sold"
  images: string[]
  paypalUrl: string
  note: LocaleNote
}

export const paintings: Painting[] = [
  {
    slug: "storm",
    title: "Storm",
    price: "€620",
    status: "available",
    images: [
      "/paintings/storm/storm.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/575",
    note: {
      en: "Acrylic on canvas. 59,5 x 42 cm",
      de: "Acryl auf Leinwand. 59,5 x 42 cm",
      fr: "Acrylique sur toile. 59,5 x 42 cm"
    }
  },
  {
    slug: "hallucinations-at-dawn",
    title: "Hallucinations at Dawn",
    price: "€520",
    status: "available",
    images: [
      "/paintings/hallucinationsatdawn/hallucinationsatdawn.jpeg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/230",
    note: {
      en: "Acrylic on canvas. 60 x 42 cm",
      de: "Acryl auf Leinwand. 60 x 42 cm",
      fr: "Acrylique sur toile. 60 x 42 cm"
    }
  },
  {
    slug: "crossroads",
    title: "Crossroads",
    price: "€380",
    status: "available",
    images: [
      "/paintings/crossroads/crossroads.jpeg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/200",
    note: {
      en: "Acrylic on canvas. 59,5 x 42 cm",
      de: "Acryl auf Leinwand. 59,5 x 42 cm",
      fr: "Acrylique sur toile. 59,5 x 42 cm"
    }
  },
  {
    slug: "fishing-by-night",
    title: "Fishing by night",
    price: "€380",
    status: "available",
    images: [
      "/paintings/nightfishing/nightfishing.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/200",
    note: {
      en: "Acrylic on canvas. 59,5 x 42 cm",
      de: "Acryl auf Leinwand. 59,5 x 42 cm",
      fr: "Acrylique sur toile. 59,5 x 42 cm"
    }
  },
  {
    slug: "les-yeux",
    title: "Les Yeux",
    price: "€460",
    status: "available",
    images: [
      "/paintings/lesyeux/lesyeux.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/275",
    note: {
      en: "Acrylic on canvas. 59,5 x 42 cm",
      de: "Acryl auf Leinwand. 59,5 x 42 cm",
      fr: "Acrylique sur toile. 59,5 x 42 cm"
    }
  },
  {
    slug: "portrait-of-the-universe",
    title: "Portrait of the Universe",
    price: "€620",
    status: "available",
    images: [
      "/paintings/portraitoftheuniverse/portraitoftheuniverse.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/350",
    note: {
      en: "Acrylic on canvas. 59,5 x 42 cm",
      de: "Acryl auf Leinwand. 59,5 x 42 cm",
      fr: "Acrylique sur toile. 59,5 x 42 cm"
    }
  },
  {
    slug: "souvenirs-declairs",
    title: "Souvenirs d’éclairs",
    price: "€460",
    status: "available",
    images: [
      "/paintings/leclair/leclair.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/250",
    note: {
      en: "Reminders of lightning. Acrylic on canvas. 59,5 x 42 cm",
      de: "Erinnerungen an Blitze. Acryl auf Leinwand. 59,5 x 42 cm",
      fr: "Souvenirs d’éclairs. Acrylique sur toile. 59,5 x 42 cm"
    }
  },
  {
    slug: "alfred-nobel-dreams",
    title: "Alfred Nobel Dreams",
    price: "€420",
    status: "available",
    images: [
      "/paintings/alfrednobeldreams/alfrednobeldreams.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/250",
    note: {
      en: "Acrylic on canvas. 59,5 x 42 cm",
      de: "Acryl auf Leinwand. 59,5 x 42 cm",
      fr: "Acrylique sur toile. 59,5 x 42 cm"
    }
  },
  {
    slug: "the-unknown-painter",
    title: "The Unknown Painter",
    price: "€520",
    status: "available",
    images: [
      "/paintings/theunknownpainter/theunknownpainter.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/350",
    note: {
      en: "Acrylic on canvas. 59,5 x 42 cm",
      de: "Acryl auf Leinwand. 59,5 x 42 cm",
      fr: "Acrylique sur toile. 59,5 x 42 cm"
    }
  }
]

export const getPaintingBySlug = (slug: string) =>
  paintings.find((p) => p.slug === slug)