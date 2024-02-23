import React from 'react'
import CategoryCard from './CategoryCard'
import SearchBar from './SearchBar'
import MealCard from './MealCard'

class CardContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recipeCategories: [],
            currentCategory: "",
            currentMeals: []
        }
    }

    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(resp => resp.json())
            .then(categoryData => {
                this.setState({ recipeCategories: categoryData.categories })
            }
            )
    }

    handleClick = (categoryName) => {
        this.setState({
            recipeCategories: [],
            currentCategory: categoryName
        })
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?s={categoryName}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.meals)
                this.setState({ currentMeals: data.meals })
            })
    } //to click and see more details about the recipes

    render() {
        return (
            <div>
                <SearchBar />
                {this.state.recipeCategories.map(category => (
                    <CategoryCard key={category.idCategory}
                        category={category.strCategory}
                        handleClick={() => this.handleClick(category.strCategory)} />
                )
                )}
                {this.state.currentCategory !== "" ? <h3>{this.state.currentCategory}</h3> : null}
                {<br />}
                {<br />}
                {this.state.currentMeals !== null ? this.state.currentMeals.map(meal => (
                    <MealCard
                        key={meal.idMeal}
                        name={meal.strMeal}
                        pic={meal.strMealThumb}
                    />
                )) : null}

            </div>
        )
    }

}
export default CardContainer