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

  const caixaPublicacoes = document.getElementById("publicacoes");

  fetch("http://localhost:3000/publicacoes", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      caixaPublicacoes.innerHTML = "";
      let conteudo = "";

      result.forEach((pub) => {
        conteudo = `
          <div class="publicacao">
            <div class="pubHeader">
              <div>
                <img src="${pub.foto}" alt="Foto Perfil do ${
          pub.nome
        }" class="imgPerfilPub" />
              </div>
              <div>
                <h3 class="nomePerfilPub">${pub.nome}</h3>
                <h3 class="dataPerfilPub">${pub.dtcadastro}</h3>
              </div>
            </div>
            <div class="pubBody">
              <div class="boxTextoPub">
                <h3 class="textoPub">${pub.texto}</h3>
              </div>
              <a href="${pub.url || "#"}" target="_blank" class="urlPub">
                <img src="${pub.imagem || ""}" alt="" class="imgPub" />
              </a>
            </div>
            <div class="pubFooter">
              <img src="./public/images/favorite.png" alt="Curtir" />
              Curtir
            </div>
          </div>
        `;

        caixaPublicacoes.insertAdjacentHTML("beforeEnd", conteudo);
      });
    })
    .catch((error) => console.error(error));

  // GET AMIGOS

  const caixaAmigos = document.getElementById("amigos");

  fetch("http://localhost:3000/amigos", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      caixaAmigos.innerHTML = "";
      let conteudo = "";

      result.forEach((amg) => {
        conteudo = `
          <div class="amigo">
            <div class="boxImagemAmigo">
              <img src="${amg.foto}" alt="Foto da ${amg.nome}" />
            </div>
            <div class="boxInfoAmigo">
              <p>${amg.nome}</p>
              <p>${amg.email}</p>
            </div>
          </div>
        `;

        caixaAmigos.insertAdjacentHTML("beforeEnd", conteudo);
      });
    })
    .catch((error) => console.error(error));
});
