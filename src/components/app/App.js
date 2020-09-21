import React, {useEffect, useState} from 'react';
import logo from '../../images/logo.svg';
import './App.scss';
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";

const topFoodUsed = [
    {name: 'Apple', year: 1994}
];

export default function App() {

    const [food, setFood] = useState({});

    async function fetchData() {
        const list = await topFoodUsed;
        setFood(list)
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div className="App">
            <header className="App-header">
            </header>

            <Container maxWidth="md">
                <Grid container
                      justify="center"
                      alignItems="center"
                      spacing={3}>
                    <Grid item xs={12}>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            options={food.map((option) => option.name)}
                            freeSolo
                            onChange={(event, value) => console.log(value)}
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
                        <Button variant="contained" color="primary">
                            Cooked me 🥘
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
