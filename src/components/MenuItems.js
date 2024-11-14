import Recipe from "./Recipe";

export default function MenuItems({ recipe }) {
    return (
        <>
        <div className='menu'>
        <img src={recipe.image_url} alt={recipe.title} />
        <div className='title'>
            <p>{recipe.title}</p>
        </div>
        <div className='description'>
            <p>Cooking time: {recipe.cooking_time}</p>
            <p>Servings: {recipe.servings}</p>
            <p></p>
        </div>
        <div className='footer'>
            <Recipe recipe={recipe} />
        </div>
        </div>
        </>
    )
}
