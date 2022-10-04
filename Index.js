const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "68f79f7faemsh2d16d3d0b362bb8p11c973jsn5980d857fa9a",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

fetch(
  "https://movie-database-alternative.p.rapidapi.com/?s=breaking%20bad&r=json&page=1",
  options
)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    const arrayPeliculas = data.Search;
    arrayPeliculas.map((element) => {
      const Titulo = element.Title;
      const Portada = element.Poster;
      const Año_estreno = element.Year;
      const Id = element.imdbID;
      const Tipo = element.Type;
      const Imagen = `
      <div>
        <img src="${Portada}"/>
        <h2>${Titulo}</h2>
        <small>Tipo: ${Tipo}</small>
        <small>Estreno en: ${Año_estreno}</small>
      </di>`;

      document.getElementById("container").innerHTML += Imagen;
    });
  })

  .catch((err) => {
    console.error(err);
  });
