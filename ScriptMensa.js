input = document.querySelector(".input");

input.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    evento.preventDefault(); 

   let quadro = document.querySelector(".input-group"); 

    const mensagem = input.value; 

    const paragrafo = document.createElement('p');
    paragrafo.setAttribute("class","mensagem");
    paragrafo.textContent = "Você: "+ mensagem;

   
    quadro.appendChild(paragrafo);

    
    input.value = '';
  }
});