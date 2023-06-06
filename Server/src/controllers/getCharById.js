const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

module.exports = async (req, res) => {
  //localhost:3001/rickandmorty/onsearch/1
  try {
    const { id } = req.params;
    const response = await axios.get(URL + id);
    const { status, name, species, origin, image, gender } = response.data;
    const character = {
      id,
      status,
      name,
      species,
      origin,
      image,
      gender,
    };
    return name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }

  //axios
  //  .get(URL + id)
  //  .then((response) => {
  //    const { status, name, species, origin, image, gender } = response.data;
  //    const character = {
  //      id,
  //      status,
  //      name,
  //      species,
  //      origin,
  //      image,
  //      gender,
  //    };
  //    return name
  //      ? res.status(200).json(character)
  //      : res.status(404).send("Not found");
  //  })
  //  .catch((error) => {
  //    return res.status(500).send(error.message);
  //  });
};

//module.exports = { getCharById }; //lo ponemos dentro de un obj por si necesitamos exportar otra cosa

//const axios = require("axios");

//const getCharById = (res, id) => {
//  //creo la funcion con los parametros requeridos
//  axios
//    .get(`https://rickandmortyapi.com/api/character/${id}`)
//    .then((response) => response.data)
//    .then((data) => {
//      const character = {
//        id: data.id,
//        name: data.name,
//        gender: data.gender,
//        species: data.species,
//        origin: data.origin, //paso el objeto entero
//        image: data.image,
//        status: data.status,
//      };
//      res
//        .writeHead(200, { "Content-Type": "application/json" })
//        .end(JSON.stringify(character));
//    })
//    .catch((error) =>
//      res.writeHead(500, { "Content-Type": "text/plain" }).end(error.message)
//    );
//};

//module.exports = getCharById; //la exporto de esta manera
