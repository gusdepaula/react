import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props => 
    <div>
        <h1>Família</h1>
        {filhosComProps(props)}
        {/* {props.children} */}
        {/* {React.cloneElement(props.children,
            {sobrenome: props.sobrenome}
        )} */}
        {/* {React.cloneElement(props.children,props)} */}
        {/* {React.Children.map(props.children, filho =>{
            React.cloneElement(filho,{...props})
        })} */}
        
    </div>