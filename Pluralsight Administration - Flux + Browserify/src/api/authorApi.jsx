//This file is mocking a web API by hitting hard-coded data
import authorData from './authorData';
import _ from 'lodash';
var authors = authorData.authors;

//This would be performed on the server in a real app. Just strubbing in.
var _generateId = function(author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of reference
};

var AuthorApi = {
	getAllAuthors: function() {
		return _clone(authors);
	},
	getAuthorById: function(id) {
		var author = _.find(authors, {id});
		return _clone(author);
	},
	saveAuthor: function(author) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call..');

		if(author.id) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			//just simulating creation here
			//the server would generate ids for new authors in a real app
			//cloning so copy returned is passed by value rather than by reference
			author.id = _generateId(author);
			authors.push(author);
		}

		return _clone(author);
	},
	deleteAuthor: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call..');
		_.remove(authors, {id});
	}
};

export default AuthorApi;