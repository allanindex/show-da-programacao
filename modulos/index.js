const Pergunta = [
    pergunta1 = {
        id: '1',
        titulo: 'Usando flexbox, qual dos códigos a seguir centraliza uma DIV?',
        alternativas: {
            a: 'margin: 50%',
            b: 'margin: auto',
            c: 'justfy-content: center / align-items: center', 
            d: 'justfy-items: center / align-content: center'
        },
        resposta: 'c'
    },
    pergunta2 = {
        id: '2',
        titulo: 'Qual dos códigos abaixo está incorreto?',
        alternativas: {
            a: "alert('hello world')",
            b: "var teste = document.getElementByClassName('teste')",
            c: '@media screen and(max-width: 352px){ }', 
            d: "teste.addEventListener('click', ()=>{})"
        },
        resposta: 'b'
    },
    pergunta3 = {
        id: '3',
        titulo: 'Qual desses métodos de array não retorna um array com uma quantidade menor de elementos que o array de origem?',
        alternativas: {
            a: 'array.map()',
            b: 'array.reduce()',
            c: 'array.pop()', 
            d: 'array.filter()'
        },
        resposta: 'a'
    },
    pergunta4 = {
        id: '4',
        titulo: 'Quem inventou o javascript?',
        alternativas: {
            a: 'Brendan Eich',
            b: 'Bill gates',
            c: 'Guido Van Rossum', 
            d: 'Dennis Ritchie'
        },
        resposta: 'a'
    },
    pergunta5 = {
        id: '5',
        titulo: 'O código(`sua idade é:  ${idade}`) obedece qual padrão de escrita',
        alternativas: {
            a: 'shorthand',
            b: 'String Literal',
            c: 'Template String', 
            d: 'Template Literal'
        },
        resposta: 'c'
    },
    pergunta6 = {
        id: '6',
        titulo: "Qual é o operador utilizado no código:  return (isMember ? '$2.00' : '$10.00')?",
        alternativas: {
            a: 'mixed',
            b: 'concat',
            c: 'ternário', 
            d: 'o código apresenta erro'
        },
        resposta: 'c'
    },
    pergunta7 = {
        id: '7',
        titulo: 'Qual desses procedimentos configura-se como uma promisse?',
        alternativas: {
            a: 'Consumir uma api',
            b: 'Chamar uma função',
            c: 'Declarar uma variável', 
            d: 'Fazer um commit'
        },
        resposta: 'a'
    },
    pergunta8 = {
        id: '8',
        titulo: 'Qual o comando Git utilizado para unir duas branchs?',
        alternativas: {
            a: 'commit',
            b: 'merge',
            c: 'update', 
            d: 'pull'
        },
        resposta: 'b'
    },
    pergunta9 = {
        id: '9',
        titulo: "O que retorna este código? const variavel = null; console.log(variavel ?? 'não informado')",
        alternativas: {
            a: 'null',
            b: 'erro',
            c: 'undefined', 
            d: 'não informado'
        },
        resposta: 'd'
    },
    pergunta10 = {
        id: '10',
        titulo: 'Marque a opção cuja desestruturação está correta.',
        alternativas: {
            a: '[a,b, ...rest]',
            b: '[a,b ..rest]',
            c: '[a,b ...rest]', 
            d: '[a,b + ..rest]'
        },
        resposta: 'a'
    },
]

function home(){
    window.location.reload()
}


const iniciar = document.querySelector('#iniciar')
const main = document.querySelector('.container-main')
const containerPerguntas = document.querySelector('.container-perguntas')

containerPerguntas.style.display = 'none'

iniciar.addEventListener('click', ()=>{
    main.style.display = 'none'
    containerPerguntas.style.display = 'flex'  
})
const title = document.querySelector('.title')
const alternativa1 = document.querySelector('#alternativa1')
const alternativa2 = document.querySelector('#alternativa2')
const alternativa3 = document.querySelector('#alternativa3')
const alternativa4 = document.querySelector('#alternativa4')



let totalDePerguntas = 10
pergunta = 0

novaPergunta(pergunta)

function proximaPergunta(){
    if(pergunta == 9){
       fimDeJogo(10)
    }else{
    buttonProximaPergunta.style.display = 'none'
    pergunta++
    novaPergunta(pergunta)
    }
}

function novaPergunta(pergunta){
    if(pergunta < totalDePerguntas){
    title.innerHTML = Pergunta[pergunta].titulo
    alternativa1.innerHTML = Pergunta[pergunta].alternativas.a
    alternativa2.innerHTML = Pergunta[pergunta].alternativas.b
    alternativa3.innerHTML = Pergunta[pergunta].alternativas.c
    alternativa4.innerHTML = Pergunta[pergunta].alternativas.d
    }
}

const buttonProximaPergunta = document.querySelector('#proximaPergunta')
buttonProximaPergunta.style.display = 'none'

buttonProximaPergunta.addEventListener('click',()=>{
    alternativa1.style.backgroundColor = 'white'
    alternativa2.style.backgroundColor = 'white'
    alternativa3.style.backgroundColor = 'white'
    alternativa4.style.backgroundColor = 'white'

    alternativa1.style.pointerEvents = 'all';
    alternativa2.style.pointerEvents = 'all';
    alternativa3.style.pointerEvents = 'all';
    alternativa4.style.pointerEvents = 'all';
})

alternativa1.addEventListener('click', ()=>{
    veirificarResposta('a', alternativa1)
    alternativa1.style.pointerEvents = 'none';
    alternativa2.style.pointerEvents = 'none';
    alternativa3.style.pointerEvents = 'none';
    alternativa4.style.pointerEvents = 'none';
})
alternativa2.addEventListener('click', ()=>{
    veirificarResposta('b', alternativa2)
    alternativa1.style.pointerEvents = 'none';
    alternativa2.style.pointerEvents = 'none';
    alternativa3.style.pointerEvents = 'none';
    alternativa4.style.pointerEvents = 'none';
})
alternativa3.addEventListener('click', ()=>{
    veirificarResposta('c', alternativa3)
    alternativa1.style.pointerEvents = 'none';
    alternativa2.style.pointerEvents = 'none';
    alternativa3.style.pointerEvents = 'none';
    alternativa4.style.pointerEvents = 'none';
})
alternativa4.addEventListener('click', ()=>{
    veirificarResposta('d', alternativa4)
    alternativa1.style.pointerEvents = 'none';
    alternativa2.style.pointerEvents = 'none';
    alternativa3.style.pointerEvents = 'none';
    alternativa4.style.pointerEvents = 'none';
})
let pontuacao = 0
function veirificarResposta(opcao, alternativa){
let bitcoin = document.querySelector('.bitcoin')
   if(opcao == Pergunta[pergunta].resposta){
        alternativa.style.backgroundColor = 'green'
        buttonProximaPergunta.style.display = 'block'
        pontuacao = Pergunta[pergunta].id 
        bitcoin.innerHTML = pontuacao
   }else{
    alternativa.style.backgroundColor = 'red'
    fimDeJogo(pergunta)
   }
}

const cardFim = document.querySelector('.fimDoJogo')
const message = document.querySelector('#winnig-message')
function fimDeJogo(pontos){
    cardFim.style.display = 'flex'
    cardFim.style.flexDirection = 'column'
    message.innerHTML += pontos + ' bitcoin(s)'
}