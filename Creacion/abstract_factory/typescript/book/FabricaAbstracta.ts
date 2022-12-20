import ProductoAbstractoA from "./ProductoAbstractoA";
import ProductoAbstractoB from "./ProductoAbstractoB";


export default interface FabricaAbstracta {
  crearProductoA(): ProductoAbstractoA
  crearProductoB(): ProductoAbstractoB
}