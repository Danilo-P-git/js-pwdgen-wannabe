// chiedo il nome all'utente
var nome = prompt("Inserisci il tuo nome");
var nomePars = parseInt(nome);
// chiedo il cognome
var cognome = prompt("Inserisci il tuo cognome");
var cognomePars = parseInt(cognome);
//chiedo il colore preferito
var colorePreferito = prompt("Inserisci il tuo colorePreferito");
var colorePreferitoPars = parseInt(colorePreferito);
// Eseguo la somma e aggiungo 19
var somma = nome + cognome + colorePreferito + "19";
// Stampo
document.getElementById('password').innerHTML = somma
