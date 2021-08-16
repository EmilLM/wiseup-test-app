import styles from '../../styles/PokemonCard.module.scss';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PokemonCard = ({ pokemon }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const router = useRouter()

	return (
		<div className={styles.card}>
			<Link href={`/${encodeURIComponent(pokemon.name)}`}>
				<a>{pokemon.name}</a>
			</Link>
			<button onClick={() => setIsFavorite(!isFavorite)}>
				{isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
			</button>
		</div>
	);
};

export default PokemonCard;
