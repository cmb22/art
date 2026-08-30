export type GermanConsonant = {
  ipa: string;
  group: "Plosive" | "Frikative" | "Nasale" | "Liquide / Approximanten" | "Affrikaten";
  audioUrl: string;
};

export const germanConsonants: GermanConsonant[] = [
  {"ipa": "m", "group": "Nasale", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w03_1.wav"},
  {"ipa": "n", "group": "Nasale", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w03_2.wav"},
  {"ipa": "ŋ", "group": "Nasale", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w03_3.wav"},
  {"ipa": "l", "group": "Liquide / Approximanten", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/11/w08_1.wav"},
  {"ipa": "ʁ", "group": "Liquide / Approximanten", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/11/w08_2.wav"},
  {"ipa": "p", "group": "Plosive", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w09_1.wav"},
  {"ipa": "t", "group": "Plosive", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w09_2.wav"},
  {"ipa": "k", "group": "Plosive", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w09_3.wav"},
  {"ipa": "b", "group": "Plosive", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w10_1.wav"},
  {"ipa": "d", "group": "Plosive", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w10_2.wav"},
  {"ipa": "ɡ", "group": "Plosive", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w10_3.wav"},
  {"ipa": "f", "group": "Frikative", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w11_1.wav"},
  {"ipa": "v", "group": "Frikative", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w11_2.wav"},
  {"ipa": "s", "group": "Frikative", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w12_1.wav"},
  {"ipa": "z", "group": "Frikative", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w12_2.wav"},
  {"ipa": "ʃ", "group": "Frikative", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w12_3.wav"},
  {"ipa": "ç", "group": "Frikative", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w13_1.wav"},
  {"ipa": "x", "group": "Frikative", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w13_2.wav"},
  {"ipa": "h", "group": "Frikative", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w14_1.wav"},
  {"ipa": "j", "group": "Liquide / Approximanten", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w14_2.wav"},
  {"ipa": "t͡s", "group": "Affrikaten", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w15_1.wav"},
  {"ipa": "t͡ʃ", "group": "Affrikaten", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w15_2.wav"},
  {"ipa": "p͡f", "group": "Affrikaten", "audioUrl": "https://fit-aussprache.com/wp-content/uploads/2018/09/w15_3.wav"},
];
