import React, { useState, useEffect, createContext } from 'react';

export const CommentsContext = createContext();

export const CommentsContextProvider = (props) => {
	const [comments, setComments] = useState([]);

	const addComments = (comment) => {
		setComments([...comments, comment]);
	};

	const removeComments = (comment) => {
		const remainingComments = comments.filter((item) => item.id != comment.id);
		const jsonValue = JSON.stringify(remainingComments);
		window.localStorage.setItem('Comments', jsonValue);
		setComments(remainingComments);
	};

	const saveComments = (comments) => {
		const jsonValue = JSON.stringify(comments);
		window.localStorage.setItem('Comments', jsonValue);
	};

	const loadComments = () => {
		const value = window.localStorage.getItem('Comments');
		if (value !== null) {
			setComments(JSON.parse(value));
		}
	};

	useEffect(() => {
		loadComments();
	}, []);

	useEffect(() => {
		if (comments.length !== 0) {
			saveComments(comments);
		}
	}, [comments]);

	return (
		<CommentsContext.Provider value={{ comments, addComments, removeComments }}>
			{props.children}
		</CommentsContext.Provider>
	);
};
