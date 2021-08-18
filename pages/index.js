import Head from 'next/head';
import Layout from '../components/general/Layout';
import MainPageContent from '../components/mainPage/MainPageContent';
import axios from 'axios';

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>Pokemon test app</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout name='PoKeMoN'>
				<MainPageContent pokemon={data} />
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await axios(
		'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'
	);

	return {
		props: { data },
	};
}
