
//PARA AGREGAR EL ROUTER: 
//1.CREAR EL COMPONENTE(HOOK) App.js
//2.Reemplazar botesPinturaApp por App.js en index.js
//3.Crear el Router llamado AppRouter.js
//4.Agregar el AppRouter  a App.js
//5.Agregar la ruta por defecto path= '/*', al AppRouter y que apunte a BotesPinturaApp.



import React, { useState } from 'react'


export const BotesPinturaApp = () => {
  
  const [resultado, setResultado] = useState({
    cantidadDeMetros : 0,
    cantidadDePintura : 'Cantidad de botes de pintura'

  });
  /**1. insertar numero en input
   * 2. el valor del input se debe guardar
   * 3. si no se escribe un valor en el input, el programa no hace nada
   * 4. si se ingresa un valor negativo, el programa no hace nada
   */
  const cantidadGuardadaMetros = (metros) =>{
    setResultado({...resultado, cantidadDeMetros : metros});
  }
  
  const calcular = () =>{
    if( resultado.cantidadDeMetros > 0 && !isNaN(resultado.cantidadDeMetros) || typeof resultado.cantidadDeMetros == 'number'){
      let calculo = resultado.cantidadDeMetros / 10;
      // redondea el resultado de la manera normal ( 2.4 => 2 , 2.5=> 3)
      //let redondeo = Math.round(calculo);
      
      // redondea el resultado, hacia arriba ( 2.1 => 3 )
      let redondeo = Math.ceil(calculo);
      let conversionConTexto = `Necesita ${redondeo} botes de pintura`;
      setResultado({...resultado, cantidadDePintura : conversionConTexto}); 
    }
}

//  {
//    (resultado.cantidadDeMetros > 0) ? console.log('true') : console.log('false');
//  }
  
  return (
      <>
      
      <div><h1>Botes de Pintura</h1></div>
      <h1> {resultado.cantidadDePintura} </h1>

      <input
        placeholder='m2 de la habitación'
        type='number'
        onChange={event => cantidadGuardadaMetros(event.target.value)}
      />
      
      <button 
        className='btn btn-primary'
        onClick={() => calcular()}>
        Calculando
        Actualizar
      </button>

      </>

  )
}

