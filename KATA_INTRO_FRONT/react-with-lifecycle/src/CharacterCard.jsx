import React, { Component } from "react";
import axios from "axios";

import "./CharacterCars.css";
import InfoExtra from "./InfoExtra";

export default class CharacterCard extends Component {
  state = {
    infoUser: {},
  };

  componentDidMount() {}

  // previous
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps id", prevProps.id);
    // console.log("props id", this.props.id);

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
        <h3>Información personaje</h3>

        <InfoExtra userInApp={this.props.userName} />
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
