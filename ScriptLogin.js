let nomeUsuario = document.querySelector("#input");
let botao = document.querySelector("#botao");

botao.onclick = async () => {
  let nick = nomeUsuario.value;
  console.log(nick);
  try {
    const response = await axios.post("https://2a8eaf29-2e50-4e68-9c67-e84183a2d3e9.mock.pstmn.io/entrar",{ nick });
    console.log(response.data);
    console.log(response.data.token); 
  } catch (error) {
    console.log(error);
  }
};
