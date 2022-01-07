export default function getPokemonType({ value }) {
    let myRequest = new Request(`https://pokeapi.co/api/v2/type/${value}`, {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default"
    });
  
    let peticion = fetch(myRequest);
    return peticion.then((resp) => {
      return resp.json();
    });
  }
  