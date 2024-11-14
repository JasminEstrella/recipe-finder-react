import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Recipe({ recipe }) {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <button onClick={() => handleShow()}> See recipe</button>

      <Modal show={showModal} onHide={handleClose} fullscreen="xxl-down">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="recipe-section">
            <img src={recipe.image_url} alt={recipe.title} />
            <div className="title">
              <h1>{recipe.title}</h1>
            </div>
            <div className="details">
              <div className="prep">
                <p>Cooking time: {recipe.cooking_time}</p>
                <p>Servings: {recipe.servings}</p>
              </div>
              <div className="ingredients">
                <h2>Ingredients:</h2>
                <ul>
                  {recipe.ingredients?.map((ingredient, i) => (
                    <li key={i}>
                      <span>{ingredient.quantity}</span> {ingredient.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="instruction">
                <h2>Instructions:</h2>
                <ol>
                  {recipe.instructions?.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
