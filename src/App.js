import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import AddRecipe from "./components/AddRecipe";
import SearchFilter from "./components/SearchFilter";

const recipes = [
  {
      "id": 1,
      "title": "Spaghetti Carbonara",
      "ingredients": [
          {"name": "spaghetti", "quantity": "200g"},
          {"name": "bacon", "quantity": "100g"},
          {"name": "eggs", "quantity": "2"},
          {"name": "parmesan cheese", "quantity": "50g"},
          {"name": "black pepper", "quantity": "to taste"},
          {"name": "salt", "quantity": "to taste"}
      ],
      "instructions": [
          "Cook the spaghetti in a large pot of boiling salted water until al dente.",
          "In a separate pan, cook the bacon until crispy.",
          "In a bowl, whisk together the eggs, parmesan cheese, and black pepper.",
          "Drain the spaghetti and add it to the pan with the bacon.",
          "Remove the pan from heat and quickly pour in the egg mixture, stirring rapidly to combine and create a creamy sauce.",
          "Season with salt and serve immediately."
      ],
      "cooking_time": "20 minutes",
      "servings": 4,
      "image_url": "https://cdn.pixabay.com/photo/2019/11/09/06/54/pasta-4612968_1280.jpg"
  },
  {
      "id": 2,
      "title": "Chicken Alfredo",
      "ingredients": [
          {"name": "fettuccine pasta", "quantity": "250g"},
          {"name": "chicken breast", "quantity": "2"},
          {"name": "butter", "quantity": "2 tablespoons"},
          {"name": "garlic", "quantity": "3 cloves"},
          {"name": "heavy cream", "quantity": "1 cup"},
          {"name": "parmesan cheese", "quantity": "1 cup"},
          {"name": "parsley", "quantity": "2 tablespoons"},
          {"name": "salt", "quantity": "to taste"},
          {"name": "black pepper", "quantity": "to taste"}
      ],
      "instructions": [
          "Cook the fettuccine according to package instructions.",
          "Season the chicken breasts with salt and pepper.",
          "In a large skillet, melt the butter over medium heat.",
          "Cook the chicken breasts until golden and cooked through, about 5-7 minutes per side.",
          "Remove the chicken from the skillet and set aside.",
          "In the same skillet, add the minced garlic and cook for about 1 minute.",
          "Add the heavy cream and bring to a simmer.",
          "Stir in the parmesan cheese until the sauce is smooth and creamy.",
          "Slice the cooked chicken and add it to the skillet along with the cooked fettuccine.",
          "Toss everything together and garnish with chopped parsley before serving."
      ],
      "cooking_time": "30 minutes",
      "servings": 4,
      "image_url": "https://th.bing.com/th/id/OIP.LzbvMmKys54tSxgfX53_RQAAAA?rs=1&pid=ImgDetMain"
  },
  {
      "id": 3,
      "title": "Vegetarian Tacos",
      "ingredients": [
          {"name": "corn tortillas", "quantity": "8"},
          {"name": "black beans", "quantity": "1 can"},
          {"name": "corn", "quantity": "1 cup"},
          {"name": "bell pepper", "quantity": "1, chopped"},
          {"name": "red onion", "quantity": "1, chopped"},
          {"name": "avocado", "quantity": "1, sliced"},
          {"name": "cilantro", "quantity": "1/4 cup, chopped"},
          {"name": "lime", "quantity": "1, juiced"},
          {"name": "salt", "quantity": "to taste"},
          {"name": "cumin", "quantity": "1 teaspoon"},
          {"name": "chili powder", "quantity": "1 teaspoon"}
      ],
      "instructions": [
          "Warm the corn tortillas in a skillet or microwave.",
          "In a large bowl, combine the black beans, corn, bell pepper, red onion, cumin, chili powder, and salt.",
          "Mix well to combine.",
          "Spoon the mixture onto the warmed tortillas.",
          "Top with sliced avocado and chopped cilantro.",
          "Squeeze lime juice over the tacos before serving."
      ],
      "cooking_time": "20 minutes",
      "servings": 4,
      "image_url": "https://th.bing.com/th/id/OIP.IAcugyQTzvdHfqhBshMtRgHaLG?rs=1&pid=ImgDetMain"
  },
  {
      "id": 4,
      "title": "Beef Stir-Fry",
      "ingredients": [
          {"name": "beef sirloin", "quantity": "300g, thinly sliced"},
          {"name": "soy sauce", "quantity": "1/4 cup"},
          {"name": "garlic", "quantity": "3 cloves, minced"},
          {"name": "ginger", "quantity": "1 tablespoon, grated"},
          {"name": "bell peppers", "quantity": "2, sliced"},
          {"name": "broccoli", "quantity": "1 cup, chopped"},
          {"name": "carrots", "quantity": "2, julienned"},
          {"name": "green onions", "quantity": "2, sliced"},
          {"name": "sesame oil", "quantity": "1 tablespoon"},
          {"name": "cornstarch", "quantity": "1 tablespoon"},
          {"name": "water", "quantity": "1/4 cup"}
      ],
      "instructions": [
          "In a bowl, combine the soy sauce, garlic, ginger, and cornstarch to make a marinade.",
          "Add the sliced beef to the marinade and let it sit for 15-20 minutes.",
          "Heat the sesame oil in a large skillet or wok over medium-high heat.",
          "Add the marinated beef and stir-fry until browned, about 3-4 minutes.",
          "Remove the beef from the skillet and set aside.",
          "In the same skillet, add the bell peppers, broccoli, and carrots.",
          "Stir-fry the vegetables until tender-crisp, about 5-7 minutes.",
          "Return the beef to the skillet and add the green onions.",
          "Mix everything together and cook for another 2-3 minutes.",
          "Serve hot with rice or noodles."
      ],
      "cooking_time": "30 minutes",
      "servings": 4,
      "image_url": "https://www.twopeasandtheirpod.com/wp-content/uploads/2020/03/Beef-Stir-Fry-6.jpg"
  },
  {
      "id": 5,
      "title": "Chocolate Chip Cookies",
      "ingredients": [
          {"name": "butter", "quantity": "1 cup, softened"},
          {"name": "sugar", "quantity": "1 cup"},
          {"name": "brown sugar", "quantity": "1 cup"},
          {"name": "eggs", "quantity": "2"},
          {"name": "vanilla extract", "quantity": "2 teaspoons"},
          {"name": "all-purpose flour", "quantity": "3 cups"},
          {"name": "baking soda", "quantity": "1 teaspoon"},
          {"name": "salt", "quantity": "1/2 teaspoon"},
          {"name": "chocolate chips", "quantity": "2 cups"}
      ],
      "instructions": [
          "Preheat the oven to 350°F (175°C).",
          "In a large bowl, cream together the butter, sugar, and brown sugar until smooth.",
          "Beat in the eggs one at a time, then stir in the vanilla extract.",
          "Combine the flour, baking soda, and salt in a separate bowl.",
          "Gradually add the dry ingredients to the wet ingredients, mixing until well combined.",
          "Fold in the chocolate chips.",
          "Drop rounded spoonfuls of dough onto ungreased baking sheets.",
          "Bake for 10-12 minutes, or until edges are nicely browned.",
          "Allow cookies to cool on the baking sheet for a few minutes before transferring to wire racks to cool completely."
      ],
      "cooking_time": "20 minutes",
      "servings": "24 cookies",
      "image_url": "https://cdn.pixabay.com/photo/2016/05/10/09/14/cookies-1383304_960_720.jpg"
  },
  {
      "id": 6,
      "title": "Caprese Salad",
      "ingredients": [
          {"name": "tomatoes", "quantity": "4, sliced"},
          {"name": "fresh mozzarella", "quantity": "250g, sliced"},
          {"name": "basil leaves", "quantity": "1/4 cup"},
          {"name": "extra virgin olive oil", "quantity": "1/4 cup"},
          {"name": "balsamic vinegar", "quantity": "2 tablespoons"},
          {"name": "salt", "quantity": "to taste"},
          {"name": "black pepper", "quantity": "to taste"}
      ],
      "instructions": [
          "On a large platter, alternate slices of tomatoes, mozzarella, and basil leaves.",
          "Drizzle with olive oil and balsamic vinegar.",
          "Season with salt and black pepper.",
          "Serve immediately as a light appetizer or side dish."
      ],
      "cooking_time": "10 minutes",
      "servings": 4,
      "image_url": "https://th.bing.com/th/id/OIP.6XBOFiZsf-cueu22qd0koQHaLH?rs=1&pid=ImgDetMain"
  },
  {
    "id": 7,
    "title": "Shrimp Tacos",
    "ingredients": [
      {"name": "shrimp", "quantity": "500g, peeled and deveined"},
      {"name": "olive oil", "quantity": "2 tablespoons"},
      {"name": "lime", "quantity": "1, juiced"},
      {"name": "chili powder", "quantity": "1 teaspoon"},
      {"name": "garlic powder", "quantity": "1 teaspoon"},
      {"name": "salt", "quantity": "to taste"},
      {"name": "corn tortillas", "quantity": "8"},
      {"name": "cabbage", "quantity": "1 cup, shredded"},
      {"name": "avocado", "quantity": "1, sliced"},
      {"name": "cilantro", "quantity": "1/4 cup, chopped"},
      {"name": "sour cream", "quantity": "1/2 cup"}
    ],
    "instructions": [
      "In a bowl, mix the olive oil, lime juice, chili powder, garlic powder, and salt.",
      "Add the shrimp and marinate for 15 minutes.",
      "Heat a skillet over medium-high heat and cook the shrimp until pink and opaque, about 2-3 minutes per side.",
      "Warm the corn tortillas in a skillet or microwave.",
      "Assemble the tacos by adding shrimp, cabbage, avocado, and cilantro to each tortilla.",
      "Top with sour cream and serve."
    ],
    "cooking_time": "25 minutes",
    "servings": 4,
    "image_url": "https://cdn.pixabay.com/photo/2019/09/22/09/47/tacos-4495602_1280.jpg"
  },
  {
    "id": 8,
    "title": "Lemon Garlic Roasted Chicken",
    "ingredients": [
      {"name": "chicken thighs", "quantity": "4"},
      {"name": "lemon", "quantity": "1, juiced"},
      {"name": "garlic", "quantity": "4 cloves, minced"},
      {"name": "olive oil", "quantity": "2 tablespoons"},
      {"name": "thyme", "quantity": "1 teaspoon"},
      {"name": "rosemary", "quantity": "1 teaspoon"},
      {"name": "salt", "quantity": "to taste"},
      {"name": "black pepper", "quantity": "to taste"}
    ],
    "instructions": [
      "Preheat the oven to 400°F (200°C).",
      "In a bowl, mix the lemon juice, garlic, olive oil, thyme, rosemary, salt, and pepper.",
      "Place the chicken thighs in a baking dish and pour the marinade over them.",
      "Roast in the oven for 35-40 minutes, or until the chicken is cooked through and golden brown.",
      "Serve with your favorite side dishes."
    ],
    "cooking_time": "45 minutes",
    "servings": 4,
    "image_url": "https://th.bing.com/th/id/OIP.BceyB8NOrvngu1Ka1MLMoAHaLH?rs=1&pid=ImgDetMain"
  },
  {
    "id": 9,
    "title": "Mango Smoothie",
    "ingredients": [
      {"name": "mango", "quantity": "2, peeled and chopped"},
      {"name": "banana", "quantity": "1"},
      {"name": "Greek yogurt", "quantity": "1/2 cup"},
      {"name": "orange juice", "quantity": "1/2 cup"},
      {"name": "honey", "quantity": "1 tablespoon"},
      {"name": "ice cubes", "quantity": "1 cup"}
    ],
    "instructions": [
      "Combine the mango, banana, Greek yogurt, orange juice, honey, and ice cubes in a blender.",
      "Blend until smooth and creamy.",
      "Pour into glasses and serve immediately."
    ],
    "cooking_time": "5 minutes",
    "servings": 2,
    "image_url": "https://cdn.pixabay.com/photo/2022/10/30/05/22/juice-7556620_960_720.jpg"
  },
  {
    "id": 10,
    "title": "Classic Margherita Pizza",
    "ingredients": [
      {"name": "pizza dough", "quantity": "1 ball"},
      {"name": "tomato sauce", "quantity": "1/2 cup"},
      {"name": "fresh mozzarella", "quantity": "250g, sliced"},
      {"name": "fresh basil leaves", "quantity": "1/4 cup"},
      {"name": "extra virgin olive oil", "quantity": "2 tablespoons"},
      {"name": "salt", "quantity": "to taste"},
      {"name": "black pepper", "quantity": "to taste"}
    ],
    "instructions": [
      "Preheat your oven to 475°F (245°C).",
      "Roll out the pizza dough on a lightly floured surface to your desired thickness.",
      "Transfer the dough to a baking sheet or pizza stone.",
      "Spread the tomato sauce evenly over the dough.",
      "Arrange the mozzarella slices on top of the sauce.",
      "Bake in the preheated oven for 10-12 minutes, or until the crust is golden and the cheese is bubbly.",
      "Remove the pizza from the oven and top with fresh basil leaves.",
      "Drizzle with olive oil and season with salt and black pepper.",
      "Slice and serve hot."
    ],
    "cooking_time": "15 minutes",
    "servings": 4,
    "image_url": "https://cdn.pixabay.com/photo/2020/04/04/09/59/pizza-5001588_1280.jpg"
  } 

];

export default function App() {
  
  const [searchRecipe, setSearchRecipe] = useState('');
  const [recipeList, setRecipeList] = useState(recipes);
  const [menuItem, setMenuItem] = useState(recipes);

  function handleUpdateRecipe(newRecipe) {
    setRecipeList((recipe) => [...recipe, newRecipe]);
    setMenuItem((recipe) => [...recipe, newRecipe]);
  }

  function handleSearch(value) {
    if (value === '') setMenuItem(recipeList);
    setSearchRecipe(value);
  }

  function handleMenuFilter(e) {
    e.preventDefault();
    setMenuItem(recipeList);
    setMenuItem((recipes) => recipes.slice().filter((recipe) => 
      recipe.title.toLowerCase().includes(searchRecipe.toLowerCase())
    ));
  }

  return (
    <div className="App">
      <Header/>
      <SearchFilter 
        searchRecipe={searchRecipe} 
        onSearch={handleSearch} 
        onMenuFilter={handleMenuFilter} 
      />
      <Menu menuItem={menuItem}/>
      <AddRecipe recipes={recipeList} handleUpdateRecipe={handleUpdateRecipe}/>
      <Footer/>
    </div>
  );
}