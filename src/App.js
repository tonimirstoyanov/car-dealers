import { Route, Switch } from 'react-router-dom'


import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Catalog from './components/Catalog/Catalog.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Edit from './components/Edit/Edit.js';
import Create from './components/Create/Create.js';
import Details from './components/Details/Details.js';
import { Logout } from './components/Logout/Logout.js';
import { AuthProvider} from './context/authContext.js';

function App() {


    return (
        <AuthProvider>
            <div className="App">
                <Header />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/car/catalog" component={Catalog} />
                    <Route path="/car/create" component={Create} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/car/:carId/details" component={Details} />
                    <Route path="/car/:carId/edit" component={Edit} />
                </Switch>
            </div>
        </AuthProvider>
    );
}

export default App;
