import { TiArrowBackOutline } from 'react-icons/ti';
import styles from '../../styles/PokemonPage.module.scss';
import Link from 'next/link';

const BackButton = () => {
	return (
		<Link href='/'>
			<button className={styles.backButton}>
				<TiArrowBackOutline />
			</button>
		</Link>
	);
};

export default BackButton;
