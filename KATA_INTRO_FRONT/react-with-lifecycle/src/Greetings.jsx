import React, { Component } from "react";

export default class Greetings extends Component {
  componentDidMount() {
    console.log("SIMULa LLAMADA A LA API DE STAR WARS ");
  }

  componentWillUnmount() {
    console.log("Se va a remover el componente");
  }

  render() {
    return <div>Saludos eres mayor de edad</div>;
  }
}
