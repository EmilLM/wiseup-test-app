import styles from '../../styles/MainPage.module.scss';
import AllPokemon from './AllPokemon';
import FavoritePokemon from './FavoritePokemon';
import TabNav from './TabNav';
import React, { useState } from 'react';

const MainPageContent = () => {
	const [showAll, setShowAll] = useState(true);
	const [favoritesList,setFavoritesList] = useState([])

	return (
		<main className={styles.main}>
			<TabNav showAll={showAll} setShowAll={setShowAll} />
			{showAll ? <AllPokemon /> : <FavoritePokemon />}
		</main>
	);
};

export default MainPageContent;
