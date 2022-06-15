import React, { Component } from "react";

export default class InfoExtra extends Component {
  render() {
    return (
      <>
        <h3>Info extra en componente Nieto 👶🏽</h3>
        <p>Este es el valor desde el App.js {this.props.userInApp}</p>

        {/* EJERCICIO
        Pasar desde App.js los valores de age y characterId */}
      </>
    );
  }
}
