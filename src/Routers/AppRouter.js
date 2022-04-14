import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { BotesPinturaApp } from '../hooks/BotesPinturaApp'

export const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                
                <Route path="/ejercicio1" element={<BotesPinturaApp />} />
                <Route path="/" element={<Navigate to='/ejercicio1' />} />
                                      
            </Routes>        
        </BrowserRouter>
    </div>
  )
}
