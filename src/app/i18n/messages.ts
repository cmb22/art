// src/i18n/messages.ts
import type { Locale } from "./config"

export const messages = {
    en: {
        nav: {
            about: "About",
            contact: "Contact",
            shipping: "Shipping"
        },
        home: {
            heading: "Art Gallery"
        },
        painting: {
            acquire: "Acquire",
            sold: "Sold"
        },
        about: {
            heading: "About",
            p1: "Christopher Blyth is a Berlin-based artist and musician. His paintings focus on abstraction, movement and atmosphere, with an emphasis on spontaneity, texture and emotional tension.",
            p2: "Alongside painting, he also writes and records music with his music project Lunar Space Tapes. A selection of work can be found on SoundCloud.",
            soundcloud: "LUNAR SPACE TAPES ON SOUNDCLOUD"
        },
        contact: {
            heading: "Contact",
            email: "Email",
            phone: "Phone"
        },
        shipping: {
            heading: "Shipping",
            p1: "Paintings can be shipped worldwide.",
            p2: "Shipping costs and delivery times depend on destination, size and packaging requirements.",
            p3: "Please get in touch before purchase if you would like a shipping quote or more information about delivery."
        },
        email: {
            subject: 'Enquiry about "{title}"',
            body: `Hello,

I'm interested in "{title}" ({price}).

Please let me know if it is still available and what the shipping options would be.

Best regards`
        }
    },

    de: {
        nav: {
            about: "Über",
            contact: "Kontakt",
            shipping: "Versand"
        },
        home: {
            heading: "Kunstgalerie"
        },
        painting: {
            acquire: "Anfragen",
            sold: "Verkauft"
        },
        about: {
            heading: "Über",
            p1: "Christopher Blyth ist ein in Berlin lebender Künstler und Musiker. Seine Gemälde beschäftigen sich mit Abstraktion, Bewegung und Atmosphäre, mit einem Schwerpunkt auf Spontaneität, Textur und emotionaler Spannung.",
            p2: "Neben der Malerei schreibt und produziert er auch Musik mit seinem Musikprojekt Lunar Space Tapes. Eine Auswahl seiner Arbeiten ist auf SoundCloud zu finden.",
            soundcloud: "LUNAR SPACE TAPES AUF SOUNDCLOUD"
        },
        contact: {
            heading: "Kontakt",
            email: "E-Mail",
            phone: "Telefon"
        },
        shipping: {
            heading: "Versand",
            p1: "Gemälde können weltweit verschickt werden.",
            p2: "Versandkosten und Lieferzeiten hängen vom Zielort, der Größe und den Verpackungsanforderungen ab.",
            p3: "Bitte nimm vor dem Kauf Kontakt auf, wenn du ein Versandangebot oder weitere Informationen zur Lieferung möchtest."
        },
        email: {
            subject: 'Anfrage zu "{title}"',
            body: `Hallo,

ich interessiere mich für "{title}" ({price}).

Bitte teilen Sie mir mit, ob es noch verfügbar ist und wie die Versandoptionen aussehen.

Viele Grüße`
        }
    },

    fr: {
        nav: {
            about: "À propos",
            contact: "Contact",
            shipping: "Livraison"
        },
        home: {
            heading: "Galerie d’art"
        },
        painting: {
            acquire: "Demander",
            sold: "Vendu"
        },
        about: {
            heading: "À propos",
            p1: "Christopher Blyth est un artiste et musicien basé à Berlin. Ses peintures explorent l’abstraction, le mouvement et l’atmosphère, avec un accent sur la spontanéité, la texture et la tension émotionnelle.",
            p2: "Parallèlement à la peinture, il écrit et enregistre également de la musique avec son projet musical Lunar Space Tapes. Une sélection de son travail est disponible sur SoundCloud.",
            soundcloud: "LUNAR SPACE TAPES SUR SOUNDCLOUD"
        },
        contact: {
            heading: "Contact",
            email: "E-mail",
            phone: "Téléphone"
        },
        shipping: {
            heading: "Livraison",
            p1: "Les peintures peuvent être expédiées dans le monde entier.",
            p2: "Les frais de livraison et les délais dépendent de la destination, du format et des exigences d’emballage.",
            p3: "Merci de nous contacter avant l’achat si vous souhaitez un devis de livraison ou davantage d’informations."
        },
        email: {
            subject: 'Demande concernant "{title}"',
            body: `Bonjour,

je suis intéressé par "{title}" ({price}).

Merci de me dire s’il est toujours disponible et quelles sont les options de livraison.

Cordialement`
        }
    }
} satisfies Record<Locale, unknown>