import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/images/chef.svg";
import styles from "./Chef.module.scss";
import IngredientsTagger from "../../components/IngredientsTagger/IngredientsTagger";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import ResetIcon from '@material-ui/icons/RotateLeft';

const Chef = (props) => {

    const [isEnabledAutocomplete, setIsEnableAutocomplete] = useState(true);
    const [foodSelected, setFoodSelected] = useState([]);

    const ingredientsChangeHandler = (event, value) => {
        setFoodSelected([...value]);
    }

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const capitalizeFood = (listOfFood) => {
        return listOfFood.map(food => capitalize(food))
    }

    return (
        <Container maxWidth="md">
            <Grid container
                  justify="center"
                  alignItems="center"
                  spacing={4}>
                <Grid item xs={12}>
                    <img src={logo} className={styles.ChefLogo} alt="logo"/>
                </Grid>
                <Grid item xs={12}>
                    <IngredientsTagger
                        disabled={!isEnabledAutocomplete}
                        changed={ingredientsChangeHandler}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container
                          justify="center">
                        <Grid item xs={6} md={3} className={styles.ChefGridButtonLeft}>
                            <Link to={{
                                pathname: '/recipe',
                                search: '?ingredients=' + capitalizeFood(foodSelected).join(',')
                            }} onClick={() => {
                                setIsEnableAutocomplete(false)
                            }}>
                                <Button variant="contained"
                                        color="primary"
                                        startIcon={<SearchIcon/>}>Recipe</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={3} className={styles.ChefGridButtonRight}>
                            <Link to="/" onClick={() => {
                                setIsEnableAutocomplete(true)
                            }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<ResetIcon/>}>Reset</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chef;