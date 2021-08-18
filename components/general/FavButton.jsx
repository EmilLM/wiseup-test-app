import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { FavoritesContext } from './FavoritesContext';
import React, { useContext, useEffect } from 'react';

const FavButton = ({ pokemon }) => {
	const { favorites, addFavorite, removeFavorite, loadFavorites } =
		useContext(FavoritesContext);

	const isFavorite = favorites.find((item) => item.name === pokemon.name);

	return (
		<button
			onClick={() =>
				!isFavorite ? addFavorite(pokemon) : removeFavorite(pokemon)
			}
		>
			{!isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
			{!isFavorite ? 'Add favorite' : 'Remove favorite'}
		</button>
	);
};

export default FavButton;
