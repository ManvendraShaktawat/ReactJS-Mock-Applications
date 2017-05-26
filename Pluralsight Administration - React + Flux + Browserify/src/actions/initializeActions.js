import Dispatcher from '../dispatcher/appDispatcher.jsx';
import ActionTypes from '../constants/actionTypes';
import AuthorApi from '../api/authorApi.jsx';

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

export default InitializeActions;