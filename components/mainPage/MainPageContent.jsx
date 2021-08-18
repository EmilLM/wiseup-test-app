import styles from '../../styles/MainPage.module.scss';
import AllPokemon from './AllPokemon';
import FavoritePokemon from './FavoritePokemon';
import TabNav from './TabNav';
import React, { useState } from 'react';
import { FavoritesContextProvider } from '../general/FavoritesContext';

const MainPageContent = ({ pokemon }) => {
	const [showAll, setShowAll] = useState(true);

	return (
		<main className={styles.main}>
			<TabNav showAll={showAll} setShowAll={setShowAll} />
			<FavoritesContextProvider>
				{showAll ? <AllPokemon pokemon={pokemon} /> : <FavoritePokemon />}
			</FavoritesContextProvider>
		</main>
	);
};

export default MainPageContent;
