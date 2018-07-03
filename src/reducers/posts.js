const initialState = [];

export default  (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_POST':
			return  action.data
		default:
			return state
	}
}
