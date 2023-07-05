import Usuario from '../models/usuario';

export const crearUsuario = async (req, res) => {
  try {
    const { email } = new Usuario(req.body);

    let usuario = await Usuario.findOne({ email });
    console.log(usuario);

    if (usuario) {
      return res.status(200).send({
        mensaje: 'ya existe un usuario con el correo electrónico enviado',
      });
    }
    usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({
      mensaje: 'usuario creado.',
      nombre: usuario.nombre,
      uid: usuario._id,
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

export const obtenerUsuario = async (req, res) => {
  try {
    //buscar en la BD un documento Usuario mediante el id
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar obtener el usuario',
    });
  }
};
