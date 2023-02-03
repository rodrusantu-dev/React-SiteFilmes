import  { PropsHome } from "../../layouts/Header"

export function Header(props){
    return(
        <PropsHome>
        <div>
           <h1>{props.Home}</h1> 
        </div>
        </PropsHome>
    )

}