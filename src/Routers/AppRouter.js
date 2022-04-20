import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Navbar } from '../BarraDeNavegacion/Navbar'
import { BotesPinturaApp } from '../hooks/BotesPinturaApp'
import { CalculadoraApp } from '../hooks/CalculadoraApp'
import { CasadeCambio } from '../hooks/CasaDeCambio'

export const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                
                <Route path="/ejercicio1" element={<BotesPinturaApp />} />
                <Route path="/ejercicio2" element={<CalculadoraApp />} />
                <Route path="/ejercicio3" element={<CasadeCambio />} />

                <Route path="/" element={<Navbar />} />
                <Route path="*" element={<Navigate to='/' />} />
                {/* <Route path="/" element={<Navigate to='/ejercicio1' />} /> */}
                                                     
            </Routes> 

            <div className='btn btn-primary'>
            </div>       
        </BrowserRouter>
    </div>
  )
}
