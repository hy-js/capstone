import React, { useContext } from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { ArticleContext } from './App';
import uuidv4 from 'uuid/v4';

export default function ArticleEdit({ recipe }) {
  const { handleArticleChange, handleArticleSelect, handleVocabSelect } =
    useContext(ArticleContext);

  function handleChange(changes) {
    handleArticleChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      text: ''
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id)
    });
  }

  return (
    <>
      <div className='card dark:border-gray-400'>
        <div>
          <button onClick={() => handleArticleSelect(undefined)}>
            &#x2716;
          </button>
        </div>
        <span className='card__label'>
          <em>{recipe.language}</em>
        </span>
        <div>
          <div className='card__header'>
            <a href={recipe.source} rel='noopener noreferrer' target='_blank'>
              <h3 className='card__title hero underline'>{recipe.name}</h3>
            </a>
            <button className='text-white border border-black bg-black hover:text-black hover:bg-white p-1 mx-2'>
              Add ➤
            </button>
          </div>
        </div>
        <div className='context__edit'>
          <span className='card__label'>Context:</span>
          {recipe.paragraphs.map((ingredient) => (
            <RecipeIngredientEdit
              key={ingredient.id}
              handleIngredientChange={handleIngredientChange}
              handleIngredientDelete={handleIngredientDelete}
              ingredient={ingredient}
            />
          ))}
        </div>
        <div className='notes__edit'>
          <span className='card__label'>Notes:</span>
          <textarea />
        </div>
      </div>
    </>
  );
}
