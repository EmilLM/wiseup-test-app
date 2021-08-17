import React, { useState } from 'react';

import styles from '../../styles/Comments.module.scss';
import Comment from './Comment';
import { getDate } from '../../utils/utils';

const currentDate = getDate();
const initialState = [
	{
		name: 'Emil',
		pokemonSeen: 5,
		comment: 'Best pokemon ever! ',
		date: currentDate,
	},
	{
		name: 'Lukian',
		pokemonSeen: 15,
		comment: 'Best pokemon ever! ',
		date: currentDate,
	},
	{
		name: 'Lukian',
		pokemonSeen: 15,
		comment: 'Best pokemon ever! ',
		date: currentDate,
	},
];
const CommentsSection = () => {
	const [comments, setComments] = useState(initialState);

	return (
		<section className={styles.commentsSection}>
			{comments.map((comment, idx) => (
				<Comment key={idx} comment={comment} />
			))}
		</section>
	);
};

export default CommentsSection;
