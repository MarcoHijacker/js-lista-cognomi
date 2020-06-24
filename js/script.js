// Esercizio Lista Cognomi JS

// Dichiarazione variabili
// Database con 10 cognomi
var databaseCognomi = ["Rossi", "Verdi", "Bianchi", "Esposito", "Berardi", "Valente", "Balotelli", "Ronaldo", "Dybala", "Lapadula"];
// Riferimento sul bottone Aggiungi
var addCognome = document.getElementById('addCognome');

// Listener sul bottone Aggiungi
addCognome.addEventListener("click", function () {
  // Inizializzazione array con lista cognomi ordinati
  var databaseCognomiOrdinati = [];
  // Aggiungo un li contenente il titolo della lista nella ul listaCognomi
  document.getElementById('listaCognomi').innerHTML = "<li>Lista Cognomi A-Z</li>";

  // Prendo il cognome in input del cliente
  var userCognome = document.getElementById('userCognome').value;

  // Inserisco il cognome in coda all'array
  databaseCognomi.push(userCognome);

  // Ordino l'array alfabeticamente usando sort()
  databaseCognomiOrdinati = databaseCognomi.sort();

  // Uso il for per scrivere, uno a uno, gli elementi dell'array come singoli <li> nella ul
  for (var i = 0; i < databaseCognomiOrdinati.length; i++) {
    document.getElementById('listaCognomi').innerHTML += "<li>" + databaseCognomiOrdinati[i] + "</li>";
  }
  // Scorro il database coi cognomi ordinati alla ricerca del cognome inserito dall'utente, prendo l'indice i (aggiungendo uno per ripristinare la posizione reale rispetto a quella adottata dagli array)
  for (var i = 0; i < databaseCognomiOrdinati.length; i++) {
    if(databaseCognomiOrdinati[i] == userCognome) {
      document.getElementById('numCognome').innerHTML = i + 1;
    }
  }
  // Stampo a video il cognome e dove è stato inserito nella lista
  document.getElementById('posizCognome').innerHTML = "Il cognome " + userCognome + " è stato inserito in posizione: ";
});
