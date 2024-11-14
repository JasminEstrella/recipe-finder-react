import MenuItems from "./MenuItems";

export default function Menu({menuItem}) {
    return(
        <div className='menu-list'>
        { menuItem.length <= 0 ? 
            <h1>Not found</h1>
        : 
        menuItem.map((recipe) => 
            <MenuItems recipe={recipe} key={recipe.title}  />
            )
        }
        </div>
    )
}