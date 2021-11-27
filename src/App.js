import { Route, Switch } from 'react-router-dom'

import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Catalog from "./components/Catalog/Catalog.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Edit from "./components/Edit/Edit.js";
import Create from "./components/Create/Create.js";
import Details from "./components/Details/Details.js";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/create" component={Create} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/details" component={Details} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
