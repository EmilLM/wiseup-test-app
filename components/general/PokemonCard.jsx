import styles from '../../styles/PokemonCard.module.scss';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { FavoritesContext } from './FavoritesContext';

const PokemonCard = ({ pokemon }) => {
	const { favorites, addFavorite, removeFavorite } =
		useContext(FavoritesContext);

	const isFavorite = favorites.find((item) => item.name === pokemon.name);

	return (
		<div className={styles.card}>
			<Link href={`/${encodeURIComponent(pokemon.name)}`}>
				<a>{pokemon.name}</a>
			</Link>
			<button
				onClick={() =>
					!isFavorite ? addFavorite(pokemon) : removeFavorite(pokemon)
				}
			>
				{isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
			</button>
		</div>
	);
};

export default PokemonCard;
