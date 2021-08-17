import React, { useContext } from 'react';

import styles from '../../styles/Comments.module.scss';
import Comment from './Comment';
import { CommentsContext } from '../general/CommentsContext';

const CommentsSection = () => {
	const { comments } = useContext(CommentsContext);

	if (comments.length == 0) {
		return (
			<section className={styles.commentsSection}>
				<h4 className={styles.noComments}>There are no comments!</h4>
			</section>
		);
	}
	return (
		<section className={styles.commentsSection}>
			{comments.map((comment, idx) => (
				<Comment key={idx} comment={comment} />
			))}
		</section>
	);
};

export default CommentsSection;
