import React, { useState, useEffect, createContext } from 'react';
import { getDate } from '../../utils/utils';

export const CommentsContext = createContext();

const initialState = [
	{
		name: 'Emil',
		pokemonSeen: 5,
		comment: 'Best pokemon ever! ',
		date: getDate(),
	},
	{
		name: 'Luchian',
		pokemonSeen: 15,
		comment: 'This one is so cool',
		date: getDate(),
	},
];

export const CommentsContextProvider = (props) => {
	const [comments, setComments] = useState(initialState);

	const addComments = (comment) => {
		comment.date = getDate();
		setComments([...comments, comment]);
		console.log(comments);
	};

	// const removeComments = (comment) => {
	// 	// use uid
	// 	const remainingComments = comments.filter(
	// 		(item) => item.comment != comment.comment
	// 	);
	// 	setComments(remainingComments);
	// };

	return (
		<CommentsContext.Provider value={{ comments, addComments }}>
			{props.children}
		</CommentsContext.Provider>
	);
};
