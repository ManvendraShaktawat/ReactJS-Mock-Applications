import React from 'react';
import AuthorForm from './authorForm.jsx'
import AuthorActions from '../../actions/authorActions.jsx'
import AuthorStore from '../../stores/authorStore'
import {Router} from 'react-router-dom';
import toastr from 'toastr';
import context from 'react-context';

//console.log(context.history.pu)

class ManageAuthorPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: {
				id: '',
				firstName: '',
				lastName: ''
			},
			errors: {}
		}
		this.setAuthorState = this.setAuthorState.bind(this);
		this.saveAuthor = this.saveAuthor.bind(this);
		this.validateFormInputs = this.validateFormInputs.bind(this);
	}

	componentWillMount() {
		var authorId = this.props.match.params.id; // from the path'/author:id'

		if(authorId) {
			this.setState({
				author: AuthorStore.getAuthorById(authorId)
			});
		}
	}

	setAuthorState(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		this.setState({
			author: this.state.author
		});
	}

	validateFormInputs() {
		var inputsValid = true,
			errors={};

		if(this.state.author.firstName.length === 0) {
			errors.firstName = "First Name cannot be empty !";
			inputsValid = false;
		}

		if(this.state.author.lastName.length === 0) {
			errors.lastName = "Last Name cannot be empty !";
			inputsValid = false;
		}

		this.setState({
			errors
		})

		return inputsValid;
	}

	saveAuthor(event) {
		event.preventDefault();
		if(!this.validateFormInputs()) {
			return false;
		}
		if(this.state.author.id) {
			AuthorActions.updateAuthor(this.state.author);
		} else {
			AuthorActions.createAuthor(this.state.author);
		}
		toastr.success('Author saved !');

		this.props.history.push('/authors');
	}

	render() {
		return(
			<div>
				<h1>Manage Author</h1>
				<AuthorForm
					author={this.state.author}
					setAuthorState={this.setAuthorState}
					saveAuthor={this.saveAuthor}
					errors={this.state.errors} />
			</div>
		);
	}
}

export default ManageAuthorPage;