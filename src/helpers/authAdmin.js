const validarRolAdmin = (req, res, next) => {
  if (req.usuario.rol !== 'admin') {
    const error = new Error('Acción no válida.');
    return res.status(401).json({ msg: error.message });
  }
  next();
};

export default validarRolAdmin;
