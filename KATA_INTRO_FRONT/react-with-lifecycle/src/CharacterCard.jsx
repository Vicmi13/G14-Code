import React, { Component } from "react";
import axios from "axios";

export default class CharacterCard extends Component {
  componentDidMount() {
    // axios
    //   .get(`https://swapi.dev/api/people/${this.props.id}`)
    //   .then((response) => {
    //     console.log("ID info", response.data);
    //   })
    //   .catch((error) => console.log("error al recuperarId", error));
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
          console.log("ID info", response.data);
        })
        .catch((error) => console.log("error al recuperarId", error));
    }

    // Guardar en un estado esa info
  }

  componentWillUnmount() {}

  render() {
    return <div>Que onda 🤖 {this.props.id}</div>;
  }
}
