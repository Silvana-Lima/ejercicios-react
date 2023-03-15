# Ejercicio Carousel
Crear un carrusel de imágenes que permita al usuario desplazarse a través de una serie de imágenes.
Debe mostrar una imagen grande y tener flechas para avanzar y retroceder a través de las imágenes.
Usar el siguiente array de imagenes
const perros = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
    alt: "perro 1",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2020/12/21/08/36/dog-5849152_1280.jpg",
    alt: "perro 2",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_1280.jpg",
    alt: "perro 3",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2017/01/04/02/38/dog-1951211_1280.jpg",
    alt: "perro 4",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2014/07/31/23/11/dog-407125_1280.jpg",
    alt: "perro 5",
  },
];
Extra
El carousel debe ser infinito.


# Ejercicio Semaforo
Crear un componente TrafficLight en el que va a renderizar con estilos a un semaforo y sus luces
En un componente Light debe mostrar cada uno de los colores del semaforo (rojo,amarillo,verde)
Las luces estaran apagadas(bg: gris) pero al hacer click en cada una se cambiara el color de fondo
El orden seria rojo,amarillo,verde


# Ejercicio Modal
Crear un componente Modal reutilizable
Debe ser opcional tener un titulo, boton para cerrar y el overlay
Pasarle por children el contenido del modal

# Parte 2
Crear un navbar y mostrar 2 botonos login/register
Al hacer click en cada uno de los botones se debe abrir un modal con su formulario
El formulario debe estar validado
Al pasar la validacion remplazar los botones del navbar con el nombre de usuario

# Clase 12

# Grados centígrados
Definir un componente App que contendrá un único componente llamado Form. Este componente recogerá los grados centígrados introducidos, procesará la respuesta y la mostrará por pantalla.
Para ello deberé multiplicar por 9/5 y sumar 32.
20 grados centígrados son 68 grados Farenheit.

# Ejercicio Elevando Estado
Programa una aplicación con dos componentes.
En uno de ellos, el usuario escribirá dos números y se calculará su suma.
Ese componentegit, enviará el resultado de la operación al componente padre que a su vez se la enviará al segundo componente que será el encargado de mostrar la solución.

# Coste hotel.
Haremos una aplicación para calcular el coste de un viaje. Para ello desarrollaremos un componente App que tomarará del usuario el número de noches.

Recogeremos el número de noches, utilizando useState().

Luego le pasaremos este valor como prop a dos componentes:

Componente CosteHotel:

múltiplica el número de noches por los 140usd que cuesta cada noche.

Componente CosteAlquiler:

Cada día de alquiler cuesta 40 usd.
Si alquilas un coche por 3 días o más, obtienes un descuento de 20usd sobre el total.
Si alquilas un coche por 7 días o más, obtienes un descuento de 50usd sobre el total (no acumulable con los 20usd de haber alquilado por más de 3 días)

# Aclaración:
Para ver funcionar un ejercicio, se deben comentar todos los demas en App.jsx