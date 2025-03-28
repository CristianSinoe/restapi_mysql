const { User } = require("../database/models");

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
};

// Crear usuario
exports.createUser = async (req, res) => {
    try {
        const { name, email, age, comments } = req.body;
        console.log("Datos recibidos en el POST:", req.body); // Log de los datos recibidos
        const newUser = await User.create({ name, email, age, comments });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error en la creación del usuario:", error); // Log de error
        res.status(500).json({ message: "Error al crear usuario", error });
    }
};

