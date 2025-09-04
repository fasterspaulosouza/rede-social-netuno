document.addEventListener("DOMContentLoaded", function () {
  // Recuperando o item usuário
  const usuarioSalvo = localStorage.getItem("usuario");

  // Convertendo de volta para objeto
  const usuarioObj = JSON.parse(usuarioSalvo);

  document.querySelector("#imagemPerfil").src = usuarioObj.foto;
  document.querySelector("#nomePerfil").innerText = usuarioObj.nome;
  document.querySelector("#emailPerfil").innerText = usuarioObj.email;

  // Loggoff
  const btnSair = document.querySelector("#btnSair");
  btnSair.addEventListener("click", () => {
    localStorage.removeItem("usuario");
    alert("Usuário foi deslogado com sucesso!");
    window.location.href = "/index.html";
  });

  // Chamada API para carregar nossas publicaçoes:

  const requestOptions = {
    method: "GET",
  };

  fetch("http://localhost:3000/publicacoes", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      document.querySelector(".imgPerfilPub").src = result[0].foto;
      document.querySelector(".nomePerfilPub").innerText = result[0].nome;
      document.querySelector(".dataPerfilPub").innerText = result[0].dtcadastro;
      document.querySelector(".imgPub").src = result[0].imagem;
      document.querySelector(".textoPub").innerText = result[0].texto;
      document.querySelector(".urlPub").href = result[0].url;
    })
    .catch((error) => console.error(error));
});
