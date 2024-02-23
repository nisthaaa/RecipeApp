import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function About(props){

    const fetchRecipes = () => props.savedRecipes.map(recipe => {
        const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s={recipe}`)
        const recipes = data.json()
        console.log(recipes)
    })

    const removeRecipe = (recipeId) => {
        props.setSavedRecipes(props.savedRecipes.filter((recipe)=> recipe.id !== recipeId))
    }

    return(
        <div>
            <h1>Saved Recipes</h1>
            {props.savedRecipes.map(recipe=>(
                <h4 key={recipe.id}>
                    <Link to={`/categories/${recipe.category}/${recipe.id}`}>{recipe.name}</Link>
                    <button onClick={()=>removeRecipe(recipe.id)}>Delete</button>
                </h4>
            ))}
        </div>
    )
}

export default About 