/* VARIAVEIS 
-Os nomes podem iniciar com $, _, ou letras.
Podem conter números mas não iniciar com eles
-Case sensitive
;nome é diferente de Nome
-Não utilizar palavras reservadas
https://www.w3schools.com/js/js_reserved.asp
-Camel case
É comum nomearmos assim: nomeSobrenome */


var nome = "kate"
var idade = 29

console.log(nome,idade);


var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);


var nome = "Kate";
var idade = 29;
var comidaFavorita = "pizza" ;

console.log( nome,idade,comidaFavorita);

var nome = "Chloe";
var idade = "3 anos";
var frase = nome+ " tem " + idade ; 
/* ou colocar $para espaçament atraves do template string . passar expressões / variáveis dentro de ${}  */

console.log( frase)

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; 
 //Utilizando Template String


 let country = 'Brasil';
 let continent = 'America latina';
 let population = 2000

 console.log(country,continent,population);