import React, { useState, createContext } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [storedRecipe, setStoredRecipe] = useState(() => {
    const savedRecipe = sessionStorage.getItem('storedRecipe');
    return savedRecipe ? JSON.parse(savedRecipe) : null;
    // console.log(storedRecipe);
  });

  return (
    <RecipeContext.Provider value={{ storedRecipe, setStoredRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
