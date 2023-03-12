import { Logo } from "../logo/Logo"
import "./Header.css"

export const Header = ()=>{
    return (<header>
        <Logo withTitle />
        
        <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Menu</a></li>
        </ul>
        </nav>
        
    </header>
        
    )
}