import React, { useState, useEffect, useReducer, useMemo, useRef } from 'react';

const initialState =  {
  favorites: [] 
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.characters, action.payload]
      };
      default:
        return state; 
  }
}

const Characters = () => {
const  [characters, setCharacters]= useState([]);
const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
const [search, setsearch] = useState('');
const searchInput =useRef(null);

useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.Json())
    .then(data => setCharacters(data.results))
},[]);
 const handleClick = favorite => {
  dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
 }


 const handleSearch = () => {
  setsearch(searchInput.current.value);
 }
 
//  const filterdUsers = useMemo(() => {
//    characters.filter((user) => {
//     return user.name.toLowercase().includes(search.toLowerCase());
  
  
 const filterdUsers = useMemo(() => 
  characters.filter((user) => {
   return user.name.toLowercase().includes(search.toLowerCase());
  }),
 [characters, search]
)
 


    return (
      <div className="Characters">

        {favorites.favorites.map(favorite => (
          <li key={favorite.id}>
            (favorite.name)
          </li>
        ))}

          <div className="Search">
            <input type="text" value={search} ref={searchInput} onChange={handleSearch}/>
          </div>

        {filteredUsers.map(character => {
            <div className="item" key={character.id}>
              <h2> {character.name} </h2>
              <button type='button' onClick={()=> handleClick(character)}>Agregar a Favoritos</button>  
            </div>
        })}  
      </div>  
    );
}

export default Characters;

