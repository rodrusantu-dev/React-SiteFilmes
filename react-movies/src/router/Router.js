import HomePage from '../pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}></Route>

            </Routes>
        </BrowserRouter> 
        
    )
}