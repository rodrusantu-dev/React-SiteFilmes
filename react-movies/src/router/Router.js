import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}></Route>
                <Route path='*' element={<NotFound/>}></Route> 

            </Routes>
        </BrowserRouter> 
        
    )
}