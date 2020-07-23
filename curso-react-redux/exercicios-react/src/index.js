import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
// import CompA, {CompB as B} from './componentes/DoisComponentes'
// import MultiComponentes from './componentes/MultiComponentes';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import FamiliaSilva from './componentes/FamiliaSilva';
// import Pai from './componentes/Pai';
// import ComponenteClasse from './componentes/ComponenteClasse';
// import Contador from './componentes/Contador';
import Hook from './componentes/Hook';

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador NumeroInicial={100}/> */}
        {/* <ComponenteClasse valor="Sou um componente de classe"  /> */}
        {/* <Pai/> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereira">
            <Membro nome="Andre" />
            <Membro nome="Mariana"  />
        </Familia> */}
        {/* <FamiliaSilva/>      */}
        {/* <MultiComponentes /> */}
        {/* <CompA valor="Olá eu sou A!" /> */}
        {/* <B valor="B na área" /> */}
       {/* <PrimeiroComponente valor="Bom dia!" abc="123" /> */}
    </div>
    , elemento)