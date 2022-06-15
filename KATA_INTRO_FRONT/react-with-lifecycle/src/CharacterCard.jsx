import React, { Component } from "react";
import axios from "axios";

export default class CharacterCard extends Component {
  componentDidMount() {
    axios
      .get(`https://swapi.dev/api/people/${this.props.id}`)
      .then((resultados) => {
        console.log("resultados ID", resultados);
      })
      .catch((error) => console.log("error al recuperarId", error));
  }

  render() {
    return <div>Que onda 🤖 {this.props.id}</div>;
  }
}
