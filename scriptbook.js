/* =========================================
   1. MENU
   ========================================= */
   
const btn=document.getElementById("menu-toggle");
const nav=document.querySelector(".main-nav");

btn.addEventListener("click",()=>{
    nav.classList.toggle("active");
});


/* =========================================
   1. BANCO DE DADOS ESTRUTURADO DAS SAGAS
   ========================================= */
const sagasDb = {
    "scifi-genesis": { 

        title: "Inverno Tecnológico", 
        genre: "scifi", 
        image: "src/capa1.png",
        description: "A série Inverno Tecnológico introduz o conceito de multiplas realidades através da exploração da viagem no tempo. Dalbert Kirian, protagonista do primeiro e segundo livos é quem inicia essa aventura épica ao retornar 100 anos no passado após o seu futuro ter sido destruido por Valkyrius; uma androide criada por ele mesmo com inteligência artificial que foi afetada por um virus e que, ao invés de servir a medicina para 'curar os humanos', ela acaba se convencendo de que precisa 'curar a humanidade' forçando a sua evolução até o apice.", 
        characters: [
            { name: "Dalbert Kirian", role: "Dalbert acreditava que o futuro estava em sua criação mais notável; Valkyrius, a esperança da humanidade em busca da cura das doenças e até o caminho para a imortalidade.", image: "src/personagem1.jpg" },
            { name: "Projeto Valkyrius", role: "O primeiro Bióide Sensciente nasceu de um ferro velho. Criada como vacina para doenças humanas, ela foi infectada por um biovirus que a corrompeu e a transformou em uma governante tirânica sobre a próxima evolução do homem.", image: "src/personagem2.jpg" },
            { name: "Kayle Beltran", role: " Kayle é (ou foi) uma das mentes mais brilhantes da Vision Corp., responsável pela criação da viagem no tempo.", image: "src/personagem3.jpg" },
            { name: "Andrew Kirian", role: "A mente privilegiada de um garoto da baixa classe média transformou um futuro onde seu neto, Dalbert Kirian, acabou criando um monstro a partir do seu sonho de criar a máquina capaz de curar as doenças dos seres humanos.", image: "src/personagem4.jpg" }
        ],

        books: [
            { title: "Projeto Valkyrius: Parte I", cover: "src/capa1.png", summary: "Após falhar no Projeto Valkyrius, o último homem, Dalbert, deve mudar o destino sombrio.", pages: 483, year: 2020, link: "https://www.amazon.com.br/gp/product/B088P79Q9H" },
            { title: "Care White e o Orbe da Criação: Parte II", cover: "src/capa2.png", summary: "Ecos do passado começam a reescrever o presente.", pages: 412, year: 2021, link: "https://www.amazon.com.br/gp/product/B08MFVMCCW" },
            { title: "Os Agentes da Sudden: Parte III", cover: "src/capa3.png", summary: "Ecos do passado começam a reescrever o presente.", pages: 412, year: 2021, link: "https://www.amazon.com.br/gp/product/B09DXGJ5FR" },
            { title: "Orphagem - A maquina vazia: Parte IV", cover: "src/capa4.png", summary: "Ecos do passado começam a reescrever o presente.", pages: 412, year: 2021, link: "#" },
            { title: "O Magistério Cósmico e as Relíquias do Tempo: Parte V", cover: "src/capa5.png", summary: "Ecos do passado começam a reescrever o presente.", pages: 412, year: 2025, link: "https://www.amazon.com.br/gp/product/B08FMT3LVN" },
            { title: "Inverno Tecnologico: Duologia Digital", cover: "src/capa6.png", summary: "Ecos do passado começam a reescrever o presente.", pages: 412, year: 2021, link: "https://www.amazon.com.br/gp/product/B09NWGS7TH" }
        ] 
    },

    "scifi-infuture": { 
        title: "Confronto dos Deuses", 
        genre: "scifi", 
        image: "src/capa10.jpg",
        description: "Lauren Courtney adquiriu o dom de ter visões ao se mudar para Nova Orleans, mas ela não sabia oq essas visões significavam até encontrar Joseph Liam; um rapaz misterioso que lhe conta então que os dois estão destinados a se reencontrar vida após vida, e que as visões acontecem quando estão próximos de se reencontrar novamente. Porém, uma antiga profecia egipcia sobrepõe o romance dos dois - sendo visto como uma 'abominação' e uma ameaça a ordem cósmica pelos antigos -, ela prediz que um ser divino irá transformar a realidade em que vivemos, então estranhos fenomenos climáticos, sobrenaturais e aparições de antigos personagens históricos (Joana D'arc, Tutankamon, Ramses II, Julio Cesar, Napoleão Bonaparte e afins) reencarnados como guerreiros imortais começam a acontecer simultaneamente e podem ser o mecanismo do apocalipse.", 
        characters: [
            { name: "Lauren Courtney", role: "Lauren tem visões em Nova Orleans, amor reencarnado com Joseph, e missão contra os Antigos.", image: "src/profile.png" },
            { name: "Joseph Liam", role: "Joseph desconhece origem, busca Lauren para amor fadado, guarda segredos e enfrentará a Grande Profecia.", image: "src/profile.png" },
            { name: "Patricia Hayven", role: "Patricia, amiga de Lauren, quer fazê-la viver ao máximo, temendo presságios e o perigoso futuro.", image: "src/profile.png" },
            { name: "Pessoa Envolvida em Mistérios", role: "Misterioso algoz de Lauren e Joseph conhece a profecia e os envolve em caos e medo.", image: "src/profile.png" }
        ],

        books: [
            { title: "Genesis: Entre Deuses e homens", cover: "src/capa10.jpg", summary: "Lauren tem visões e Joseph atrai figuras históricas para amor eterno contra entidades.", pages: 501, year: 2020, link: "https://www.amazon.com.br/gp/product/B08DW3F46X" },
            { title: "Cenesis:O Fim dos Tempos", cover: "src/capa11.jpg", summary: "Lauren e Joseph reavivam amor amaldiçoado, enfrentam novos inimigos e segredos, e lutam para impedir a profecia da batalha entre deuses e homens.", pages: 429, year: 2020, link: "https://www.amazon.com.br/gp/product/B08DVW514G" },
            { title: "Confronto dos Deuses: Duologia Digital:", cover: "src/capa12.png", summary: "Lauren e Joseph, almas gêmeas que se reencontram em cada vida, despertam a ira dos Antigos e preparam o mundo moderno para um grande revés.", pages: 939, year: 2021, link: "https://www.amazon.com.br/gp/product/B09NWGDHST" },
        ] 
    },
    
   "scifi-deusa": {
    title: "Filhas da Deusa",
    genre: "fantasy",
    image: "src/capa7.png",

    description: "A série Filhas da Deusa inaugura o universo de fantasia do autor ao apresentar o Santuário da Deusa, origem da magia e lar das verdadeiras bruxas. Após anos vivendo entre os humanos, Leavy Faumnach descobre ser a legítima herdeira do trono e retorna ao seu reino para enfrentar a irmã mais nova, Elda, responsável por instaurar um reinado de tirania após assassinar a própria mãe. Enquanto antigas profecias sobre a linhagem Faumnach começam a se cumprir, a disputa entre as duas irmãs ameaça decidir não apenas o destino das bruxas, mas também o equilíbrio de toda a magia do universo.",

    characters: [

        {
            name: "Leavy Faumnach",
            role: "A legítima herdeira do Santuário da Deusa foi exilada ainda criança para o mundo humano. Ao descobrir sua verdadeira origem, precisa decidir entre cumprir sua vingança contra a humanidade ou assumir o destino de restaurar o reino das bruxas.",
            image: "src/profile.png"
        },

        {
            name: "Elda Faumnach",
            role: "Rainha usurpadora e irmã mais nova de Leavy. Seduzida pela magia negra e pela ambição, assassinou a própria mãe para tomar o trono e escravizou o Santuário, tornando-se a maior ameaça ao equilíbrio da magia.",
            image: "src/profile.png"
        },

        {
            name: "Mappin",
            role: "A jovem Oráculo da Deusa possui o raro dom de ouvir a vontade divina e abrir portais entre os mundos. Fiel à antiga rainha, torna-se a principal guia de Leavy em sua jornada para recuperar o trono.",
            image: "src/profile.png"
        },

        {
            name: "Príncipe Ansel",
            role: "Herdeiro do Reino das Fadas e escolhido do Deus Sol. Dividido entre sua lealdade política a Elda e os sentimentos que desperta por Leavy, torna-se uma peça decisiva na guerra pelo Santuário.",
            image: "src/profile.png"
        }

    ],

    books: [

        {
            title: "Estigma: O Símbolo das Bruxas",
            cover: "src/capa7.png",
            summary: "Leavy descobre ser a verdadeira herdeira do Santuário da Deusa e retorna para enfrentar a irmã usurpadora, iniciando uma guerra entre antigas profecias, magia ancestral e o destino da própria humanidade.",
            pages: 530,
            year: 2022,
            link: "https://www.amazon.com.br/gp/product/B089T67J5R"
        },

        {
            title: "Filhas da Deusa II",
            cover: "src/capa8.png",
            summary: "Uma nova integrante da linhagem Faumnach assume o protagonismo enquanto as consequências da guerra entre Leavy e Elda redefinem o futuro das bruxas e das antigas profecias.",
            pages: 0,
            year: 0,
            link: "https://www.amazon.com.br/gp/product/B089T66W45"
        },

        {
            title: "Filhas da Deusa III",
            cover: "src/capa9.png",
            summary: "O desfecho da trilogia acompanha a conclusão do conflito da família Faumnach e revela o verdadeiro papel da Deusa na origem da magia e no destino do universo.",
            pages: 0,
            year: 0,
            link: "https://www.amazon.com.br/gp/product/B08JRKRG46"
        }

    ]
},
    "scifi-dragao": {
        title: "A Era das Dragulas", 
        genre: "scifi", 
        image: "src/capa18.png",
        
        description: "Doyon Edge acredita ser a mente mais importante da história desde que foi colocado à frente da divisão de biogenéti-ca da BIOG — uma renomada e suspeita megacorporação de pesquisas genéticas cujos objetivos questionáveis vão desde a coleta assistida do DNA de todas as espécies vivas até a garan-tia de que a humanidade poderia sobreviver a uma extinção em massa usando essas informações. E é essa convicção sobre o risco de uma extinção quase que total da humanidade que de-safia a inteligência e vaidade de Edge quando o surgimento de um espécime réptil desconhecido coloca em xeque o conheci-mento da ciência sobre a aurora da vida na terra e transforma o cotidiano da civilização em um pandemônio quando essa úni-ca criatura se transforma num exército de bestas draconicas dispostas a contestar o lugar do homem no topo da pirâmide evolutiva. Se sentindo desafiado, Edge precisará lidar com o seu imenso ego para descobrir de onde (e de quando) vieram e o que essas criaturas querem antes que a sua vida seja posta em risco, tendo em vista o desejo insaciável delas por destruir todo predador que possa ameaçar o seu desconhecido despertar e a sua existência.",
        
        
        books: [ 

            { 
            title: "A Era das Dragulas: Livro 1", 
            cover: "src/capa18.png", 
            summary: "A ascensão dos seres alados. O livro está disponível em livro físico pela UICLAP, LEIA AGORA!", 
            pages: 410, 
            year: 2025, 
            link: "https://loja.uiclap.com/titulo/ua33017/" 
            }
    ]
    },

    "scifi-dragao2": {
        title: "A Era da Praguejante", 
        genre: "scifi", 
        image: "src/capa19.png",
        description: "Desde a antiguidade, diferentes povos e cientistas discu-tem sobre a origem da vida na terra; Deus, entidades, magia ou puro acaso. A Queda, a Uprising e as Incursões mostraram a mais dura verdade para o homem: de que a vida na terra como conheciam havia terminado, e que ele havia sido derrotado, sendo substituído por uma espécie parasitária e obstinada apenas com a adaptação do mais forte. Como sobrevivente de uma sina cruel, Doyon Edge continua em uma arriscada saga pessoal para provar que é superior a atual espécie dominante que tirou dos seres humanos a sua humanidade, mas uma no-va ameaça vinda dos confins do universo com a intenção de destruir o que restou da vida na terra os colocará frente a fren-te mais uma vez para, enfim, determinar quem sobreviverá a chegada do Baaobaboon; A Arvore Praguejante.",
        books: [ 
            { title: "A Era da Praguejante: Livro 1", 
                cover: "src/capa19.png", 
                summary: "A vingança que se alastra. O livro está disponível em livro físico pela UICLAP, LEIA AGORA!", 
                pages: 356, year: 2026, 
                link: "https://loja.uiclap.com/titulo/ua33016/" 
            } 
        ]
    },
"scifi-manhut": {
    title: "Manhunt",
    genre: "scifi",
    image: "src/capa20.png",

    description: "Manhunt acompanha um grupo de jovens lançados em uma experiência extrema de sobrevivência após serem capturados para participar de uma caçada humana transmitida clandestinamente. Enquanto enfrentam ambientes hostis, armadilhas e caçadores profissionais, cada participante precisa decidir até onde está disposto a ir para continuar vivo. Entre alianças frágeis, traições e escolhas morais, a luta pela sobrevivência revela que o verdadeiro predador pode ser a própria natureza humana.",

    characters: [

        {
            name: "Ryan",
            role: "Jovem determinado a sobreviver ao jogo mortal. Sua liderança improvisada transforma um simples participante em símbolo de resistência contra os organizadores da caçada.",
            image: "src/profile.png"
        },

        {
            name: "Sarah",
            role: "Uma das sobreviventes mais habilidosas do grupo. Inteligente e estratégica, aprende rapidamente que confiar nas pessoas pode ser tão perigoso quanto enfrentar os próprios caçadores.",
            image: "src/profile.png"
        },

        {
            name: "Os Caçadores",
            role: "Mercenários treinados contratados para eliminar cada participante da competição. Para eles, a caçada representa apenas mais um espetáculo financiado por pessoas poderosas.",
            image: "src/profile.png"
        },

        {
            name: "O Organizador",
            role: "Figura misteriosa responsável pelo experimento. Manipula as regras do jogo e transforma a sobrevivência em entretenimento para uma audiência secreta.",
            image: "src/profile.png"
        }

    ],

    books: [

        {
            title: "Manhunt: A Caçada Humana",
            cover: "src/capa20.png",
            summary: "Um grupo de jovens é lançado em uma caçada humana onde sobreviver significa enfrentar inimigos, a natureza e os próprios limites morais.",
            pages: 436,
            year: 2023,
            link: "https://www.amazon.com.br/dp/B0C5TQXZQ1"
        },
                {
            title: "Manhunt: A Sobrevivência Humana",
            cover: "src/capa21.png",
            summary: "Tendo sido a primeira a entrar e a última a sair da caçada humana, Nova Bainshyer é agora a figura mais procurada de Oberon desde os antigos sussurradores; adeptos da liberdade e da democracia acima de tudo, até mesmo das próprias vidas. Liberte-se, pela sobrevivência. Liberte-se, pelas futuras gerações. Liberte-se!",
            pages: 436,
            year: 2023,
            link: "https://www.amazon.com.br/dp/B0C5TQXZQ1"
        }

    ]
},
"romance-indomavel": { 
    title: "Indomável Desejo", 
    genre: "romance", 
    image: "src/capa16.jpg",

    description: "Cecilia Winsloe é uma aspirante a atriz que carrega durante toda a vida o peso do preconceito e das dificuldades relacionadas à sua condição intersexual. Quando está prestes a desistir da própria vida, ela conhece Johanna Mitchel, uma médica marcada por experiências dolorosas no amor. Unidas por suas feridas e desejos, as duas protagonistas iniciam uma jornada de autodescoberta, aceitação, amor e desconstrução de conceitos tradicionais. A série explora preconceitos familiares, relacionamentos, identidade, superação e os desafios de construir uma felicidade verdadeira.",

    characters: [
        { 
            name: "Cecilia Winsloe", 
            role: "Protagonista da série, uma aspirante a atriz intersexual que enfrenta preconceitos, conflitos familiares e uma jornada de aceitação e descoberta pessoal.", 
            image: "src/profile.png" 
        },
        { 
            name: "Johanna Mitchel", 
            role: "Médica renomada marcada por relacionamentos fracassados, encontra em Cecilia uma oportunidade de reconstruir sua visão sobre amor, confiança e felicidade.", 
            image: "src/profile.png" 
        },
        { 
            name: "Charlie Cappas", 
            role: "Produtor e amigo de Cecilia que influencia sua trajetória profissional e abre portas para seus sonhos como atriz.", 
            image: "src/profile.png" 
        },
        { 
            name: "Pessoas do Passado", 
            role: "Personagens ligados aos conflitos familiares e emocionais que desafiam Cecilia e Johanna durante a construção da nova vida juntas.", 
            image: "src/profile.png" 
        }
    ],

    books: [
        { 
            title: "Meu Indomável Desejo", 
            cover: "src/capa16.jpg", 
            summary: "Cecilia Winsloe e Johanna Mitchel encontram uma conexão inesperada enquanto enfrentam preconceitos, traumas do passado e uma nova forma de enxergar o amor.", 
            pages: 558, 
            year: 2021, 
            link: "https://www.amazon.com.br/gp/product/B0881XRYZC" 
        },
        { 
            title: "Meu Indomável Prazer", 
            cover: "src/capa23.jpg", 
            summary: "Após conflitos e segredos abalarem a relação, Cecilia e Johanna precisam reconstruir a confiança enquanto enfrentam novas verdades sobre seus passados.", 
            pages: 0, 
            year: 2021, 
            link: "https://www.amazon.com.br/gp/product/B0881YGFTX" 
        },
        { 
            title: "Minha Indomável Paixão", 
            cover: "src/capa24.jpg", 
            summary: "Agora formando uma família, Cecilia e Johanna enfrentam novos desafios, escolhas difíceis e o conflito entre sonhos profissionais e a vida construída juntas.", 
            pages: 340, 
            year: 2022, 
            link: "https://www.amazon.com.br/gp/product/B0881XSV2M" 
        },
        { 
            title: "Indomável Lúxuria", 
            cover: "src/capa25.jpg", 
            summary: "A continuação da jornada de Cecilia e Johanna, explorando novas dificuldades, amadurecimento emocional e os desafios de manter um amor construído contra todas as expectativas.", 
            pages: 0, 
            year: 2022, 
            link: "https://www.amazon.com.br/gp/product/B09DXGNJ71" 
        },
        { 
            title: "Indomável Desejo: Box Completa", 
            cover: "src/capa26.jpg", 
            summary: "A coleção completa acompanha a trajetória de Cecilia e Johanna em uma história sobre amor, identidade, aceitação, desejo e superação de barreiras pessoais e sociais.", 
            pages: 0, 
            year: 2022, 
            link: "https://www.amazon.com.br/gp/product/B09NMNDJB4" 
        }
    ] 
},
"romance-professor": {
    title: "Professor Athos",
    genre: "romance",
    image: "src/capa17.png",

    description: "Em uma universidade onde conhecimento, ambição e desejo se encontram, uma relação inesperada nasce entre uma jovem estudante e seu professor. Athos é um homem admirado por sua inteligência, postura e autoridade, mas também carrega conflitos internos que desafiam seus próprios limites. Entre atração, dilemas morais e consequências emocionais, a história explora os limites entre poder, desejo, ética e escolhas pessoais dentro de uma relação marcada por intensidade e contradições.",

    characters: [
        { 
            name: "Athos", 
            role: "Professor universitário reconhecido por sua inteligência e presença marcante. Ele se vê dividido entre sua posição de autoridade, seus princípios e os sentimentos que surgem em uma relação inesperada.", 
            image: "src/profile.png" 
        },
        { 
            name: "Protagonista", 
            role: "Uma estudante determinada que entra em uma relação complexa com Athos, enfrentando conflitos internos, descobertas pessoais e as consequências de se envolver em uma situação cheia de desafios.", 
            image: "src/profile.png" 
        },
        { 
            name: "Personagens do Ambiente Acadêmico", 
            role: "Colegas, professores e pessoas próximas que representam os julgamentos, pressões sociais e conflitos que cercam a relação entre Athos e a protagonista.", 
            image: "src/profile.png" 
        }
    ],

    books: [
        { 
            title: "Professor Athos", 
            cover: "src/capa17.png", 
            summary: "Athos é um professor universitário que vê sua rotina transformada ao desenvolver uma conexão intensa e controversa com uma estudante. Entre desejo, limites éticos e sentimentos conflitantes, os dois precisam lidar com as consequências de uma relação que desafia expectativas e escolhas pessoais.", 
            pages: 280, 
            year: 2023, 
            link: "#" 
        }
    ] 
},
    "romance-sullivan": {
    title: "Sullivan, o Jovem Tutor",
    genre: "romance",
    image: "src/capa22.png",

    description: "Sullivan sempre acreditou que poderia controlar os caminhos da própria vida, mas descobre que alguns sentimentos não podem ser planejados. Ao assumir o papel de tutor e se aproximar de alguém que muda completamente sua visão sobre amor e responsabilidade, ele precisa enfrentar inseguranças, traumas e escolhas difíceis. Uma história sobre amadurecimento, recomeços e a coragem necessária para permitir que alguém faça parte da sua vida.",

    characters: [
        {
            name: "Sullivan",
            role: "Jovem tutor que carrega suas próprias dúvidas e conflitos internos. Ao assumir uma nova responsabilidade, descobre que amar exige mais do que desejo: exige coragem, compreensão e maturidade.",
            image: "src/profile.png"
        },
        {
            name: "Jovem Tutorada",
            role: "Uma jovem que transforma a rotina de Sullivan e o desafia a enxergar sentimentos, responsabilidades e relacionamentos de uma maneira diferente.",
            image: "src/profile.png"
        },
        {
            name: "Família e Pessoas Próximas",
            role: "Personagens que influenciam as escolhas de Sullivan, representando expectativas, julgamentos e os desafios emocionais presentes na construção de novos laços.",
            image: "src/profile.png"
        }
    ],

    books: [
        {
            title: "Sullivan, o Jovem Tutor",
            cover: "src/capa22.png",
            summary: "Sullivan assume uma responsabilidade inesperada que muda completamente sua vida. Entre desafios pessoais, sentimentos inesperados e a necessidade de amadurecer, ele descobre que o amor verdadeiro exige coragem para enfrentar medos, preconceitos e as próprias inseguranças.",
            pages: 250,
            year: 2024,
            link: "https://www.wattpad.com/story/212839613-sullivan-o-jovem-tutor"
        }
    ]
},
};

