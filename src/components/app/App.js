import React, {useEffect, useState} from 'react';
import logo from '../../images/chef.svg';
import './App.scss';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import Recipe from "../recipe/Recipe";
import Button from "@material-ui/core/Button";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const topFoodUsed = [
    {name: 'Apple', year: 1994}
];

export default function App() {

    const [food, setFood] = useState(topFoodUsed);
    const [foodSelected, setFoodSelected] = useState([]);
    const [isEnabledAutocomplete, setIsEnableAutocomplete] = useState(true);

    async function fetchData() {
        const list = await topFoodUsed;
        setFood(list)
    }

    useEffect(() => {

    });

    return (
        <div>
            <Router>
                <div className="App">
                    <header className="App-header">
                    </header>

                    <Container maxWidth="md">
                        <Grid container
                              justify="center"
                              alignItems="center"
                              spacing={4}>
                            <Grid item xs={12}>
                                <img src={logo} className="App-logo" alt="logo"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    id="ingredients"
                                    multiple
                                    disabled={!isEnabledAutocomplete}
                                    options={food.map((option) => option.name)}
                                    freeSolo
                                    onChange={(event, value) => {
                                        setFoodSelected(value);
                                    }}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                variant="outlined"
                                                label={option}
                                                {...getTagProps({index})}
                                            />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Products"
                                            placeholder="Apple"
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Grid
                                    container
                                    justify="center">
                                    <Grid item xs={3}>
                                        <Link to="/recipe" onClick={() => {
                                            setIsEnableAutocomplete(false)
                                        }}>
                                            <Button className="App-button" variant="contained"
                                                    color="primary">Recipe</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Link to="/" onClick={() => {
                                            setIsEnableAutocomplete(true)
                                        }}>
                                            <Button className="App-button" variant="contained"
                                                    color="primary">Reset</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <Switch>
                    <Route path="/recipe">
                        {/* https://learnwithparam.com/blog/how-to-pass-props-to-state-properly-in-react-hooks/ */}
                        <Recipe ingredients={foodSelected}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
