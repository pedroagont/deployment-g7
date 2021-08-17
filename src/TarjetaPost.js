import { useState } from 'react';

function TarjetaPost() {
  const [ contador, setContador ] = useState(0);

  const incrementarContador = () => setContador(contador+1);
  const decrementarContador = () => setContador(contador-1);

  return (
    <div className="tarjeta-post">
      <h3 className="tarjeta-titulo">Un post increíble de ejemplo</h3>
      <p className="tarjeta-descripcion">Esta es la descripción de un post increíble que estoy creando de ejemplo</p>
      <button className="tarjeta-boton" onClick={decrementarContador}> - </button>
      <span className="contador"> {contador} </span>
      <button className="tarjeta-boton" onClick={incrementarContador}> + </button>
    </div>
  );
}

export default TarjetaPost;
