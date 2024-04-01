import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000);

console.log("Listening on http://localhost:3000");

export default app;
