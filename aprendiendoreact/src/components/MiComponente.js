import React, {Component} from 'react';

class MiComponente extends Component{

    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon'],
            calorias: 400
        };
        return (
            <React.Fragment>
                <h1>{'Nombre: ' + receta.nombre}</h1>
                <h2>{'Calorias:' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingre, i) => {
                            console.log(ingre);
                            return(
                                <li key={i}>
                                    {ingre}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr />
            </React.Fragment>
        );
    }
}

export default MiComponente