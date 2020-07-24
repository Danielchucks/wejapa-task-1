const http = require("http");

const port = 3000 || process.env.PORT;

const server = http.createServer((req, res) => {
   if (req.method === "GET" && req.url === "/") {
      res.write("Hello World, welcome to Wejapa Internships");
      res.end(200);
   } else {
      res.end("Error 404!!!, PAGE NOT FOUND");
   }
});

server.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
