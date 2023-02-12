import HomePage from '../pages/Home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from '../pages/Detail/Detail'


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
               <Route path='/' element={<HomePage/>}></Route>
               <Route path='/detail' element={<Details/>}/>
            </Routes>
        </BrowserRouter> 
        
    )
}

