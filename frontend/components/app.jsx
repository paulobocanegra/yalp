import React from "react";
import { Route, Switch, Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import SignUpFormContainer from './session_form/sign_up_form_container';
import SignInFormContainer from './session_form/sign_in_form_container';
import HomeComponentContainer from './home_container';
import FooterComponent from './footer';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/signin" component={SignInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={HomeComponentContainer} />
            <Redirect to="/" />
        </Switch>
        <FooterComponent />
    </div>

    
);

export default App;