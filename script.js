document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n < 1 || n > 50 || isNaN(n)) return "Você é Burro? O Numero Deve Ser De 0 A 50!";
    if (n <= 10) return "A seu dabinho Vai chorar se Ficar Sabendo Disso!";
    if (n <= 20) return "acabou o amor?!";
    if (n <= 30) return "vish amo mais em vai deixar?! ";
    if (n <= 40) return "QUEEEEE SÒ ISSO??? já tem outro né :(";
    return "Que FoFo, Mas Claramente eu te amo Mais!";
  }

  let timeout 

  function validarNumero() {
    if (timeout) clearTimeout(timeout)
    let inputNumero =document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(()=> {
      caixaDeMensagem.style.display = 'none'
    }, 2000)
  }
