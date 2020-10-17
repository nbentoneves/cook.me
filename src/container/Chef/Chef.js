import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/images/chef.svg";
import styles from "./Chef.module.scss";
import IngredientsTagger from "../../components/IngredientsTagger/IngredientsTagger";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const Chef = (props) => {

    const [isEnabledAutocomplete, setIsEnableAutocomplete] = useState(true);
    const [foodSelected, setFoodSelected] = useState([]);

    const ingredientsChangeHandler = (event, value) => {
        setFoodSelected([...value]);
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
                    <Grid
                        container
                        justify="center">
                        <Grid item xs={3}>
                            <Link to={{
                                pathname: '/recipe',
                                search: '?tags=' + foodSelected.join(',')
                            }} onClick={() => {
                                setIsEnableAutocomplete(false)
                            }}>
                                <Button className={styles.ChefButton} variant="contained"
                                        color="primary">Recipe</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link to="/cook.me" onClick={() => {
                                setIsEnableAutocomplete(true)
                            }}>
                                <Button className={styles.ChefButton} variant="contained"
                                        color="primary">Reset</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chef;