const { Router } = require('express');
const usersRoutes = require('./users');

const router = Router();


router.post("/", userController.createUser);
router.get('/', (req, res) => res.send('BIENVENIDO AL API MYSQL')); // Para probar la conexión
router.use('/api/users', usersRoutes); // Ruta base correcta

module.exports = router;
