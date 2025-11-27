let questions = [

  {
    numb: 1,
    question: "Zasadniczą cechą tkanki nerwowej jest:",
    answer: "pobudliwość",
    options: ["kurczliwość", "pobudliwość", "wydzielanie hormonów", "odporność", "regeneracja"]
  },
  {
    numb: 2,
    question: "Pobudliwość neuronu polega na:",
    answer: "zmianie ładunku elektrycznego błony",
    options: ["magazynowaniu jonów", "syntezie białek", "zmianie ładunku elektrycznego błony", "rozpadzie neurotransmiterów", "skurczu cytoszkieletu"]
  },
  {
    numb: 3,
    question: "Podstawowe elementy tkanki nerwowej to:",
    answer: "neurony i komórki glejowe",
    options: ["neurony i komórki glejowe", "kolagen i elastyna", "tkanka mięśniowa", "chondrocyty", "osteocyty"]
  },
  {
    numb: 4,
    question: "Neuron rzekomojednobiegunowy występuje w:",
    answer: "zwojach czuciowych nerwów czaszkowych i rdzeniowych",
    options: ["móżdżku", "korze mózgu", "istocie czarnej", "zwojach czuciowych nerwów czaszkowych i rdzeniowych", "rdzeniu kręgowym"]
  },
  {
    numb: 5,
    question: "Neurony dwubiegunowe znajdują się w:",
    answer: "siatkówce oka",
    options: ["siatkówce oka", "zwojach rdzeniowych", "rdzeniu kręgowym", "korze ruchowej", "móżdżku"]
  },
  {
    numb: 6,
    question: "Neurony dwubiegunowe odpowiadają także za zmysł:",
    answer: "węchu",
    options: ["smaku", "dotyku", "węchu", "bólu", "równowagi"]
  },
  {
    numb: 7,
    question: "Neurony wielobiegunowe to głównie neurony:",
    answer: "ruchowe rdzenia kręgowego",
    options: ["czuciowe", "autonomiczne", "węchowe", "siatkówkowe", "ruchowe rdzenia kręgowego"]
  },
  {
    numb: 8,
    question: "Neurony rzekomojednobiegunowe są okryte przez:",
    answer: "komórki satelitarne",
    options: ["oligodendrocyty", "komórki satelitarne", "komórki Schwanna", "astrocyty", "mikroglej"]
  },
  {
    numb: 9,
    question: "Duża średnica aksonu oznacza:",
    answer: "szybkie przewodzenie",
    options: ["szybkie przewodzenie", "wolne przewodzenie", "brak przewodzenia", "przewodzenie tylko wsteczne", "przewodzenie chemiczne"]
  },
  {
    numb: 10,
    question: "Mała średnica włókna nerwowego oznacza:",
    answer: "wolne przewodzenie",
    options: ["szybki impuls", "wolne przewodzenie", "równą szybkość", "przewodzenie tylko w OUN", "brak aksonu"]
  },

  {
    numb: 11,
    question: "Rozgałęzienia aksonu to:",
    answer: "kolateralia",
    options: ["dendrosomy", "gemmulae", "kolateralia", "neurotomie", "retikule"]
  },
  {
    numb: 12,
    question: "Końcowy odcinek aksonu to:",
    answer: "telodendron",
    options: ["soma", "kolateralia", "inicjalny segment", "telodendron", "dendron"]
  },
  {
    numb: 13,
    question: "Neurony ruchowe rdzenia kręgowego wychodzą z:",
    answer: "rogów przednich",
    options: ["rogów przednich", "rogów tylnych", "istoty białej", "zwojów", "kory czuciowej"]
  },
  {
    numb: 14,
    question: "Marker starzenia się neuronu to:",
    answer: "lipofuscyna",
    options: ["neuromelanina", "lipaza", "lipofuscyna", "mielina", "serotonina"]
  },
  {
    numb: 15,
    question: "Istota czarna znajduje się:",
    answer: "po obu stronach istoty szarej mózgu",
    options: ["w móżdżku", "po obu stronach istoty szarej mózgu", "w rdzeniu kręgowym", "w rdzeniu przedłużonym", "w płacie skroniowym"]
  },
  {
    numb: 16,
    question: "Komórki istoty czarnej są głównie:",
    answer: "dopaminergiczne",
    options: ["serotoninergiczne", "GABAergiczne", "glutaminergiczne", "dopaminergiczne", "cholinergiczne"]
  },
  {
    numb: 17,
    question: "Neuromelanina jest wydzielana przez neurony:",
    answer: "dopaminergiczne istoty czarnej",
    options: ["piramidowe", "Purkinjego", "czuciowe", "dopaminergiczne istoty czarnej", "satelitarne"]
  },
  {
    numb: 18,
    question: "Wypustki neuronów zbudowane są głównie z:",
    answer: "neurofilamentów i mikrotubul",
    options: ["neurofilamentów i mikrotubul", "kolagenu", "elastyny", "keratyny", "aktyny i miozyny"]
  },
  {
    numb: 19,
    question: "Dendryty przewodzą impulsy:",
    answer: "do ciała komórki",
    options: ["na obwód", "do ciała komórki", "z aksonu do aksonu", "do rdzenia kręgowego", "z jądra komórkowego"]
  },
  {
    numb: 20,
    question: "Akson przewodzi impuls:",
    answer: "z ciała komórki na obwód",
    options: ["z ciała komórki na obwód", "do ciała komórki", "wyłącznie wstecz", "między dendrytami", "tylko w mózgu"]
  },

  {
    numb: 21,
    question: "Zgrubienia na dendrytach to:",
    answer: "gemmulae",
    options: ["kolateralia", "neuroblaszki", "gemmulae", "neurozomy", "dendrosomy"]
  },
  {
    numb: 22,
    question: "W gemmulae znajduje się m.in.:",
    answer: "mikrotubule",
    options: ["mikrotubule", "aparat Golgiego", "centriola", "duża ilość mitochondriów", "mielina"]
  },
  {
    numb: 23,
    question: "Gemmulae tworzą przede wszystkim synapsy:",
    answer: "chemiczne",
    options: ["elektryczne", "chemiczne", "mieszane", "hamujące", "akso-aksonalne"]
  },
  {
    numb: 24,
    question: "W gemmulae NIE występuje:",
    answer: "liczne mitochondria",
    options: ["mikrotubule", "rybosomy", "RER", "liczne mitochondria", "neurofilamenty"]
  },
  {
    numb: 25,
    question: "Akson rozgałęzia się na końcu tworząc:",
    answer: "telodendron",
    options: ["somatonie", "neuroplasty", "neuroblaszki", "dendrony", "telodendron"]
  },

  {
    numb: 26,
    question: "Neuron bezwypustkowy charakteryzuje się:",
    answer: "brakiem wyraźnych wypustek",
    options: ["brakiem dendrytów", "bardzo długim aksonem", "brakiem wyraźnych wypustek", "dużą średnicą włókna", "szybkim przewodzeniem"]
  },
  {
    numb: 27,
    question: "Neurony rzekomojednobiegunowe posiadają:",
    answer: "jedną wspólną wypustkę",
    options: ["jedną wspólną wypustkę", "wiele dendrytów", "wiele aksonów", "dwa bieguny", "brak aksonu"]
  },
  {
    numb: 28,
    question: "Neurony dwubiegunowe mają:",
    answer: "jeden dendryt i jeden akson",
    options: ["tylko akson", "jeden dendryt i jeden akson", "tylko dendryty", "dwie komórki satelitarne", "podwójną mielinę"]
  },
  {
    numb: 29,
    question: "Neurony wielobiegunowe mają:",
    answer: "wiele dendrytów i jeden akson",
    options: ["wiele dendrytów i jeden akson", "wiele aksonów", "jeden dendryt", "brak dendrytów", "brak aksonu"]
  },
  {
    numb: 30,
    question: "Szybkość przewodzenia wzrasta przy:",
    answer: "zwiększeniu średnicy aksonu",
    options: ["zwężeniu aksonu", "braku osłonki", "zwiększeniu średnicy aksonu", "braku dendrytów", "zaniku RER"]
  },

  {
    numb: 31,
    question: "Komórki satelitarne otaczają:",
    answer: "neurony rzekomojednobiegunowe",
    options: ["neurony ruchowe", "neurony rzekomojednobiegunowe", "neurony piramidowe", "neurony Purkinjego", "motoneurony"]
  },
  {
    numb: 32,
    question: "Synapsy chemiczne znajdują się głównie na:",
    answer: "gemmulae",
    options: ["perykarionach", "osłonce mielinowej", "gemmulae", "w błonie jądrowej", "w aksonach"]
  },
  {
    numb: 33,
    question: "Neuromelanina nadaje istocie czarnej kolor:",
    answer: "ciemny",
    options: ["ciemny", "jasny", "czerwony", "żółty", "zielony"]
  },
  {
    numb: 34,
    question: "Perykarion to:",
    answer: "ciało komórki nerwowej",
    options: ["koniec aksonu", "ciało komórki nerwowej", "osłonka mielinowa", "synapsa", "jądro astrocytu"]
  },
  {
    numb: 35,
    question: "Cytoszkielet neuronu tworzą głównie:",
    answer: "neurofilamenty i mikrotubule",
    options: ["aktyna i miozyna", "kolagen i elastyna", "neurofilamenty i mikrotubule", "keratyna", "fibryna"]
  },

  {
    numb: 36,
    question: "Akson inicjuje impuls w:",
    answer: "segmencie inicjalnym",
    options: ["segmencie inicjalnym", "telodendronie", "kolateraliach", "gemmulae", "dendronie"]
  },
  {
    numb: 37,
    question: "Dendryty zazwyczaj są:",
    answer: "krótsze niż aksony",
    options: ["dłuższe niż aksony", "krótsze niż aksony", "zawsze mielinowane", "jednobiegunowe", "pozbawione synaps"]
  },
  {
    numb: 38,
    question: "Najwięcej synaps z innymi neuronami tworzą:",
    answer: "dendryty z gemmulae",
    options: ["perykariony", "aksony", "dendryty z gemmulae", "osłonki mielinowe", "kolateralia"]
  },
  {
    numb: 39,
    question: "Lipofuscyna gromadzi się w neuronie w wyniku:",
    answer: "starzenia",
    options: ["starzenia", "intensywnego przewodzenia", "braku dopaminy", "uszkodzenia DNA", "synaptogenezy"]
  },
  {
    numb: 40,
    question: "Neurony dopaminergiczne istoty czarnej uczestniczą głównie w:",
    answer: "kontroli ruchów",
    options: ["czuciu bólu", "regulacji snu", "kontroli ruchów", "widzeniu", "odbiorze zapachów"]
  },

  {
    numb: 41,
    question: "W dendrytach charakterystycznym białkiem cytoszkieletu jest:",
    answer: "MAP2",
    options: ["białko tau", "desmina", "MAP2", "neurokrystalina", "aktyna"]
  },
  {
    numb: 42,
    question: "Białkiem charakterystycznym dla aksonu jest:",
    answer: "tau",
    options: ["tau", "MAP2", "keratyna", "aktomiozyna", "spektryna"]
  },
  {
    numb: 43,
    question: "Akson jest otoczony przez:",
    answer: "aksolemę",
    options: ["perykarion", "neuroleemę", "kolateralia", "aksolemę", "tubulinę"]
  },
  {
    numb: 44,
    question: "Średnica aksonu na całej długości jest:",
    answer: "stała",
    options: ["zmienna", "stała", "największa przy somie", "największa przy zakończeniu", "zależna od synaps"]
  },
  {
    numb: 45,
    question: "Akson jest pozbawiony:",
    answer: "ciałek Nissla",
    options: ["ciałek Nissla", "mikrotubul", "neurofilamentów", "mitochondriów", "pęcherzyków synaptycznych"]
  },

  {
    numb: 46,
    question: "Rozgałęzienia aksonu to:",
    answer: "kolateralia",
    options: ["neurotomie", "gemmulae", "dendrosomy", "neurokolce", "kolateralia"]
  },
  {
    numb: 47,
    question: "Końcowe rozgałęzienia aksonu to:",
    answer: "telodendron",
    options: ["dendron", "somaton", "telodendron", "neuroplax", "mikrotubulus terminalis"]
  },
  {
    numb: 48,
    question: "Cytoplazma aksonu zawiera głównie:",
    answer: "mikrotubule i neurofilamenty",
    options: ["mikrotubule i neurofilamenty", "liczne rybosomy", "gęste RER", "diktiosomy", "ziarna lipofuscyny"]
  },
  {
    numb: 49,
    question: "Transport aksonalny odbywa się:",
    answer: "w obu kierunkach",
    options: ["tylko w kierunku somy", "tylko w kierunku zakończeń", "w obu kierunkach", "wyłącznie dzięki dyfuzji", "przez kanały jonowe"]
  },
  {
    numb: 50,
    question: "Transport ortodromowy biegnie:",
    answer: "w kierunku zakończeń aksonu",
    options: ["do ciała komórki", "w kierunku zakończeń aksonu", "do dendrytów", "do astrocytów", "tylko w aksonach ruchowych"]
  },

  {
    numb: 51,
    question: "Transport antydromowy biegnie:",
    answer: "w kierunku ciała komórki",
    options: ["w kierunku ciała komórki", "do telodendronu", "do dendrytów", "do synaps pobudzających", "tylko przez dyneinę"]
  },
  {
    numb: 52,
    question: "Kinezyna odpowiada za transport:",
    answer: "ortodromowy",
    options: ["retrogradowy", "antyortodromowy", "ortodromowy", "somatyczny", "dendrytyczny"]
  },
  {
    numb: 53,
    question: "Dyneina odpowiada za transport:",
    answer: "retrogradowy",
    options: ["retrogradowy", "ortodromowy", "antyortodromowy", "transsynaptyczny", "mitochondrialny"]
  },
  {
    numb: 54,
    question: "Białko tau jest hiperfosforylowane przez:",
    answer: "GSK3",
    options: ["kinazę MLCK", "fosfatazę PP2", "PKA", "GSK3", "kalmodulinę"]
  },
  {
    numb: 55,
    question: "W chorobie Alzheimera powstają sploty zbudowane z:",
    answer: "patologicznego białka tau",
    options: ["patologicznego białka tau", "tubuliny", "MAP2", "aktyny", "desminy"]
  },

  {
    numb: 56,
    question: "Blaszki amyloidowe są zbudowane z:",
    answer: "beta-amyloidu",
    options: ["alfa-synukleiny", "prionów", "beta-amyloidu", "dopaminy", "neurofilamentów"]
  },
  {
    numb: 57,
    question: "Synapsa to połączenie czynnościowe:",
    answer: "neuronu z innym neuronem",
    options: ["dwóch mięśni", "neuronu z innym neuronem", "komórki glejowej z neuronem", "astrocytu z aksonem", "dendrytu z naczyniem"]
  },
  {
    numb: 58,
    question: "Synapsa aksono-somatyczna łączy akson z:",
    answer: "perykarionem",
    options: ["perykarionem", "dendrytem", "kolateralią", "astrocytem", "oligodendrocytem"]
  },
  {
    numb: 59,
    question: "Synapsa aksono-dendrytyczna łączy akson z:",
    answer: "dendrytem",
    options: ["aksonem", "somą", "dendrytem", "osłonką mielinową", "komórką Schwanna"]
  },
  {
    numb: 60,
    question: "Synapsa aksono-aksonowa łączy:",
    answer: "akson z aksonem",
    options: ["dendryt z somą", "soma z somą", "dendryt z aksonem", "oligodendrocyt z aksonem", "akson z aksonem"]
  },

  {
    numb: 61,
    question: "Aby otworzyć kanał sodowy w synapsie cholinergicznej potrzebne są:",
    answer: "2 cząsteczki ACh",
    options: ["4 cząsteczki ACh", "2 cząsteczki ACh", "1 cząsteczka ACh", "3 cząsteczki ACh", "2 cząsteczki Na⁺"]
  },
  {
    numb: 62,
    question: "Kanał sodowy w synapsie cholinergicznej otwiera się na około:",
    answer: "1 ms",
    options: ["10 ms", "0,1 ms", "1 ms", "100 ms", "0,01 ms"]
  },
  {
    numb: 63,
    question: "Receptor N2 to receptor:",
    answer: "nikotynowy acetylocholinergiczny",
    options: ["nikotynowy acetylocholinergiczny", "muskarynowy", "adrenergiczny", "serotoninowy", "dopaminowy"]
  },
  {
    numb: 64,
    question: "Tubokuraryna działa jako:",
    answer: "antagonista receptora N2",
    options: ["agonista receptora N2", "antagonist układu współczulnego", "inhibitor dyneiny", "antagonista receptora N2", "aktywator AChE"]
  },
  {
    numb: 65,
    question: "Tubokuraryna powoduje:",
    answer: "wiotczenie mięśni",
    options: ["skurcz mięśni", "wiotczenie mięśni", "drżenie mięśni", "skurcz mięśni gładkich", "pobudzenie neuronów ruchowych"]
  },

  {
    numb: 66,
    question: "Tubokuraryna blokuje przewodzenie poprzez:",
    answer: "blokadę receptorów nikotynowych",
    options: ["hamowanie uwalniania ACh", "niszczenie pęcherzyków synaptycznych", "blokadę receptorów nikotynowych", "blokadę kanałów potasowych", "blokadę kanałów wapniowych"]
  },
  {
    numb: 67,
    question: "W aksonie występuje tylko skąpa ilość:",
    answer: "SER",
    options: ["neurofilamentów", "mikrotubul", "mitochondriów", "SER", "błon synaptycznych"]
  },
  {
    numb: 68,
    question: "W aksonie mogą występować:",
    answer: "ciała wielopęcherzykowe",
    options: ["ciała wielopęcherzykowe", "ciałka Nissla", "polisomy", "ziarna glikogenu", "centriole"]
  },
  {
    numb: 69,
    question: "Akson NIE zawiera:",
    answer: "RER (ciałek Nissla)",
    options: ["neurofilamentów", "mitochondriów", "RER (ciałek Nissla)", "mikrotubul", "pęcherzyków synaptycznych"]
  },
  {
    numb: 70,
    question: "W transporcie retrogradowym uczestniczy:",
    answer: "dyneina",
    options: ["dyneina", "kinezyna", "MAP2", "peroksysyna", "synapsyna"]
  },

  {
    numb: 71,
    question: "W transporcie ortodromowym uczestniczy:",
    answer: "kinezyna",
    options: ["dyneina", "kinezyna", "MAP1", "neurotubulina", "aktyna"]
  },
  {
    numb: 72,
    question: "Transport aksonalny odbywa się po:",
    answer: "mikrotubulach",
    options: ["neuroleemach", "sietećce gładkiej", "mikrotubulach", "filamentach pośrednich", "kanałach jonowych"]
  },
  {
    numb: 73,
    question: "W chorobie Alzheimera jednym z objawów jest odkładanie:",
    answer: "beta-amyloidu",
    options: ["beta-amyloidu", "dopaminy", "serotoniny", "melatoniny", "GABA"]
  },
  {
    numb: 74,
    question: "Sploty neurofibrylarne składają się z:",
    answer: "patologicznego białka tau",
    options: ["beta-amyloidu", "MAP2", "tubuliny", "patologicznego białka tau", "neurofilamentów"]
  },
  {
    numb: 75,
    question: "Synapsy aksono-aksonowe pełnią często funkcję:",
    answer: "modulującą przewodzenie",
    options: ["wzmacniającą impuls", "przekazywania do mięśni", "modulującą przewodzenie", "blokowania mięśni gładkich", "produkcji neuroprzekaźników"]
  },

  {
    numb: 76,
    question: "Do neuroprzekaźników hamujących należą:",
    answer: "GABA i glicyna",
    options: ["dopamina i ACh", "adrenalina i NA", "glutaminian i histamina", "GABA i glicyna", "serotonina i dopamina"]
  },
  {
    numb: 77,
    question: "Do neuroprzekaźników pobudzających należy m.in.:",
    answer: "glutaminian",
    options: ["glutaminian", "GABA", "glicyna", "tauryna", "kwas GABA-B"]
  },
  {
    numb: 78,
    question: "Acetylocholina jest neurotransmiterem:",
    answer: "pobudzającym",
    options: ["wyłącznie hamującym", "wyłącznie w autonomicznym układzie współczulnym", "pobudzającym", "tylko w układzie czuciowym", "tylko w mięśniach gładkich"]
  },
  {
    numb: 79,
    question: "Serotonina pełni głównie funkcję neurotransmitera:",
    answer: "pobudzającego",
    options: ["hamującego w synapsach czuciowych", "pobudzającego", "toksycznego", "wyłącznie ruchowego", "wyłącznie w korze mózgowej"]
  },
  {
    numb: 80,
    question: "GABA działa głównie jako:",
    answer: "neuroprzekaźnik hamujący",
    options: ["neuroprzekaźnik hamujący", "pobudzający", "modulujący mięśnie gładkie", "aktywator kanałów wapniowych", "inhibitor glutaminianu"]
  },

  {
    numb: 81,
    question: "Ciałka Lewy’ego są zbudowane głównie z:",
    answer: "alfa-synukleiny i ubikwityny",
    options: ["beta-amyloidu", "białka tau", "lipofuscyny", "alfa-synukleiny i ubikwityny", "białka prionowego"]
  },
  {
    numb: 82,
    question: "Ciałka Lewy’ego występują w:",
    answer: "chorobie Parkinsona",
    options: ["korze wzrokowej", "móżdżku", "chorobie Parkinsona", "rdzeniu kręgowym", "istocie białej półkul"]
  },
  {
    numb: 83,
    question: "Choroba Parkinsona jest chorobą:",
    answer: "zwyrodnieniową OUN",
    options: ["mięśni szkieletowych", "pozakomórkowego kolagenu", "tkanki łącznej luźnej", "nerwów obwodowych", "zwyrodnieniową OUN"]
  },
  {
    numb: 84,
    question: "W chorobie Parkinsona dochodzi głównie do zwyrodnienia neuronów:",
    answer: "istoty czarnej",
    options: ["istoty czarnej", "jądra czerwiennego", "komórek Purkinjego", "jąder szwu", "hipokampa"]
  },
  {
    numb: 85,
    question: "Neurony istoty czarnej produkują:",
    answer: "dopaminę",
    options: ["serotoninę", "adrenalinę", "glutaminian", "dopaminę", "histaminę"]
  },

  {
    numb: 86,
    question: "Neurony istoty czarnej zawierają pigment:",
    answer: "neuromelaninę",
    options: ["melanopsynę", "beta-melanolinę", "neuromelaninę", "hemomelaninę", "chromomelaninę"]
  },
  {
    numb: 87,
    question: "Objawy choroby Parkinsona wynikają m.in. z niedoboru dopaminy w:",
    answer: "istocie czarnej i prążkowiu",
    options: ["jądrze ogoniastym", "istocie czarnej i prążkowiu", "korze skroniowej", "hipokampie", "móżdżku"]
  },
  {
    numb: 88,
    question: "W chorobie Parkinsona przewagę uzyskują neurony:",
    answer: "glutaminergiczne",
    options: ["dopaminergiczne", "serotoninergiczne", "glutaminergiczne", "noradrenergiczne", "GABAergiczne"]
  },
  {
    numb: 89,
    question: "Skutkiem przewagi neuronów glutaminergicznych jest nasilone hamowanie:",
    answer: "jąder wzgórza",
    options: ["móżdżku", "jąder podstawnych", "kory słuchowej", "jąder wzgórza", "jąder szwu"]
  },
  {
    numb: 90,
    question: "Który lek przenika przez barierę krew–mózg?",
    answer: "L-DOPA",
    options: ["L-DOPA", "dopamina", "adrenalina", "histamina", "GABA"]
  },

  {
    numb: 91,
    question: "L-DOPA stosuje się w leczeniu:",
    answer: "choroby Parkinsona",
    options: ["choroby Alzheimera", "SLA", "choroby Parkinsona", "pląsawicy Huntingtona", "neuropatii cukrzycowej"]
  },
  {
    numb: 92,
    question: "W procesie neurodegeneracyjnym Parkinsona uczestniczy układ dopaminergiczny m.in. w:",
    answer: "istocie czarnej",
    options: ["móżdżku", "istocie czarnej", "płacie potylicznym", "hipokampie", "rdzeniu przedłużonym"]
  },
  {
    numb: 93,
    question: "Układ dopaminergiczny obejmuje połączenia w:",
    answer: "mezokortyko-limbicznym",
    options: ["korze czuciowej", "jądrze czerwiennym", "mezokortyko-limbicznym", "korzeniu tylnym", "móżdżku"]
  },
  {
    numb: 94,
    question: "Układ dopaminergiczny występuje również w:",
    answer: "siatkówce",
    options: ["mięśniach gładkich", "nerkach", "wątrobie", "siatkówce", "nadnerczach"]
  },
  {
    numb: 95,
    question: "Układ noradrenergiczny obejmuje głównie:",
    answer: "miejsce sinawe",
    options: ["miejsce sinawe", "istotę czarną", "jądro podstawne Meynerta", "jądra szwu", "korę ruchową"]
  },

  {
    numb: 96,
    question: "Miejsce sinawe wytwarza:",
    answer: "noradrenalinę",
    options: ["serotoninę", "noradrenalinę", "dopaminę", "histaminę", "GABA"]
  },
  {
    numb: 97,
    question: "Układ cholinergiczny w kontekście Parkinsona obejmuje:",
    answer: "jądro podstawne Meynerta",
    options: ["istotę czarną", "jądra szwu", "jądro podstawne Meynerta", "móżdżek", "wzgórze"]
  },
  {
    numb: 98,
    question: "Jądro podstawne Meynerta jest ośrodkiem neuroprzekaźnika:",
    answer: "ACh",
    options: ["ACh", "dopaminy", "noradrenaliny", "serotoniny", "glutaminianu"]
  },
  {
    numb: 99,
    question: "Układ glutaminergiczny pełni w Parkinsonie rolę:",
    answer: "nasilającą hamowanie jąder wzgórza",
    options: ["pobudzającą mięśnie", "tylko w korze czuciowej", "hamującą jądra wzgórza", "tylko w synapsach autonomicznych", "nasilającą hamowanie jąder wzgórza"]
  },
  {
    numb: 100,
    question: "W chorobie Parkinsona dochodzi do zwiększenia aktywności neuronów:",
    answer: "glutaminergicznych",
    options: ["dopaminergicznych", "serotoninergicznych", "glutaminergicznych", "muskarynowych", "histaminergicznych"]
  },

  {
    numb: 101,
    question: "Niedobór dopaminy w Parkinsonie prowadzi do trudności w:",
    answer: "inicjacji ruchu",
    options: ["inicjacji ruchu", "widzeniu barw", "odczuwaniu bólu", "przewodnictwie czuciowym", "synaptogenezie"]
  },
  {
    numb: 102,
    question: "W Parkinsonie dochodzi do spowolnienia ruchowego, czyli:",
    answer: "bradykinezji",
    options: ["ataksji", "drżenia zamiarowego", "mioklonii", "bradykinezji", "paraplegii"]
  },
  {
    numb: 103,
    question: "Drżenie spoczynkowe jest charakterystyczne dla:",
    answer: "choroby Parkinsona",
    options: ["choroby Parkinsona", "SM", "choroby Huntingtona", "urazu móżdżku", "tężca"]
  },
  {
    numb: 104,
    question: "Objawem Parkinsona NIE jest:",
    answer: "hiperrefleksja",
    options: ["bradykinezja", "drżenie spoczynkowe", "sztywność mięśni", "maskowata twarz", "hiperrefleksja"]
  },
  {
    numb: 105,
    question: "W patogenezie Parkinsona udział biorą:",
    answer: "dopaminergiczny, noradrenergiczny, cholinergiczny i glutaminergiczny",
    options: ["wyłącznie neurony cholinergiczne", "tylko włókna współczulne", "tylko układ dopaminergiczny", "dopaminergiczny, noradrenergiczny, cholinergiczny i glutaminergiczny", "jedynie neurony GABAergiczne"]
  },

  {
    numb: 106,
    question: "Osłonki mielinowe w obwodowym układzie nerwowym tworzą:",
    answer: "komórki Schwanna",
    options: ["komórki Schwanna", "astrocyty", "oligodendrocyty", "mikroglej", "komórki satelitarne"]
  },
  {
    numb: 107,
    question: "Osłonki mielinowe w ośrodkowym układzie nerwowym tworzą:",
    answer: "oligodendrocyty",
    options: ["komórki Schwanna", "komórki satelitarne", "oligodendrocyty", "astrocyty", "ependymocyty"]
  },
  {
    numb: 108,
    question: "Włókna bezmielinowe przewodzą impuls z prędkością:",
    answer: "0,5–2 m/s",
    options: ["3–20 m/s", "0,5–2 m/s", "5–50 m/s", "20–100 m/s", "0,1–0,2 m/s"]
  },
  {
    numb: 109,
    question: "Włókna mielinowe przewodzą impuls z prędkością:",
    answer: "3–100 m/s",
    options: ["0,5–2 m/s", "1–5 m/s", "10–20 m/s", "3–100 m/s", "0,05–0,1 m/s"]
  },
  {
    numb: 110,
    question: "Osłonka mielinowa jest bogata w:",
    answer: "sfingomielinę i ceramidy",
    options: ["kolagen", "kwasy nukleinowe", "lipofuscynę", "glikogen", "sfingomielinę i ceramidy"]
  },

  {
    numb: 111,
    question: "Osłonka mielinowa składa się głównie z:",
    answer: "wielu warstw błony komórkowej lemocyta/oligodendrocyta",
    options: ["wielu warstw błony komórkowej lemocyta/oligodendrocyta", "aktyny i miozyny", "rybosomów", "mitochondriów", "włókien kolagenowych"]
  },
  {
    numb: 112,
    question: "W komórkach Schwanna jedna komórka otacza:",
    answer: "jeden odcinek aksonu",
    options: ["jeden odcinek aksonu", "wiele aksonów", "tylko dendryt", "kilka neuronów jednocześnie", "synapsę chemiczną"]
  },
  {
    numb: 113,
    question: "Oligodendrocyt może wytwarzać osłonkę dla:",
    answer: "wielu aksonów",
    options: ["tylko jednego aksonu", "dwóch aksonów", "wielu aksonów", "wyłącznie dendrytów", "synaps aksono-aksonowych"]
  },
  {
    numb: 114,
    question: "Mielinizacja w obwodowym układzie nerwowym odbywa się przez:",
    answer: "lemocyt owijający się wokół aksonu",
    options: ["astrocyt", "mikroglej", "ependymocyt", "lemocyt owijający się wokół aksonu", "oligodendrocyt migrujący z OUN"]
  },
  {
    numb: 115,
    question: "W mielinizacji lemocyt:",
    answer: "owija się wielokrotnie wokół aksonu",
    options: ["owija się wielokrotnie wokół aksonu", "przykleja się jedynie do somy neuronu", "nie zmienia swojej struktury", "zostaje wchłonięty przez akson", "tworzy jedną warstwę lipidową"]
  },

  {
    numb: 116,
    question: "W miarę nawijania mieliny cytoplazma lemocyta:",
    answer: "zostaje zepchnięta na obrzeże komórki",
    options: ["gromadzi się w centrum aksonu", "zostaje zepchnięta na obrzeże komórki", "zanika całkowicie", "tworzy jądro Ranviera", "wypełnia przestrzenie między warstwami mieliny"]
  },
  {
    numb: 117,
    question: "Jądro komórki Schwanna po wytworzeniu mieliny znajduje się:",
    answer: "na obrzeżu lemocyta",
    options: ["w centrum aksonu", "obok węzła Ranviera", "w środku warstw mieliny", "na obrzeżu lemocyta", "wewnątrz cytoplazmy aksonu"]
  },
  {
    numb: 118,
    question: "Mielina zwiększa przewodzenie impulsu dzięki:",
    answer: "skokowemu przewodzeniu impulsu",
    options: ["zwiększeniu ilości mitochondriów", "blokadzie jonów sodu", "skokowemu przewodzeniu impulsu", "poszerzeniu aksonu", "zwiększeniu liczby synaps"]
  },
  {
    numb: 119,
    question: "Skokowe przewodzenie impulsu odbywa się między:",
    answer: "węzłami Ranviera",
    options: ["węzłami Ranviera", "kolateraliami", "gemmulae", "telodendronami", "perykarionami"]
  },
  {
    numb: 120,
    question: "Największy wpływ na szybkość przewodzenia ma:",
    answer: "średnica aksonu i obecność mieliny",
    options: ["ilość neurofilamentów", "ilość mitochondriów", "długość perykarionu", "liczba synaps", "średnica aksonu i obecność mieliny"]
  },

  {
    numb: 121,
    question: "Włókna mielinowe przewodzą szybciej, ponieważ:",
    answer: "kanały jonowe są skupione w węzłach Ranviera",
    options: ["mają więcej RER", "kanały jonowe są skupione w węzłach Ranviera", "mają więcej rybosomów", "mają więcej mitochondriów", "akson jest krótszy"]
  },
  {
    numb: 122,
    question: "Mielina jest tworzona głównie z:",
    answer: "lipidów błonowych",
    options: ["DNA i RNA", "keratyny i elastyny", "polisacharydów", "lipidów błonowych", "hemoglobiny"]
  },
  {
    numb: 123,
    question: "Włókna bezmielinowe przewodzą wolniej, ponieważ:",
    answer: "impuls przebiega ciągle, a nie skokowo",
    options: ["impuls przebiega ciągle, a nie skokowo", "mają uszkodzone mikrotubule", "są pozbawione mitochondriów", "są zbyt szerokie", "nie zawierają kanałów jonowych"]
  },
  {
    numb: 124,
    question: "Komórki Schwanna uczestniczą w regeneracji aksonów przez:",
    answer: "tworzenie przewodów regeneracyjnych",
    options: ["tworzenie ciałek Lewy’ego", "syntezę GABA", "hamowanie wzrostu wypustek", "degradację mieliny", "tworzenie przewodów regeneracyjnych"]
  },
  {
    numb: 125,
    question: "Oligodendrocyty w porównaniu z lemocytami:",
    answer: "mogą mielinizować wiele aksonów na raz",
    options: ["regenerują aksony szybciej", "mają jedno jądro w każdej warstwie mieliny", "mogą mielinizować wiele aksonów na raz", "są obecne jedynie w zwojach", "nie wytwarzają mieliny"]
  },

  {
    numb: 126,
    question: "Warstwy mieliny powstają w wyniku:",
    answer: "wielokrotnego owijania się błony komórkowej komórki glejowej",
    options: ["wielokrotnego owijania się błony komórkowej komórki glejowej", "podziału jądra neuronu", "odkładania się kolagenu", "fuzji mitochondriów", "wydzielania neuroprzekaźników"]
  },
  {
    numb: 127,
    question: "Schemat mielinizacji w PNS charakteryzuje się:",
    answer: "spiralnym owijaniem lemocyta wokół aksonu",
    options: ["pomocą oligodendrocytów", "udziałem astrocytów", "podziałem komórki Schwanna", "spiralnym owijaniem lemocyta wokół aksonu", "odkładaniem wapnia"]
  },
  {
    numb: 128,
    question: "Warstwy mieliny są bogate w:",
    answer: "lipidy",
    options: ["glikogen", "lipidy", "hemoglobinę", "elastynę", "RNA"]
  },
  {
    numb: 129,
    question: "Włókna mielinowe są typowo:",
    answer: "szybkoprzewodzące",
    options: ["wolnoprzewodzące", "bezjądrowe", "szybkoprzewodzące", "pozbawione kanałów sodowych", "tylko w zwojach czuciowych"]
  },
  {
    numb: 130,
    question: "Cytoplazma lemocyta po mielinizacji pozostaje głównie w:",
    answer: "osłonce mielinowej peryferyjnej",
    options: ["osłonce mielinowej peryferyjnej", "środku aksonu", "węzłach Ranviera", "dendrytach", "mitochondriach"]
  },

];
