import app from "./app";

const port = 3031;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`Click em http://localhost:${port}`);
});
