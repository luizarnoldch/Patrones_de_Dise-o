# Aplicabilidad

- Un sistema debe ser independiente de cómo se crean, componen y representan sus productos.
- Un sistema debe ser configurado con una familia de productos de entre varias.
- Una familia de objetos producto relacionados está diseñada para ser usada conjuntamente, y es necesaria hacer cumplir esta restricción.
- Quiere proporcionar una biblioteca de clases de productos, y sólo quiere revelar sus interfaces, no sus implementaciones.


# Participantes

1. Fabrica Abstracta
   - Declara una interfaz para operaciones que crean objetos productos abastractos.
2. Fabrica Concreta
   - Implementan las operaciones para crear objetos productos concretos.
3. Producto Abstracto
   - Declara una interfaz para un tipo de objeto productos.
4. Producto Concentro
   - Define un objeto producto para que sea creado por la fábrica correspondiente.
   - Implementa la interfaz Producos Abstracto.
5. Cliente
   - Sólo usa interfaces declaradas por las clases Fabrica Abstracta y Producos Abstracto.

# Colaboraciones

- Normalmente sólo se crea una únic instancia de una clase Fabrica Concreta en tiempo de ejecución.
- La Fabrica Concrea crea objetos producto que tienen una determinada implementación.
- Para crear diferentes objetos producto, los clientes deben usar una fábrica concreta diferente.
- Fabrica Abstracta delega la creación de objetos producto en su subclase Fabrica Concreta.

# Ventajas y Deventajas

1. Aisla las clases concretas.
2. Facilita el intercambio de familias de productos.
3. Promueve la consistencia entre productos.
4. Es dificil dar cabida a nuevos tipos productos.