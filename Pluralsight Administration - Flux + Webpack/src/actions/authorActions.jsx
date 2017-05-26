import Dispatcher from '../dispatcher/appDispatcher.jsx';
import AuthorApi from '../api/authorApi.jsx';
import ActionTypes from '../constants/actionTypes'

var AuthorActions = {
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		var data={
		name:author.firstName,
		password:author.lastName
		}
		var query = "name="+data.name+"&password="+data.password;
		console.log(query);
		var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     document.getElementById("demo").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("POST", "/api/users", true);
		xhttp.setRequestHeader("Content-type", "application/json");
	  xhttp.send(JSON.stringify(data));

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
