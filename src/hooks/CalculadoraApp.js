
import React, { useState } from 'react';



 
export const CalculadoraApp = () => {
   
  
  const [estado, setEstado] = useState({
    resultado : '',
    numeroGuardado : undefined,
    operacion : undefined,
  });
  /** 
   * 1. usario hace click al boton 1
   * 2. al hacerle click, el numero 1 debe aparecer en la caja de resultado.
   */

  const actualizarResultado = (numero) =>{
    let nuevoResultado = `${estado.resultado}${numero}`; 
   /** 1.string interpolacion, es para insertar variables dentro de strings */
    setEstado({...estado, resultado: nuevoResultado});
  }
  /**
   * 1.usario hace click a borrar uno
   * 2. al clikear el boton uno, borra el ultimo numero del resultado.
   * 3. solo borra mientras exista un resultado.
   */

  const borrarUltimoNumero = () =>{
    let nuevoResultado = estado.resultado.slice(0, estado.resultado.length - 1);
    setEstado( previousEstado => ({...previousEstado, resultado: nuevoResultado}));
  }

  const Limpiar = () => {
    let nuevoResultado = "";
    setEstado( previousEstado => ({
      ...previousEstado, 
      resultado : nuevoResultado,
    }));
  }

  /** 
   * 1. el usuario da click al boton 1. (actualizarResultado)
   * 2. el usuario da click al boton +. (metodo = sumarNumeros)
   *  2.1 el numero 1 se guarda, para la operacion.
   *  2.2 la operacion + se guarda, para saber que operacion ejecutar.
   * 3. el usario da click al boton 2. (actualizarResultado)
   * 4. el usuario da click al boton = 
   *  4.1 se ejecuta la operacion + con los numeros 1 y 2
   *  4.2 el resultado se muestra en pantalla.*/
   
  const colocarSimbolo = (simbolo) => {
    let resultadoActual = estado.resultado;
    setEstado (previousEstado => ({...previousEstado, numeroGuardado : resultadoActual, operacion : simbolo}));
    Limpiar();
  }

  const ejecutarOperacion = () => {
    
    if (estado.resultado != '' && estado.numeroGuardado != '') {
      console.log(estado);

      let calculadora = new Calculadora();
      let numeroUno = parseInt(estado.numeroGuardado);
      let numeroDos = parseInt(estado.resultado);
      let resultadoOperacion = null;

      if (estado.operacion == '+') {
        resultadoOperacion = calculadora.sumar(numeroUno, numeroDos);
              
      } else if (estado.operacion == '-') {
        resultadoOperacion = calculadora.restar(numeroUno, numeroDos);
        
      } else if (estado.operacion == '*') {
        resultadoOperacion = calculadora.multiplicar(numeroUno, numeroDos);

      } else if (estado.operacion == '/') {
        resultadoOperacion = calculadora.dividir(numeroUno, numeroDos);
      
      }
      
      if (resultadoOperacion != null) {
        setEstado({...estado, resultado: resultadoOperacion.toString()});
      }
    }
  }

  /**customers.Where((customer, a,b,c) => {
      
    customer.City == "London";
    return true;
  });

  customers.Where((input customer, output Boolean) => Boolean);

  customers.Where((input State, output State) =>{ 
      let newState = ...State;
      newState.name = 'coco';
      return newState;
    
  });

  /**
   * 1. dar click a un numero(s) (actualizarResultado)
   * 2. dar click al boton - (colocarSimbolo)
   *    2.1 el numero se guarda.
   *    2.2 el simbolo - se guarda, para usarlo como operacion.
   * 3. dar click a otro numero(s).(actualizarResultado)
   *    3.1 el numero se guarda.
   * 4. dar click al = (ejecutarOperacion)
   *    4.1 ejecuta la operacion -, utilizando el primer y segundo numero.
   *    4.2 el resultado del -, aparece en la pantalla, y se queda guardado.
   */

  return (
    
     <>

      <h1>
      <p> CalculadoraCoco </p>
      </h1>
      <hr/>
      
      {/* <form>
        <input className='REsultado' text='texto'/>
      </form> */}

      <h1>
        {estado.resultado}
      </h1>

      <button 
        className='btn btn-primary border'
        onClick={()=> colocarSimbolo('+') }>
          +
      </button>

      <button 
         className='btn btn-primary border'
         onClick={()=> colocarSimbolo('-')}>
          -
      </button>

      <button 
        className='btn btn-primary border'
        onClick={()=> colocarSimbolo('*')}>
          *
      </button>

      <button 
        className='btn btn-primary border'
        onClick={()=> colocarSimbolo('/')}>
          /
      </button>

     
      <div className='Numeros'>
        
        <button className='btn btn-primary border' onClick={ () => actualizarResultado(1)}>1</button>
        <button className='btn btn-secondary border' onClick={ () => actualizarResultado(2)}>2</button>
        <button className='btn btn-primary border' onClick={ () => actualizarResultado(3)}>3</button>
        <button className='btn btn-secondary border' onClick={ () => actualizarResultado(4)}>4</button>
        <button className='btn btn-primary border' onClick={ () => actualizarResultado(5)}>5</button>
        <button className='btn btn-secondary border' onClick={ () => actualizarResultado(6)}>6</button>
        <button className='btn btn-primary border' onClick={ () => actualizarResultado(7)}>7</button>
        <button className='btn btn-secondary border' onClick={ () => actualizarResultado(8)}>8</button>
        <button className='btn btn-primary border' onClick={ () => actualizarResultado(9)}>9</button>
        <button className='btn btn-secondary border' onClick={ () => actualizarResultado(0)}>0</button>
        <button className='btn btn-primary border' onClick={()=> borrarUltimoNumero() }> Borrar Uno </button>
        <button className='btn btn-primary border' onClick={()=> Limpiar()}>Limpiar </button>
        <button className='btn btn-primary border' onClick={()=> ejecutarOperacion()}> = </button>
        
      </div>
    </>
  )
}


class Calculadora {
  
  sumar(numero1,numero2) {
    return numero1 + numero2;
  }

  /**sumar(numeros) {
    
    let suma = 0;

    numeros.forEach(numero => {
      suma += numero;

    });
    return suma;
  }*/


  restar(numero1,numero2) {
    return numero1 - numero2;
  }

  multiplicar(numero1,numero2) {
    return numero1 * numero2;
  }

  dividir(numero1,numero2) {
    return numero1 / numero2;
  }
}
