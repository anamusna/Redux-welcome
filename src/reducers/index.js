export default (state, action) => {
	switch (action.type) {
		case 'SET_TECHNOLOGY':
			console.log(state);
			return {
				...state,
				tech : action.tech
			};

		default:
			return state;
	}
};
