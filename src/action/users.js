import request from "../lib/request";
const urlUsers = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => {
	return dispatch => {
		request(urlUsers)
			.then(data => dispatch({ type: 'ADD_USER', data}))
			.catch((error) => console.log(error))
	}
}