import "./App.css";
import "./styles.css";
import { Navigation, ExtraCmp } from "./components/Navigation";
import UserClass from "./components/UserClass";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <ExtraCmp />
      <Navigation />
      <UserClass nume={"XAA-12"} varsta={29} />
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
    </div>
  );
}

export default App;
