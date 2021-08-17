import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/MainPage.module.scss';
import PokemonCard from '../general/PokemonCard';

const AllPokemon = () => {
	const [pokemonData, setPokemonData] = useState(null);
	const [url, setUrl] = useState(
		'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'
	);

	const getPokemonData = async () => {
		try {
			const { data } = await axios(url);
			setPokemonData(data);
			console.log(data);
		} catch (e) {
			console.error(e);
		}
	};
	const handleNext = () => {
		setUrl(pokemonData?.next);
		console.log(url);
	};

	const handlePrevious = () => {
		setUrl(pokemonData?.previous);
	};

	const pokemonCards = pokemonData?.results.map((pokemon) => (
		<PokemonCard key={pokemon.name} pokemon={pokemon} />
	));

	useEffect(() => {
		getPokemonData();
	}, [url]);

	return (
		<div className={styles.container}>
			<div className={styles.cardsContainer}>{pokemonCards}</div>

			<div className={styles.paginationButtons}>
				<button
					className={styles.previous}
					disabled={!pokemonData?.previous}
					onClick={handlePrevious}
				>
					Previous
				</button>
				<span>|</span>
				<button
					className={styles.next}
					disabled={!pokemonData?.next}
					onClick={handleNext}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default AllPokemon;
