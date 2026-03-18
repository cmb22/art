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
    note: "Acrylic on canvas. A darker, more turbulent composition with strong directional movement."
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
    note: "Soft colour transitions suggesting a dreamlike early morning atmosphere."
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
    note: "An abstract exploration of direction, tension and intersecting paths."
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
    note: "Light, airy composition with soft pastel tones evoking a sense of otherworldliness."
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
    note: "A blend of geometric shapes and vibrant colours creating a surreal cityscape."
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
    note: "An abstract expressionist piece exploring texture and colour."
  },
  {
    slug: "7",
    title: "L'éclair",
    price: "€250",
    status: "available",
    images: [
      "/paintings/leclair/leclair.jpg"
    ],
    paypalUrl: "https://paypal.me/chrismblyth/250",
    note: "Reminders of lightning."
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
    note: "A surreal landscape with intricate geometric patterns and vibrant colours."
  }
]

export const getPaintingBySlug = (slug: string) =>
  paintings.find((p) => p.slug === slug)