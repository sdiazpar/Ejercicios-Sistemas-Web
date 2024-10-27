const http = require('http');
const os = require('node:os');
const process = require("process");
const port = 3000;

const server = http.createServer((req, res) => {
    res.end('<h1>!Mira la consola!</h1>');
});
server.listen(port, () => {
    console.log("Versión del sistema:", os.version());
    console.log("Tipo de sistema operativo:", os.type());
    console.log("Arquitectura", os.arch());
    console.log("Memoria Total (GB)", os.totalmem()/1073741824);
    console.log("Versión de node.js:", process.version);
});

// process.cpuUsage() // ReportsCPU usage.
// process.memoryUsage() // Returnanobjectwithmemoryusagedetails.
// os.uptime() // Returns the system uptime in seconds.
// process.uptime() // ReturnNode'suptimein seconds.
