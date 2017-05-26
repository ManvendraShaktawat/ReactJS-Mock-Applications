import React from 'react';
import AuthorActions from '../../actions/authorActions.jsx'
import AuthorStore from '../../stores/authorStore'
import AuthorList from './authorList.jsx';
import {Link} from 'react-router-dom';

class AuthorPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authors: AuthorStore.getAllAuthors()
		};
		this.onAuthorChange = this.onAuthorChange.bind(this);
	}

	componentWillMount() {
		AuthorStore.addChangeListener(this.onAuthorChange);
	}

	componentWillUnmount() {
		AuthorStore.removeChangeListener(this.onAuthorChange);	
	}

	onAuthorChange() {
		this.setState({authors: AuthorStore.getAllAuthors()});
	}

	render() {
		return(
			<div>
				<h1>Authors</h1>
				<Link to="author" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
}

export default AuthorPage;