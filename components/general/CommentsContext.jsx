import React, { useState, useEffect, createContext } from 'react';
import { getDate } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';

export const CommentsContext = createContext();

const initialState = [
	{
		id: uuidv4(),
		name: 'Emil',
		pokemonSeen: 5,
		comment: 'Best pokemon ever! ',
		date: getDate(),
	},
	{
		id: uuidv4(),
		name: 'Luchian',
		pokemonSeen: 15,
		comment: 'This one is so cool',
		date: getDate(),
	},
];

export const CommentsContextProvider = (props) => {
	const [comments, setComments] = useState(initialState);

	console.log('ls', global.localStorage);
	useEffect(() => {
		console.log('wls', window.localStorage);
	});

	
	const addComments = (comment) => {
		setComments([...comments, comment]);
		console.log(comments);
	};

	const removeComments = (comment) => {
		const remainingComments = comments.filter((item) => item.id != comment.id);
		setComments(remainingComments);
	};

	return (
		<CommentsContext.Provider value={{ comments, addComments, removeComments }}>
			{props.children}
		</CommentsContext.Provider>
	);
};
