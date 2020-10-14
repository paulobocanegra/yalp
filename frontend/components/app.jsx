import React from "react";
import { Route, Switch, Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

import SignUpFormContainer from './session_form/sign_up_form_container';
import SignInFormContainer from './session_form/sign_in_form_container';
import HomeComponent from './home'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/signin" component={SignInFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={HomeComponent} />
            <Redirect to="/" />
        </Switch>
    </div>

    
);

export default App;