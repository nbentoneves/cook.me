import React from 'react';
import Recipe from "../Recipe/Recipe";
import {Route, Switch} from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Chef from "../Chef/Chef";

const App = (props) => {

    return (
        <div>
            <Layout>
                <Chef/>
            </Layout>

            <Switch>
                <Route exact path="/"/>
                <Route exact path="/recipe" component={Recipe}/>
            </Switch>
        </div>
    );
}

export default App;
