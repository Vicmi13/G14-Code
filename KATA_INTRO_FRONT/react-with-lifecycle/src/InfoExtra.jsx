import React, { Component, Fragment } from "react";

export default class InfoExtra extends Component {
  render() {
    return (
      // NOTA: En caso de aplicar css directo en el elemnto NO funciona con <Fragnent>

      <div style={{ border: "3px solid white", margin: 20 }}>
        {/* EJERCICIO 2 Pasar desde App.js los valores de age y characterId */}
        <h3 style={{ border: "30px, 0" }}>Info extra en componente Nieto 👶🏽</h3>
        Valores obtenidos desde componente App.js
        <p>Name: {this.props.userInApp}</p>
        <p>Age: {this.props.ageUser}</p>
        <p>Id character {this.props.idCharacter}</p>
      </div>
    );
  }
}
