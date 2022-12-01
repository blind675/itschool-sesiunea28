// Pentru o componenta creata cu ajutorul unei clase, este necesar sa importam React.
import React from "react";

// Clasa extinde React.Component, adica preia funtionalitatea de componenta, creata de React.
class UserClass extends React.Component {

  // Metoda render este o metoda ce va fi utilizata de React. Ea returneaza HTML-ul afisat pe ecran.
  render() {

    // In cadrul claselor, prop-urile sunt accesate cu this.props.
    const nume = this.props.nume;
    const varsta = this.props.varsta;
    // const {nume , varsta} = this.props;

    return (
      <div>
        {/* Folosim {} pentru a integra expresii de JS in taguri de HTML. */}
        <h2>Nume: {nume} </h2>
        <p>Varsta: {varsta} </p>
      </div>
    );
  }
}

export default UserClass;