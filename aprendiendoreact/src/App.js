import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Componentes
import MiComponente from "./components/MiComponente";


function HelloWord(name, years) {
   return (
        <div>
            <h2> Hola soy { name } </h2>
            <h3>Tengo {years} años</h3>
        </div> 
   )
}

function App() {
    return ( 
        <div className = "App" >
            <header className = "App-header">
                <img src = { logo }
                className = "App-logo"
                alt = "logo"/>
            
                <p>
                BIENVENIDOS {HelloWord("Daniel Rubiano", 29)}
                </p>

                <a className = "App-link"
                href = "https://reactjs.org"
                target = "_blank"
                rel = "noopener noreferrer" >
                Learn React </a> 
            
            
                <section className="componentes">
                
                    <MiComponente/>

                </section>
            </header> 
        </div>
    );
}

export default App;