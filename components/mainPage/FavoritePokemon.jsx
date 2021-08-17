import React, { useContext } from 'react';

import styles from '../../styles/MainPage.module.scss';
import PokemonCard from '../general/PokemonCard';
import { FavoritesContext } from '../general/FavoritesContext';

const FavoritePokemon = () => {
	const { favorites } = useContext(FavoritesContext);
	const favPokemonCards = favorites.map((pokemon) => (
		<PokemonCard key={pokemon.name} pokemon={pokemon} />
	));
	return (
		<div className={styles.container}>
			<div className={styles.cardsContainer}>
				{favorites.length == 0 ? (
					<h2>Favorite Pokemon list is empty!</h2>
				) : (
					favPokemonCards
				)}
			</div>
		</div>
	);
};

export default FavoritePokemon;
