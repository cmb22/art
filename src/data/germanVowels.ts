export type GermanVowel = {
  id: string;
  ipa: string;
  audioUrl: string;
  example: string;
  sentence: string;
  group: "monophthong" | "diphthong";
  length: "long" | "short" | "neutral";
  column?: "front" | "front-rounded" | "central" | "back";
  row?: "close" | "near-close" | "close-mid" | "mid" | "open-mid" | "near-open" | "open";
};

export const germanVowels: GermanVowel[] = [
  {"id": "i-long", "ipa": "iː", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w01_1.wav", "example": "bieten", "sentence": "Wir bieten das auch online an.", "group": "monophthong", "length": "long", "column": "front", "row": "close"},
  {"id": "i-short", "ipa": "ɪ", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w06_1.wav", "example": "bitten", "sentence": "Ich wollte dich nur kurz bitten.", "group": "monophthong", "length": "short", "column": "front", "row": "near-close"},
  {"id": "y-long", "ipa": "yː", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w01_3.wav", "example": "fühlen", "sentence": "Ich kann das deutlich fühlen.", "group": "monophthong", "length": "long", "column": "front-rounded", "row": "close"},
  {"id": "y-short", "ipa": "ʏ", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w06_3.wav", "example": "füllen", "sentence": "Wir müssen das Glas noch füllen.", "group": "monophthong", "length": "short", "column": "front-rounded", "row": "near-close"},
  {"id": "e-long", "ipa": "eː", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w01_2.wav", "example": "Beet", "sentence": "Das Beet liegt direkt vor dem Haus.", "group": "monophthong", "length": "long", "column": "front", "row": "close-mid"},
  {"id": "oe-long", "ipa": "øː", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w01_4.wav", "example": "Höhle", "sentence": "Die Höhle liegt hinter dem Wald.", "group": "monophthong", "length": "long", "column": "front-rounded", "row": "close-mid"},
  {"id": "e-open-long", "ipa": "ɛː", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w02_1.wav", "example": "spät", "sentence": "Heute wird es etwas später.", "group": "monophthong", "length": "long", "column": "front", "row": "open-mid"},
  {"id": "e-short", "ipa": "ɛ", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w02_3-1.wav", "example": "Bett", "sentence": "Ich gehe gleich ins Bett.", "group": "monophthong", "length": "short", "column": "front", "row": "open-mid"},
  {"id": "oe-short", "ipa": "œ", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w06_5.wav", "example": "Hölle", "sentence": "Heute ist hier die Hölle los.", "group": "monophthong", "length": "short", "column": "front-rounded", "row": "open-mid"},
  {"id": "schwa", "ipa": "ə", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w04_1.wav", "example": "bitte", "sentence": "Komm bitte kurz her.", "group": "monophthong", "length": "neutral", "column": "central", "row": "mid"},
  {"id": "r-schwa", "ipa": "ɐ", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w04_2.wav", "example": "besser", "sentence": "Heute läuft es deutlich besser.", "group": "monophthong", "length": "neutral", "column": "central", "row": "near-open"},
  {"id": "u-long", "ipa": "uː", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w05_1.wav", "example": "gut", "sentence": "Das klingt wirklich gut.", "group": "monophthong", "length": "long", "column": "back", "row": "close"},
  {"id": "u-short", "ipa": "ʊ", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w06_2.wav", "example": "Mutter", "sentence": "Meine Mutter kommt morgen vorbei.", "group": "monophthong", "length": "short", "column": "back", "row": "near-close"},
  {"id": "o-long", "ipa": "oː", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w05_2.wav", "example": "Ofen", "sentence": "Der Ofen ist noch warm.", "group": "monophthong", "length": "long", "column": "back", "row": "close-mid"},
  {"id": "o-short", "ipa": "ɔ", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w06_4.wav", "example": "offen", "sentence": "Das Fenster ist noch offen.", "group": "monophthong", "length": "short", "column": "back", "row": "open-mid"},
  {"id": "a-long", "ipa": "aː", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w02_2-1.wav", "example": "Staat", "sentence": "Der Staat hat neue Regeln beschlossen.", "group": "monophthong", "length": "long", "column": "central", "row": "open"},
  {"id": "a-short", "ipa": "a", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w02_4-1.wav", "example": "Stadt", "sentence": "Die Stadt ist heute ziemlich voll.", "group": "monophthong", "length": "short", "column": "front", "row": "open"},
  {"id": "diphthong-ai", "ipa": "aɪ̯", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/11/w07_1.wav", "example": "mein", "sentence": "Das ist mein alter Mantel.", "group": "diphthong", "length": "neutral"},
  {"id": "diphthong-au", "ipa": "aʊ̯", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/11/w07_2.wav", "example": "Haus", "sentence": "Das Haus steht direkt am See.", "group": "diphthong", "length": "neutral"},
  {"id": "diphthong-oy", "ipa": "ɔʏ̯", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/11/w07_3.wav", "example": "heute", "sentence": "Heute habe ich keine Zeit.", "group": "diphthong", "length": "neutral"},
];
