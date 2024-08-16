const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); //Se corrige id
const $b = document.querySelector('#blog'); //Se corrige id
const $l = document.querySelector('.location');




async function displayUser(username) { //Funcion asincrona
  try{//meter en una funcion try para que jale informacion de la Api
  $n.textContent = 'cargando...';

  const response = await fetch(`${usersEndpoint}/${username}`);
  
  const data = await response.json(); //Convierte  a JSON
  
  // Actualiza el contenido de los elementos
  $n.textContent = `${data.name}`; //Se cambia a comillas invertidas
  $b.textContent = `${data.blog}`; 
  $l.textContent = `${data.location}`;

}catch (err){ 
  handleError(err) //en dado caso de que marque error, manda a llamar la funcion handleError
}
}
//Ya queda utilizada la funcion handleError
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}


// Llama a la función
displayUser('stolinski');