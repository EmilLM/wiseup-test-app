import React, { useState, useEffect, useContext } from 'react';

import styles from '../../styles/Comments.module.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CommentsContext } from '../general/CommentsContext';

const Comment = ({ comment }) => {
	const [iconColor, setIconColor] = useState(null);
	const { removeComments } = useContext(CommentsContext);

	useEffect(() => {
		setIconColor('#' + Math.floor(Math.random() * 16777215).toString(16));
	}, [comment]);

	
	return (
		<div className={styles.commentCard}>
			<div className={styles.nameIcon} style={{ background: iconColor }}>
				{comment?.name[0]}
			</div>
			<div className={styles.commentDetails}>
				<div className={styles.nameDate}>
					<p className={styles.name}>{comment.name} </p>
					<p className={styles.date}>{comment.date} </p>
					<p className={styles.number}> {comment.pokemonSeen} Pokemon seen!</p>
				</div>

				<p className={styles.comment}>{comment.comment}</p>
			</div>
			<AiOutlineCloseCircle onClick={() => removeComments(comment)} />
		</div>
	);
};

export default Comment;
