# Creando el Modal

## 1 Crear Componente Modal

Creamos en la carpeta componentes el File Modal.jsx

Dentro del componente vamos a crear el efecto de un modal para lo cual vamos a retornar el siguiente div

```javascript
<div className="absolute top-0 left-0 right-0 bottom-0 bg-custom-black"></div>
```

## 2 Modificar el archivo App.jsx

Para mostrar el modal debemos eliminar la condicion ternaria para poder
mostrar el modal y al mismo tiempo el componente Resumen

```javascript
{
  newGasto && (
    <Modal gastos={gastos} setGastos={setGastos} setNewGasto={setNewGasto} />
  );
}
```

Nota: No usamos una ternaria ya que no solo retornamos un valor por verdad

## 3. Crear el efecto background

En el archivo index.css debemos agregar el siguiente estilo

```css
.bg-custom-black {
  background-color: rgba(0, 0, 0, 0.92);
}
```

## 4. Agregar boton Close Modal

En el archivo Modal.jsx agregar el boton X para cerrar el modal

```javascript
<div className="absolute right-3 top-3 w-5 h-5">
  <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
</div>
```

Tarea: Crear la funcion ocultarModal que cambie el estado del modal a false

# Agregando Swipe

## Crear un componente Gasto

Para el componente gasto vamos a utilizar la libreria [swipe](https://www.npmjs.com/package/react-swipeable-list)

```shell
npm i react-swipeable-list
```
