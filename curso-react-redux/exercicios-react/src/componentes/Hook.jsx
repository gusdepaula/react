import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(100)
    const [ParOuImpar, setParOuImpar] = useState('Par')
    useEffect(() => {
        if(contador % 2 === 0){
            setParOuImpar('Par')
        } else{
            setParOuImpar('Impar')
        }
    })
    return (
        <div>
            <h1>{contador}</h1>
            <h3>{ParOuImpar}</h3>
            <button onClick={() => setContador (contador + 1)}>Inc</button>
            <button onClick={() => setContador (contador - 1)}>Dec</button>
        </div>
    )
}