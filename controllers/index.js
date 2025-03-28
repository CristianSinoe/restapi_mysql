exports.getUsers = (req, res) => {
  res.send("Lista de usuarios");
};

exports.postUser = (req, res) => {
  res.send("Usuario creado");
};

exports.deleteUser = (req, res) => {
  res.send("Usuario eliminado");
};
