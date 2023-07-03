import Producto from '../models/producto';

export const controladorPrueba = (req, res) => {
  res.send('Esta es una prueba de mi ruta GET de prueba');
};

export const crearProducto = async (req, res) => {
  try {
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      message: 'El producto fue creado correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al intentar crear un producto',
    });
  }
};

export const obtenerListaProductos = async (req, response) => {
  try {
    //buscar en la BD la collection de productos
    const productos = await Producto.find();
    response.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al intentar listar los productos',
    });
  }
};
