import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';

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
      "image_url": "https://i0.wp.com/herdgefluester.de/wp-content/uploads/2014/08/Spaghetti-Carbonara-scaled.jpg?resize=2048,2048&ssl=1"
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
      "image_url": "https://img.freepik.com/premium-photo/plate-chocolate-chip-cookies_896360-649.jpg"
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
  }
];

export default function App() {
  return (
    <div className="App">
      <Header/>
      <SearchFilter/>
      <Menu/>
      <Footer/>
    </div>
  );
}


function Header() {
  return (
    <header>
      {/* <img src='/logo-flower.jpg' alt='logo'/> */}
      <span className='logo-text'>Apple Cinnamon</span>
    </header>
  )
}

function SearchFilter() {
  return (
    <div className='search-section'>
      <span className='search-text'>
        Which recipe would you like to search? 
      </span>
      <div className='search-bar'>
        <input id='search-input' placeholder='Type menu here...'/>
        <button>Search</button>
      </div>
    </div>
  )
}


function Menu() {
  return(
    <div className='menu-list'>
      {
        recipes.map((recipe) => 
          <MenuItems recipe={recipe} key={recipe.title}  />
        )
      }
      {/* <MenuItems/> */}
    </div>
  )
}

function MenuItems({ recipe }) {
  return (
    <>
    <div className='menu'>
        <img src={recipe.image_url} alt={recipe.title} />
      <div className='title'>
        <h3>{recipe.title}</h3>
      </div>
      <div className='description'>
        <p>Cooking time: {recipe.cooking_time}</p>
        <p>Servings: {recipe.servings}</p>
        <p></p>
      </div>
      <div className='footer'>
        <button>See recipe</button>
      </div>
    </div>
    </>
  )
}

function Footer() {
  return(
    <footer>
      <div>
        <p>Contact Us</p>
        <p>For inquiries, reach out at your-email@example.com</p>
        <div>
          <p>Follow us on Facebook | Twitter | Instagram</p>
          <p>Subscribe to our newsletter for updates and exclusive content!</p>
        </div>
      </div>
      <div>
        <p>© 2024 Your Company. All rights reserved. | Privacy Policy</p>
      </div>
    </footer>
  )
}