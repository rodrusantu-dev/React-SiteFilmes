import HomePage from '../pages/Home/HomePage'
import NotFound from '../pages/error/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='*' element={<NotFound/>}></Route> 

            </Routes>
        </BrowserRouter> 
        
    )
}