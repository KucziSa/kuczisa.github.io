// dodaj do istniejącej tablicy `questions`:
let questions = [
  {
    numb: 101,
    question: "Energia do transportu przez pory jądrowe pochodzi z:",
    answer: "Hydrolizy GTP",
    options: [
      "ATP",
      "NADH",
      "FADH₂",
      "Hydrolizy GTP",
      "Protonów matriks"
    ]
  },
  {
    numb: 102,
    question: "Transport mRNA z jądra wymaga:",
    answer: "Eksportyny 1, RanGTP i NES",
    options: [
      "NLS",
      "Importyny",
      "Eksportyny 1, RanGTP i NES",
      "Kofliny",
      "H1"
    ]
  },
  {
    numb: 103,
    question: "Do jądra transportowane są:",
    answer: "Białka regulatorowe, enzymatyczne i strukturalne",
    options: [
      "Białka regulatorowe, enzymatyczne i strukturalne",
      "mRNA",
      "tRNA",
      "Podjednostki rybosomów",
      "rRNA przyłączony do białek"
    ]
  },
  {
    numb: 104,
    question: "Z jądra eksportowane są:",
    answer: "mRNA, tRNA, podjednostki rybosomów",
    options: [
      "Lamininy",
      "Nukleoporyny",
      "α-tubulina",
      "mRNA, tRNA, podjednostki rybosomów",
      "Enzymy RER"
    ]
  },
  {
    numb: 105,
    question: "Jąderko zawiera m.in.:",
    answer: "rDNA oraz nukleolinę",
    options: [
      "Kohezyny",
      "NPC",
      "Glikoproteiny lizosomalne",
      "Tonofilamenty",
      "rDNA oraz nukleolinę"
    ]
  },
  {
    numb: 106,
    question: "Organizator jąderka znajduje się na chromosomach:",
    answer: "13, 14, 15, 21, 22",
    options: [
      "1, 5, 6",
      "13, 14, 15, 21, 22",
      "2, 9, 11",
      "3, 7, 8",
      "16–20"
    ]
  },
  {
    numb: 107,
    question: "W jąderku zachodzi głównie:",
    answer: "Synteza rRNA",
    options: [
      "Replikacja DNA",
      "Splicing mRNA",
      "Synteza rRNA",
      "Synteza lipidów",
      "Fosforylacja białek jądrowych"
    ]
  },
  {
    numb: 108,
    question: "Włóknisty rdzeń jąderka odpowiada za:",
    answer: "Transkrypcję rRNA",
    options: [
      "Transkrypcję rRNA",
      "Transport mRNA",
      "Modyfikację histonów",
      "Usunięcie intronów",
      "Replikację DNA"
    ]
  },
  {
    numb: 109,
    question: "Ziarnista kora jąderka odpowiada za:",
    answer: "Składanie podjednostek rybosomów",
    options: [
      "Modyfikację białek histonowych",
      "Organizację chromatyny",
      "Składanie podjednostek rybosomów",
      "Depolimeryzację mikrotubul",
      "Syntezę tubuliny"
    ]
  },
  {
    numb: 110,
    question: "Eksport tRNA z jądra zależy od:",
    answer: "Eksportyny 1 i RanGTP",
    options: [
      "Lamin",
      "Importyny α",
      "Kinezyny",
      "Eksportyny 1 i RanGTP",
      "Białka TIM"
    ]
  },
  {
    numb: 111,
    question: "Jąderko zbudowane jest m.in. z:",
    answer: "Włóknistego rdzenia i ziarnistej kory",
    options: [
      "Tylko solenoidu i nukleoporyn",
      "Włóknistego rdzenia i ziarnistej kory",
      "Kohezyn i kondensyn",
      "Lamin A i B",
      "Centromerów"
    ]
  },
  {
    numb: 112,
    question: "Ziarnista kora jąderka odpowiada za:",
    answer: "Powstawanie prekursorów podjednostek rybosomów",
    options: [
      "Fosforylację histonów",
      "Tworzenie kinetochorów",
      "Powstawanie prekursorów podjednostek rybosomów",
      "Replikację DNA",
      "Rozpad NPC"
    ]
  },
  {
    numb: 113,
    question: "rDNA jąderka znajduje się na chromosomach:",
    answer: "13, 14, 15, 21, 22",
    options: [
      "1, 2, 3",
      "7, 8, 9",
      "10–12",
      "3, 5, 7",
      "13, 14, 15, 21, 22"
    ]
  },
  {
    numb: 114,
    question: "Region zawierający rDNA to:",
    answer: "Organizator jąderka",
    options: [
      "Organizator jąderka",
      "Kinetochor",
      "Telomer",
      "Solenoid",
      "Matrix jądrowa"
    ]
  },
  {
    numb: 115,
    question: "Nukleolina jest:",
    answer: "Białkiem jąderkowym fosforylowanym w mitozie",
    options: [
      "Histonem",
      "Nukleoporyną",
      "Enzymem lizosomalnym",
      "Białkiem jąderkowym fosforylowanym w mitozie",
      "Składnikiem laminy"
    ]
  },
  {
    numb: 116,
    question: "Fibryaryna uczestniczy w:",
    answer: "Obróbce rRNA",
    options: [
      "Transportowaniu mRNA",
      "Replikacji DNA",
      "Obróbce rRNA",
      "Degradacji histonów",
      "Budowie NPC"
    ]
  },
  {
    numb: 117,
    question: "W profazie chromatyna kondensuje:",
    answer: "Od włókna 30 nm do chromatyd metafazowych",
    options: [
      "Z jąderka do nukleoidu",
      "Z włókien 2 nm do solenoidu",
      "Do poziomu pętli chromatynowych",
      "Od włókna 30 nm do chromatyd metafazowych",
      "W strukturę rDNA"
    ]
  },
  {
    numb: 118,
    question: "Kondensacja chromatyny w profazie wymaga m.in.:",
    answer: "Fosforylacji histonu H1",
    options: [
      "Defosforylacji H1",
      "Fosforylacji histonu H1",
      "Ubikwitynacji H4",
      "Hydrolizy GDP",
      "Acetylacji H3"
    ]
  },
  {
    numb: 119,
    question: "Defosforylacja H3 w profazie:",
    answer: "Uczestniczy w kondensacji chromatyny",
    options: [
      "Rozluźnia chromatynę",
      "Aktywuje transkrypcję",
      "Uczestniczy w kondensacji chromatyny",
      "Otwiera solenoid",
      "Dezaktywuje kinetochor"
    ]
  },
  {
    numb: 120,
    question: "Rozpad otoczki jądrowej w profazie wynika z:",
    answer: "Fosforylacji lamin przez kinazę fazy M",
    options: [
      "Metylacji H3",
      "Fosforylacji lamin przez kinazę fazy M",
      "Depolimeryzacji tubuliny",
      "Aktywacji kohezyn",
      "Kaskady MAP-kinaz"
    ]
  },
  {
    numb: 121,
    question: "Zanik jąderka w profazie wynika głównie z:",
    answer: "Fosforylacji nukleoliny",
    options: [
      "Fosforylacji nukleoliny",
      "Defosforylacji H1",
      "Zwiększenia stężenia Ca²⁺",
      "Degradacji kondensyn",
      "Aktywacji kaspaz"
    ]
  },
  {
    numb: 122,
    question: "W profazie zachodzi reorganizacja:",
    answer: "ER i aparatu Golgiego",
    options: [
      "Centrosfery tylko",
      "Lizosomów",
      "Mitochondriów do ciałek środkowych",
      "ER i aparatu Golgiego",
      "Hematokrytów"
    ]
  },
  {
    numb: 123,
    question: "Powstawanie wrzeciona podziałowego wymaga:",
    answer: "Polimeryzacji mikrotubul z centrosomu",
    options: [
      "Polimeryzacji aktyny",
      "Fosforylacji poryn",
      "Rozpadu tonofilamentów",
      "Degradacji histonów",
      "Polimeryzacji mikrotubul z centrosomu"
    ]
  },
  {
    numb: 124,
    question: "Kinetochor powstaje z:",
    answer: "Kompleksów białkowych centromeru",
    options: [
      "Lamin A i B",
      "Nukleoporyn",
      "Kompleksów białkowych centromeru",
      "Cytokeratyn",
      "Filamentów pośrednich"
    ]
  },
  {
    numb: 125,
    question: "Mikrotubule wrzeciona łączą się z chromosomami poprzez:",
    answer: "Końce plus mikrotubul",
    options: [
      "Końce plus mikrotubul",
      "Końce minus mikrotubul",
      "Białka laminowe",
      "Nukleoporyny",
      "Desminę"
    ]
  },
  {
    numb: 126,
    question: "Cytokineza rozpoczyna się:",
    answer: "W anafazie",
    options: [
      "W profazie",
      "W prometafazie",
      "W metafazie",
      "W anafazie",
      "W interfazie"
    ]
  },
  {
    numb: 127,
    question: "Pierścień kurczliwy w cytokinezie składa się z:",
    answer: "Aktyny i miozyny",
    options: [
      "Tubuliny i dyneiny",
      "Aktyny i miozyny",
      "Desminy i keratyny",
      "Kinezyny i tubuliny",
      "Spektryny i wiliny"
    ]
  },
  {
    numb: 128,
    question: "Skurcz pierścienia kurczliwego aktywują:",
    answer: "GTPazy i fosfataza lekkich łańcuchów miozyny",
    options: [
      "GTPazy i fosfataza lekkich łańcuchów miozyny",
      "Ca²⁺ i kinaza miozynowa",
      "Kondensyny",
      "Kohezyny",
      "Tropomiozyna i ARP2/3"
    ]
  },
  {
    numb: 129,
    question: "Bruzda podziałowa pogłębia się dzięki:",
    answer: "Skurczowi pierścienia aktynowo-miozynowego",
    options: [
      "Aktywowaniu tubuliny",
      "Dezaktywacji lamin",
      "Kondensacji chromosomów",
      "Tworzeniu nowych centrów nukleacji",
      "Skurczowi pierścienia aktynowo-miozynowego"
    ]
  },
  {
    numb: 130,
    question: "Ciałko środkowe powstaje w:",
    answer: "Końcowej cytokinezie",
    options: [
      "Profazie",
      "Końcowej cytokinezie",
      "Metafazie",
      "Prometafazie",
      "Wczesnej anafazie"
    ]
  },
  {
    numb: 131,
    question: "Rozdział komórek potomnych kończy:",
    answer: "Zanikanie mostka cytoplazmatycznego",
    options: [
      "Zanik jąderka",
      "Degradacja kohezyn",
      "Rozluźnienie telomerów",
      "Zanikanie mostka cytoplazmatycznego",
      "Aktywacja lamin"
    ]
  },
  {
    numb: 132,
    question: "Cytokineza wymaga dostarczania błony komórkowej przez:",
    answer: "Pęcherzyki z aparatu Golgiego",
    options: [
      "Lizosomy",
      "Peroksysomy",
      "Pęcherzyki z aparatu Golgieго",
      "Klatrynę",
      "Proteasomy"
    ]
  },
  {
    numb: 133,
    question: "Mitochondria podczas cytokinezy:",
    answer: "Dzielą się niezależnie i są losowo rozdzielane",
    options: [
      "Dzielą się niezależnie i są losowo rozdzielane",
      "Zanikają i odtwarzają się po mitozie",
      "Tworzą wrzeciono",
      "Łączą się w syncytia",
      "Są degradowane przez lizosomy"
    ]
  },
  {
    numb: 134,
    question: "RER w trakcie mitozy:",
    answer: "Ulega fragmentacji po odłączeniu od otoczki jądrowej",
    options: [
      "Znika całkowicie",
      "Łączy się z centromerem",
      "Tworzy tonofilamenty",
      "Wytwarza wrzeciono podziałowe",
      "Ulega fragmentacji po odłączeniu od otoczki jądrowej"
    ]
  },
  {
    numb: 135,
    question: "Aparat Golgiego podczas mitozy:",
    answer: "Ulega fragmentacji lub łączy się z RER przejściowo",
    options: [
      "Pozostaje nienaruszony",
      "Tworzy tonofilament",
      "Łączy się z lamellipodium",
      "Ulega fragmentacji lub łączy się z RER przejściowo",
      "Ulega degradacji przez proteasomy"
    ]
  },
  {
    numb: 136,
    question: "Podstawową przyczyną zaniku otoczki jądrowej jest:",
    answer: "Fosforylacja lamin",
    options: [
      "Fosforylacja lamin",
      "Ubikwitynacja H1",
      "Aktywacja tubuliny β",
      "Fragmentacja ER",
      "Degradacja nukleoliny"
    ]
  },
  {
    numb: 137,
    question: "Wrzeciono podziałowe zaczyna się formować:",
    answer: "W profazie",
    options: [
      "W G1",
      "W telofazie",
      "W profazie",
      "W cytokinezie",
      "Po zakończeniu mitozy"
    ]
  },
  {
    numb: 138,
    question: "Przemodelowanie cytoszkieletu w profazie obejmuje:",
    answer: "Powstanie wrzeciona i reorganizację aktyny",
    options: [
      "Zanik lamin A",
      "Odbudowę NPC",
      "Tworzenie tonofilamentów",
      "Aktywację kinezyny",
      "Powstanie wrzeciona i reorganizację aktyny"
    ]
  },
  {
    numb: 139,
    question: "Główny regulator wejścia w mitozę to:",
    answer: "Kinaza fazy M (CDK1/cyklina B)",
    options: [
      "APO-1",
      "Kinaza fazy M (CDK1/cyklina B)",
      "ARP2/3",
      "Kohezyny",
      "Tropomiozyna"
    ]
  },
  {
    numb: 140,
    question: "Kinetochory łączą się z mikrotubulami dzięki:",
    answer: "Białkom motorowym i kompleksom Ndc80",
    options: [
      "Laminom",
      "Polimeryzacji GTP-GDP",
      "Białkom motorowym i kompleksom Ndc80",
      "Dezorganizacji mikrotubul",
      "Krążeniu pęcherzyków Golgiego"
    ]
  },
  {
    numb: 141,
    question: "Podział cytoplazmy kończy się:",
    answer: "Po zwężeniu pierścienia i rozdziale ciałka środkowego",
    options: [
      "Po zakończeniu profazy",
      "W końcu metafazy",
      "W fazie G2",
      "Po zwężeniu pierścienia i rozdziale ciałka środkowego",
      "Podczas syntezy laminy"
    ]
  },
  {
    numb: 142,
    question: "W profazie ER ulega reorganizacji, ponieważ:",
    answer: "Mikrotubule odłączają je od otoczki jądrowej",
    options: [
      "Mikrotubule odłączają je od otoczki jądrowej",
      "Aktyna blokuje jego pęcherzyki",
      "H1 jest fosforylowany",
      "Kohezyny są hydrolizowane",
      "Lizosomy wnikają do ER"
    ]
  },
  {
    numb: 143,
    question: "W profazie aparat Golgiego może:",
    answer: "Ulec fragmentacji i przejściowo łączyć się z RER",
    options: [
      "Całkowicie zaniknąć",
      "Zostać wchłonięty przez ER",
      "Ulec fragmentacji i przejściowo łączyć się z RER",
      "Zostać przeniesiony do jądra",
      "Zostać trwale zdezaktywowany"
    ]
  },
  {
    numb: 144,
    question: "Bruzda podziałowa formuje się:",
    answer: "W telofazie i cytokinezie",
    options: [
      "W profazie",
      "W metafazie",
      "W telofazie i cytokinezie",
      "W G1",
      "W fazie S"
    ]
  },
  {
    numb: 145,
    question: "Podczas cytokinezy aktywowane są:",
    answer: "GTPazy regulujące skurcz pierścienia",
    options: [
      "Kompleksy Ndc80",
      "GTPazy regulujące skurcz pierścienia",
      "Kohezyny",
      "Kondensyny",
      "Laminy A i B"
    ]
  },
  {
    numb: 146,
    question: "Końcowy etap oddzielania komórek zależy od:",
    answer: "Zaniku mostka cytoplazmatycznego",
    options: [
      "Transkrypcji rRNA",
      "Ubikwitynacji H3",
      "Replikacji centrosomu",
      "Degradacji błony komórkowej",
      "Zaniku mostka cytoplazmatycznego"
    ]
  },
  {
    numb: 147,
    question: "Podczas telofazy następuje:",
    answer: "Powstawanie pierścienia kurczliwego",
    options: [
      "Powstawanie pierścienia kurczliwego",
      "Condensacja chromatyny",
      "Fosforylacja H1",
      "Rozpad laminy",
      "Zanik mitochondriów"
    ]
  },
  {
    numb: 148,
    question: "Ciałko środkowe jest pozostałością po:",
    answer: "Zwężającym się pierścieniu kurczliwym",
    options: [
      "Kinetochorach",
      "Laminach jądrowych",
      "Zwężającym się pierścieniu kurczliwym",
      "Fragmentacji ER",
      "Solenoidzie"
    ]
  },
  {
    numb: 149,
    question: "Najwcześniejszym sygnałem wejścia w mitozę jest:",
    answer: "Aktywacja kinazy fazy M",
    options: [
      "Zanikanie jąderka",
      "Obrót centrosomu",
      "Rozdział chromatyd",
      "Aktywacja kinazy fazy M",
      "Polimeryzacja aktyny"
    ]
  },
  {
    numb: 150,
    question: "Mitochondria podczas mitozy:",
    answer: "Dzielą się niezależnie od podziału jądra",
    options: [
      "Łączą się w jedną sieć",
      "Dzielą się niezależnie od podziału jądra",
      "Ulegają degradacji",
      "Tworzą wrzeciono",
      "Wnikają do ER"
    ]
  }
];
