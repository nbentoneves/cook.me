import React, {useEffect, useState} from 'react';
import styles from './Recipe.module.scss';
import recipe from '../../container/images/cake.jpg';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router";

const Recipe = (props) => {

    const ingredientsTags = [];
    for (let index = 0; index < props.ingredients.length; index++) {
        if (index === props.ingredients.length - 1) {
            /**
             * FIXME: The {index} should be change for other key. This isn't performance
             */
            ingredientsTags.push(<i key={index}>{props.ingredients[index]}</i>)
        } else {
            ingredientsTags.push(<i key={index}>{props.ingredients[index]}, </i>)
        }
    }

    return (
        <div className={styles.recipe}>
            {props.ingredients.length === 0 ? <Redirect to="/cook.me"/> : null}
            <Container maxWidth="md">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={recipe}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography variant="body1" component="div">
                                <span>Tags:</span> {ingredientsTags}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div">
                                <h3>Ingredients</h3>
                                <p>Plain flour: 228g or 1 and 3/4 cups(loosely packed)
                                    Mixed spice: 1 tsp
                                    Cinnamon powder:1 tsp
                                    Baking powder:1 tsp
                                    Salt:1/2 tsp
                                    Eggs (medium): 3
                                    Vanilla Extract (optional):1 tsp
                                    Soft dark or light brown sugar: 100g or 1/2 cup
                                    Mollasses /if you don’t have molasses you can use brown sugar : 3 tbsp
                                    Butter: 226g or 2 sticks or 1 cup
                                    Dried mixed fruit: 600-700g(you can use dry fruits of your choice and can
                                    choose
                                    candied peels or glazed cherries or nuts according to your preference)
                                    Zest of 1 Lemon
                                    Zest of 1Orange
                                    Water: 180ml or 3/4 cup
                                    All Spices” I have used is powdered nutmeg, cardamom, cloves,dry ginger.

                                    Dried fruits I used in this recipe;

                                    Raisins-175-200g

                                    Cranberries :175-200g

                                    Prunes or dry plumes:175-200 g

                                    Dates:75-100g

                                    Pecans:50-75g
                                </p>
                                <h3>Getting everything ready</h3>
                                <p>Lightly grease a 7 inch or 8 inch cake tin with some butter/oil and neatly
                                    line
                                    with greaseproof paper (double thickness).The pan I used in the video is 7
                                    inch
                                    pan.
                                    Chop the nuts and dried fruits into a large clean bowl .You can use a
                                    prepared
                                    dried fruit mixture available in most supermarkets, or blend your own to
                                    create
                                    an individual cake, balance the mixture to your preferences (I love more
                                    raisins, cranberries,prunes and less chopped dates in mine).
                                    Grate the rind of lemon and orange and keep it aside.
                                    Sift the flour ,baking powder, mix spices, zest of orange and lemon and salt
                                    into another bowl.
                                    Pre-heat oven to 320 F 160°C .
                                    How to make moist fruit cake
                                    We can make moist fruit cake in 3 simple steps.
                                </p>
                                <h3>Step 1.Boil the dry fruits</h3>
                                <p>In a medium saucepan, combine the butter with the raisins, cranberries, brown
                                    sugar,molasses and water and bring to a boil. Simmer over moderately high
                                    heat
                                    for 3-4 minutes, stirring occasionally. Remove from the heat and let stand
                                    for
                                    45 minutes or until it is cool.</p>

                                <h3>Step 2.Add all the rest of ingredients</h3>
                                <p>Add the eggs (lightly beaten) and vanilla extract (optional) and the nuts.
                                    Add in the flour mix which is Flour+Baking powder+Salt+Ground spices+Zest of
                                    orange and lemon.I didn’t add the spices and the zest of lemon and orange
                                    into
                                    the boil mix because we need to preserve the fresh smell of those spices and
                                    that of lemon and orange.

                                    The taste of a fruit cake is mostly the aroma of that cake

                                    Mix everything together, just until everything is well incorporated.
                                </p>

                                <h3>Step 3.Bake the fruit cake</h3>
                                <p>Transfer the batter into the prepared pan.7 inch pan / 8 inch pan will work.
                                    Bake in the center of the oven @ 320F for about 75-90 minutes, until a
                                    toothpick
                                    inserted in the center comes out clean.

                                    Large baking tray (8 inch) will take slightly less baking time.

                                    Let the cake cool completely.

                                    Unmold the cake and transfer to a serving platter. This fruit cake is best
                                    to
                                    serve the next day.The flavor and texture of cake improves a lot with that
                                    time.The cake may seem buttery and crumbly and less flavorful if we cut it
                                    immediately it is cooled.</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Container>
        </div>
    );
}

export default Recipe;