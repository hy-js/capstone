import React from 'react'

export default function ParagraphContextEdit(props) {
  const {
    ingredient,
    handleIngredientChange,
    handleIngredientDelete
  } = props

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
  }
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        onChange={(e) => handleChange({ text: e.target.value })}
        value={ingredient.text}
      />
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  )
}
