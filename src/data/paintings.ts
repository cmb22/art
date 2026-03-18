import { Slabo_13px } from "next/font/google"

export const paintings = [
  {
    slug: "1",
    title: "Storm",
    price: "€575",
    status: "available",
    images: [
      "/paintings/storm/storm.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/575",
    note: "Acrylic on canvas. 59,5 x 42cm"
  },
  {
    slug: "2",
    title: "Hallucinations at Dawn",
    price: "€230",
    status: "available",
    images: [
      "/paintings/hallucinationsatdawn/hallucinationsatdawn.jpeg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/230",
    note: "Acrylic on canvas. 60 x 42cm"
  },
  {
    slug: "3",
    title: "Crossroads",
    price: "€200",
    status: "available",
    images: [
      "/paintings/crossroads/crossroads.jpeg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/200",
    note: "Acrylic on canvas. 59,5 x 42cm"
  },
  {
    slug: "4",
    title: "Fishing by night",
    price: "€200",
    status: "available",
    images: [
      "/paintings/nightfishing/nightfishing.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/200",
    note: "Acrylic on canvas. 59,5 x 42cm"
  },
  {
    slug: "5",
    title: "Les Yeux",
    price: "€275",
    status: "available",
    images: [
      "/paintings/lesyeux/lesyeux.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/275",
    note: "Acrylic on canvas. 59,5 x 42cm"
  },
  {
    slug: "6",
    title: "Portrait of the Universe",
    price: "€350",
    status: "available",
    images: [
      "/paintings/portraitoftheuniverse/portraitoftheuniverse.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/350",
    note: "Acrylic on canvas. 59,5 x 42cm"
  },
  {
    slug: "7",
    title: "Souvenirs d’éclairs",
    price: "€250",
    status: "available",
    images: [
      "/paintings/leclair/leclair.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/250",
    note: "Reminders of lightning. Acrylic on canvas. 59,5 x 42cm"
  },
  {
    slug: "8",
    title: "Alfred Nobel Dreams",
    price: "€250",
    status: "available",
    images: [
      "/paintings/alfrednobeldreams/alfrednobeldreams.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/250",
    note: "Acrylic on canvas. 59,5 x 42cm"
  },
  {
    slug: "9",
    title: "The Unknown Painter",
    price: "€350",
    status: "available",
    images: [
      "/paintings/theunknownpainter/theunknownpainter.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/350",
    note: "Acrylic on canvas. 59,5 x 42cm"
  }
]

export const getPaintingBySlug = (slug: string) =>
  paintings.find((p) => p.slug === slug)