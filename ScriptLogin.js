let nomeUsuario = document.querySelector("#input");
let botao = document.querySelector("#botao");

botao.onclick = async () => {
    let nick = nomeUsuario.value;
    console.log(nick);
    await axios.post("https://chat-crng.onrender.com/entrar", nick).then(result => console.log(result.data)).catch(err => console.log(err));
    console.log(result.token);
}

