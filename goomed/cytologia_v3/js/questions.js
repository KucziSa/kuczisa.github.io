// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 200,
    question: "O-glikozylacja zachodzi głównie w:",
    answer: "Środkowych cysternach AG",
    options: [
      "RER",
      "Cytoplazmie",
      "Lizosomach",
      "Mitochondrium",
      "Środkowych cysternach AG"
    ]
  },
  {
    numb: 201,
    question: "O-glikozylacja polega na dodawaniu cukrów do:",
    answer: "Reszt seryny i treoniny",
    options: [
      "Reszt seryny i treoniny",
      "Asparaginy",
      "Tyrozyny",
      "Proliny",
      "Histydyny"
    ]
  },
  {
    numb: 202,
    question: "Dalsza modyfikacja N-glikozylowanych oligosacharydów zachodzi w:",
    answer: "Środkowych cysternach AG",
    options: [
      "SER",
      "RER",
      "Środkowych cysternach AG",
      "Lizosomach",
      "Jądrze komórkowym"
    ]
  },
  {
    numb: 203,
    question: "Na biegunie trans AG dodawany jest często:",
    answer: "Kwas sjalowy",
    options: [
      "Mannozo-1-P",
      "Trehaloza",
      "Fruktoza",
      "Kwas sjalowy",
      "Histamina"
    ]
  },
  {
    numb: 204,
    question: "Sulfatacja (siarczanowanie) reszt tyrozyny zachodzi:",
    answer: "W trans AG",
    options: [
      "W RER",
      "W mitochondrium",
      "W trans AG",
      "W jądrze",
      "Na rybosomach"
    ]
  },
  {
    numb: 205,
    question: "Sortowanie białek do różnych pęcherzyków zachodzi głównie:",
    answer: "W trans AG",
    options: [
      "W RER",
      "W trans AG",
      "W lizosomach",
      "W jąderku",
      "W SER"
    ]
  },
  {
    numb: 206,
    question: "Lizosom to organellum:",
    answer: "Otoczone pojedynczą błoną",
    options: [
      "Dwubłonowe",
      "Bez błony",
      "Otoczone pojedynczą błoną",
      "Zbudowane z RER",
      "Powstające w mitochondriach"
    ]
  },
  {
    numb: 207,
    question: "Wnętrze lizosomu ma pH:",
    answer: "Kwaśne",
    options: [
      "Zasadowe",
      "Obojętne",
      "Zmiennie regulowane",
      "Kwaśne",
      "Silnie zasadowe"
    ]
  },
  {
    numb: 208,
    question: "Zakwaszanie wnętrza lizosomu odbywa się dzięki:",
    answer: "H+-ATPazie",
    options: [
      "H+-ATPazie",
      "Klatrynie",
      "SNARE",
      "Proteasomowi",
      "Mostkom disiarczkowym"
    ]
  },
  {
    numb: 209,
    question: "Enzymy lizosomalne stają się aktywne:",
    answer: "W kwaśnym pH lizosomu",
    options: [
      "W cytoplazmie",
      "W świetle RER",
      "W kwaśnym pH lizosomu",
      "W jądrze",
      "W błonie komórkowej"
    ]
  },
  {
    numb: 210,
    question: "Które z poniższych jest enzymem lizosomalnym?",
    answer: "Katepsyna",
    options: [
      "Telomeraza",
      "Kaweolina",
      "Polimeraza RNA",
      "Proteasom",
      "Katepsyna"
    ]
  },
  {
    numb: 211,
    question: "Do enzymów hydrolizujących lipidy w lizosomie należą:",
    answer: "Esterazy i fosfolipazy",
    options: [
      "Topoizomerazy",
      "Esterazy i fosfolipazy",
      "Histony",
      "Ligazy",
      "Cytoszokiny"
    ]
  },
  {
    numb: 212,
    question: "Błona lizosomów jest nieprzepuszczalna dzięki:",
    answer: "LAMP, LIMP, LGP",
    options: [
      "SRP",
      "Klatrynie",
      "COPI",
      "Kaweolinie",
      "LAMP, LIMP, LGP"
    ]
  },
  {
    numb: 213,
    question: "Białka znakowane mannozo-6-fosforanem są rozpoznawane przez:",
    answer: "Receptory mannozo-6-fosforanu",
    options: [
      "Rybosomy",
      "mRNA",
      "SNARE",
      "Receptory mannozo-6-fosforanu",
      "Retromer"
    ]
  },
  {
    numb: 214,
    question: "Lizosomy są szczególnie liczne w komórkach:",
    answer: "Fagocytujących",
    options: [
      "Nabłonkowych jelita",
      "Tłuszczowych",
      "Fagocytujących",
      "Tkanki mięśniowej",
      "Tkanki łącznej"
    ]
  },
  {
    numb: 215,
    question: "Kwasowa fosfodiestraza jest przykładem:",
    answer: "Kwaśnej fosfatazy",
    options: [
      "Kinazy",
      "Kwaśnej fosfatazy",
      "Enzymu RER",
      "Elementu cytoszkieletu",
      "Polimerazy"
    ]
  },
  {
    numb: 216,
    question: "Hialuronidaza to enzym który:",
    answer: "Trawi polisacharydy",
    options: [
      "Trawi polisacharydy",
      "Tworzy wiązania kowalencyjne",
      "Modyfikuje RNA",
      "Denaturuje białka",
      "Rozszczepia kwasy tłuszczowe"
    ]
  },
  {
    numb: 217,
    question: "Kolagenaza należy do grupy:",
    answer: "Proteinaz",
    options: [
      "Nukleaz",
      "Fosfataz",
      "Esteraz",
      "Proteinaz",
      "Glikozydaz"
    ]
  },
  {
    numb: 218,
    question: "Reszty oligosacharydowe są dalej modyfikowane:",
    answer: "W środkowych cysternach AG",
    options: [
      "W RER",
      "W środkowych cysternach AG",
      "W jądrze",
      "W peroksysomach",
      "W rybosomach"
    ]
  },
  {
    numb: 219,
    question: "Do błony docelowej enzymy lizosomalne docierają dzięki oznaczeniu:",
    answer: "Mannozo-6-fosforanem",
    options: [
      "Mannozo-6-fosforanem",
      "Ubiwkityną",
      "Kwasem sjalowym",
      "Retromerem",
      "COPI"
    ]
  },
  {
    numb: 220,
    question: "Lizosomy pełnią funkcję:",
    answer: "Wewnątrzkomórkowego systemu trawiennego",
    options: [
      "Syntezy lipidów",
      "Przechowywania Ca²⁺",
      "Produkcji energii",
      "Transportu RNA",
      "Wewnątrzkomórkowego systemu trawiennego"
    ]
  },
  {
    numb: 221,
    question: "Ciała resztkowe powstają jako:",
    answer: "Niestrawione pozostałości po trawieniu lizosomalnym",
    options: [
      "Produkty translacji niezłożonych białek",
      "Niestrawione pozostałości po trawieniu lizosomalnym",
      "Fragmenty aparatu Golgiego",
      "Skupiska mitochondriów",
      "Zdegradowane rybosomy"
    ]
  },
  {
    numb: 222,
    question: "Lipofuscyna gromadzi się głównie w:",
    answer: "Komórkach długożyjących, np. neuronach",
    options: [
      "Erytrocytach",
      "Hepatocytach młodych",
      "Fibroblastach",
      "Komórkach długożyjących, np. neuronach",
      "Nabłonku jelitowym"
    ]
  },
  {
    numb: 223,
    question: "Lipofuscyna jest nazywana:",
    answer: "„Pigmentem zużycia” / „barwnikiem starości”",
    options: [
      "„Pigmentem zużycia” / „barwnikiem starości”",
      "Barwnikiem hemoglobinowym",
      "Prekursorem melaniny",
      "Zapasowym materiałem energetycznym",
      "Barwnikiem oksydacyjnym"
    ]
  },
  {
    numb: 224,
    question: "Lipofuscyna jest produktem:",
    answer: "Nierozpuszczalnej degradacji organelli",
    options: [
      "Syntezy lipidów w SER",
      "Degradacji DNA",
      "Nierozpuszczalnej degradacji organelli",
      "Transkrypcji mRNA",
      "Uszkodzenia błony komórkowej"
    ]
  },
  {
    numb: 225,
    question: "Ciała resztkowe są:",
    answer: "Ograniczone błoną",
    options: [
      "Strukturami RER",
      "Ograniczone błoną",
      "Dołączone do rybosomów",
      "Elementami cytoszkieletu",
      "Produktami transkrypcji"
    ]
  },
  {
    numb: 226,
    question: "Wtręty komórkowe charakteryzuje:",
    answer: "Niska lub brak aktywności metabolicznej",
    options: [
      "Dwubłonowa struktura",
      "Wysoka aktywność metaboliczna",
      "Połączenie z aparatem Golgiego",
      "Niska lub brak aktywności metabolicznej",
      "Wysoka aktywność enzymów proteolitycznych"
    ]
  },
  {
    numb: 227,
    question: "Wtręty komórkowe są:",
    answer: "Zwykle nieotoczone błoną",
    options: [
      "Stałymi strukturami jądra",
      "Błonowymi organellami",
      "Zwykle nieotoczone błoną",
      "Aktywnymi enzymatycznie strukturami",
      "Elementami cytoszkieletu"
    ]
  },
  {
    numb: 228,
    question: "Wtręty komórkowe zawierają:",
    answer: "Nagromadzone metabolity lub substancje zapasowe",
    options: [
      "Enzymy lizosomalne",
      "Lipidy błonowe",
      "Białka SNARE",
      "Polimerazy",
      "Nagromadzone metabolity lub substancje zapasowe"
    ]
  },
  {
    numb: 229,
    question: "Krople lipidowe to wtręty występujące przede wszystkim w:",
    answer: "Adipocytach",
    options: [
      "Adipocytach",
      "Neuronach",
      "Erytrocytach",
      "Keratynocytach",
      "Komórkach pęcherzykowych płuc"
    ]
  },
  {
    numb: 230,
    question: "Ziarna glikogenu występują obficie w:",
    answer: "Hepatocytach",
    options: [
      "Erytrocytach",
      "Osteoklastach",
      "Hepatocytach",
      "Komórkach tłuszczowych",
      "Chondrocytach"
    ]
  },
  {
    numb: 231,
    question: "Glikogen jest magazynowany:",
    answer: "W cytoplazmie",
    options: [
      "W mitochondriach",
      "W jąderku",
      "W cysternach AG",
      "W cytoplazmie",
      "W lizosomach"
    ]
  },
  {
    numb: 232,
    question: "Melanina występuje głównie w:",
    answer: "Naskórku",
    options: [
      "Hepatocytach",
      "Naskórku",
      "Komórkach mięśnia sercowego",
      "Erytrocytach",
      "Komórkach tłuszczowych"
    ]
  },
  {
    numb: 233,
    question: "Lipofuscyna występuje obficie w:",
    answer: "Neuronach i kardiomiocytach",
    options: [
      "Nabłonku jelitowym",
      "Keratynocytach",
      "Neuronach i kardiomiocytach",
      "Komórkach zrębu śledziony",
      "Osteoklastach"
    ]
  },
  {
    numb: 234,
    question: "Hemosyderyna jest magazynowana głównie w:",
    answer: "Fagocytach wątroby i śledziony",
    options: [
      "Wtrętach RER",
      "Ziarniście w mitochondriach",
      "Cytoplazmie keratynocytów",
      "Aparacie Golgiego",
      "Fagocytach wątroby i śledziony"
    ]
  },
  {
    numb: 235,
    question: "Hemosyderyna jest produktem metabolizmu:",
    answer: "Żelaza",
    options: [
      "Żelaza",
      "Wapnia",
      "Magnezu",
      "Fosforu",
      "Lipidów"
    ]
  },
  {
    numb: 236,
    question: "Do barwników wtrętowych należy:",
    answer: "Melanina",
    options: [
      "Keratyna",
      "Histamina",
      "Heparyna",
      "Melanina",
      "Kalsekwestryna"
    ]
  },
  {
    numb: 237,
    question: "Lipofuscyna gromadzi się w komórkach wskutek:",
    answer: "Niestrawienia resztek w lizosomach",
    options: [
      "Braku mitochondriów",
      "Nadmiernego poboru wody",
      "Niestrawienia resztek w lizosomach",
      "Nadmiaru cholesterolu",
      "Nadaktywności proteasomów"
    ]
  },
  {
    numb: 238,
    question: "Krople lipidowe składają się głównie z:",
    answer: "Triacylogliceroli",
    options: [
      "Kwasu nukleinowego",
      "Triacylogliceroli",
      "Wody i jonów",
      "Białek opiekuńczych",
      "Glikoprotein"
    ]
  },
  {
    numb: 239,
    question: "Ziarna glikogenu są formą magazynowania:",
    answer: "Glukozy",
    options: [
      "Glukozy",
      "Lipidów",
      "Aminokwasów",
      "Ca²⁺",
      "Kwasów nukleinowych"
    ]
  },
  {
    numb: 240,
    question: "Wtręty komórkowe różnią się od organelli tym, że:",
    answer: "Nie są otoczone błoną i mają niską aktywność metaboliczną",
    options: [
      "Powstają z siateczki śródplazmatycznej",
      "Zawierają własne DNA",
      "Są otoczone błoną",
      "Mają wysoką aktywność enzymatyczną",
      "Nie są otoczone błoną i mają niską aktywność metaboliczną"
    ]
  },
  {
    numb: 241,
    question: "Mitochondria występują w:",
    answer: "Wszystkich komórkach eukariotycznych z jądrem",
    options: [
      "Tylko w komórkach prokariotycznych",
      "Tylko w komórkach roślinnych",
      "Wszystkich komórkach eukariotycznych z jądrem",
      "Komórkach pozbawionych cytoplazmy",
      "Tylko w komórkach mięśniowych"
    ]
  },
  {
    numb: 242,
    question: "Całkowita objętość mitochondriów w hepatocycie może wynosić około:",
    answer: "20%",
    options: [
      "2%",
      "5%",
      "10%",
      "20%",
      "50%"
    ]
  },
  {
    numb: 243,
    question: "Liczba mitochondriów w komórce zależy głównie od:",
    answer: "Zapotrzebowania na energię",
    options: [
      "Zapotrzebowania na energię",
      "Wielkości jądra",
      "Ilości glikogenu",
      "Aktywności RER",
      "Ilości cholesterolu"
    ]
  },
  {
    numb: 244,
    question: "Mitochondria są liczne szczególnie w komórkach:",
    answer: "Intensywnie pracujących, np. mięśniowych",
    options: [
      "Tkanki tłuszczowej białej",
      "Kostnej",
      "Nabłonka jelitowego",
      "Chrzęstnej",
      "Intensywnie pracujących, np. mięśniowych"
    ]
  },
  {
    numb: 245,
    question: "Mitochondria powstały najprawdopodobniej poprzez:",
    answer: "Endosymbiozę z bakterią",
    options: [
      "Mutację genów cytoplazmatycznych",
      "Endosymbiozę z bakterią",
      "Połączenie dwóch komórek eukariotycznych",
      "Transfer poziomy DNA",
      "Rozpad chloroplastu"
    ]
  },
  {
    numb: 246,
    question: "Mitochondria są organellami półautonomicznymi, ponieważ:",
    answer: "Mają własne DNA i rybosomy",
    options: [
      "Mogą opuszczać komórkę",
      "Są zbudowane z jednej błony",
      "Mają własne DNA i rybosomy",
      "Nie potrzebują energii",
      "Produkują hormony"
    ]
  },
  {
    numb: 247,
    question: "Najwięcej mitochondriów posiada:",
    answer: "Oocyt",
    options: [
      "Oocyt",
      "Leukocyt",
      "Erytrocyt",
      "Chondrocyt",
      "Trombocyt"
    ]
  },
  {
    numb: 248,
    question: "Mitochondria mają ile przedziałów?",
    answer: "4",
    options: [
      "2",
      "3",
      "5",
      "4",
      "6"
    ]
  },
  {
    numb: 249,
    question: "Błona zewnętrzna mitochondrium jest:",
    answer: "Przepuszczalna dla cząsteczek ≤ 10 kDa",
    options: [
      "Bardzo nieprzepuszczalna",
      "Przepuszczalna dla cząsteczek ≤ 10 kDa",
      "Zbudowana głównie z cholesterolu",
      "Wolna od białek transportowych",
      "Pozbawiona poryn"
    ]
  },
  {
    numb: 250,
    question: "Białka porynowe występują w:",
    answer: "Błonie zewnętrznej mitochondrium",
    options: [
      "Błonie zewnętrznej mitochondrium",
      "Błonie wewnętrznej",
      "Matrix",
      "Aparacie Golgiego",
      "SER"
    ]
  },
  {
    numb: 251,
    question: "Błona zewnętrzna mitochondriów zawiera enzymy odpowiedzialne za:",
    answer: "Podział i fuzję mitochondriów",
    options: [
      "Syntezę ATP",
      "Syntezę RNA",
      "Replikację DNA",
      "Podział i fuzję mitochondriów",
      "Transport protonów"
    ]
  },
  {
    numb: 252,
    question: "Przestrzeń międzybłonowa zawiera:",
    answer: "Enzymy fosforylujące nukleotydy i cytochrom c",
    options: [
      "Enzymy cyklu Krebsa",
      "Białka UCP-1",
      "Enzymy fosforylujące nukleotydy i cytochrom c",
      "Proteasomy",
      "Znaczne ilości cholesterolu"
    ]
  },
  {
    numb: 253,
    question: "Błona wewnętrzna mitochondrium jest:",
    answer: "Nieprzepuszczalna dla jonów dzięki kardiolipinie",
    options: [
      "Bardzo przepuszczalna",
      "Identyczna z błoną komórkową",
      "Bogata w cholesterol",
      "Przepuszczalna dla jonów",
      "Nieprzepuszczalna dla jonów dzięki kardiolipinie"
    ]
  },
  {
    numb: 254,
    question: "Kardiolipina nadaje błonie wewnętrznej cechę:",
    answer: "Nieprzepuszczalności dla jonów i małych cząsteczek",
    options: [
      "Przepuszczalności dla protonów",
      "Nieprzepuszczalności dla jonów i małych cząsteczek",
      "Zdolności do pinocytozy",
      "Elastyczności podobnej do RER",
      "Obecności receptorów SNARE"
    ]
  },
  {
    numb: 255,
    question: "Błona wewnętrzna mitochondrium zawiera dużo:",
    answer: "Białek nośnikowych i kanałów",
    options: [
      "Cholesterolu",
      "Fosfolipazy C",
      "Białek nośnikowych i kanałów",
      "Glikokaliksu",
      "Mannozo-6-fosforanu"
    ]
  },
  {
    numb: 256,
    question: "Białko UCP-1 (termogenina) pełni funkcję:",
    answer: "Rozprzęgania fosforylacji oksydacyjnej",
    options: [
      "Rozprzęgania fosforylacji oksydacyjnej",
      "Tworzenia ATP",
      "Transportu Ca²⁺",
      "Rozpoznawania białek",
      "Transportu ubichinonu"
    ]
  },
  {
    numb: 257,
    question: "Enzymy cyklu Krebsa znajdują się w:",
    answer: "Matrix",
    options: [
      "Błonie zewnętrznej",
      "Błonie wewnętrznej",
      "Przestrzeni międzybłonowej",
      "Matrix",
      "Aparacie Golgiego"
    ]
  },
  {
    numb: 258,
    question: "Matrix mitochondrium zawiera:",
    answer: "mtDNA, rybosomy, tRNA, enzymy i ziarnistości kationów",
    options: [
      "Tylko DNA",
      "Tylko rybosomy",
      "Tylko enzymy beta-oksydacji",
      "Tylko mRNA",
      "mtDNA, rybosomy, tRNA, enzymy i ziarnistości kationów"
    ]
  },
  {
    numb: 259,
    question: "Grzebienie mitochondrialne zwiększają:",
    answer: "Powierzchnię błony wewnętrznej",
    options: [
      "Przepuszczalność dla jonów",
      "Ilość cholesterolu",
      "Powierzchnię błony wewnętrznej",
      "Produkcję glikogenu",
      "Ilość proteasomów"
    ]
  },
  {
    numb: 260,
    question: "W komórkach produkujących hormony steroidowe grzebienie są:",
    answer: "Tubularne",
    options: [
      "Płaskie",
      "Tubularne",
      "Nieobecne",
      "Usztywnione cholesterolem",
      "Zmienione w pory"
    ]
  },
  {
    numb: 261,
    question: "Liczba grzebieni zwiększa się pod wpływem:",
    answer: "Tyroksyny i T3",
    options: [
      "Estrogenu",
      "Insuliny",
      "Leptyny",
      "Tyroksyny i T3",
      "Kortyzolu"
    ]
  },
  {
    numb: 262,
    question: "Głównym źródłem reaktywnych form tlenu (RFT) są:",
    answer: "Mitochondria",
    options: [
      "Lizosomy",
      "Retikulum endoplazmatyczne",
      "Mitochondria",
      "Aparat Golgiego",
      "Peroksysomy"
    ]
  },
  {
    numb: 263,
    question: "Kompleksy łańcucha oddechowego pompujące protony to:",
    answer: "1,3,4",
    options: [
      "1,2,4",
      "2,3,5",
      "2,4,5",
      "1,3,4",
      "2,3,4"
    ]
  },
  {
    numb: 264,
    question: "Translokator TOM znajduje się w:",
    answer: "Błonie zewnętrznej",
    options: [
      "Błonie zewnętrznej",
      "Błonie wewnętrznej",
      "Matrix",
      "Cytozolu",
      "Aparacie Golgiego"
    ]
  },
  {
    numb: 265,
    question: "Translokator TIM znajduje się w:",
    answer: "Błonie wewnętrznej",
    options: [
      "Błonie zewnętrznej",
      "Błonie wewnętrznej",
      "Przestrzeni międzybłonowej",
      "Matrix",
      "Cytozolu"
    ]
  },
  {
    numb: 266,
    question: "HSP (białka opiekuńcze) w mitochondrium:",
    answer: "Naprawiają białka o nieprawidłowej konformacji",
    options: [
      "Ulegają glikozylacji",
      "Syntezują ATP",
      "Naprawiają białka o nieprawidłowej konformacji",
      "Wytwarzają RNA",
      "Rozkładają błonę zewnętrzną"
    ]
  },
  {
    numb: 267,
    question: "mtDNA charakteryzuje się:",
    answer: "Brakiem histonów",
    options: [
      "Obecnością histonów",
      "Brakiem histonów",
      "Naprawą DNA identyczną jak w jądrze",
      "Wysoką zawartością intronów",
      "Obecnością kapsydu"
    ]
  },
  {
    numb: 268,
    question: "Mitochondria mnożą się poprzez:",
    answer: "Wzrost i podział (jak bakterie)",
    options: [
      "Wzrost i podział (jak bakterie)",
      "Endocytozę",
      "Egzocytozę",
      "Podział jądra",
      "Syntezę de novo w cytoplazmie"
    ]
  },
  {
    numb: 269,
    question: "Syntaza ATP zlokalizowana jest w:",
    answer: "Błonie wewnętrznej",
    options: [
      "Błonie zewnętrznej",
      "Przestrzeni międzybłonowej",
      "Błonie wewnętrznej",
      "Matrix",
      "AG"
    ]
  },
  {
    numb: 270,
    question: "Syntaza ATP zbudowana jest z około:",
    answer: "18 białek",
    options: [
      "5 białek",
      "8 białek",
      "12 białek",
      "18 białek",
      "40 białek"
    ]
  },
  {
    numb: 271,
    question: "Peroksysomy to organella:",
    answer: "Otoczone pojedynczą błoną",
    options: [
      "Dwubłonowe",
      "Pozbawione błony",
      "Otoczone pojedynczą błoną",
      "Zbudowane z rybosomów",
      "Występujące wyłącznie w neuronach"
    ]
  },
  {
    numb: 272,
    question: "Peroksysomy zawierają około:",
    answer: "50 enzymów",
    options: [
      "10 enzymów",
      "50 enzymów",
      "200 enzymów",
      "5 enzymów",
      "3 enzymy"
    ]
  },
  {
    numb: 273,
    question: "Główna funkcja enzymów peroksysomalnych to:",
    answer: "Utlenianie lipidów i ksenobiotyków",
    options: [
      "Synteza białek jądrowych",
      "Transport glukozy",
      "Degradacja DNA",
      "Utlenianie lipidów i ksenobiotyków",
      "Tworzenie mikrotubul"
    ]
  },
  {
    numb: 274,
    question: "W centrum peroksysomu u większości gatunków zwierząt znajduje się:",
    answer: "Krystaliczny rdzeń z oksydazą moczanową",
    options: [
      "Krystaliczny rdzeń z oksydazą moczanową",
      "Rdzeń DNA",
      "Ziarnistości ferrytyny",
      "Białka SNARE",
      "Klatryna"
    ]
  },
  {
    numb: 275,
    question: "Oksydaza moczanowa w peroksysomach:",
    answer: "Nie występuje u człowieka",
    options: [
      "Aktywuje mitochondrialną ATP-azę",
      "Tworzy mostki disiarczkowe",
      "Jest obecna tylko u człowieka",
      "Nie występuje u człowieka",
      "Jest głównym enzymem AG"
    ]
  },
  {
    numb: 276,
    question: "Peroksysomy są szczególnie liczne w:",
    answer: "Hepatocytach",
    options: [
      "Erytrocytach",
      "Neuronach",
      "Hepatocytach",
      "Komórkach mięśni gładkich",
      "Fibroblastach skóry"
    ]
  },
  {
    numb: 277,
    question: "Peroksysomy powstają głównie przez:",
    answer: "Podział już istniejących peroksysomów",
    options: [
      "Podział już istniejących peroksysomów",
      "Rozpad mitochondriów",
      "Wypączkowanie z AG",
      "Połączenie wakuoli",
      "Egzocytozę SER"
    ]
  },
  {
    numb: 278,
    question: "Do enzymów peroksysomalnych należy:",
    answer: "Katalaza",
    options: [
      "Telomeraza",
      "Proteasom",
      "Katalaza",
      "Oksydaza cytochromowa",
      "Kaweolina"
    ]
  },
  {
    numb: 279,
    question: "Peroksysomy biorą udział w syntezie:",
    answer: "Cholesterolu, dolicholu i plazmalogenów",
    options: [
      "Insuliny",
      "Glikogenu",
      "RNA",
      "Błony jądrowej",
      "Cholesterolu, dolicholu i plazmalogenów"
    ]
  },
  {
    numb: 280,
    question: "Plazmalogeny powstające w peroksysomach są składnikiem:",
    answer: "Mieliny",
    options: [
      "Cytoszkieletu",
      "Mieliny",
      "Glikokaliksu",
      "Ziarnistości sekrecyjnych",
      "Błony pęcherzyków endocytarnych"
    ]
  },
  {
    numb: 281,
    question: "Zespół Zellwegera jest przykładem:",
    answer: "Leukodystrofii peroksysomalnej",
    options: [
      "Mukopolisacharydozy",
      "Hemoglobinopatii",
      "Choroby mitochondrialnej",
      "Leukodystrofii peroksysomalnej",
      "Choroby lizosomalnej"
    ]
  },
  {
    numb: 282,
    question: "Zespół Zellwegera jest spowodowany mutacją:",
    answer: "Peroksyny",
    options: [
      "Peroksyny",
      "Kardiolipiny",
      "Tropomiozyny",
      "Histonów",
      "UCP-1"
    ]
  },
  {
    numb: 283,
    question: "Defekt peroksyn prowadzi do:",
    answer: "Braku peroksysomów w mózgu i zaburzenia mielinizacji",
    options: [
      "Nadprodukcji ATP",
      "Syntezy nadmiernej ilości plazmalogenów",
      "Braku peroksysomów w mózgu i zaburzenia mielinizacji",
      "Przeciążenia SER lipidami",
      "Nadmiaru SNARE"
    ]
  },
  {
    numb: 284,
    question: "Zespół Zellwegera charakteryzuje się gromadzeniem:",
    answer: "Bardzo długołańcuchowych KT (C26–C38)",
    options: [
      "Cholesterolu",
      "Zwiniętego DNA",
      "Kwasu hialuronowego",
      "Bardzo długołańcuchowych KT (C26–C38)",
      "Krótkich kwasów tłuszczowych"
    ]
  },
  {
    numb: 285,
    question: "Który objaw NIE jest typowy dla zespołu Zellwegera?",
    answer: "Nadmiar insuliny w surowicy",
    options: [
      "Hepatomegalia",
      "Torbielowatość nerek",
      "Wrodzone wady serca",
      "Zaćma",
      "Nadmiar insuliny w surowicy"
    ]
  },
  {
    numb: 286,
    question: "W surowicy pacjentów z zespołem Zellwegera obserwuje się:",
    answer: "Podwyższony poziom Fe i Cu",
    options: [
      "Obniżony poziom Fe i Cu",
      "Podwyższony poziom Fe i Cu",
      "Tylko wzrost Fe",
      "Tylko wzrost Cu",
      "Brak zmian"
    ]
  },
  {
    numb: 287,
    question: "W peroksysomach zachodzi intensywnie:",
    answer: "Utlenianie bardzo długołańcuchowych KT",
    options: [
      "Synteza białek mitochondrialnych",
      "Transkrypcja DNA",
      "Utlenianie bardzo długołańcuchowych KT",
      "Synteza tRNA",
      "Synteza ATP"
    ]
  },
  {
    numb: 288,
    question: "Krystaliczny rdzeń peroksysomu zawiera:",
    answer: "Oksydazę moczanową",
    options: [
      "Oksydazę moczanową",
      "Peroksytynę",
      "Cytochrom c",
      "Klatrynę",
      "HSP"
    ]
  },
  {
    numb: 289,
    question: "Katalaza w peroksysomach rozkłada:",
    answer: "Nadtlenek wodoru (H₂O₂)",
    options: [
      "CO₂",
      "NADH",
      "Glukozę",
      "Nadtlenek wodoru (H₂O₂)",
      "Ozon"
    ]
  },
  {
    numb: 290,
    question: "Leukodystrofia peroksysomalna prowadzi przede wszystkim do:",
    answer: "Zaburzenia mielinizacji aksonów",
    options: [
      "Nadmiernej fosforylacji białek",
      "Uszkodzenia aparatu Golgiego",
      "Zaburzenia mielinizacji aksonów",
      "Tworzenia toksycznych ziarnistości lipofuscyny",
      "Nadprodukcji cholesterolu"
    ]
  }
];
