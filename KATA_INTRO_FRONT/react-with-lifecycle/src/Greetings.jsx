import React, { Component } from "react";

export default class Greetings extends Component {
  componentWillUnmount() {
    alert("Se va a remover el componente");
  }

  render() {
    return <div>Saludos eres mayor de edad</div>;
  }
}
