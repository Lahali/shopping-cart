# CARRITO DE LA COMPRA  

Creación de una versión demo de una app de carrito de la compra.  
## Nivel 1  
### Ejercicio 1
- Hacer que el usuario pueda añadir productos al carrito de la compra.  
- La función a completar se llama buy(). Ahí se recibe el id del producto.  
Buscar el producto con el id y añadirlo al array cartList.  
- Se puede utilizar el bucle for.

### Ejercicio 2  
- Implementar la función vaciar carrito, que permita al usuario eliminar el array generado en el ejericio anterior. *Hay info*

### Ejercicio 3
- Implementar un bucle for para sumar el importe de todos los productos.  

### Ejercicio 4  
- Generar un campo de cantidad para cada producto del carrito.  
- Completar la función generateCart(), recibe el array cartList y genera el array cart.  
- Crear un botón para llamar a la función generateCart(). *Hay ejemplo de cada elemento del array*
- No es necesario modificar la función que calcula las promociones.  
- Se puede hacer un bucle sobre el array cartList que recibe la función.  
- Por cada elemento de cartList hay que validar si existe en el array cart:  
    1. Si no existe, lo añadimos al array cart. **No olvidar añadir la propiedad quantity con valor 1 antes del push**
    2. Si ya existe, incrementar el campo quantity.

### Ejercicio 5  
- Implementar las promociones.  
    1. Si el usuario compra 3 o más botellas de aceite, el precio desciende a 10 €.  
    2. Cuando se compran 10 o más productos para hacer pasteles, el precio se rabaja a 2/3.
- Hay que completar la función applyPromocionsCart().  
- Recibe el array cart y modifica el campo subtotalWithDiscount en caso de que se aplique la promoción.  
- *Si el campo quantity cumple con la oferta, el precio total con descuento se guarda en el campo subtotalWithDiscount.*  

### Ejercicio 6  
- Mostar el carrito de la compra al usuario.  
- El id es cartModal y se tiene que incluir dentro de la función printCart().  
- La maquetación está hecha, pero hay que modificarla para que sea dinámica (mirar foto).  

### Ejercicio 7   
- Hay que implementar la validación del formulario de checkout que está en el archivo checkout.js.  
- Se accede al clicar el botón modal del carrito.  
- El primer objetivo es validar el formulario checkout.html utilizando el archivo checkout.js. Los requisitos del formularios son:
    1. Todos los campos son obligatorios.
    2. Todos los campos han de tener al menos 3 caracteres.
    3. El nombre y apellidos ha de tener sólo letras. 
    4. El teléfono solo puede tener números.
    5. La contraseña ha de tener números y letras.  
    6. El email tiene que tener formato de email.  
- Si los campos no cumplen los requisitos, el input se resaltará en rojo y saldrá un mensaje de error en la parte inferior. *Se puede colorear de rojo el input o usar la clase is-invalid de bootstrap*

