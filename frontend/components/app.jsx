import React from "react";
import { Route, Switch, Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import SignUpFormContainer from './session_form/sign_up_form_container';
import SignInFormContainer from './session_form/sign_in_form_container';
import HomeComponentContainer from './home_container';
import FooterComponent from './footer';
import BusinessShowContainer from "./businesses/business_show_container";
import BusinessIndexContainer from "./businesses/business_index_container";
import CreateReviewContainer from './reviews/create_reviews_container';
import ProfileContainer from './user/profile_container';
// import ReviewFormContainer from "./reviews/review_form_container";

const App = () => (
    <div>
        <Switch>
            <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />
            <ProtectedRoute exact path="/businesses/:businessId/create" component={CreateReviewContainer} />
            <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
            <AuthRoute exact path="/signin" component={SignInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={HomeComponentContainer} />
            <Route exact path="/" component={BusinessIndexContainer} />
            <Redirect to="/" />
        </Switch>
        <FooterComponent />
    </div>

    
);

export default App;