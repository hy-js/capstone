import React, { useContext } from 'react'
import Article from './Article'
import { ArticleContext } from './App'

export default function ArticleList({ recipes }) {
  const { handleArticleAdd } = useContext(ArticleContext)

  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return (
            <Article key={recipe.id} {...recipe} />
          )
        })}
      </div>
      {/* <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn--primary"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div> */}
    </div>
  )
}
