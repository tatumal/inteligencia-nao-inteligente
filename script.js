const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "voçe sabia que grande parte da energia gerada no mundo, também é a mesma que pode causar seu fim? isso acontece pois 89,1% da energia produzida no mundo provém de fontes não renováveis",
        alternativas: [
            {
                texto: "e como isso me afeta?",
                afirmacao: "a energia não renovável te afeta, assim como afeta seus pais,e a todos nós pois como se trata de uma energia com data de validade limitada não sabemos ao certo o futuro da geração de energia, e a energia é responsavel por muitas coisas, como por exemplo a sua internet. "
            },
            {
                texto: "mas eu não ligo",
                afirmacao: "não se importar com as fontes de enrgia pode ser algo muito prejudicial, pois isso envolve muito mias do que voçẽ possa imaginar, a energia esta presente em tudo desde o que comemos e até a nossa comunicação, e isso ocorre pois grande parte de nossa comunicação moderna provém da internet, cujo é 100% depenente de enrgia "
            }
        ]
    },
    {
        enunciado: "é importante salientar que grande parte da energia não renovável tambem é extremamente prejudicial para a natureza",
        alternativas: [
            {
                texto: "bem, mas isso não é muito legal né?",
                afirmacao: "e de fato, a verdade é que se continuarmos no ritmo em que estamos criando energia não renovavel, a natureza não tera um desfecho muito legal, mas como isso nos afeta? básicamente em muito, pois dependemos da natureza para tudo, e quando falo em tudo, é em tudo mesmo, desde comer e até respirar"
            },
            {
                texto: "mas e dai? eu não vivo no mato",
                afirmacao: "agora, pensar que não somos dependentes da natureza de forma nenhuma é algo totalmente errado, e muito pelo contrário, dependemos dela para tudo, inclusive viver, o oxigenio cujo voçẽ respira é provido por quem? pela natureza obviamente."
            }
        ]
    },
    {
        enunciado: "certamente voçẽ usa muito a internet, agora voçẽ sabe como nossa atual matriz energética globar pode prejudicar a internet?",
        alternativas: [
            {
                texto: "sim, a internet só existe graças a energia certo? e nossa matriz energetica global não é muito renovável",
                afirmacao: "e de fato, como eu já disse anteriormente nossa internet só existe graças a energia, e como grande parte de nossa energia é gerada a partir de fontes não renováveis isso também tornar a internet não renovável"
            },
            {
                texto: "não, eu não sei",
                afirmacao: "como já disse anteriormente, a internet é totalmente dependente de nossa energia e como nossa energia é composta majoritariamente de fontes não renovaveis, isso tornar a internet em algo não renovável também"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
