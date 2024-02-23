import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './components/Categories.js';
import CategoryMeals from './components/CategoryMeals.js';
import MealDetail from './components/MealDetail.js';
import Pic from './components/Pic.js';

function App() {

  const [savedRecipes, setSavedRecipes] = useState([{ id: "52952", name: "Beef Lo Mein", category: "Beef" }, { id: "52831", name: "Chicken Kaarage", category: "Chicken" }])

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" render={() => <About savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes} />} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/categories/:id" exact component={CategoryMeals} />
          <Route path="/categories/:id/ :meal" render={(props) => <MealDetail savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes} {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;