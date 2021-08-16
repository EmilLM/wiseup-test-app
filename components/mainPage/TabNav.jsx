import styles from '../../styles/TavNav.module.scss';

const TabNav = ({ showAll, setShowAll }) => {
	const handleShowFavorites = () => {
		setShowAll(false);
	};

	const handleShowAll = () => {
		setShowAll(true);
	};

	return (
		<nav className={styles.nav}>
			<button
				onClick={handleShowAll}
				className={`${styles.button}  ${showAll && styles.active}`}
			>
				All Pokemon
			</button>
			<button
				onClick={handleShowFavorites}
				className={`${styles.button}  ${!showAll && styles.active}`}
			>
				Favorite Pokemon
			</button>
		</nav>
	);
};

export default TabNav;
