const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, uma caixa que consegue fabricar qualquer item que você comprar no conforto da sua casa, porém liberando muito CO2 no ar. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo da quantidade de poluição que poderia ser liberada. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar a caixa no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada ProductionBox, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você faça uma maquete sobre o uso da ProductionBox em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na caixa que utiliza a IA para que ela ajude a encontrar informações relevantes para o trabalho e produza uma maquete de alta qualidade rapidamente.",
                afirmacao: "Conseguiu utilizar a caixa para fabricar maquetes úteis."
            },
            {
                texto: "Faz a maquete com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para fazer sua maquete."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e montage. Nessa conversa também foi levantado um ponto muito importante: como a ProductionBox impactará o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a ProductionBox pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de fabricação e luta para abrir novos caminhos profissionais com a caixa."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização da caixa de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você foi almoçar, mas todos os pratos quebraram. E agora?",
        alternativas: [
            {
                texto: "Comprar pratos novos no mercado ao lado de sua casa",
                afirmacao: "Notou que muitas das pessoas que frequentavam o mercado pararam de comparecer no estabelecimento comercial."
            },
            {
                texto: "Criar novos pratos com a ProductionBox.",
                afirmacao: "Acelerou o processo de criação dos pratos utilizando a ProductionBox."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da ProductionBox. O problema é que o trabalho está totalmente igual ao dos outros que também fizeram na caixa. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a ProductionBox para fazer todas suas tarefas e agora se sente dependente dela para tudo."
            },
            {
                texto: "A caixa pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda ProductionBox reproduz orientações baseadas na empresa que programou e muito do que a caixa fazia, refletia o que pensava e por isso sabe que as coisas gerados pela caixa deve servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();