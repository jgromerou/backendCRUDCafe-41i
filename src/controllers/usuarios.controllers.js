import Usuario from '../models/usuario';

export const crearUsuario = async (req, res) => {
  try {
    //   //trabajar con los resultados de la validación
    //   const errors = validationResult(req);

    //   //errors.isEmpty(); true: si está vacío, es false tiene errores
    //   //quiero saber si hay errores
    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({
    //       errors: errors.array(),
    //     });
    //   }

    const usuarioNuevo = new Usuario(req.body);
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: 'El usuario fue creado correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'Error no se pudo crear un usuario',
    });
  }
};

export const obtenerListaUsuarios = async (req, res) => {
  try {
    //buscar en la BD la collection de usuarios
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar listar los usuarios',
    });
  }
};
