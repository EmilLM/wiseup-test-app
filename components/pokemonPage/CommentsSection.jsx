import React, { useContext } from 'react';

import styles from '../../styles/Comments.module.scss';
import Comment from './Comment';
import { CommentsContext } from '../general/CommentsContext';

const CommentsSection = () => {
	const { comments } = useContext(CommentsContext);

	return (
		<section className={styles.commentsSection}>
			{comments.map((comment, idx) => (
				<Comment key={idx} comment={comment} />
			))}
		</section>
	);
};

export default CommentsSection;
