import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function AddRecipe({recipes, handleUpdateRecipe}) {

    const [title, setTitle] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [servings, setServings] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // const [newRecipe, setNewRecipe] = useState(recipes);
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    function handleAddRecipe(e) {
        e.preventDefault();

        const id = new Date().getTime();
        const addedRecipe = {
            id: id,
            title: title,
            imgredients: [],
            instructions: [],
            cooking_time: cookingTime,
            servings: servings,
            image_url: imageUrl
        };
        handleUpdateRecipe(addedRecipe);
    }

    return(
    <>
        <div className="add-recipe-section">
        <span className='add-recipe-text'>
            Have a new recipe in your mind?
        </span>
        <button className='add-recipe-button' onClick={() => handleShow()}>Add New Recipe</button>
        </div>

        <Modal show={showModal} onHide={handleClose} fullscreen="xxl-down">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <div className='form-add-section'>
                <form onSubmit={handleAddRecipe}>
                        <div className='form-group'>
                            <label>Recipe Title</label>
                            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Ingredients:</label>
                            <div className='ingredient-details d-flex m-auto'>
                                <label>Name:</label>
                                <input type='text' />
                                <label>Quantity:</label>
                                <input type='text' />

                                <div className='ingre-buttons d-flex m-auto'>
                                    <button>&#43;</button>
                                    <button>&#10005;</button>
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Instructions:</label>
                            <div className='instruction-details d-flex'>
                                <label>Step 1:</label>
                                <input type='text' className='' />

                                <div className='ingre-buttons d-flex'>
                                    <button>&#43;</button>
                                    <button>&#10005;</button>
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Cooking Time: </label>
                            <input type='text' value={cookingTime} onChange={(e) => setCookingTime(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>No. of Servings:</label>
                            <input type='text' value={servings} onChange={(e) => setServings(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Image URL:</label>
                            <input type='text' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                        </div>


                    <button className='add-recipe-button'> Add Recipe </button>

                </form>
            </div>
        </Modal.Body>
        
        </Modal>
        </>
    )
}