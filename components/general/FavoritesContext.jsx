import React, { useState, useEffect, createContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = (props) => {
	const [favorites, setFavorites] = useState([]);

	const addFavorite = (pokemon) => {
		setFavorites([...favorites, pokemon]);
		console.log(favorites);
	};

	const removeFavorite = (pokemon) => {
		const remainingFavorites = favorites.filter(
			(item) => item.name != pokemon.name
		);
		setFavorites(remainingFavorites);
	};

	// const saveFavorites = async (favs, uid) => {
	// 	try {
	// 		const jsonValue = JSON.stringify(favs);
	// 		await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
	// 	} catch (e) {
	// 		console.log('saving Favs', e);
	// 	}
	// };

	// const loadFavorites = async (uid) => {
	// 	try {
	// 		const value = await AsyncStorage.getItem(`@favorites-${uid}`);
	// 		if (value !== null) {
	// 			setFavorites(JSON.parse(value));
	// 			// setFavorites([]);
	// 		}
	// 	} catch (e) {
	// 		console.log('loading Favs', e);
	// 	}
	// };

	// useEffect(() => {
	// 	if (user && user.uid) {
	// 	  loadFavorites(user.uid);
	// 	}
	//   }, [user]);

	//   useEffect(() => {
	// 	if (user && user.uid && favorites.length) {
	// 	  saveFavorites(favorites, user.uid);
	// 	}
	//   }, [favorites, user]);

	return (
		<FavoritesContext.Provider
			value={{ favorites, addFavorite, removeFavorite }}
		>
			{props.children}
		</FavoritesContext.Provider>
	);
};
