import express from "express";
const app = express();
const port = "4177";

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