/* =========================================
   2. MATRIZ DE EXIBIÇÃO INICIAL
   ========================================= */
const displayBooks = [
    { title: "Inverno Tecnologico", sagaId: "scifi-genesis", genre: "scifi", summary: "O primeiro capítulo da sobrevivência galáctica onde o tempo está quebrado.", image: "src/capa1.png" },
    { title: "Confronto dos Deuses", sagaId: "scifi-infuture", genre: "scifi", summary: "Corporações e andróides em um embate existencial nas ruínas do futuro.", image: "src/capa10.jpg" },
    { title: "Filhas da Deusa", sagaId: "scifi-deusa", genre: "scifi", summary: "O Simbolo das Bruxas é o primeiro de uma série de 3 livros.", image: "src/capa7.png" },
    { title: "A Era das Dragulas", sagaId: "scifi-dragao", genre: "scifi", summary: "O Reino dos Homens chegou ao fim.", image: "src/capa18.png" },
    { title: "A Era da Praguejante", sagaId: "scifi-dragao2", genre: "scifi", summary: "O Reino dos Dragrões Chegou ao Fim", image: "src/capa19.png" },
    { title: "Manhunt", sagaId: "scifi-manhut", genre: "scifi", summary: "Uma caçada pela sobrevivência.", image: "src/capa20.png" },
    { title: "Indomável Desejo", sagaId: "romance-indomavel", genre: "romance", summary: "Um romance poderoso onde paixão e poder colidem irrevogavelmente.", image: "src/capa16.jpg" },
    { title: "Professor Athos", sagaId: "romance-professor", genre: "romance", summary: "Onde o desejo encontra o poder, nada é apenas professor e aluna.", image: "src/capa17.png" },
    { title: "Sullivan, o Jovem Tutor", sagaId: "romance-sullivan", genre: "romance", summary: "Sullivan descobre que amar também exige coragem para recomeçar sempre.", image: "src/capa22.png" }
];

