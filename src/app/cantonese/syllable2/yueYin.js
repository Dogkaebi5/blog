const syllable = {
  initial: [
    "-",
    "b",
    "p",
    "m",
    "f",
    "d",
    "t",
    "n",
    "l",
    "g",
    "k",
    "ng",
    "h",
    "gw",
    "kw",
    "w",
    "z",
    "c",
    "s",
    "j",
  ],
  vowel: [
    "aa",
    "aai",
    "aau",
    "aam",
    "aan",
    "aang",
    "aap",
    "aat",
    "aak",
    "ai",
    "au",
    "am",
    "an",
    "ang",
    "ap",
    "at",
    "ak",
    "e",
    "ei",
    "eu",
    "em",
    "eng",
    "ep",
    "ek",
    "i",
    "iu",
    "im",
    "in",
    "ing",
    "ip",
    "it",
    "ik",
    "o",
    "oi",
    "ou",
    "on",
    "ong",
    "ot",
    "ok",
    "oe",
    "oeng",
    "oek",
    "eoi",
    "eon",
    "eot",
    "u",
    "ui",
    "un",
    "ung",
    "ut",
    "uk",
    "yu",
    "yun",
    "yut",
    "m",
    "ng",
  ],
  tone: ["1", "2", "3", "4", "5", "6"],
  yueYin: [
    "aa",
    "baa",
    "paa",
    "maa",
    "faa",
    "daa",
    "taa",
    "naa",
    "laa",
    "gaa",
    "kaa",
    "ngaa",
    "haa",
    "gwaa",
    "kwaa",
    "waa",
    "zaa",
    "caa",
    "saa",
    "jaa",
    "aai",
    "baai",
    "paai",
    "maai",
    "faai",
    "daai",
    "taai",
    "naai",
    "laai",
    "gaai",
    "kaai",
    "ngaai",
    "haai",
    "gwaai",
    "kwaai",
    "waai",
    "zaai",
    "caai",
    "saai",
    "jaai",
    "aau",
    "baau",
    "paau",
    "maau",
    "naau",
    "laau",
    "gaau",
    "kaau",
    "ngaau",
    "haau",
    "zaau",
    "caau",
    "saau",
    "aam",
    "daam",
    "taam",
    "naam",
    "laam",
    "gaam",
    "ngaam",
    "haam",
    "zaam",
    "caam",
    "saam",
    "aan",
    "baan",
    "paan",
    "maan",
    "faan",
    "daan",
    "taan",
    "naan",
    "laan",
    "gaan",
    "ngaan",
    "haan",
    "gwaan",
    "waan",
    "zaan",
    "caan",
    "saan",
    "aang",
    "baang",
    "paang",
    "maang",
    "laang",
    "gaang",
    "ngaang",
    "haang",
    "gwaang",
    "kwaang",
    "waang",
    "zaang",
    "caang",
    "saang",
    "aap",
    "daap",
    "taap",
    "naap",
    "laap",
    "gaap",
    "ngaap",
    "haap",
    "zaap",
    "caap",
    "saap",
    "aat",
    "baat",
    "maat",
    "faat",
    "daat",
    "taat",
    "naat",
    "laat",
    "gaat",
    "kaat",
    "ngaat",
    "gwaat",
    "waat",
    "zaat",
    "caat",
    "saat",
    "aak",
    "baak",
    "paak",
    "maak",
    "faak",
    "daak",
    "laak",
    "gaak",
    "kaak",
    "ngaak",
    "haak",
    "gwaak",
    "waak",
    "zaak",
    "caak",
    "saak",
    "jaak",
    "ai",
    "bai",
    "pai",
    "mai",
    "fai",
    "dai",
    "tai",
    "nai",
    "lai",
    "gai",
    "kai",
    "ngai",
    "hai",
    "gwai",
    "kwai",
    "wai",
    "zai",
    "cai",
    "sai",
    "jai",
    "au",
    "bau",
    "pau",
    "mau",
    "fau",
    "dau",
    "tau",
    "nau",
    "lau",
    "gau",
    "kau",
    "ngau",
    "hau",
    "zau",
    "cau",
    "sau",
    "jau",
    "am",
    "bam",
    "dam",
    "tam",
    "nam",
    "lam",
    "gam",
    "kam",
    "ngam",
    "ham",
    "zam",
    "cam",
    "sam",
    "jam",
    "ban",
    "pan",
    "man",
    "fan",
    "dan",
    "tan",
    "nan",
    "gan",
    "kan",
    "ngan",
    "han",
    "gwan",
    "kwan",
    "wan",
    "zan",
    "can",
    "san",
    "jan",
    "ang",
    "bang",
    "pang",
    "mang",
    "fang",
    "dang",
    "tang",
    "nang",
    "lang",
    "gang",
    "kang",
    "ngang",
    "hang",
    "gwang",
    "wang",
    "zang",
    "cang",
    "sang",
    "ap",
    "dap",
    "nap",
    "lap",
    "gap",
    "kap",
    "ngap",
    "hap",
    "zap",
    "cap",
    "sap",
    "jap",
    "bat",
    "pat",
    "mat",
    "fat",
    "dat",
    "nat",
    "lat",
    "gat",
    "kat",
    "ngat",
    "hat",
    "gwat",
    "wat",
    "zat",
    "cat",
    "sat",
    "jat",
    "ak",
    "bak",
    "mak",
    "dak",
    "nak",
    "lak",
    "ngak",
    "hak",
    "zak",
    "cak",
    "sak",
    "e",
    "be",
    "me",
    "fe",
    "de",
    "ne",
    "le",
    "ge",
    "ke",
    "ze",
    "ce",
    "se",
    "je",
    "ei",
    "bei",
    "pei",
    "mei",
    "fei",
    "dei",
    "nei",
    "lei",
    "gei",
    "kei",
    "hei",
    "sei",
    "deu",
    "lem",
    "beng",
    "peng",
    "meng",
    "deng",
    "teng",
    "leng",
    "geng",
    "heng",
    "zeng",
    "ceng",
    "seng",
    "jeng",
    "gep",
    "bek",
    "pek",
    "dek",
    "tek",
    "lek",
    "kek",
    "hek",
    "zek",
    "cek",
    "sek",
    "mi",
    "di",
    "ni",
    "li",
    "zi",
    "ci",
    "si",
    "ji",
    "biu",
    "piu",
    "miu",
    "fiu",
    "diu",
    "tiu",
    "niu",
    "liu",
    "giu",
    "kiu",
    "hiu",
    "ziu",
    "ciu",
    "siu",
    "jiu",
    "dim",
    "tim",
    "nim",
    "lim",
    "gim",
    "kim",
    "him",
    "zim",
    "cim",
    "sim",
    "jim",
    "bin",
    "pin",
    "min",
    "din",
    "tin",
    "nin",
    "lin",
    "gin",
    "kin",
    "hin",
    "zin",
    "cin",
    "sin",
    "jin",
    "bing",
    "ping",
    "ming",
    "fing",
    "ding",
    "ting",
    "ning",
    "ling",
    "ging",
    "king",
    "hing",
    "gwing",
    "wing",
    "zing",
    "cing",
    "sing",
    "jing",
    "dip",
    "tip",
    "nip",
    "lip",
    "gip",
    "hip",
    "zip",
    "cip",
    "sip",
    "jip",
    "bit",
    "pit",
    "mit",
    "dit",
    "tit",
    "lit",
    "git",
    "kit",
    "ngit",
    "hit",
    "zit",
    "cit",
    "sit",
    "jit",
    "bik",
    "pik",
    "mik",
    "dik",
    "tik",
    "nik",
    "lik",
    "gik",
    "kik",
    "hik",
    "gwik",
    "kwik",
    "wik",
    "zik",
    "cik",
    "sik",
    "jik",
    "o",
    "bo",
    "po",
    "mo",
    "fo",
    "do",
    "to",
    "no",
    "lo",
    "go",
    "ko",
    "ngo",
    "ho",
    "gwo",
    "wo",
    "zo",
    "co",
    "so",
    "jo",
    "oi",
    "poi",
    "doi",
    "toi",
    "noi",
    "loi",
    "goi",
    "koi",
    "ngoi",
    "hoi",
    "zoi",
    "coi",
    "soi",
    "ou",
    "bou",
    "pou",
    "mou",
    "dou",
    "tou",
    "nou",
    "lou",
    "gou",
    "ngou",
    "hou",
    "zou",
    "cou",
    "sou",
    "jou",
    "on",
    "gon",
    "ngon",
    "hon",
    "ong",
    "bong",
    "pong",
    "mong",
    "fong",
    "dong",
    "tong",
    "nong",
    "long",
    "gong",
    "kong",
    "ngong",
    "hong",
    "gwong",
    "kwong",
    "wong",
    "zong",
    "cong",
    "song",
    "got",
    "hot",
    "ok",
    "bok",
    "pok",
    "mok",
    "fok",
    "dok",
    "tok",
    "nok",
    "lok",
    "gok",
    "kok",
    "ngok",
    "hok",
    "gwok",
    "kwok",
    "wok",
    "zok",
    "cok",
    "sok",
    "doe",
    "toe",
    "goe",
    "koe",
    "hoe",
    "noeng",
    "loeng",
    "goeng",
    "koeng",
    "hoeng",
    "zoeng",
    "coeng",
    "soeng",
    "joeng",
    "doek",
    "loek",
    "goek",
    "koek",
    "zoek",
    "coek",
    "soek",
    "joek",
    "deoi",
    "teoi",
    "neoi",
    "leoi",
    "geoi",
    "keoi",
    "heoi",
    "zeoi",
    "ceoi",
    "seoi",
    "jeoi",
    "deon",
    "teon",
    "leon",
    "zeon",
    "ceon",
    "seon",
    "jeon",
    "deot",
    "neot",
    "leot",
    "zeot",
    "ceot",
    "seot",
    "fu",
    "gu",
    "ku",
    "wu",
    "bui",
    "pui",
    "mui",
    "fui",
    "gui",
    "kui",
    "wui",
    "bun",
    "pun",
    "mun",
    "fun",
    "gun",
    "wun",
    "cun",
    "ung",
    "bung",
    "pung",
    "mung",
    "fung",
    "dung",
    "tung",
    "nung",
    "lung",
    "gung",
    "kung",
    "ngung",
    "hung",
    "zung",
    "cung",
    "sung",
    "jung",
    "but",
    "put",
    "mut",
    "fut",
    "kut",
    "wut",
    "uk",
    "buk",
    "puk",
    "muk",
    "fuk",
    "duk",
    "tuk",
    "nuk",
    "luk",
    "guk",
    "kuk",
    "nguk",
    "huk",
    "zuk",
    "cuk",
    "suk",
    "juk",
    "zyu",
    "cyu",
    "syu",
    "jyu",
    "dyun",
    "tyun",
    "nyun",
    "lyun",
    "gyun",
    "kyun",
    "hyun",
    "zyun",
    "cyun",
    "syun",
    "jyun",
    "dyut",
    "tyut",
    "lyut",
    "gyut",
    "kyut",
    "hyut",
    "zyut",
    "cyut",
    "syut",
    "jyut",
    "m",
    "hm",
    "ng",
    "hng",
  ],
};

export default syllable;
