const syllable = {
  initial: {
    "-": {
      pronunciation: "없음",
      detail:
        "엄밀히는 성모(聲母)가 아닌 성모가 없을 때의 표기 방식이다. 운모 자체가 월음(粵音)인 경우이다",
    },
    b: { pronunciation: "ㅂ", detail: "" },
    p: { pronunciation: "ㅍ", detail: "" },
    m: {
      pronunciation: "ㅁ",
      detail:
        "성모(聲母)이면서 운모(韻母)인 발음이다. 성모로 사용할 때 [ㅁ] 발음이고, 운모일 때 [음] 발음이다",
    },
    f: {
      pronunciation: "f",
      detail:
        "한글에는 없는 발음이다. [ㅎ]과 [ㅍ]의 중간음으로 앞니로 밑 입술을 물면 나오는 발음이다.",
    },
    d: { pronunciation: "ㄷ", detail: "" },
    t: { pronunciation: "ㅌ", detail: "" },
    n: { pronunciation: "ㄴ", detail: "" },
    l: { pronunciation: "ㄹ", detail: "" },
    g: { pronunciation: "ㄱ", detail: "" },
    k: { pronunciation: "ㅋ", detail: "" },
    ng: {
      pronunciation: "으/응",
      detail:
        "한국어에 없는 발음이다. [으,은,응]의 중간 발음이다. 성모(聲母)와 운모(韻母)로 사용된다. 성모의 예시로 ngaa의 경우 빠르게 [아]로 들리지만, 실제로는 [으아]의 발음이다. 운모일 때는 [은]발음으로 사용된다.",
    },
    h: { pronunciation: "ㅎ", detail: "" },
    gw: { pronunciation: "구", detail: "" },
    kw: { pronunciation: "쿠", detail: "" },
    w: { pronunciation: "우", detail: "" },
    z: { pronunciation: "ㅈ", detail: "" },
    c: { pronunciation: "ㅊ", detail: "" },
    s: { pronunciation: "ㅅ", detail: "" },
    j: {
      pronunciation: "이",
      detail:
        "영어 발음 표기법과 같게 [j]는 [이] 발음이 난다. (Jacob이 제이콥이 아닌 야곱인 이유)",
    },
  },
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
  tone: {
    aa: [1, 2, 3, 4],
    baa: [1, 2, 3, 6],
    paa: [1, 3, 4],
    maa: [1, 2, 3, 4, 5, 6],
    faa: [1, 3, 4],
    daa: [1, 2],
    taa: [1],
    naa: [1, 4, 5, 6],
    laa: [1, 3],
    gaa: [1, 2, 3, 4],
    kaa: [1, 2, 3],
    ngaa: [1, 2, 3, 4, 5, 6],
    haa: [1, 2, 4, 5, 6],
    gwaa: [1, 2, 3],
    kwaa: [1, 2, 3],
    waa: [1, 2, 4, 5, 6],
    zaa: [1, 2, 3, 6],
    caa: [1, 3, 4],
    saa: [1, 2, 3, 4],
    jaa: [5, 6],
    aai: [1, 2, 3],
    baai: [1, 2, 3, 6],
    paai: [3, 4],
    maai: [4, 5, 6],
    faai: [3],
    daai: [1, 2, 3, 6],
    taai: [1, 3, 5],
    naai: [1, 4, 5, 6],
    laai: [1, 2, 3, 6],
    gaai: [1, 2, 3],
    kaai: [2],
    ngaai: [1, 3, 4, 6],
    haai: [1, 4, 5, 6],
    gwaai: [1, 2, 3],
    kwaai: [3],
    waai: [1, 2, 4, 6],
    zaai: [1, 3, 6],
    caai: [1, 2, 3, 4],
    saai: [1, 2, 3, 5],
    jaai: [2],
    aau: [1, 2, 3],
    baau: [1, 2, 3, 6],
    paau: [1, 2, 3, 4],
    maau: [1, 4, 5, 6],
    naau: [4, 5, 6],
    laau: [1, 4],
    gaau: [1, 2, 3],
    kaau: [3],
    ngaau: [1, 2, 3, 4, 5, 6],
    haau: [1, 2, 3, 4, 6],
    zaau: [1, 2, 3, 6],
    caau: [1, 2, 3, 4],
    saau: [1, 2, 3],
    aam: [1, 2],
    daam: [1, 2, 3, 6],
    taam: [1, 2, 3, 4, 5],
    naam: [1, 4, 5],
    laam: [2, 4, 5, 6],
    gaam: [1, 2, 3],
    ngaam: [4],
    haam: [1, 2, 3, 4, 5, 6],
    zaam: [1, 2, 3, 6],
    caam: [1, 2, 3, 4, 5],
    saam: [1, 2, 3],
    aan: [1, 2, 3],
    baan: [1, 2, 3, 6],
    paan: [1, 3],
    maan: [4, 5, 6],
    faan: [1, 2, 3, 4, 5, 6],
    daan: [1, 2, 3, 6],
    taan: [1, 2, 3, 4],
    naan: [2, 4, 5, 6],
    laan: [1, 4, 5, 6],
    gaan: [1, 2, 3],
    ngaan: [3, 4, 5, 6],
    haan: [1, 4, 5, 6],
    gwaan: [1, 3],
    waan: [1, 2, 4, 5, 6],
    zaan: [2, 3, 6],
    caan: [1, 2, 3, 4],
    saan: [1, 2, 3, 4],
    aang: [1],
    baang: [6],
    paang: [1, 4, 5],
    maang: [1, 4, 5, 6],
    laang: [5],
    gaang: [1, 3],
    ngaang: [1, 6],
    haang: [1, 4],
    gwaang: [2, 6],
    kwaang: [1, 3],
    waang: [4, 6],
    zaang: [1, 3, 6],
    caang: [1, 2, 3, 4],
    saang: [1, 2],
    aap: [3],
    daap: [1, 3, 6],
    taap: [3],
    naap: [6],
    laap: [3, 6],
    gaap: [3],
    ngaap: [3],
    haap: [3, 6],
    zaap: [3, 6],
    caap: [3],
    saap: [3, 6],
    aat: [3],
    baat: [3, 6],
    maat: [3, 6],
    faat: [3],
    daat: [3, 6],
    taat: [3],
    naat: [3, 6],
    laat: [6],
    gaat: [3],
    kaat: [1],
    ngaat: [3, 6],
    gwaat: [3],
    waat: [3, 6],
    zaat: [3, 6],
    caat: [3],
    saat: [3],
    aak: [1, 3],
    baak: [1, 3, 6],
    paak: [1, 3],
    maak: [1, 3, 6],
    faak: [3],
    daak: [1],
    laak: [6],
    gaak: [3],
    kaak: [1, 3],
    ngaak: [1, 3, 6],
    haak: [1, 3],
    gwaak: [3],
    waak: [6],
    zaak: [3, 6],
    caak: [1, 3, 6],
    saak: [3],
    jaak: [3],
    ai: [1, 2, 3],
    bai: [1, 3, 6],
    pai: [1, 3, 5],
    mai: [1, 3, 4, 5, 6],
    fai: [1, 2, 3, 6],
    dai: [1, 2, 3, 6],
    tai: [1, 2, 3, 4, 5, 6],
    nai: [4, 5, 6],
    lai: [2, 4, 5, 6],
    gai: [1, 2, 3, 6],
    kai: [1, 2, 3],
    ngai: [1, 2, 3, 4, 5, 6],
    hai: [1, 4, 5, 6],
    gwai: [1, 2, 3, 6],
    kwai: [1, 2, 3, 4, 5],
    wai: [1, 2, 3, 4, 5, 6],
    zai: [1, 2, 3, 6],
    cai: [1, 2, 3, 4, 5],
    sai: [1, 2, 3, 6],
    jai: [5, 6],
    au: [1, 2, 3],
    bau: [6],
    pau: [2, 3, 4],
    mau: [1, 3, 4, 5, 6],
    fau: [1, 2, 4, 6],
    dau: [1, 2, 3, 6],
    tau: [1, 2, 3, 4],
    nau: [1, 2, 4, 5, 6],
    lau: [1, 4, 5, 6],
    gau: [1, 2, 3, 6],
    kau: [1, 3, 4, 5],
    ngau: [1, 2, 3, 4, 5, 6],
    hau: [1, 2, 3, 4, 5, 6],
    zau: [1, 2, 3, 6],
    cau: [1, 2, 3, 4, 5],
    sau: [1, 2, 3, 4, 6],
    jau: [1, 2, 3, 4, 5, 6],
    am: [1, 2, 3],
    bam: [1],
    dam: [1, 2, 3, 4],
    tam: [5],
    nam: [2, 4, 5, 6],
    lam: [2, 4, 5, 6],
    gam: [1, 2, 3, 6],
    kam: [1, 4, 5],
    ngam: [1, 2, 3, 4, 6],
    ham: [1, 2, 3, 4, 5, 6],
    zam: [1, 2, 3, 6],
    cam: [1, 2, 3, 4, 5, 6],
    sam: [1, 2, 3, 4, 6],
    jam: [1, 2, 3, 4, 5, 6],
    ban: [1, 2, 3, 6],
    pan: [1, 3, 4, 5],
    man: [1, 2, 4, 5, 6],
    fan: [1, 2, 3, 4, 5, 6],
    dan: [1, 2, 3, 6],
    tan: [1, 3, 4],
    nan: [2],
    gan: [1, 2, 3, 6],
    kan: [4, 5],
    ngan: [1, 3, 4, 6],
    han: [2, 4, 6],
    gwan: [1, 2, 3, 6],
    kwan: [1, 2, 3, 4, 5],
    wan: [1, 2, 3, 4, 5, 6],
    zan: [1, 2, 3, 6],
    can: [1, 2, 3, 4],
    san: [1, 4, 5, 6],
    jan: [1, 2, 3, 4, 5, 6],
    ang: [1, 2],
    bang: [1, 2, 6],
    pang: [2, 4],
    mang: [2, 4],
    fang: [4],
    dang: [1, 2, 3, 6],
    tang: [4],
    nang: [4],
    lang: [1],
    gang: [1, 2, 3],
    kang: [2, 3],
    ngang: [1, 2],
    hang: [1, 2, 3, 4, 5, 6],
    gwang: [1],
    wang: [4],
    zang: [1, 3, 6],
    cang: [1, 3, 4],
    sang: [1, 3],
    ap: [1],
    dap: [1],
    nap: [1],
    lap: [1, 6],
    gap: [1, 3, 6],
    kap: [1, 6],
    ngap: [1, 6],
    hap: [1, 6],
    zap: [1, 6],
    cap: [1],
    sap: [1, 6],
    jap: [1, 6],
    bat: [1, 6],
    pat: [1],
    mat: [1, 6],
    fat: [1, 3, 6],
    dat: [1, 6],
    nat: [6],
    lat: [1],
    gat: [1, 6],
    kat: [1],
    ngat: [1, 6],
    hat: [1, 6],
    gwat: [1, 6],
    wat: [1, 6],
    zat: [1, 6],
    cat: [1],
    sat: [1, 6],
    jat: [1, 6],
    ak: [1],
    bak: [1],
    mak: [1, 3, 6],
    dak: [1, 6],
    nak: [6],
    lak: [6],
    ngak: [1],
    hak: [1],
    zak: [1],
    cak: [1],
    sak: [1],
    e: [6],
    be: [1],
    me: [1, 2, 5],
    fe: [1],
    de: [1, 2],
    ne: [1, 6],
    le: [1, 2, 4, 5],
    ge: [1],
    ke: [1, 4],
    ze: [1, 2, 3, 5, 6],
    ce: [1, 2, 3, 4],
    se: [1, 2, 3, 4, 5, 6],
    je: [4, 5, 6],
    ei: [6],
    bei: [1, 2, 3, 6],
    pei: [1, 2, 3, 4, 5],
    mei: [1, 2, 4, 5],
    fei: [1, 2, 4, 6],
    dei: [6],
    nei: [1, 2, 4, 5, 6],
    lei: [1, 4, 5, 6],
    gei: [1, 2, 3, 6],
    kei: [1, 2, 3, 4, 5],
    hei: [1, 2, 3],
    sei: [2, 3],
    deu: [6],
    lem: [2],
    beng: [2, 3, 6],
    peng: [1, 4],
    meng: [2, 4, 6],
    deng: [1, 2, 3, 6],
    teng: [1, 3, 5],
    leng: [1, 3, 4, 5],
    geng: [1, 2, 3],
    heng: [1],
    zeng: [1, 2, 3, 6],
    ceng: [1, 2, 4],
    seng: [1, 2, 3, 4],
    jeng: [2, 4],
    gep: [6],
    bek: [3],
    pek: [3, 6],
    dek: [3, 6],
    tek: [3],
    lek: [1, 6],
    kek: [6],
    hek: [3],
    zek: [3, 6],
    cek: [3],
    sek: [3, 6],
    mi: [1],
    di: [1],
    ni: [1, 4],
    li: [1],
    zi: [1, 2, 3, 6],
    ci: [1, 2, 3, 4, 5],
    si: [1, 2, 3, 4, 5, 6],
    ji: [1, 2, 3, 4, 5, 6],
    biu: [1, 2, 3, 6],
    piu: [1, 2, 3, 4, 5],
    miu: [1, 4, 5, 6],
    fiu: [3],
    diu: [1, 2, 3, 6],
    tiu: [1, 2, 3, 4, 5],
    niu: [1, 4, 5, 6],
    liu: [1, 2, 4, 5, 6],
    giu: [1, 2, 3, 6],
    kiu: [2, 3, 4, 5],
    hiu: [1, 2, 3],
    ziu: [1, 2, 3, 6],
    ciu: [1, 2, 3, 4, 5],
    siu: [1, 2, 3, 4, 6],
    jiu: [1, 2, 3, 4, 5, 6],
    dim: [1, 2, 3, 6],
    tim: [1, 2, 3, 4, 5],
    nim: [1, 2, 4, 5, 6],
    lim: [1, 2, 4, 5, 6],
    gim: [1, 2, 3, 6],
    kim: [4],
    him: [1, 2, 3],
    zim: [1, 2, 3, 6],
    cim: [1, 2, 3, 4, 5],
    sim: [1, 2, 3, 4, 6],
    jim: [1, 2, 3, 4, 5, 6],
    bin: [1, 2, 3, 6],
    pin: [1, 2, 3, 4, 5],
    min: [4, 5, 6],
    din: [1, 2, 3, 6],
    tin: [1, 2, 3, 4, 5],
    nin: [2, 4, 5, 6],
    lin: [2, 4, 5, 6],
    gin: [1, 2, 3, 6],
    kin: [3, 4],
    hin: [1, 2, 3],
    zin: [1, 2, 3, 6],
    cin: [1, 2, 4, 5],
    sin: [1, 2, 3, 4, 5, 6],
    jin: [1, 2, 3, 4, 5, 6],
    bing: [1, 2, 3, 6],
    ping: [1, 3, 4],
    ming: [4, 5, 6],
    fing: [],
    ding: [1, 2, 3, 6],
    ting: [1, 2, 3, 4, 5],
    ning: [1, 4, 6],
    ling: [1, 2, 4, 5, 6],
    ging: [1, 2, 3, 6],
    king: [1, 2, 4],
    hing: [1, 3, 5],
    gwing: [1, 2],
    wing: [1, 4, 5, 6],
    zing: [1, 2, 3, 6],
    cing: [1, 2, 3, 4],
    sing: [1, 2, 3, 4, 6],
    jing: [1, 2, 3, 4, 5, 6],
    dip: [3],
    tip: [3],
    nip: [1, 6],
    lip: [6],
    gip: [2, 3, 6],
    hip: [3, 6],
    zip: [3],
    cip: [3],
    sip: [3],
    jip: [3, 6],
    bit: [1, 3, 6],
    pit: [3],
    mit: [1, 6],
    dit: [1, 3, 6],
    tit: [3],
    lit: [3, 6],
    git: [3, 6],
    kit: [3],
    ngit: [6],
    hit: [3],
    zit: [1, 3, 6],
    cit: [3],
    sit: [3, 6],
    jit: [3, 6],
    bik: [1, 3],
    pik: [1],
    mik: [6],
    dik: [1, 6],
    tik: [1],
    nik: [1, 6],
    lik: [1, 6],
    gik: [1, 6],
    kik: [1],
    hik: [1],
    gwik: [1],
    kwik: [1],
    wik: [6],
    zik: [1, 3, 6],
    cik: [1, 3],
    sik: [1, 3, 6],
    jik: [1, 6],
    o: [1, 2, 4],
    bo: [1, 2, 3],
    po: [1, 2, 3, 4],
    mo: [1, 2, 4, 5, 6],
    fo: [1, 2, 3, 6],
    do: [1, 2, 3, 6],
    to: [1, 2, 3, 4, 5, 6],
    no: [1, 4, 5, 6],
    lo: [1, 2, 3, 4, 5, 6],
    go: [1, 2, 3],
    ko: [1],
    ngo: [1, 2, 4, 5, 6],
    ho: [1, 2, 3, 4, 6],
    gwo: [1, 2, 3],
    wo: [1, 2, 3, 4, 5, 6],
    zo: [2, 3, 6],
    co: [1, 2, 3, 4, 5],
    so: [1, 2, 3, 4],
    jo: [1],
    oi: [1, 2, 3],
    poi: [2],
    doi: [6],
    toi: [1, 2, 4, 5],
    noi: [5, 6],
    loi: [4, 6],
    goi: [1, 2, 3],
    koi: [2, 3],
    ngoi: [1, 2, 3, 4, 6],
    hoi: [1, 2, 4, 5, 6],
    zoi: [1, 2, 3, 6],
    coi: [1, 2, 3, 4, 6],
    soi: [1],
    ou: [1, 2, 3],
    bou: [1, 2, 3, 6],
    pou: [1, 2, 3, 4, 5],
    mou: [1, 2, 4, 5, 6],
    dou: [1, 2, 3, 6],
    tou: [1, 2, 3, 4, 5],
    nou: [4, 5, 6],
    lou: [1, 2, 4, 5, 6],
    gou: [1, 2, 3],
    ngou: [1, 2, 3, 4, 6],
    hou: [1, 2, 3, 4, 6],
    zou: [1, 2, 3, 6],
    cou: [1, 2, 3, 4, 5],
    sou: [1, 2, 3],
    jou: [1],
    on: [1, 3],
    gon: [1, 2, 3],
    ngon: [1, 3, 6],
    hon: [1, 2, 3, 4, 5, 6],
    ong: [1, 3],
    bong: [1, 2, 3, 6],
    pong: [1, 3, 4, 5],
    mong: [1, 4, 5, 6],
    fong: [1, 2, 3, 4],
    dong: [1, 2, 3, 6],
    tong: [1, 2, 3, 4],
    nong: [4, 5, 6],
    long: [1, 4, 5, 6],
    gong: [1, 2, 3, 6],
    kong: [1, 2, 3, 4],
    ngong: [1, 3, 4, 5, 6],
    hong: [1, 2, 3, 4, 5, 6],
    gwong: [1, 2, 3, 6],
    kwong: [3, 4],
    wong: [1, 2, 4, 5, 6],
    zong: [1, 2, 3, 6],
    cong: [1, 2, 3, 4],
    song: [1, 2, 3],
    got: [3],
    hot: [3, 6],
    ok: [1, 3],
    bok: [1, 3, 6],
    pok: [3],
    mok: [1, 3, 6],
    fok: [3],
    dok: [6],
    tok: [3],
    nok: [6],
    lok: [3, 6],
    gok: [3],
    kok: [1, 3],
    ngok: [3, 6],
    hok: [3, 6],
    gwok: [3],
    kwok: [3],
    wok: [3, 6],
    zok: [3, 6],
    cok: [3],
    sok: [3],
    doe: [2],
    toe: [3, 5],
    goe: [3],
    koe: [4],
    hoe: [1],
    noeng: [4],
    loeng: [2, 4, 5, 6],
    goeng: [1, 6],
    koeng: [3, 4, 5],
    hoeng: [1, 2, 3],
    zoeng: [1, 2, 3, 6],
    coeng: [1, 2, 3, 4],
    soeng: [1, 2, 3, 4, 5, 6],
    joeng: [1, 2, 3, 4, 5, 6],
    doek: [3],
    loek: [6],
    goek: [3],
    koek: [3, 6],
    zoek: [3, 6],
    coek: [3],
    soek: [3],
    joek: [3, 6],
    deoi: [1, 3, 6],
    teoi: [1, 2, 3, 4],
    neoi: [5, 6],
    leoi: [3, 4, 5, 6],
    geoi: [1, 2, 3, 6],
    keoi: [1, 4, 5],
    heoi: [1, 2, 3, 5],
    zeoi: [1, 2, 3, 6],
    ceoi: [1, 2, 3, 4],
    seoi: [1, 2, 3, 4, 5, 6],
    jeoi: [1, 4, 5, 6],
    deon: [1, 6],
    teon: [1, 2, 3, 4, 5],
    leon: [2, 4, 5, 6],
    zeon: [1, 2, 3, 6],
    ceon: [1, 2, 4],
    seon: [1, 2, 3, 4, 5, 6],
    jeon: [6],
    deot: [1],
    neot: [6],
    leot: [6],
    zeot: [1],
    ceot: [1],
    seot: [1, 6],
    fu: [1, 2, 3, 4, 5, 6],
    gu: [1, 2, 3],
    ku: [1],
    wu: [1, 2, 3, 4, 6],
    bui: [1, 3, 6],
    pui: [1, 3, 4, 5],
    mui: [4, 5, 6],
    fui: [1, 2, 3],
    gui: [2, 6],
    kui: [2, 3],
    wui: [1, 2, 3, 4, 5, 6],
    bun: [1, 2, 3, 6],
    pun: [1, 2, 3, 4, 5, 6],
    mun: [1, 4, 5, 6],
    fun: [1, 2],
    gun: [1, 2, 3],
    wun: [1, 2, 4, 5, 6],
    cun: [3],
    ung: [2, 3],
    bung: [2, 6],
    pung: [1, 2, 3, 4],
    mung: [1, 2, 4, 5, 6],
    fung: [1, 2, 3, 4, 6],
    dung: [1, 2, 3, 6],
    tung: [1, 2, 3, 4],
    nung: [4, 5],
    lung: [1, 4, 5, 6],
    gung: [1, 2, 3, 6],
    kung: [4],
    ngung: [1, 3],
    hung: [1, 2, 3, 4, 6],
    zung: [1, 2, 3, 6],
    cung: [1, 2, 3, 4, 5, 6],
    sung: [1, 2, 3, 4],
    jung: [1, 2, 3, 4, 5, 6],
    but: [3, 6],
    put: [3],
    mut: [3, 6],
    fut: [3],
    kut: [3],
    wut: [6],
    uk: [1],
    buk: [1, 6],
    puk: [1],
    muk: [6],
    fuk: [1, 6],
    duk: [1, 6],
    tuk: [1],
    nuk: [6],
    luk: [1, 6],
    guk: [1, 6],
    kuk: [1],
    nguk: [1],
    huk: [1, 6],
    zuk: [1, 3, 6],
    cuk: [1, 3],
    suk: [1, 3, 6],
    juk: [1, 6],
    zyu: [1, 2, 3, 6],
    cyu: [1, 2, 3, 4, 5],
    syu: [1, 2, 3, 4, 5, 6],
    jyu: [1, 2, 3, 4, 5, 6],
    dyun: [1, 2, 3, 6],
    tyun: [1, 4, 5],
    nyun: [5, 6],
    lyun: [1, 2, 4, 5, 6],
    gyun: [1, 2, 3, 6],
    kyun: [4],
    hyun: [1, 2, 3],
    zyun: [2, 3, 6],
    cyun: [1, 2, 3, 4, 5],
    syun: [1, 2, 3, 4, 5, 6],
    jyun: [1, 2, 3, 4, 5, 6],
    dyut: [6],
    tyut: [3],
    lyut: [3, 6],
    gyut: [3, 6],
    kyut: [3],
    hyut: [3],
    zyut: [3, 6],
    cyut: [3],
    syut: [3],
    jyut: [3, 6],
    m: [2, 4, 6],
    hm: [1],
    ng: [2, 4, 5, 6],
    hng: [6],
  },
};

export default syllable;