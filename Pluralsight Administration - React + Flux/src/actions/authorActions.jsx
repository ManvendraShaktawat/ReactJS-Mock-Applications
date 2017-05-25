import Dispatcher from '../dispatcher/appDispatcher.jsx';
import AuthorApi from '../api/authorApi.jsx';
import ActionTypes from '../constants/actionTypes'

var AuthorActions = {
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);
		
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});	
	},
	updateAuthor: function(author) {
		var updatedAuthor = AuthorApi.saveAuthor(author);
		
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});	
	},
	deleteAuthor: function(id) {
		AuthorApi.deleteAuthor(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id
		});
	}
};

export default AuthorActions;