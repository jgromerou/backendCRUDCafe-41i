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

export const obtenerListaProductos = async (req, res) => {
  try {
    //buscar en la BD la collection de productos
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al intentar listar los productos',
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    //buscar en la BD un documento producto mediante el id
    const producto = await Producto.findById(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al intentar obtener el producto',
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    //buscar en la BD un documento producto mediante el id y borrarlo
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: 'El producto fue eliminado correctamente.',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error, no se pudo borrar el producto.',
    });
  }
};
