import React from "react";
import { Route, Switch, Link} from 'react-router-dom';

import SignUpFormContainer from './session_form/sign_up_form_container';
import SignInFormContainer from './session_form/sign_in_form_container';


const App = () => (
    <div>
        <header>
            <h1>Yalp!</h1>
        </header>
        <Switch>
            <Route to="/login" component={SignInFormContainer} />
            <Route to="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;