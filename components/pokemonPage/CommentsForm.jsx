import styles from '../../styles/Comments.module.scss';
import { MdDoneAll } from 'react-icons/md';
import { useState, useContext } from 'react';
import { CommentsContext } from '../general/CommentsContext';
import { getDate } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';

const CommentsForm = () => {
	const [commentFormState, setCommentFormState] = useState({
		name: '',
		pokemonSeen: '',
		comment: '',
		date: getDate(),
		id: uuidv4(),
	});
	const { addComments } = useContext(CommentsContext);

	const handleChange = (e) => {
		setCommentFormState({
			...commentFormState,
			[e.target.name]: e.target.value,
		});
	};
	const isValid =
		commentFormState.name &&
		commentFormState.pokemonSeen &&
		commentFormState.comment;

	const handleSubmit = (e) => {
		e.preventDefault();
		addComments(commentFormState);
		setCommentFormState({
			name: '',
			pokemonSeen: '',
			comment: '',
		});
	};

	return (
		<section className={styles.formSection}>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>
					Name:
					<input
						type='text'
						name='name'
						value={commentFormState.name}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor='pokemonSeen'>
					Number of Pokemon seen:
					<input
						type='number'
						name='pokemonSeen'
						value={commentFormState.pokemonSeen}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor='comment'>
					Details:
					<textarea
						type='text'
						name='comment'
						value={commentFormState.comment}
						onChange={handleChange}
					/>
				</label>
				<button type='submit' disabled={!isValid}>
					{isValid && <MdDoneAll />}
					Add comment
				</button>
			</form>
		</section>
	);
};

export default CommentsForm;
