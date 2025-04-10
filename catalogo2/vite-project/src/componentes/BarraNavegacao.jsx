import estilos from './BarraNavegacao.module.css';

//estrutura para componente React
export function BarraNavegacao(){
    //Todo retorno só pode renderizar um componente 
    return(
        <nav className={estilos.container}>
            <ul>
                <li>
                    Home
                    <span class="material-symbols-outlined">
                        home
                    </span>
                </li>
                <li>
                    Filmes
                    <span class="material-symbols-outlined">
                        theaters
                    </span>
                </li>
                <li>
                    Perfil
                    <span class="material-symbols-outlined">
                        person
                    </span>
                </li>
                <li>
                    Favoritos
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                </li>
            </ul>
        </nav>
    )
}