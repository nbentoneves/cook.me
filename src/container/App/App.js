import React, {useEffect, useState} from 'react';
import logo from '../images/chef.svg';
import styles from './App.module.scss';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Recipe from "../../components/Recipe/Recipe";
import Button from "@material-ui/core/Button";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import IngredientsTagger from "../../components/IngredientsTagger/IngredientsTagger";

const App = () => {

    const [foodSelected, setFoodSelected] = useState([]);
    const [isEnabledAutocomplete, setIsEnableAutocomplete] = useState(true);

    const ingredientsChangeHandler = (event, value) => {
        setFoodSelected([...value]);
    }

    return (
        <div>
            <Router>
                <div className={styles.app}>
                    <header className={styles.appHeader}>
                    </header>
                    <Container maxWidth="md">
                        <Grid container
                              justify="center"
                              alignItems="center"
                              spacing={4}>
                            <Grid item xs={12}>
                                <img src={logo} className={styles.appLogo} alt="logo"/>
                            </Grid>
                            <Grid item xs={12}>
                                <IngredientsTagger
                                    disabled={!isEnabledAutocomplete}
                                    changed={ingredientsChangeHandler}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    justify="center">
                                    <Grid item xs={3}>
                                        <Link to="/recipe" onClick={() => {
                                            setIsEnableAutocomplete(false)
                                        }}>
                                            <Button className={styles.appButton} variant="contained"
                                                    color="primary">Recipe</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Link to="/cook.me" onClick={() => {
                                            setIsEnableAutocomplete(true)
                                        }}>
                                            <Button className={styles.appButton} variant="contained"
                                                    color="primary">Reset</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Redirect to="/cook.me"/>
                    </Route>
                    <Route exact path="/recipe">
                        <Recipe ingredients={foodSelected} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
