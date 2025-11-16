// Brazilian Portuguese Phrases for Budget Travelers
// Format: { pt: "Portuguese", ipa: "IPA pronunciation", en: "English meaning", category: "category" }

const PHRASES = [
    // Basics
    {
        pt: "Bom dia",
        ipa: "bõ ˈdʒi.ɐ",
        en: "Good morning",
        category: "basics"
    },
    {
        pt: "Boa tarde",
        ipa: "ˈbo.ɐ ˈtaʁ.dʒi",
        en: "Good afternoon",
        category: "basics"
    },
    {
        pt: "Boa noite",
        ipa: "ˈbo.ɐ ˈnoj.tʃi",
        en: "Good evening/night",
        category: "basics"
    },
    {
        pt: "Por favor",
        ipa: "puʁ fɐˈvoʁ",
        en: "Please",
        category: "basics"
    },
    {
        pt: "Obrigado / Obrigada",
        ipa: "o.bɾiˈɡa.du / o.bɾiˈɡa.dɐ",
        en: "Thank you (m/f)",
        category: "basics"
    },
    {
        pt: "De nada",
        ipa: "dʒi ˈna.dɐ",
        en: "You're welcome",
        category: "basics"
    },
    {
        pt: "Desculpa",
        ipa: "dʒisˈkuw.pɐ",
        en: "Sorry / Excuse me",
        category: "basics"
    },
    {
        pt: "Fala inglês?",
        ipa: "ˈfa.lɐ ĩˈɡles",
        en: "Do you speak English?",
        category: "basics"
    },
    {
        pt: "Eu não entendo",
        ipa: "ew nɐ̃w ẽˈtẽ.du",
        en: "I don't understand",
        category: "basics"
    },
    {
        pt: "Pode repetir?",
        ipa: "ˈpɔ.dʒi ʁe.peˈtʃiʁ",
        en: "Can you repeat?",
        category: "basics"
    },

    // Navigation & Directions
    {
        pt: "Onde fica...?",
        ipa: "ˈõ.dʒi ˈfi.kɐ",
        en: "Where is...?",
        category: "navigation"
    },
    {
        pt: "Como chego em...?",
        ipa: "ˈko.mu ˈʃe.ɡu ẽj",
        en: "How do I get to...?",
        category: "navigation"
    },
    {
        pt: "Fica longe?",
        ipa: "ˈfi.kɐ ˈlõ.ʒi",
        en: "Is it far?",
        category: "navigation"
    },
    {
        pt: "Fica perto?",
        ipa: "ˈfi.kɐ ˈpɛʁ.tu",
        en: "Is it close/nearby?",
        category: "navigation"
    },
    {
        pt: "À esquerda",
        ipa: "a isˈkɛʁ.dɐ",
        en: "To the left",
        category: "navigation"
    },
    {
        pt: "À direita",
        ipa: "a dʒiˈɾej.tɐ",
        en: "To the right",
        category: "navigation"
    },
    {
        pt: "Reto / Direto",
        ipa: "ˈʁe.tu / dʒiˈɾe.tu",
        en: "Straight ahead",
        category: "navigation"
    },
    {
        pt: "Aqui",
        ipa: "ɐˈki",
        en: "Here",
        category: "navigation"
    },
    {
        pt: "Ali / Lá",
        ipa: "ɐˈli / ˈla",
        en: "There",
        category: "navigation"
    },
    {
        pt: "Onde é o banheiro?",
        ipa: "ˈõ.dʒi ɛ u bɐˈɲej.ɾu",
        en: "Where is the bathroom?",
        category: "navigation"
    },

    // Prices & Money
    {
        pt: "Quanto custa?",
        ipa: "ˈkwɐ̃.tu ˈkus.tɐ",
        en: "How much does it cost?",
        category: "prices"
    },
    {
        pt: "Quanto é?",
        ipa: "ˈkwɐ̃.tu ɛ",
        en: "How much is it?",
        category: "prices"
    },
    {
        pt: "Muito caro",
        ipa: "ˈmũj.tu ˈka.ɾu",
        en: "Too expensive",
        category: "prices"
    },
    {
        pt: "Tem mais barato?",
        ipa: "tẽj majs bɐˈɾa.tu",
        en: "Do you have cheaper?",
        category: "prices"
    },
    {
        pt: "Aceita cartão?",
        ipa: "ɐˈsej.tɐ kaʁˈtɐ̃w",
        en: "Do you accept card?",
        category: "prices"
    },
    {
        pt: "Só dinheiro",
        ipa: "sɔ dʒĩˈɲej.ɾu",
        en: "Cash only",
        category: "prices"
    },
    {
        pt: "Tem troco?",
        ipa: "tẽj ˈtɾɔ.ku",
        en: "Do you have change?",
        category: "prices"
    },
    {
        pt: "Pode fazer desconto?",
        ipa: "ˈpɔ.dʒi fɐˈzeʁ desˈkõ.tu",
        en: "Can you give a discount?",
        category: "prices"
    },

    // Boats & River Travel
    {
        pt: "Onde pega o barco?",
        ipa: "ˈõ.dʒi ˈpe.ɡɐ u ˈbaʁ.ku",
        en: "Where do I catch the boat?",
        category: "boats"
    },
    {
        pt: "Que horas sai o barco?",
        ipa: "ki ˈɔ.ɾɐs saj u ˈbaʁ.ku",
        en: "What time does the boat leave?",
        category: "boats"
    },
    {
        pt: "Vai para...?",
        ipa: "vaj ˈpa.ɾɐ",
        en: "Does it go to...?",
        category: "boats"
    },
    {
        pt: "Quanto tempo demora?",
        ipa: "ˈkwɐ̃.tu ˈtẽ.pu deˈmɔ.ɾɐ",
        en: "How long does it take?",
        category: "boats"
    },
    {
        pt: "Tem lugar na rede?",
        ipa: "tẽj luˈɡaʁ nɐ ˈʁe.dʒi",
        en: "Is there space for a hammock?",
        category: "boats"
    },
    {
        pt: "Lancha ou barco?",
        ipa: "ˈlɐ̃.ʃɐ o ˈbaʁ.ku",
        en: "Fast boat or slow boat?",
        category: "boats"
    },
    {
        pt: "Para aqui",
        ipa: "ˈpa.ɾɐ ɐˈki",
        en: "Stop here",
        category: "boats"
    },
    {
        pt: "Porto / Cais",
        ipa: "ˈpoʁ.tu / kajs",
        en: "Port / Dock",
        category: "boats"
    },

    // Food & Markets
    {
        pt: "Tem comida?",
        ipa: "tẽj koˈmĩ.dɐ",
        en: "Do you have food?",
        category: "food"
    },
    {
        pt: "Quero água",
        ipa: "ˈkɛ.ɾu ˈa.ɡwɐ",
        en: "I want water",
        category: "food"
    },
    {
        pt: "Um café, por favor",
        ipa: "ũ kɐˈfɛ puʁ fɐˈvoʁ",
        en: "A coffee, please",
        category: "food"
    },
    {
        pt: "Tem fruta?",
        ipa: "tẽj ˈfɾu.tɐ",
        en: "Do you have fruit?",
        category: "food"
    },
    {
        pt: "O que é isso?",
        ipa: "u ki ɛ ˈi.su",
        en: "What is this?",
        category: "food"
    },
    {
        pt: "É gostoso?",
        ipa: "ɛ ɡosˈto.zu",
        en: "Is it tasty/good?",
        category: "food"
    },
    {
        pt: "Não come carne",
        ipa: "nɐ̃w ˈkɔ.mi ˈkaʁ.ni",
        en: "Doesn't eat meat (vegetarian)",
        category: "food"
    },
    {
        pt: "Suco natural",
        ipa: "ˈsu.ku nɐ.tuˈɾaw",
        en: "Fresh juice",
        category: "food"
    },
    {
        pt: "Marmita",
        ipa: "maʁˈmi.tɐ",
        en: "Lunch box / cheap meal",
        category: "food"
    },
    {
        pt: "Tem pão?",
        ipa: "tẽj pɐ̃w",
        en: "Do you have bread?",
        category: "food"
    },

    // Time & Schedules
    {
        pt: "Que horas são?",
        ipa: "ki ˈɔ.ɾɐs sɐ̃w",
        en: "What time is it?",
        category: "time"
    },
    {
        pt: "Abre que horas?",
        ipa: "ˈa.bɾi ki ˈɔ.ɾɐs",
        en: "What time does it open?",
        category: "time"
    },
    {
        pt: "Fecha que horas?",
        ipa: "ˈfe.ʃɐ ki ˈɔ.ɾɐs",
        en: "What time does it close?",
        category: "time"
    },
    {
        pt: "Amanhã",
        ipa: "ɐ.mɐˈɲɐ̃",
        en: "Tomorrow",
        category: "time"
    },
    {
        pt: "Hoje",
        ipa: "ˈo.ʒi",
        en: "Today",
        category: "time"
    },
    {
        pt: "Agora",
        ipa: "ɐˈɡɔ.ɾɐ",
        en: "Now",
        category: "time"
    },
    {
        pt: "Depois",
        ipa: "deˈpojs",
        en: "Later / After",
        category: "time"
    },
    {
        pt: "Quanto tempo?",
        ipa: "ˈkwɐ̃.tu ˈtẽ.pu",
        en: "How long? / How much time?",
        category: "time"
    },
    {
        pt: "Já volta",
        ipa: "ˈʒa ˈvɔw.tɐ",
        en: "Be right back / Coming back soon",
        category: "time"
    },

    // Essential Numbers
    {
        pt: "Um / Uma",
        ipa: "ũ / ˈũ.mɐ",
        en: "One (m/f)",
        category: "basics"
    },
    {
        pt: "Dois / Duas",
        ipa: "dojs / ˈdu.ɐs",
        en: "Two (m/f)",
        category: "basics"
    },
    {
        pt: "Três",
        ipa: "tɾes",
        en: "Three",
        category: "basics"
    },
    {
        pt: "Quatro",
        ipa: "ˈkwa.tɾu",
        en: "Four",
        category: "basics"
    },
    {
        pt: "Cinco",
        ipa: "ˈsĩ.ku",
        en: "Five",
        category: "basics"
    },
    {
        pt: "Seis",
        ipa: "sejs",
        en: "Six",
        category: "basics"
    },
    {
        pt: "Sete",
        ipa: "ˈse.tʃi",
        en: "Seven",
        category: "basics"
    },
    {
        pt: "Oito",
        ipa: "ˈoj.tu",
        en: "Eight",
        category: "basics"
    },
    {
        pt: "Nove",
        ipa: "ˈnɔ.vi",
        en: "Nine",
        category: "basics"
    },
    {
        pt: "Dez",
        ipa: "dɛs",
        en: "Ten",
        category: "basics"
    },
    {
        pt: "Onze",
        ipa: "ˈõ.zi",
        en: "Eleven",
        category: "basics"
    },
    {
        pt: "Doze",
        ipa: "ˈdɔ.zi",
        en: "Twelve",
        category: "basics"
    },
    {
        pt: "Treze",
        ipa: "ˈtɾe.zi",
        en: "Thirteen",
        category: "basics"
    },
    {
        pt: "Quatorze",
        ipa: "kwaˈtoʁ.zi",
        en: "Fourteen",
        category: "basics"
    },
    {
        pt: "Quinze",
        ipa: "ˈkĩ.zi",
        en: "Fifteen",
        category: "basics"
    },
    {
        pt: "Dezesseis",
        ipa: "de.zesˈsejs",
        en: "Sixteen",
        category: "basics"
    },
    {
        pt: "Dezessete",
        ipa: "de.zeseˈte.tʃi",
        en: "Seventeen",
        category: "basics"
    },
    {
        pt: "Dezoito",
        ipa: "deˈzoj.tu",
        en: "Eighteen",
        category: "basics"
    },
    {
        pt: "Dezenove",
        ipa: "de.zeˈnɔ.vi",
        en: "Nineteen",
        category: "basics"
    },
    {
        pt: "Vinte",
        ipa: "ˈvĩ.tʃi",
        en: "Twenty",
        category: "basics"
    },
    {
        pt: "Trinta",
        ipa: "ˈtɾĩ.tɐ",
        en: "Thirty",
        category: "basics"
    },
    {
        pt: "Quarenta",
        ipa: "kwaˈɾẽ.tɐ",
        en: "Forty",
        category: "basics"
    },
    {
        pt: "Cinquenta",
        ipa: "sĩˈkwẽ.tɐ",
        en: "Fifty",
        category: "basics"
    },
    {
        pt: "Sessenta",
        ipa: "seˈsẽ.tɐ",
        en: "Sixty",
        category: "basics"
    },
    {
        pt: "Setenta",
        ipa: "seˈtẽ.tɐ",
        en: "Seventy",
        category: "basics"
    },
    {
        pt: "Oitenta",
        ipa: "ojˈtẽ.tɐ",
        en: "Eighty",
        category: "basics"
    },
    {
        pt: "Noventa",
        ipa: "noˈvẽ.tɐ",
        en: "Ninety",
        category: "basics"
    },
    {
        pt: "Cem",
        ipa: "sẽj",
        en: "One hundred",
        category: "basics"
    },

    // Accommodation
    {
        pt: "Onde é a pousada?",
        ipa: "ˈõ.dʒi ɛ ɐ pouˈza.dɐ",
        en: "Where is the hostel/inn?",
        category: "accommodation"
    },
    {
        pt: "Tem quarto?",
        ipa: "tẽj ˈkwaʁ.tu",
        en: "Do you have a room?",
        category: "accommodation"
    },
    {
        pt: "Quanto é a noite?",
        ipa: "ˈkwɐ̃.tu ɛ ɐ ˈnoj.tʃi",
        en: "How much per night?",
        category: "accommodation"
    },
    {
        pt: "Quarto para uma pessoa",
        ipa: "ˈkwaʁ.tu ˈpa.ɾɐ ˈũ.mɐ peˈso.ɐ",
        en: "Room for one person",
        category: "accommodation"
    },
    {
        pt: "Quarto para duas pessoas",
        ipa: "ˈkwaʁ.tu ˈpa.ɾɐ ˈdu.ɐs peˈso.ɐs",
        en: "Room for two people",
        category: "accommodation"
    },
    {
        pt: "Tem ar condicionado?",
        ipa: "tẽj aʁ kõdʒioˈna.du",
        en: "Do you have AC?",
        category: "accommodation"
    },
    {
        pt: "Tem água quente?",
        ipa: "tẽj ˈa.ɡwɐ ˈkwẽ.tʃi",
        en: "Do you have hot water?",
        category: "accommodation"
    },
    {
        pt: "Tem WiFi?",
        ipa: "tẽj wi.fi",
        en: "Do you have WiFi?",
        category: "accommodation"
    },
    {
        pt: "Posso entrar agora?",
        ipa: "ˈpɔ.su ẽˈtɾaʁ ɐˈɡɔ.ɾɐ",
        en: "Can I check in now?",
        category: "accommodation"
    },
    {
        pt: "Que horas é o checkout?",
        ipa: "ki ˈɔ.ɾɐs ɛ u ˈtʃɛk.awt",
        en: "What time is checkout?",
        category: "accommodation"
    },
    {
        pt: "Tem cozinha?",
        ipa: "tẽj kuˈzĩ.ɲɐ",
        en: "Do you have a kitchen?",
        category: "accommodation"
    },
    {
        pt: "Posso lavar roupa?",
        ipa: "ˈpɔ.su laˈvaʁ ˈʁo.pɐ",
        en: "Can I wash clothes?",
        category: "accommodation"
    },

    // Problem Solving
    {
        pt: "Ajuda!",
        ipa: "ɐˈʒu.dɐ",
        en: "Help!",
        category: "problems"
    },
    {
        pt: "Tenho um problema",
        ipa: "ˈtẽ.ɲu ũ pɾoˈble.mɐ",
        en: "I have a problem",
        category: "problems"
    },
    {
        pt: "Estou perdido / perdida",
        ipa: "esˈtow peʁˈdʒi.du / peʁˈdʒi.dɐ",
        en: "I'm lost (m/f)",
        category: "problems"
    },
    {
        pt: "Perdi meu passaporte",
        ipa: "peʁˈdʒi mew pɐsɐˈpoʁ.tʃi",
        en: "I lost my passport",
        category: "problems"
    },
    {
        pt: "Perdi meu dinheiro",
        ipa: "peʁˈdʒi mew dʒĩˈɲej.ɾu",
        en: "I lost my money",
        category: "problems"
    },
    {
        pt: "Meu telefone está quebrado",
        ipa: "mew teˈle.fo.ni esˈta keˈbɾa.du",
        en: "My phone is broken",
        category: "problems"
    },
    {
        pt: "Preciso de policia",
        ipa: "pɾeˈsĩ.zu dʒi puˈlʒi.sɐ",
        en: "I need police",
        category: "problems"
    },
    {
        pt: "É seguro aqui?",
        ipa: "ɛ seˈɡu.ɾu ɐˈki",
        en: "Is it safe here?",
        category: "problems"
    },
    {
        pt: "Não tenho dinheiro",
        ipa: "nɐ̃w ˈtẽ.ɲu dʒĩˈɲej.ɾu",
        en: "I don't have money",
        category: "problems"
    },
    {
        pt: "Pode me ajudar?",
        ipa: "ˈpɔ.dʒi mi ɐʒuˈdaʁ",
        en: "Can you help me?",
        category: "problems"
    },
    {
        pt: "Não me sinta bem",
        ipa: "nɐ̃w mi ˈsĩ.tɐ bẽj",
        en: "I don't feel well",
        category: "problems"
    },
    {
        pt: "Preciso de médico",
        ipa: "pɾeˈsĩ.zu dʒi ˈme.dʒi.ku",
        en: "I need a doctor",
        category: "problems"
    },

    // Social Interaction
    {
        pt: "Qual é seu nome?",
        ipa: "ˈkwaw ɛ sew ˈno.mi",
        en: "What's your name?",
        category: "social"
    },
    {
        pt: "Meu nome é...",
        ipa: "mew ˈno.mi ɛ",
        en: "My name is...",
        category: "social"
    },
    {
        pt: "Prazer",
        ipa: "pɾaˈzeʁ",
        en: "Nice to meet you",
        category: "social"
    },
    {
        pt: "De onde você é?",
        ipa: "dʒi ˈõ.dʒi voˈse ɛ",
        en: "Where are you from?",
        category: "social"
    },
    {
        pt: "Eu sou de...",
        ipa: "ew sow dʒi",
        en: "I'm from...",
        category: "social"
    },
    {
        pt: "Você é turista?",
        ipa: "voˈse ɛ tuˈɾis.tɐ",
        en: "Are you a tourist?",
        category: "social"
    },
    {
        pt: "Você mora aqui?",
        ipa: "voˈse ˈmɔ.ɾɐ ɐˈki",
        en: "Do you live here?",
        category: "social"
    },
    {
        pt: "Quanto tempo você está aqui?",
        ipa: "ˈkwɐ̃.tu ˈtẽ.pu voˈse esˈta ɐˈki",
        en: "How long are you here?",
        category: "social"
    },
    {
        pt: "Que país você é?",
        ipa: "ki paˈis voˈse ɛ",
        en: "What country are you from?",
        category: "social"
    },
    {
        pt: "Você tem família aqui?",
        ipa: "voˈse tẽj fɐˈmʒi.lɐ ɐˈki",
        en: "Do you have family here?",
        category: "social"
    },
    {
        pt: "Isto é delicioso!",
        ipa: "ˈis.tu ɛ deliˈsjo.zu",
        en: "This is delicious!",
        category: "social"
    },
    {
        pt: "Você é muito legal",
        ipa: "voˈse ɛ ˈmũj.tu leˈɡaw",
        en: "You're very cool",
        category: "social"
    },
    {
        pt: "Que interessante!",
        ipa: "ki ĩ.teɾeˈsɐ̃.tʃi",
        en: "That's interesting!",
        category: "social"
    },
    {
        pt: "Você fala español?",
        ipa: "voˈse ˈfa.lɐ espaˈɲol",
        en: "Do you speak Spanish?",
        category: "social"
    },
    {
        pt: "Qual é o seu trabalho?",
        ipa: "ˈkwaw ɛ u sew tɾaˈbɐ.lʃu",
        en: "What's your job?",
        category: "social"
    }
];
