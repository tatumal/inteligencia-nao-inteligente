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
        enunciado: "voçẽ sabe como a internet pode influencia-lo a usar drogas?",
        alternativas: [
            {
                texto: "na verdade, ela não consegue me influenciar em tudo?",
                afirmacao: "a internet como vemos em nossos dias atuais, está a todo momento tentando influencia-lo a ter um certo comportamento, seja por pessoas, propagandas, e esses comportamentos são implantados sem nem que voçe perceba, comportamentos como uma vontade imensa de comprar coisas, ou de jogar algo, ou só de passar um tempo em redes sociais, esses comportamentos criam uma necessidade em voçe, uma necessidade cujo muitas vezes não temos controle sobre, portanto a internet acaba se tornando uma droga"
            },
            {
                texto: "eu não uso e não sei",
                afirmacao: "algo interessante a se observar é que na maioria das vezes o tema 'drogas' é necessariamente associado a algo pesado, e com isso nos automaticamente nos afastamos deste tema certo? porém se voçe pegar uma das carcteristicas da droga é a que voçe se torna dependente dela, ou seja, qualquer coisa pode se tornar uma droga, incluindo a internet, que em seu uso excessivo acaba mudando sua cabeça, pois a internet tem como caracteristica moldar comportamentos,já que, uma vez na internet voçe estara exposto a propagandas, pessoas, passa tempos, e por si só não são coisas ruins, porém em excesso podem haver danos"
            }
        ]
    },
    {
        enunciado: "tendo em vista nosas perguntas, voçe acha que a internet serve para bons propositos? ou isso diz mais sobre voçe?",
        alternativas: [
            {
                texto: "a internet nos mostra o que queremos certo? portanto ela não é necessáriamente boa ou ruim, ela nos mostra o que queremos",
                afirmacao: "e de fato afirmar que a internet é boa ou ruim é algo complicado pois depende muito do que voçe quer ver, porém ao mesmo tempo nosso mundo tenta a todo custo moldar comportamentos e isso inclui a internet, e isso se encaixa com nossas primeiras perguntas sobre aquecimento global, porque de fato grande parte desses comportamentos provém de uma ideologia consumista, ideologia esta que por sua vez é uma se não a que mais influencia o nosso problema com aquecimento global "
            },
            {
                texto: "a internet é ruim pois a todo momento ela tenta moldar comportamentos na gente, e esses comportamentos são por mkuitas vezes consumistas, então ela contribui para o aquecimento global",
                afirmacao: "afirmar que a internet é ruim por conta de sua tendencia a tentar te moldar como um consumista não esta totalmente errada, porém é importante lembra que por muitas das vezes nós escolhemos o que queremos ver, claro que náo só a internet mas o mundo como um todo tenta nos influenciar, porém a única forma de lutar contra isso é ter consciencia"
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
