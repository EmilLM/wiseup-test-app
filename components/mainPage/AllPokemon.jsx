import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/MainPage.module.scss';
import PokemonCard from '../general/PokemonCard';
import { RiLoader3Fill } from 'react-icons/ri';

const AllPokemon = ({ pokemon }) => {
	const [pokemonData, setPokemonData] = useState(pokemon);

	const [url, setUrl] = useState(
		'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'
	);

	const getPokemonData = async () => {
		try {
			const { data } = await axios(url);
			setPokemonData(data);
		} catch (e) {
			console.error(e);
		}
	};
	const handleNext = () => {
		setUrl(pokemonData.next);
	};

	const handlePrevious = () => {
		setUrl(pokemonData.previous);
	};

	useEffect(() => {
		getPokemonData();
	}, [url]);

	const pokemonCards = pokemonData?.results.map((pkm) => (
		<PokemonCard key={pkm.name} pokemon={pkm} />
	));

	if (!pokemon || !pokemonData)
		return (
			<div className={styles.loader}>
				<RiLoader3Fill />
			</div>
		);

	return (
		<div className={styles.container}>
			<div className={styles.cardsContainer}>{pokemonCards}</div>

			<div className={styles.paginationButtons}>
				<button
					className={styles.previous}
					disabled={!pokemonData?.previous}
					onClick={handlePrevious}
				>
					Prev
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
