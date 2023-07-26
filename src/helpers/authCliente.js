const validarRolCliente = (req, res, next) => {
  if (req.usuario.rol !== 'cliente') {
    const error = new Error('Acción no válida.');
    return res.status(401).json({ msg: error.message });
  }
  next();
};

export default validarRolCliente;
