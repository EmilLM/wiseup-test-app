import styles from '../../styles/Layout.module.scss';

const Layout = (props) => {
	return (
		<div className={styles.container}>
			<header>
				<h1 className={styles.header}>{props.name}</h1>
			</header>
			{props.children}

			<footer className={styles.footer}>
				Wiseup Test Pokemon App by Luchian Emil
			</footer>
		</div>
	);
};

export default Layout;
