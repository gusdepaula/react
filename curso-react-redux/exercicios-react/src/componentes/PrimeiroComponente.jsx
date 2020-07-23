import React from 'react'

// export default primeiro function(){
//     return <h1>Primeiro Componente!</h1>
// }

// export default () =>
//     <div>
//         <h1>Primeiro Componente(Arrow)!</h1>
//     </div>

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.abc}</h2>
    </div>