/* =========================================
   3. INJEÇÃO DOS CARDS NA PÁGINA
   ========================================= */
const scifiGrid = document.getElementById('scifi-grid');
const romanceGrid = document.getElementById('romance-grid');

if (scifiGrid && romanceGrid) {
    displayBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <div class="book-cover">
                <img src="${book.image}" alt="Capa de ${book.title}" class="book-cover-img" loading="lazy" onerror="this.src='https://via.placeholder.com/220x320/222/00e5ff?text=SEM+CAPA'">
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.summary}</p>
                <button class="btn-saga" data-saga="${book.sagaId}">Explorar Dossiê</button>
            </div>
        `;
        if (book.genre === 'scifi') scifiGrid.appendChild(card);
        else romanceGrid.appendChild(card);
    });
}

/* =========================================
   4. SISTEMA DE MODAL BLINDADO (DEFENSIVO)
   ========================================= */
function openSagaModal(sagaId) {
    const sagaData = sagasDb[sagaId];
    if (!sagaData) {
        console.error("Saga não encontrada no banco de dados:", sagaId);
        return;
    }

    const modal = document.getElementById('saga-modal');
    if (!modal) return; // Aborta se o modal inteiro não existir no HTML

    // Verificações defensivas: Só aplica se a tag existir no HTML
    const modalCardTheme = document.getElementById('modal-card-theme');
    if (modalCardTheme) modalCardTheme.className = 'modal-card ' + (sagaData.genre === 'scifi' ? 'theme-modal-scifi' : 'theme-modal-romance');

    const titleEl = document.getElementById('modal-title');
    if (titleEl) titleEl.textContent = sagaData.title;

    const genreEl = document.getElementById('modal-tech-genre');
    if (genreEl) genreEl.textContent = sagaData.genre === 'scifi' ? 'Ficção Científica & Sobrevivência' : 'Romance & Drama';

    const descEl = document.getElementById('modal-desc');
    if (descEl) descEl.textContent = sagaData.description;

    const coverEl = document.getElementById('modal-cover-img');
    if (coverEl) coverEl.src = sagaData.image || '';

    // Renderiza a lista de livros
    const bookListEl = document.getElementById('modal-book-list');
    if (bookListEl) {
        bookListEl.innerHTML = '';
        if (sagaData.books) {
            sagaData.books.forEach(book => {
                const article = document.createElement('article');
                article.className = 'book-detailed-card';
                article.innerHTML = `
                    <div class="book-detailed-cover">
                        <img src="${book.cover}" alt="Capa" loading="lazy" onerror="this.src='https://via.placeholder.com/150x220/222/00e5ff?text=SEM+CAPA'">
                    </div>
                    <div class="book-detailed-info">
                        <h4 class="book-detailed-title">${book.title}</h4>
                        <div class="book-detailed-meta">
                            <span><strong>Publicação:</strong> ${book.year || 'N/A'}</span>
                            <span class="meta-separator">|</span>
                            <span><strong>Páginas:</strong> ${book.pages || 'N/A'}</span>
                        </div>
                        <p class="book-detailed-summary">${book.summary}</p>
                        <a href="${book.link || '#'}" target="_blank" class="btn-book-action"> <span>[ LIBERAR ACESSO ]</span></a>
                    </div>
                `;
                bookListEl.appendChild(article);
            });
        }
    }

  
    /* =========================================
    PERSONAGENS
    ========================================= */

    const charsSection = document.getElementById("modal-characters-section");
    const charsList = document.getElementById("modal-characters-list");

    if(charsSection && charsList){

        /* LIMPA SEMPRE O MODAL ANTES */
        charsList.innerHTML="";
        if(sagaData.characters && sagaData.characters.length){
            charsSection.classList.remove("hidden");
            sagaData.characters.forEach(character=>{
                charsList.innerHTML += `
                <article class="character-card">
                    <img
                        src="${character.image}"
                        alt="${character.name}"
                        class="character-avatar"
                        loading="lazy"
                        onerror="this.src='https://via.placeholder.com/150/555/fff?text=?'">

                    <div class="character-info">
                        <h4>${character.name}</h4>
                        <p>${character.role}</p>
                    </div>
                </article>
                `;
            });
        }else{
            charsSection.classList.add("hidden");
        }

    }
    /* =========================================
    abertura Forçada
    ========================================= */

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSagaModal() {
    const modal = document.getElementById('saga-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// 5. ESCUTADORES GLOBAIS (Não dependem da tag <main>)
document.body.addEventListener('click', (e) => {
    // Escuta cliques nos botões de abrir
    const btnOpen = e.target.closest('.btn-saga');
    if (btnOpen) {
        e.preventDefault();
        openSagaModal(btnOpen.getAttribute('data-saga'));
    }

    // Escuta cliques nos botões de fechar e no fundo do modal
    if (e.target.closest('.top-close') || e.target.closest('#close-modal-bottom') || e.target.id === 'saga-modal') {
        closeSagaModal();
    }
});

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('saga-modal');
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeSagaModal();
    }
});