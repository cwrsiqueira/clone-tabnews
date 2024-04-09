function status(request, response) {
  response
    .status(200)
    .json({ resposta: "ação de teste de funcionalidade da API" });
}

export default status;