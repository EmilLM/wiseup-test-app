import Image from 'next/image';
import styles from '../../styles/PokemonPage.module.scss';
import FavButton from '../general/FavButton';
import CommentsSection from './CommentsSection';
import CommentsForm from './CommentsForm';
import { FavoritesContextProvider } from '../general/FavoritesContext';
import { CommentsContextProvider } from '../general/CommentsContext';

import placeholder from '../../public/placeholder.jpg';

const PokemonPageContent = ({ pokemon }) => {
	const allStats = pokemon.stats.map((stat, idx) => {
		return (
			<span key={idx}>
				&nbsp;{stat.stat.name}: {stat.base_stat}, &nbsp;
			</span>
		);
	});

	const firstThreeMoves = [...pokemon.moves].splice(0, 3);
	const moves = firstThreeMoves.map((move, idx) => {
		return <span key={idx}> &nbsp;{move.move.name}, &nbsp;</span>;
	});

	return (
		<div className={styles.container}>
			<div className={styles.pokemonInfo}>
				<div className={styles.description}>
					<p>
						Weight : <span> &nbsp; {pokemon.weight}</span>
					</p>
					<p>
						Height : <span> &nbsp; {pokemon.height}</span>
					</p>
					<p>Stats : {allStats}</p>
					<p>Moves : {moves}</p>
				</div>
				<div className={styles.imgButton}>
					<Image
						src={pokemon.sprites.front_default || placeholder}
						alt='pokemon'
						priority='true'
						width='200'
						height='200'
					/>
					<FavoritesContextProvider>
						<FavButton pokemon={pokemon} />
					</FavoritesContextProvider>
				</div>
			</div>
			<div className={styles.commentsContainer}>
				<CommentsContextProvider>
					<CommentsSection />
					<CommentsForm />
				</CommentsContextProvider>
			</div>
		</div>
	);
};

export default PokemonPageContent;
