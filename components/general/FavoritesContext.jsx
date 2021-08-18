import React, { useState, useEffect, createContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = (props) => {
	const [favorites, setFavorites] = useState([]);

	const addFavorite = (pokemon) => {
		setFavorites([...favorites, pokemon]);
	};

	const removeFavorite = (pokemon) => {
		const remainingFavorites = favorites.filter(
			(item) => item.name != pokemon.name
		);
		const jsonValue = JSON.stringify(remainingFavorites);
		window.localStorage.setItem('Favorites', jsonValue);
		setFavorites(remainingFavorites);
	};

	const saveFavorites = (favs) => {
		const jsonValue = JSON.stringify(favs);
		window.localStorage.setItem('Favorites', jsonValue);
	};

	const loadFavorites = () => {
		const value = window.localStorage.getItem('Favorites');
		if (value !== null) {
			setFavorites(JSON.parse(value));
		}
	};

	useEffect(() => {
		loadFavorites();
	}, []);

	useEffect(() => {
		if (favorites.length !== 0) {
			saveFavorites(favorites);
		}
	}, [favorites]);

	return (
		<FavoritesContext.Provider
			value={{
				favorites,
				addFavorite,
				removeFavorite,
				saveFavorites,
				loadFavorites,
			}}
		>
			{props.children}
		</FavoritesContext.Provider>
	);
};
