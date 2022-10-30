import { Header } from "./style";



export default function Headers() {
    return (
        <Header>
            <a href=""> 🔗 allyhub-desafios</a>
            <ul>
                <li><a href="">Portfolio</a></li>
                <li> <a href="">Clone</a> </li>
                <li> <a href="">Prototipo</a></li>
                <li><a className="button" href="">Contacto</a></li>
            </ul>
        </Header>
    )
}