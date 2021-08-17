import styles from '../../styles/Comments.module.scss';
import { MdDoneAll } from 'react-icons/md';

const CommentsForm = () => {
	return (
		<section className={styles.formSection}>
			<form>
				<label htmlFor='name'>
					Name:
					<input type='text' name='name' />
				</label>
				<label htmlFor='number'>
					Number of Pokemon seen:
					<input type='number' name='number' />
				</label>
				<label htmlFor='comment'>
					Details:
					<textarea type='text' name='comment' />
				</label>
				<button type='submit'>
					<MdDoneAll />
					Add comment
				</button>
			</form>
		</section>
	);
};

export default CommentsForm;
