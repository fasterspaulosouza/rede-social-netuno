document.addEventListener("DOMContentLoaded", function () {
  // Recuperando o item usuário
  const usuarioSalvo = localStorage.getItem("usuario");

  // Convertendo de volta para objeto
  const usuarioObj = JSON.parse(usuarioSalvo);

  console.log(usuarioObj);

  document.querySelector("#imagemPerfil").src = usuarioObj.foto;
  document.querySelector("#nomePerfil").innerText = usuarioObj.nome;
  document.querySelector("#emailPerfil").innerText = usuarioObj.email;

  const btnSair = document.querySelector("#btnSair");

  btnSair.addEventListener("click", () => {
    localStorage.removeItem("usuario");
    alert("Usuário foi deslogado com sucesso!");
    window.location.href = "/index.html";
  });
});
