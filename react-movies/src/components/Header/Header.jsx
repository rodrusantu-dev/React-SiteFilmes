import  { Home } from "../Header/HeaderStyle"
import { HomeDetail } from "../Header/HeaderStyle"

export function Header(props){
    return(
        <Home>
        <div>
           <h1>{props.Home}</h1> 
        </div>
        </Home>
    )

}

export const HeaderDetail= (title) => {
return (
        <HomeDetail>
             <p>{title}</p>
        </HomeDetail> 
)
}