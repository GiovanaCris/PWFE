import estilos from './BarraNavegacao.module.css';

//estrutura
export function BarraNavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}