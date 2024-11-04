const http = require('http');
const url = require('url');
const port = 3000;
const diccionario = ["realMadrid", "barcelona", "atleticoDeMadrid", "valencia", "athleticClub", "sevilla", 
    "espanyol", "realSociedad", "realBetis", "celtaDeVigo", "zaragoza", "deportivoDeLaCorunna", "valladolid", 
    "osasuna", "racingDeSantander", "sportingDeGijon", "villareal", "mallorca", "oviedo", "lasPalmas"];

function generarContraseñaAleatoria(palabras) {
    let contraseña = [];
    for (let i = 0; i < palabras; i++) {
        const randomIndex = Math.floor(Math.random() * diccionario.length);
        contraseña.push(diccionario[randomIndex]);
    }
    return contraseña;
}
const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const palabras = parseInt(queryObject.X) || 3;
    const contraseñaAleatoria = generarContraseñaAleatoria(palabras);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`Generar Contrasenna: ${contraseñaAleatoria}`);
});
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
// Para ejecutar el código, insertar en el navegador lo siguiente: "http://localhost:3000/?X=10" siendo el 10 el número de palabras 
// que queremos que tenga nuestra contraseña. Se puede modificar a nuestro gusto.