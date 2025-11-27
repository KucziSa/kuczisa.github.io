// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Mikrofilamenty aktynowe umożliwiają komórkom:",
    answer: "Ruch i kurczenie się dzięki miozynom",
    options: [
      "Syntezę DNA",
      "Tworzenie mikrotubul",
      "Rozpad organelli",
      "Ruch i kurczenie się dzięki miozynom",
      "Tworzenie błony jądrowej"
    ]
  },
  {
    numb: 2,
    question: "Filamenty aktynowe mają:",
    answer: "Polarność + i –",
    options: [
      "Polarność + i –",
      "Tylko koniec +",
      "Tylko koniec –",
      "Brak polarności",
      "Symetrię osiową bez biegunów"
    ]
  },
  {
    numb: 3,
    question: "Monomer aktyny zawiera miejsce wiążące:",
    answer: "ATP",
    options: [
      "GTP",
      "GDP",
      "ATP",
      "NADH",
      "FAD"
    ]
  },
  {
    numb: 4,
    question: "Aktyna F to:",
    answer: "Dwa protofilamenty skręcone jak alfa-helisy",
    options: [
      "Pojedyncza helisa",
      "Dwa protofilamenty skręcone jak alfa-helisy",
      "Wiązka mikrotubul",
      "Jednostka miozyny",
      "Forma magazynowa aktyny"
    ]
  },
  {
    numb: 5,
    question: "Polimeryzacja aktyny F wymaga obecności:",
    answer: "K⁺ i Mg²⁺",
    options: [
      "Ca²⁺ i Fe²⁺",
      "Zn²⁺ i Mg²⁺",
      "K⁺ i Mg²⁺",
      "Cu²⁺ i Ca²⁺",
      "Mn²⁺ i ATP"
    ]
  },
  {
    numb: 6,
    question: "Centrum nukleacji filamentów aktynowych tworzą:",
    answer: "Formina i Arp2/3",
    options: [
      "Tropomiozyna",
      "Nebulina",
      "Spektryna",
      "Fimbryna",
      "Formina i Arp2/3"
    ]
  },
  {
    numb: 7,
    question: "Białkiem rozcinającym filamenty aktyny jest:",
    answer: "Gelsolina",
    options: [
      "Gelsolina",
      "Fimbryna",
      "Nebulina",
      "Profilina",
      "Spektryna"
    ]
  },
  {
    numb: 8,
    question: "Białko tworzące wiązania krzyżowe między filamentami leżącymi pod kątem to:",
    answer: "Filamina",
    options: [
      "Fimbryna",
      "Alfa-aktynina",
      "Filamina",
      "Wilina",
      "Nebulina"
    ]
  },
  {
    numb: 9,
    question: "Fimbryna łączy:",
    answer: "Dwa włókna aktyny równolegle i bardzo blisko",
    options: [
      "Dwie aktyny daleko od siebie",
      "Dwie aktyny pod kątem",
      "Aktynę z mikrotubulą",
      "Dwa włókna aktyny równolegle i bardzo blisko",
      "Aktynę z miozyną"
    ]
  },
  {
    numb: 10,
    question: "Alfa-aktynina łączy filamenty aktyny:",
    answer: "W większej odległości – tworząc układ luźniejszy",
    options: [
      "Bardzo blisko siebie",
      "W większej odległości – tworząc układ luźniejszy",
      "Pod kątem prostym",
      "W sieć trójwymiarową",
      "Tylko z miozyną"
    ]
  },
  {
    numb: 11,
    question: "Spektryna łączy aktyny:",
    answer: "Daleko od siebie",
    options: [
      "Równolegle blisko",
      "Pod kątem 90°",
      "Daleko od siebie",
      "Krzyżowo jak filamina",
      "Tylko z błoną komórkową"
    ]
  },
  {
    numb: 12,
    question: "Filamina łączy aktyny:",
    answer: "Pod kątem, tworząc sieć",
    options: [
      "Równolegle",
      "Bardzo blisko",
      "W ciasne pęczki",
      "W wiązkę miozyny",
      "Pod kątem, tworząc sieć"
    ]
  },
  {
    numb: 13,
    question: "Białka wiążące aktynę to m.in.:",
    answer: "Fimbryna, alfa-aktynina, wilina",
    options: [
      "Fimbryna, alfa-aktynina, wilina",
      "Tylko gelsolina",
      "Tropomiozyna i miozyna",
      "Tubulina i tau",
      "Nebulina i keratyna"
    ]
  },
  {
    numb: 14,
    question: "Białkiem motorycznym aktyny jest:",
    answer: "Miozyna",
    options: [
      "Spektryna",
      "Fimbryna",
      "Miozyna",
      "Arp2/3",
      "Nebulina"
    ]
  },
  {
    numb: 15,
    question: "Tropomiozyna pełni funkcję:",
    answer: "Stabilizacji filamentów aktyny",
    options: [
      "Motoryczną",
      "Rozcinającą filamenty",
      "Nukleacji",
      "Stabilizacji filamentów aktyny",
      "Przyspieszenia polimeryzacji"
    ]
  },
  {
    numb: 16,
    question: "Nebulina wiąże się z aktyną:",
    answer: "Bocznie stabilizując filament",
    options: [
      "Wyłącznie w filopodium",
      "Bocznie stabilizując filament",
      "Tylko w lamellipodium",
      "Tylko w obecności miozyny",
      "Tylko w mięśniach gładkich"
    ]
  },
  {
    numb: 17,
    question: "Cytochalazyna:",
    answer: "Blokuje polimeryzację i rozpad aktyny F",
    options: [
      "Blokuje polimeryzację i rozpad aktyny F",
      "Stabilizuje filamenty",
      "Przyspiesza rozpad",
      "Łączy aktynę z błoną komórkową",
      "Aktywuje ARP2/3"
    ]
  },
  {
    numb: 18,
    question: "Kofilina:",
    answer: "Przyspiesza rozpad aktyny",
    options: [
      "Stabilizuje aktynę",
      "Blokuje depolimeryzację",
      "Przyspiesza rozpad aktyny",
      "Wiąże miozynę",
      "Tworzy mostki poprzeczne"
    ]
  },
  {
    numb: 19,
    question: "Tymozyna:",
    answer: "Zapobiega polimeryzacji aktyny",
    options: [
      "Rozcina aktynę",
      "Łączy aktynę z błoną",
      "Stabilizuje aktynę F",
      "Zapobiega polimeryzacji aktyny",
      "Tworzy wiązania krzyżowe"
    ]
  },
  {
    numb: 20,
    question: "Profilina:",
    answer: "Przyspiesza elongację filamentów",
    options: [
      "Przyspiesza elongację filamentów",
      "Blokuje rozpad",
      "Stabilizuje filamenty",
      "Tworzy sieć aktyny",
      "Tworzy wiązania krzyżowe"
    ]
  },
  {
    numb: 21,
    question: "Lamellipodium to:",
    answer: "Cienka, płytkowata, dynamiczna wypustka komórkowa",
    options: [
      "Gruby pęczek mikrotubul",
      "Domena RER",
      "Obszar bogaty w keratynę",
      "Pęcherzyk sekrecyjny",
      "Cienka, płytkowata, dynamiczna wypustka komórkowa"
    ]
  },
  {
    numb: 22,
    question: "Filopodium to:",
    answer: "Cienka, sztywna wypustka z równoległymi włóknami aktyny",
    options: [
      "Płaska sieć mikrotubul",
      "Miejsce degradacji białek",
      "Cienka, sztywna wypustka z równoległymi włóknami aktyny",
      "Struktura mitochondrium",
      "Kanał wapniowy"
    ]
  },
  {
    numb: 23,
    question: "Filamenty aktynowe w lamellipodium tworzą układ:",
    answer: "Rozgałęziony dzięki ARP2/3",
    options: [
      "Równoległy, ściśle upakowany",
      "Rozgałęziony dzięki ARP2/3",
      "Spiralny",
      "Stabilizowany tropomiozyną",
      "Ułożony pod kątem prostym przez spektrynę"
    ]
  },
  {
    numb: 24,
    question: "Formina odpowiada za:",
    answer: "Nukleację i elongację filamentów aktyny",
    options: [
      "Nukleację i elongację filamentów aktyny",
      "Rozcinanie filamentów",
      "Łączenie aktyny pod kątem",
      "Transport aktyny do jądra",
      "Depolimeryzację aktyny"
    ]
  },
  {
    numb: 25,
    question: "Kompleks ARP2/3 odpowiada za:",
    answer: "Tworzenie rozgałęzień aktyny",
    options: [
      "Tworzenie wiązań miozyny",
      "Stabilizację filamentów",
      "Tworzenie rozgałęzień aktyny",
      "Zwijanie filamentów",
      "Degradację aktyny"
    ]
  },
  {
    numb: 26,
    question: "Chodzenie komórki (pełzanie) zależy głównie od:",
    answer: "Dynamiki mikrofilamentów aktynowych",
    options: [
      "Mikrotubul",
      "Filamentów pośrednich",
      "Białek SNARE",
      "Dynamiki mikrofilamentów aktynowych",
      "Mitochondriów"
    ]
  },
  {
    numb: 27,
    question: "Filopodium zawiera włókna aktyny ułożone:",
    answer: "Równolegle",
    options: [
      "Równolegle",
      "Pod kątem",
      "W sieć trójwymiarową",
      "W układzie rozgałęzionym",
      "Z udziałem tylko gelsoliny"
    ]
  },
  {
    numb: 28,
    question: "Spektryna jest ważna dla:",
    answer: "Odległego utrzymania dwóch filamentów aktyny",
    options: [
      "Rozcinania filamentów",
      "Stabilizacji filopodium",
      "Odległego utrzymania dwóch filamentów aktyny",
      "Depolimeryzacji aktyny",
      "Transportu Ca²⁺"
    ]
  },
  {
    numb: 29,
    question: "Filamina umożliwia formowanie:",
    answer: "Sieci aktynowych",
    options: [
      "Pęczków równoległych",
      "Włókien miozyny",
      "Płaskich błon",
      "Równoległych mostków",
      "Sieci aktynowych"
    ]
  },
  {
    numb: 30,
    question: "Ruch makrofagów z użyciem lamellipodiów i filopodiów zależy od:",
    answer: "Aktywnej polimeryzacji i depolimeryzacji aktyny",
    options: [
      "Stabilnych mikrotubul",
      "Aktywnej polimeryzacji i depolimeryzacji aktyny",
      "Uwalniania Ca²⁺",
      "Ruchu mitochondriów",
      "Endocytozy"
    ]
  },
  {
    numb: 31,
    question: "Filamenty pośrednie charakteryzują się:",
    answer: "Dużą odpornością na czynniki fizyczne i chemiczne",
    options: [
      "Bardzo szybkim obrotem metabolicznym",
      "Udziałem w transkrypcji",
      "Dużą odpornością na czynniki fizyczne i chemiczne",
      "Brakiem białkowej budowy",
      "Obecnością tubuliny"
    ]
  },
  {
    numb: 32,
    question: "Cytokeratyny występują głównie w:",
    answer: "Komórkach nabłonkowych",
    options: [
      "Komórkach nabłonkowych",
      "Fibroblastach",
      "Neuronach",
      "Komórkach mięśniowych",
      "Hepatocytach"
    ]
  },
  {
    numb: 33,
    question: "Tonofilamenty to:",
    answer: "Filamenty cytokeratynowe w nabłonkach",
    options: [
      "Filamenty mięśniowe",
      "Grzebienie mitochondrialne",
      "Filamenty aktynowe",
      "Filamenty cytokeratynowe w nabłonkach",
      "Polimery laminy"
    ]
  },
  {
    numb: 34,
    question: "Keratyny włosów, paznokci i rogów należą do:",
    answer: "Cytokeratyn",
    options: [
      "Laminy",
      "Cytokeratyn",
      "Neurofilamentów",
      "Mikrotubul",
      "Kompleksów Arp2/3"
    ]
  },
  {
    numb: 35,
    question: "Filamenty wimentynowe są typowe dla:",
    answer: "Tkanki łącznej i komórek mezenchymalnych",
    options: [
      "Nabłonków",
      "Neuronów",
      "Tkanki łącznej i komórek mezenchymalnych",
      "Mięśni gładkich tylko",
      "Hepatocytów"
    ]
  },
  {
    numb: 36,
    question: "Wimentyna występuje m.in. w:",
    answer: "Komórkach śródbłonka i fibroblastach",
    options: [
      "Keratynocytach",
      "Motoneuronach",
      "Komórkach rzęskowych",
      "Komórkach śródbłonka i fibroblastach",
      "Komórkach naskórka"
    ]
  },
  {
    numb: 37,
    question: "Desmina występuje w:",
    answer: "Komórkach mięśniowych",
    options: [
      "Keratynocytach",
      "Komórkach mięśniowych",
      "Astrocytach",
      "Hepatocytach",
      "Komórkach Sertoliego"
    ]
  },
  {
    numb: 38,
    question: "GFAP jest markerem:",
    answer: "Astrocytów",
    options: [
      "Neuronów piramidowych",
      "Erytrocytów",
      "Astrocytów",
      "Komórek nabłonkowych",
      "Komórek mięśniowych"
    ]
  },
  {
    numb: 39,
    question: "Neurofilamenty występują w:",
    answer: "Neuronach",
    options: [
      "Neuronach",
      "Fibroblastach",
      "Chondrocytach",
      "Mięśniu sercowym",
      "Oocytach"
    ]
  },
  {
    numb: 40,
    question: "Plektyna występuje m.in. w:",
    answer: "Aksonach i włóknach mięśni szkieletowych",
    options: [
      "Nabłonkach",
      "Hepatocytach",
      "Lamellipodium",
      "Aksonach i włóknach mięśni szkieletowych",
      "Śródbłonku"
    ]
  },
  {
    numb: 41,
    question: "Peryferyna jest charakterystyczna dla:",
    answer: "Komórek obwodowego układu nerwowego",
    options: [
      "Astrocytów",
      "Fibroblastów",
      "Mięśni gładkich",
      "Keratynocytów",
      "Komórek obwodowego układu nerwowego"
    ]
  },
  {
    numb: 42,
    question: "Laminy jądrowe budują:",
    answer: "Blaszkę włóknistą jądra",
    options: [
      "Siateczkę Golgiego",
      "Blaszkę włóknistą jądra",
      "Aparat transkrypcyjny",
      "Pory jądrowe",
      "Centrosom"
    ]
  },
  {
    numb: 43,
    question: "Blaszka jądrowa stanowi miejsce przyczepu:",
    answer: "Nici chromosomów interfazalnych",
    options: [
      "Nici chromosomów interfazalnych",
      "Mikrotubul wrzeciona",
      "Fibryli jąderkowych",
      "Centromerów w mitozie",
      "Rybosomów cytoplazmatycznych"
    ]
  },
  {
    numb: 44,
    question: "Do rodziny filamentów pośrednich NIE należy:",
    answer: "Miozyna",
    options: [
      "Cytokeratyna",
      "Wimentyna",
      "Desmina",
      "Miozyna",
      "GFAP"
    ]
  },
  {
    numb: 45,
    question: "Wimentynopodobne filamenty obejmują:",
    answer: "Wimentynę, desminę, GFAP",
    options: [
      "Peryferynę i keratynę",
      "Laminy i neurofilamenty",
      "Wimentynę, desminę, GFAP",
      "Fimbrynę i spektrynę",
      "Tropomiozynę i miozynę"
    ]
  },
  {
    numb: 46,
    question: "Neurofilamenty składają się z podjednostek:",
    answer: "Lekkich, średnich i ciężkich",
    options: [
      "Lekkich, średnich i ciężkich",
      "Alfa i beta",
      "GTP-zależnych monomerów",
      "Tubuliny",
      "Profiliny i tymozyny"
    ]
  },
  {
    numb: 47,
    question: "Filamenty pośrednie różnią się od mikrofilamentów tym, że:",
    answer: "Są bardziej wytrzymałe mechanicznie",
    options: [
      "Mają zdolność aktywnej polimeryzacji",
      "Zawierają ATP w monomerze",
      "Tworzą biegunowe struktury",
      "Są bardziej wytrzymałe mechanicznie",
      "Uczestniczą w transporcie organelli"
    ]
  },
  {
    numb: 48,
    question: "Keratyny w komórkach nabłonkowych tworzą:",
    answer: "Tonofilamenty",
    options: [
      "Mikrotubule",
      "Tonofilamenty",
      "Filopodia",
      "Mikrokosmki",
      "Neurotubule"
    ]
  },
  {
    numb: 49,
    question: "Laminy jądrowe uczestniczą w:",
    answer: "Stabilizacji otoczki jądrowej",
    options: [
      "Tworzeniu mikrotubul",
      "Syntezie mRNA",
      "Degradacji błony jądrowej",
      "Przemieszczaniu mitochondriów",
      "Stabilizacji otoczki jądrowej"
    ]
  },
  {
    numb: 50,
    question: "Wimentyna jest markerem komórek:",
    answer: "Pochodzenia mezenchymalnego",
    options: [
      "Nabłonka wielowarstwowego",
      "Neuronów",
      "Pochodzenia mezenchymalnego",
      "Mięśni prążkowanych",
      "Wątroby"
    ]
  },
  {
    numb: 51,
    question: "Filamenty pośrednie w neuronach to głównie:",
    answer: "Neurofilamenty",
    options: [
      "Neurofilamenty",
      "Keratyny",
      "Desmina",
      "GFAP",
      "Tubulina"
    ]
  },
  {
    numb: 52,
    question: "Filamenty pośrednie w komórkach nabłonkowych to:",
    answer: "Cytokeratyny",
    options: [
      "Desmina",
      "GFAP",
      "Wimentyna",
      "Cytokeratyny",
      "Peryferyna"
    ]
  },
  {
    numb: 53,
    question: "GFAP należy do typu filamentów:",
    answer: "Wimentynopodobnych",
    options: [
      "Keratynowych",
      "Wimentynopodobnych",
      "Laminowych",
      "Miozynowych",
      "Neurofilamentów"
    ]
  },
  {
    numb: 54,
    question: "Mutacje w laminach mogą prowadzić do:",
    answer: "Laminopatii i niestabilności jądra",
    options: [
      "Nadmiernej produkcji ATP",
      "Zwiększenia ruchliwości komórki",
      "Laminopatii i niestabilności jądra",
      "Zwiększenia długości telomerów",
      "Zaburzeń transportu aksonalnego"
    ]
  },
  {
    numb: 55,
    question: "Peryferyna uczestniczy głównie w utrzymaniu struktury:",
    answer: "Neuronów obwodowych",
    options: [
      "Nabłonków",
      "Astrocytów",
      "Fibroblastów",
      "Mięśni szkieletowych",
      "Neuronów obwodowych"
    ]
  },
  {
    numb: 56,
    question: "Mikrotubule zbudowane są z:",
    answer: "13 protofilamentów z tubuliny α i β",
    options: [
      "9 protofilamentów z aktyny",
      "13 protofilamentów z tubuliny α i β",
      "13 protofilamentów z keratyny i desminy",
      "9 + 2 protofilamentów neurofilamentów",
      "6 protofilamentów z kinezyny"
    ]
  },
  {
    numb: 57,
    question: "Podstawową jednostką budulcową protofilamentu jest:",
    answer: "Dimer tubuliny αβ",
    options: [
      "Monomer tubuliny α",
      "Monomer tubuliny β",
      "Dimer tubuliny αβ",
      "Trimer tubuliny",
      "Fragment GTP"
    ]
  },
  {
    numb: 58,
    question: "Koniec minus mikrotubuli jest związany z:",
    answer: "Tubuliną α",
    options: [
      "Tubuliną α",
      "Tubuliną β",
      "Kinesyną",
      "Dyneiną",
      "ARP2/3"
    ]
  },
  {
    numb: 59,
    question: "Koniec plus mikrotubuli jest związany z:",
    answer: "Tubuliną β",
    options: [
      "Tubuliną α",
      "Tubuliną β",
      "Miozyną",
      "Laminą",
      "Desminą"
    ]
  },
  {
    numb: 60,
    question: "Mikrotubule pełnią funkcję:",
    answer: "Umożliwienia transportu wewnątrzkomórkowego",
    options: [
      "Stabilizowania błony jądrowej",
      "Tworzenia sieci keratynowej",
      "Transportu Ca²⁺ do mitochondriów",
      "Umożliwienia transportu wewnątrzkomórkowego",
      "Transkrypcji DNA"
    ]
  },
  {
    numb: 61,
    question: "Transport wzdłuż mikrotubul odbywa się dzięki:",
    answer: "Kinezynie i dyneinie",
    options: [
      "Miozynie",
      "Tropomiozynie",
      "Kinezynie i dyneinie",
      "Gelsolinie",
      "Peryferynie"
    ]
  },
  {
    numb: 62,
    question: "Kinesyna przesuwa ładunki najczęściej w kierunku:",
    answer: "Końca plus",
    options: [
      "Końca plus",
      "Końca minus",
      "Centrum centrosomu",
      "Błony jądrowej",
      "Aparatu Golgiego"
    ]
  },
  {
    numb: 63,
    question: "Dyneina transportuje ładunki zazwyczaj w kierunku:",
    answer: "Końca minus",
    options: [
      "Końca plus",
      "Końca minus",
      "Jądra",
      "Retikulum endoplazmatycznego",
      "Cytoplazmy obwodowej"
    ]
  },
  {
    numb: 64,
    question: "Miejscem nukleacji mikrotubul w komórce jest:",
    answer: "Centrosom",
    options: [
      "SER",
      "RER",
      "Aparat Golgiego",
      "Centrosom",
      "Lizosom"
    ]
  },
  {
    numb: 65,
    question: "Białkiem nukleacji mikrotubul w centrosomie jest:",
    answer: "Tubulina γ",
    options: [
      "Tubulina α",
      "Tubulina β",
      "Desmina",
      "Tonofilament",
      "Tubulina γ"
    ]
  },
  {
    numb: 66,
    question: "Ośrodek organizacji mikrotubul (MTOC) obejmuje:",
    answer: "Centrosom",
    options: [
      "Centrosom",
      "Rybosomy",
      "Jąderko",
      "Lizosomy",
      "Mitochondria"
    ]
  },
  {
    numb: 67,
    question: "Centrosom składa się z:",
    answer: "Dwóch centrioli ułożonych pod kątem prostym",
    options: [
      "Jednej centrioli",
      "Dwóch centrioli ułożonych równolegle",
      "Dwóch centrioli ułożonych pod kątem prostym",
      "Trzech centrioli",
      "Dziewięciu tripletów włókienek"
    ]
  },
  {
    numb: 68,
    question: "Centriola otoczona jest strukturą zwaną:",
    answer: "Centrosferą",
    options: [
      "Filaminą",
      "Centrosferą",
      "Keratyną",
      "Proteasomem",
      "Tonofilamentem"
    ]
  },
  {
    numb: 69,
    question: "Centrosom może pełnić funkcję ośrodka nukleacji dla około:",
    answer: "250 mikrotubul",
    options: [
      "20 mikrotubul",
      "50 mikrotubul",
      "100 mikrotubul",
      "250 mikrotubul",
      "500 mikrotubul"
    ]
  },
  {
    numb: 70,
    question: "Mikrotubule są przyłączone głównie do:",
    answer: "MTOC",
    options: [
      "MTOC",
      "Lizosomu",
      "Mitochondrium",
      "RER",
      "Filopodium"
    ]
  },
  {
    numb: 71,
    question: "„Czapeczka” GTP na końcu mikrotubuli:",
    answer: "Stabilizuje mikrotubulę",
    options: [
      "Przyspiesza hydrolizę ATP",
      "Powoduje depolimeryzację",
      "Stabilizuje mikrotubulę",
      "Zmniejsza polimeryzację",
      "Tworzy wiązania kowalencyjne z GDP"
    ]
  },
  {
    numb: 72,
    question: "Po hydrolizie GTP do GDP w mikrotubuli:",
    answer: "Następuje destabilizacja i rozpad",
    options: [
      "Mikrotubula ulega stabilizacji",
      "Mikrotubula tworzy filamenty pośrednie",
      "Mikrotubula staje się bardziej elastyczna",
      "Następuje wzrost mikrotubuli",
      "Następuje destabilizacja i rozpad"
    ]
  },
  {
    numb: 73,
    question: "Protofilamenty mikrotubuli składają się z:",
    answer: "Dimerów tubuliny α/β",
    options: [
      "Białek miozyny",
      "Filamentów pośrednich",
      "Dimerów tubuliny α/β",
      "Gelsoliny",
      "Nebuliny"
    ]
  },
  {
    numb: 74,
    question: "Ciałko podstawne rzęski pełni funkcję:",
    answer: "MTOC dla mikrotubul rzęski",
    options: [
      "Centrum degradacji mikrotubul",
      "Źródła filopodium",
      "Rdzenia jądrowego",
      "Proteasomu",
      "MTOC dla mikrotubul rzęski"
    ]
  },
  {
    numb: 75,
    question: "W MTOC mikrotubule zaczynają polimeryzację dzięki:",
    answer: "Pierścieniom tubuliny γ",
    options: [
      "Pierścieniom tubuliny γ",
      "Filaminie",
      "Kardiolipinie",
      "Koflinie",
      "Spektrynie"
    ]
  },
  {
    numb: 76,
    question: "W pierścieniu γ-tubuliny dołączanym monomerem jest zawsze:",
    answer: "Tubulina α",
    options: [
      "Tubulina α",
      "Tubulina β",
      "Tubulina δ",
      "Plektyna",
      "Desmina"
    ]
  },
  {
    numb: 77,
    question: "Koniec minus mikrotubuli jest zwykle:",
    answer: "Zakotwiczony w centrosomie",
    options: [
      "Wolny",
      "Polimeryzujący intensywnie",
      "Zakotwiczony w centrosomie",
      "Związany z błoną jądrową",
      "Osadzony w wakuoli"
    ]
  },
  {
    numb: 78,
    question: "Druga para centrioli powstaje:",
    answer: "Pod koniec fazy S i w G2",
    options: [
      "W fazie G1",
      "Pod koniec fazy S i w G2",
      "Na początku mitozy",
      "Po telofazie",
      "W cytokinezie"
    ]
  },
  {
    numb: 79,
    question: "Zduplikowany centrosom:",
    answer: "Dzieli się na dwie identyczne części podczas mitozy",
    options: [
      "Znika po podziale komórki",
      "Ma tylko jedną centriolę",
      "Zawsze pozostaje po jednej stronie jądra",
      "Dzieli się na dwie identyczne części podczas mitozy",
      "Nie uczestniczy w budowie wrzeciona podziałowego"
    ]
  },
  {
    numb: 80,
    question: "Mikrotubule pełnią kluczową rolę w:",
    answer: "Budowie wrzeciona mitotycznego",
    options: [
      "Budowie wrzeciona mitotycznego",
      "Tworzeniu tonofilamentów",
      "Stabilizacji laminy B",
      "Tworzeniu kolagenu",
      "Syntezie RNA w jąderku"
    ]
  },
  {
    numb: 81,
    question: "Największym organellum w komórce jest zwykle:",
    answer: "Jądro komórkowe",
    options: [
      "Aparat Golgiego",
      "Mitochondrium",
      "Lizosom",
      "Jądro komórkowe",
      "Peroksysom"
    ]
  },
  {
    numb: 82,
    question: "Nukleosom składa się z histonów:",
    answer: "H2A, H2B, H3, H4 + DNA",
    options: [
      "H1, H2A, H3",
      "H2A, H2B, H4",
      "H2A, H2B, H3, H4 + DNA",
      "H1 i H2B",
      "H1, H4 i H3"
    ]
  },
  {
    numb: 83,
    question: "Histon H1 nazywany jest:",
    answer: "Histonem łącznikowym",
    options: [
      "Histonem łącznikowym",
      "Histonem rdzeniowym",
      "Histonem telomerowym",
      "Histonem centromerowym",
      "Histonem kondensującym"
    ]
  },
  {
    numb: 84,
    question: "Konstytutywna heterochromatyna zawiera:",
    answer: "Telomery, centromery, ciałko Barra",
    options: [
      "Aktywne geny metaboliczne",
      "Geny intensywnie transkrybowane",
      "Sekwencje regulatorowe epigenetyczne",
      "Telomery, centromery, ciałko Barra",
      "Regiony aktywne transkrypcyjnie"
    ]
  },
  {
    numb: 85,
    question: "Euchromatyna jest:",
    answer: "Rozluźniona i aktywna transkrypcyjnie",
    options: [
      "Silnie skondensowana i nieaktywna",
      "Obecna tylko w centromerach",
      "Rozluźniona i aktywna transkrypcyjnie",
      "Zbudowana wyłącznie z heterochromatyny",
      "Pozbawiona histonów"
    ]
  },
  {
    numb: 86,
    question: "Histony mogą ulegać wszystkim poniższym modyfikacjom, z wyjątkiem:",
    answer: "Glikacji",
    options: [
      "Acetylacji",
      "Metylacji",
      "Fosforylacji",
      "Ubikwitynacji",
      "Glikacji"
    ]
  },
  {
    numb: 87,
    question: "Białka niehistonowe umożliwiają tworzenie struktury:",
    answer: "Solenoidu (30 nm)",
    options: [
      "Nukleosomu",
      "Solenoidu (30 nm)",
      "Telomeru",
      "Centrioli",
      "Proteasomu"
    ]
  },
  {
    numb: 88,
    question: "Dwie chromatydy łączy:",
    answer: "Kohezyny w obrębie centromeru",
    options: [
      "Tubulina",
      "Histon H1",
      "Telomeraza",
      "Desmina",
      "Kohezyny w obrębie centromeru"
    ]
  },
  {
    numb: 89,
    question: "Kinetochor powstaje w obrębie:",
    answer: "Centromeru",
    options: [
      "Centromeru",
      "Telomeru",
      "Jąderka",
      "Laminy B",
      "Euchromatyny"
    ]
  },
  {
    numb: 90,
    question: "Nukleosom ma średnicę około:",
    answer: "11 nm",
    options: [
      "2 nm",
      "8 nm",
      "11 nm",
      "30 nm",
      "80 nm"
    ]
  },
  {
    numb: 91,
    question: "Solenoid (podstawowe włókno chromatyny) ma średnicę:",
    answer: "30 nm",
    options: [
      "2 nm",
      "11 nm",
      "20 nm",
      "30 nm",
      "100 nm"
    ]
  },
  {
    numb: 92,
    question: "Pętle chromatynowe stabilizowane są dzięki:",
    answer: "Kondensynom",
    options: [
      "Kohezynom",
      "Kondensynom",
      "Importynie",
      "Dyneinie",
      "Histonowi H1"
    ]
  },
  {
    numb: 93,
    question: "Chromosom metafazowy jest:",
    answer: "Około 10 000 razy krótszy niż rozciągnięta cząsteczka DNA",
    options: [
      "10 razy krótszy od DNA",
      "100 razy krótszy",
      "500 razy krótszy",
      "5000 razy krótszy",
      "Około 10 000 razy krótszy niż rozciągnięta cząsteczka DNA"
    ]
  },
  {
    numb: 94,
    question: "Heterochromatyna stanowi około:",
    answer: "10% chromatyny interfazowej",
    options: [
      "10% chromatyny interfazowej",
      "50% chromatyny",
      "90% chromatyny",
      "70% chromatyny",
      "1% chromatyny"
    ]
  },
  {
    numb: 95,
    question: "Euchromatyna aktywna transkrypcyjnie stanowi około:",
    answer: "10% chromatyny",
    options: [
      "1% chromatyny",
      "5% chromatyny",
      "10% chromatyny",
      "50% chromatyny",
      "90% chromatyny"
    ]
  },
  {
    numb: 96,
    question: "Otoczka jądrowa zawiera:",
    answer: "Kompleksy porowe NPC",
    options: [
      "Tonofilamenty",
      "Kohezyny",
      "Białka TOM i TIM",
      "Kompleksy porowe NPC",
      "Porynę"
    ]
  },
  {
    numb: 97,
    question: "Lamina A znajduje się:",
    answer: "Bliżej nukleoplazmy",
    options: [
      "Przy błonie zewnętrznej jądra",
      "Bliżej nukleoplazmy",
      "W jąderku",
      "W cytoplazmie",
      "W centromerze"
    ]
  },
  {
    numb: 98,
    question: "Lamina B znajduje się:",
    answer: "Bliżej otoczki jądrowej",
    options: [
      "W jąderku",
      "W solenoidzie",
      "Bliżej otoczki jądrowej",
      "Przy tonofilamentach",
      "W strukturze fibrylarnej jąderka"
    ]
  },
  {
    numb: 99,
    question: "NPC składa się głównie z:",
    answer: "Nukleoporyn",
    options: [
      "Histonów",
      "Koflin",
      "Tubuliny",
      "Keratyny",
      "Nukleoporyn"
    ]
  },
  {
    numb: 100,
    question: "Transport do jądra wymaga:",
    answer: "Importyny α i β oraz NLS",
    options: [
      "Importyny α i β oraz NLS",
      "Eksportyny 1",
      "RanGTP tylko",
      "NES",
      "Dyneiny"
    ]
  }
];
