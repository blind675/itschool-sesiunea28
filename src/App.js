// De retinut ca importul CSS-ului in acest mod este posibil cu ajutorul lui Webpack.
import "./App.css";
import "./styles.css";
// In cazul in care componenta este exportata fara default, o importam folosind acolade.
import { Navigation, ExtraCmp } from "./components/Navigation";
// In cazul in care componenta este exportata default, o importam fara acolade.
import UserClass from "./components/UserClass";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <ExtraCmp />
      {/* Instantiem (cream) componenta Navigation. */}
      <Navigation />
      {/* Instantiem (cream) componenta User, pasandu-i valorile pentru prop-uri. */}
      <User nume={"Vasile"} varsta={20} />
      <User nume={"Ana"} varsta={23} />
      <User
        nume={"Ion"}
        varsta={9999}
        sex={"masculin"}
        adresa={{ strada: "principala", oras: "Mare" }}
        callback={() => {
          console.log("Salut din callback");
        }}
      />
      {/* Chiar daca este o clasa, componenta este creata la fel */}
      <UserClass nume={"XAA-12"} varsta={29} />
    </div>
  );
}

export default App;
