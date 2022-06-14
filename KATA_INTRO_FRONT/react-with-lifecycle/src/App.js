import { Component, Fragment } from "react";
import "./App.css";
import Greetings from "./Greetings";
import NoAccess from "./NoAccess";
import axios from "axios";

class App extends Component {
  state = {
    name: "Victor",
    age: 29,
    peopleArray: [],
  };

  componentDidMount() {
    console.log("Se jecuta una sola vez");
    axios
      // regresa una promesa
      .get("https://swapi.dev/api/people")
      .then((resultados) => {
        console.log(resultados.data.results);
        this.setState({ peopleArray: resultados.data.results });
      })
      .catch((error) => console.log("error", error));
  }

  handleInputValue(inputParam) {
    this.setState({ age: inputParam });
  }

  // RENDERIZADO POR MEDIO DE CONDICION IF -> JS
  showAgeInfo() {
    if (this.state.age >= 18) {
      return <Greetings />;
    }
    // ESTE return 👇🏽 sustituye al else
    return <NoAccess />;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hoy veremos ciclo de vida & conditional rendering.</p>

          <label>Componente 1</label>
          <input
            value={this.state.age}
            onChange={(event) => this.handleInputValue(event.target.value)}
          />
          {/* CONDITIONAL IF */}
          {/* {this.state.age >= 18 && <Greetings />} */}

          {/* TERNARIO  Condicion ? Verdadero - ejecuta esto : Falso va a ejecutar esto  */}
          {/* {this.state.age >= 18 ? <Greetings /> : <NoAccess />} */}

          {/* age >= 18  mayor de edad > 12 = adolescente < niñ@  */}
          {/* TERNARIO Condicion 
                      ? Verdadero 
                      : Condicion 
                      ? Verdadero - ejecuta esto 
                      : Falso va a ejecutar esto */}

          {this.state.age >= 18 ? (
            <Greetings />
          ) : this.state.age < 18 && this.state.age >= 12 ? (
            <NoAccess />
          ) : (
            <h5> Estas muy pequeñito ☹️</h5>
          )}

          <h3>Lista de personajes</h3>
          {this.state.peopleArray.length === 0 ? (
            <b>Cargando.... </b>
          ) : (
            <ul>
              {this.state.peopleArray.map((value, index) => (
                // <Fragment></Fragment> se puede sustituir por 👇🏽
                <>
                  <li key={index}>{`${value.name} - ${value.gender}`}</li>
                </>
              ))}
            </ul>
          )}
        </header>
      </div>
    );
  }
}

export default App;
