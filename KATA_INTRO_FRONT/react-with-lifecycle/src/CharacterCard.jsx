import React, { Component } from "react";
import axios from "axios";

import "./CharacterCars.css";
import InfoExtra from "./InfoExtra";

export default class CharacterCard extends Component {
  state = {
    infoUser: {},
  };

  componentDidMount() {
    // ERROR no se ejecuta el primer personaje que se selecciona
  }

  // previous
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps id", prevProps.id);
    console.log("props id", this.props.id);

    // Validar SI prevProps.id != this.props.id
    if (prevProps.id !== this.props.id) {
      // Realizar nueva consulta a SWAPI
      axios
        .get(`https://swapi.dev/api/people/${this.props.id}`)
        .then((response) => {
          // Guardar en un estado esta info
          console.log("ID info", response.data);
          this.setState({ infoUser: response.data });
        })
        .catch((error) => console.log("error al recuperarId", error));
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="card">
        <h3>Información del personaje</h3>
        {Object.values(this.state.infoUser).length > 0 && (
          <>
            <p>Name: {this.state.infoUser.name}</p>
            <p>Height: {this.state.infoUser.height}</p>
            <ul>
              {this.state.infoUser.films.map((value, index) => (
                <li key={index}>
                  Film {index + 1}-{value}
                </li>
              ))}
            </ul>
            {/* <p>
              Starships:{" "}
              {
                this.state.infoUser.starships[
                  this.state.infoUser.starships.length - 1
                ]
              }
            </p> */}

            {/* 
            Otra alternativa 👇🏽*/}
            <p>
              Starships2:{" "}
              {this.state.infoUser.starships.length > 0
                ? this.state.infoUser.starships[
                    this.state.infoUser.starships.length - 1
                  ]
                : "No tiene ninguna 😢"}
            </p>
          </>
        )}
        <InfoExtra
          userInApp={this.props.userName}
          ageUser={this.props.ageProp}
          idCharacter={this.props.idStarWarCharac}
        />
      </div>
    );

    /* EJERCICIO

    A través de un archivo.css mostrar en un card
    los sigs datos del personaje de SWAPi
    name
    height
    films
    starships (en caso de tener solo mostrar el último elemento)
    */
  }
}
