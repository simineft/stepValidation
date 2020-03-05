import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import home from '../components/home';
import PersonalInfo from '../components/PersonalInfo';


const App = (props) => {
    const { location, match } = props;

    if (location.pathname === '/' || location.pathname === '/app' || location.pathname === '/app/') {
        return <Redirect to={'/home'} />;
    }
    return (
        <Switch>
            <Route path={`/home`} component={home} />
            <Route path={`/user`} component={home} />
            <Route path={`/pesrsonalinfo`} component={PersonalInfo} />

        </Switch>
    )
}



export default withRouter(App);
