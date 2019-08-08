const INITIAL_STATE = {
	animalType: 'Dog'
};

const animalReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_ANIMAL_TYPE':
			return {
				...state,
				animalType: action.payload
			};
			break;
		default:
			return state;
			break;
	}
};

export default animalReducer;
