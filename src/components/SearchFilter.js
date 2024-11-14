

export default function SearchFilter({searchRecipe, onSearch, onMenuFilter}) {
    return (
        <form onSubmit={onMenuFilter}>
            <div className='search-section'>
                <span className='search-text'>
                Which recipe would you like to search? 
                </span>
                <div className='search-bar'>
                <input 
                    id='search-input' 
                    placeholder='Type menu here...' 
                    value={searchRecipe}
                    onChange={(e) => onSearch(e.target.value) }
                />
                <button>Search</button>
                </div>
            </div>
        </form>
    )
}
