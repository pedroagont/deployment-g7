import { useState } from 'react';

function TarjetaNoticia() {
  const [ contador, setContador ] = useState(0);

  const incrementarContador = () => setContador(contador+1);
  const decrementarContador = () => setContador(contador-1);

  return (
    <div className="tarjeta-post">
      <h3 className="tarjeta-titulo">Paty Navidad confiesa que el coronavirus sí existe</h3>
      <p className="tarjeta-descripcion">Tras haber negado la existencia del COVID-19, la actriz y cantante mexicana, Paty Navidad, se encuentra hospitalizada debido a complicaciones médicas relacionadas con la enfermedad.</p>
      <button className="tarjeta-boton" onClick={decrementarContador}> - </button>
      <span className="contador"> {contador} </span>
      <button className="tarjeta-boton" onClick={incrementarContador}> + </button>
    </div>
  );
}

export default TarjetaNoticia;
