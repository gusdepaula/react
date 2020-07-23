import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.NumeroInicial
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
        //this.state.numero = this.state.numero + 1
    }

    menosUm = () => {
        this.setState({numero: this.state.numero - 1})
        //this.state.numero = this.state.numero + 1
    }

    alterarNumero = (diferenca) => {
        this.setState({numero: this.state.numero + diferenca})
        //this.state.numero = this.state.numero + 1
    }

    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                {/* <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button> */}
                <button onClick={() => this.alterarNumero(10)}>Inc</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec</button>
            </div>
        )
    }
}

// Solução 01 
// constructor(state){
//     super(state)
//     this.maisUm = this.maisUm.bind(this)
// }

// Solução 02
//<button onClick={() => this.maisUm()}>Inc</button>