// import estilos from './App.module.css';
//Estrutura básica para usar React é através das funções
// function App() {
  //Para trazer o resultado da função eu coloco o que quero no Return que deve ter apenas 1 componente
  // return (
    //Para chamar o css dei um apaelido de estilos e chamei usando o classname
    //Tags fantasmas servem para que eu consiga usar tags no mesmo componente
//     <>
//     <h1 className={estilos.titulo}>DS 16</h1>
//     <h3>O melhor</h3>
//     </>
//   )
// }

// export default App

import estilos from './App.module.css';
import { Cabecalho } from './componentes/Cabecalho';
import { BarraNavegacao } from './componentes/BarraNavegacao';
import { Conteudo } from './componentes/Conteudo'
import { RodapeNavegacao } from './componentes/RodapeNavegacao';

function App(){
  return (
    <>
      <Cabecalho/>
      <BarraNavegacao/>
      <Conteudo/>
      <RodapeNavegacao/>
    </>
  )
}

export default App