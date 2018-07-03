import request from "../lib/request";
const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

export const getPost = () => {
	return dispatch => {
		request(urlPosts)
			.then(data => dispatch({ type: 'ADD_POST', data}))
			.catch((error) => console.log(error))
	}
}