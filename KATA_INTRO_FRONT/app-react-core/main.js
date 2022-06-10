const root = document.getElementById("div-root");
const element = document.createElement("div");

// MANIPULACION DEL DOM

// element.textContent = "Hello world DOM";
// element.className = "container";
// root.appendChild(element);

/** APLICADO CON REACT */

const elementReact = React.createElement("span", {}, "Hello world con react");

const secondElementReact = React.createElement("div", {
  children: React.createElement(
    "span",
    {
      children: React.createElement(),
      className: "span-style",
    },
    "Este es mi span dentro de mi div"
  ),
});

/*
 *
 * SINTAXIS React.createElement(typo_de_elemento, { children },  valor)
 */

ReactDOM.render(secondElementReact, root);
