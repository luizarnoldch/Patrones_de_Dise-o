# Aplicaciones

- El algoritmo para crear un objeto deberia ser independiente de las partes de que se compone dicho objeto y de cómo se ensamblan.
- El proceso de construcción debe permitir diferentes representaciones del objeto que está siendo construido.

# Participantes

1. Constructor
   - Especifica una intefaz abstracta para crear las partees de un objeto Producto.
2. Constructor Concreto
   - Implementa la interfaz Constructor para construir y ensamblar las partes del producto.
   - Define la representación a crear.
   - Proporciona una interfaz para devolver el producto.
3. Director
   - Construye un objeto usando la interfaz Constructor.
4. Producto
   - Reresenta el objeto complejo en construcción.
   - El constructor Concreto construye la representación interna del producto y define el proceso de ensamblaje.
   - Incluye las clases que definen sus pares constituyentes, incluyendo interfaces para ensamblar las partes en el resulado final.

# Colaboraciones
- El cliente crea el objeto Director y lo configura con el objeto Constructor deseado.
- El director notifica al constructor cada vez que hay que construir una parte de un producto.
- El constructor maneja las peticiones del director y las añade al productos.
- El cliente obtiene el producto del constructor.

# Ventajas y Desventajas
1. Permite variar la representación interna de un producto.
2. Aísla el código de construcción y representación.
3. Proporciona un control más fino sobre el proceso de construccion.