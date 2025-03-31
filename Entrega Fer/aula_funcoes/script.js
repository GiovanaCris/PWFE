//Funções: Bloco de código que tem como preocupação a reutilização deste.
//A ideia principal é fazer valer a modularidade e a simplicidade das características de um algoritmo.
//function NomeFunção (atributos) {} script que será usado
//cleanCode: codigo limpo / Não repetir códigos / variáveis e funções deve, ter nomes apropriados para o uso / os espaçamentos devem seguir as boas práticas / trazer a documentação necessária para ser manutenível

function saudar(){
    alert("Olá, lindo dia para nós! ")
    alert("galera energias mega positivas para lindo lindo e Israel")
}

//soma de dois valores
function soma (a, b){
    console.log(a)
   //console.log: Aparece somente no inspecionar, e o usuário não ve diretamente
    return a + b;
}

function somarVarios(a = 0, b = 0, c = 0, d = 0){
    return a + b + c + d
}

function converterMaiusculo(texto){
    return texto.toUpperCase();
}

//Para saber a quantidade de caracteres temos que chama-la
function qtdCaractere(frase){
    return frase.length;
}

//Limpa espaços finais e iniciais (          Texto           )
function limparEspacos(frase){
    return frase.trim();
}

//para fazer uma função ser executada temos que chama-la
saudar ()

//chamando a função soma
let resultado = soma (10,20)
//apresenta no corpo do HTML
document.write(`<p> ${resultado}`)

let resultadoVarios = somarVarios(10, 20, 5)
document.write(`<p> Somar vários ${resultadoVarios}`)

let frase = prompt("Informe uma frase")
let fraseGrande = converterMaiusculo(frase)
document.write(`<p> Frase grandeee: ${fraseGrande}`)

let qtddCaractere = qtdCaractere(frase)
document.write(` <p> quantidade de letras ${qtddCaractere}`)

let limpo = limparEspacos(frase)
document.write(`<p> Texto Limpo: ${limpo}`)

let h1 = window.document.getElementsByTagName('h1') [0];
h1.style.color = 'purple';

let corpo = window.document.body;
corpo.style.background = "rgb(212, 189, 241)";

//mudar cor de uma div
function mudarCor(){
    let div = document.getElementById("minhaDiv");

    if (div.style.backgroundColor == "purple"){
        div.style.backgroundColor = "rgb(146, 116, 185)"
    }
    else{
        div.style.backgroundColor = "purple"
    }
}