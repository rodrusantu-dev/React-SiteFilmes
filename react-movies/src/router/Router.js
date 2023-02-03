import HomePage from '../pages/Home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
            

            </Routes>
        </BrowserRouter> 
        
    )
}