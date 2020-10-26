import React, {useEffect, useState} from 'react';
import styles from './Recipe.module.scss';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Redirect, withRouter} from "react-router";
import ImageError from "../../assets/images/404.png";
import ImageTryAgain from "../../assets/images/close.png";

import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";

import axios from '../../axios';

const Recipe = (props) => {

    const [recipeResult, setRecipeResult] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const [messageError, setMessageError] = useState({})
    const [imageError, setImageError] = useState()

    useEffect(() => {

        if (props.location.search !== '') {
            const joinTags = props.location.search.split('=')[1]

            axios.get("/recipes/get?ingredients=" + joinTags)
                .then(response => {
                    setRecipeResult(response.data);
                    setIsLoading(false)
                })
                .catch(error => {
                    if (error.response.status === 404) {
                        setImageError(ImageTryAgain)
                        setMessageError("Did not found any recipe! Try with other ingredients.")
                    } else {
                        setImageError(ImageError)
                        setMessageError("Something is not working well! Please try later...")
                    }
                    setIsLoading(false)
                })
        }
    }, [props.location.search]);

    let recipePaper = <div className={styles.Spinner}>Loading...</div>

    if (!isLoading) {
        if (recipeResult) {

            const ingredientsTags = [];
            const listOfTags = props.location.search.split('=')[1].split(',')

            for (let index = 0; index < listOfTags.length; index++) {
                if (index === listOfTags.length - 1) {
                    ingredientsTags.push(<i key={index}>{listOfTags[index]}</i>)
                } else {
                    ingredientsTags.push(<i key={index}>{listOfTags[index]}, </i>)
                }
            }

            recipePaper = <Card>
                <CardActionArea>
                    {/*
                    FIXME: #5 - Add a image for recipe
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={recipeImg}
                        title="Contemplative Reptile"
                    />*/}
                    <CardContent>
                        <Typography variant="body1" component="div">
                            <span>Tags:</span> {ingredientsTags}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {recipeResult.title}
                        </Typography>
                        <Typography variant="body2" component="div">
                            <ul>
                                {recipeResult.ingredients.map(ingredient => {
                                    return <li key={ingredient.name}>{ingredient.name} - {ingredient.measure}</li>
                                })}
                            </ul>
                        </Typography>
                        <Typography variant="body1" component="div">
                            <div className={styles.RecipeCardInstructions}
                                 dangerouslySetInnerHTML={{__html: recipeResult.recipe}}/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <FacebookShareButton url={window.location.href}>
                        <FacebookIcon size={32}/>
                    </FacebookShareButton>
                    <TwitterShareButton url={window.location.href}>
                        <TwitterIcon size={32}/>
                    </TwitterShareButton>
                    <WhatsappShareButton url={window.location.href}>
                        <WhatsappIcon size={32}/>
                    </WhatsappShareButton>
                </CardActions>
            </Card>
        } else {
            recipePaper =
                <div className={styles.RecipeError}>
                    <img className={styles.RecipeErrorImage} src={imageError} alt="Bad request"/>
                    <p><strong>{messageError}</strong></p>
                </div>
        }
    }

    return (
        <div className={styles.Recipe}>
            {props.location.search === '' ? <Redirect to="/"/> : null}

            <Container maxWidth="md">
                {recipePaper}
            </Container>
        </div>
    );
}

export default withRouter(Recipe);