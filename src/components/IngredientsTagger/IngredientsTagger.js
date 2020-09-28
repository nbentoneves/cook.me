import React, {useEffect, useState} from 'react';
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const IngredientsTagger = (props) => {

    const topFoodUsed = [
        {name: 'Apple', year: 1994}
    ];

    return (
        <Autocomplete
            id="ingredients"
            multiple
            disabled={props.disabled}
            options={topFoodUsed.map((option) => option.name)}
            freeSolo
            onChange={(event, value) => {
                props.changed(event, value)
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
    );

}

export default IngredientsTagger;