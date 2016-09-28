

export const getUserContext = () => {
	try {
		const user_context = localStorage.getItem('contactmodal_user_context');
		if (user_uuid === null) {
			return undefined;
		}
		return user_context;
	} catch(error) {
		return undefined;
	}
}

export const getUserId = () => {
	try {
		const user_uuid = localStorage.getItem('contactmodal_user_uuid');
		if (user_uuid === null) {
			return undefined;
		}
		return user_uuid;
	} catch(error) {
		return undefined;
	}
}

export const loadStoredState= () => {
	//wrap in try catch as localStorage can be disabled.
	try {
		const serializedState = localStorage.getItem('contactmodal_state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch(error) {
		return undefined;
	}
};

export const saveStoredState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('contactmodal_state', serializedState);
	} catch (error) {
		//Ignore for now. But we should probably log this.
	}
}