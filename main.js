
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o número aproximado de π?");

    
    if (respostaTime.toLowerCase() === "3,14") {
      alert("Isso mesmo! Parabéns!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  } 
}

// Chamada da função para iniciar o processo
verificarTime();

  
