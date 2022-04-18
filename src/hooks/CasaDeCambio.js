import React, { useState } from 'react'

export const CasadeCambio = () => {
  
  const [valor, setValor] = useState({
    montoParaConvertir : 0,
    montoConvertido : 'Monto convertido',
    tipoDeCambio : 4,
  });

  /**
   * 1. escribir el valor deseado en el cuadro.
   * 1.1 el valor aparece en la caja
   * 1.2 el valor debe guardarse.
   * 2. convertir dolares a soles
   * 2.1 1 dolar es = a 4 soles.
   * 2.2 (if )si no escribo monto en dolares y doy click a convertir el programa no hace nada,
   * 2.3 (if )si ingresa un numero negativo en dolares, no hace nada.
   */
  
  const guardarMontoAConvertir = (monto) => {
    setValor( {...valor, montoParaConvertir : monto });
  }
  /** el numero ingresado debe ser el valor de la variable numeroIngresado */

  const actualizarTipoDeCambio = (nuevoTipoDeCambio) => {
    setValor({...valor, tipoDeCambio : nuevoTipoDeCambio});
  }
  
  const convertirMonto = (moneda) => {
    if (valor.montoParaConvertir >= 0) {
      if (moneda == 'Soles') {
        let conversion = valor.montoParaConvertir * valor.tipoDeCambio;
        let conversionConSimbolo = ` S/ ${conversion}`;
        setValor( {...valor, montoConvertido : conversionConSimbolo});
      
      }else if (moneda == 'Dolares') {
        let conversion = valor.montoParaConvertir / valor.tipoDeCambio;
        let conversionConSimbolo = ` $ ${conversion}`;
        setValor( {...valor, montoConvertido : conversionConSimbolo});
      }
    }
  }
  
  return (
    <>
      <h1>  
        CasadeCambio 
      </h1>
      <hr/>

      <h1>
        <p>
          {valor.montoConvertido}
        </p>
      </h1>
    
      <input 
        
        placeholder="Ingrese monto a convertir"
        type='number'
        onChange={event => guardarMontoAConvertir(event.target.value)}
      /> 
      
      <button 
        className='btn btn-primary'
        onClick={()=> convertirMonto('Soles')}>    
        CONVERTIR A SOLES
          
      </button>

      <button 
        className='btn btn-primary'
        onClick={()=> convertirMonto('Dolares')}>    
        CONVERTIR A DÓLARES
          
      </button>
      
      <br />
      <hr />

      <h1> Configuración </h1>
      <p> 1 dólar en soles equivale a </p>

      <input
        name='Tipo de cambio'
        type='number'
        value={valor.tipoDeCambio}
        onChange={event => actualizarTipoDeCambio(event.target.value)}
      />

      <br /><br />
      
    </>
  )
}
 